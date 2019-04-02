# pxt-sonar-i2c [![Build Status](https://travis-ci.org/Microsoft/pxt-sonar.svg?branch=master)](https://travis-ci.org/pappavis/pxt-sonar-i2c)

'n makecode pakket om sonar sensore (ping) soos HC-SR04met I2C uitbreiding PCF8574 te gebruik.
Gewysigd deur #easylab4kids

## Usage

This package contains a ``ping`` block that can return the distance to an obstacle detected by the sonar.

```sig
sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
```

## Charting the distance

Use the ``plot bar graph`` block to visualize the distance reported by your sensor.

```blocks
basic.forever(() => {
    let p = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
    led.plotBarGraph(p, 0);
})
```

## License
MIT

## Supported targets
* for PXT/microbit
* for PXT/calliope
(The metadata above is needed for package search.)


    ## Code of Conduct

    This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

