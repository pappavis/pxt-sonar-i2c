enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

enum I2Cadres {
    adr_0X20 = 0X20,
    adr_0X27 = 0X27,
    adr_0X36 = 0X36,
    adr_0X38 = 0X38,
}

enum pulseParam {
    mm = 0.170145,
    cm = 0.0170145,
}

/**
 * Sonar I2C and ping utilities
 */
//% color="#2c3e50" weight=10
namespace sonar {
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param adres i2c adres
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=sonar_ping block="ping adres %adres|trig %trig|echo %echo|unit %unit"
    export function ping(adres: I2Cadres, trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        var _startPulse = Date.now();

        pins.i2cWriteNumber(adres, 0, NumberFormat.Int16LE, false);
        control.waitMicros(2);
        pins.i2cWriteNumber(adres, 1, NumberFormat.Int16LE, false);
        control.waitMicros(10);
        pins.i2cWriteNumber(adres, 0, NumberFormat.Int16LE, false);
        var _endPulse = Date.now();
        //pins.setPull(trig, PinPullMode.PullNone);
        /*
            pins.digitalWritePin(trig, 0);
            control.waitMicros(2);
            pins.digitalWritePin(trig, 1);
            control.waitMicros(10);
            pins.digitalWritePin(trig, 0);
        */

        // read pulse
        const pulseLen = (_endPulse - _startPulse) * pulseParam.mm;
        // const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(pulseLen, 58);
            case PingUnit.Inches: return Math.idiv(pulseLen, 148);
            default: return pulseLen ;
        }
    }
}
