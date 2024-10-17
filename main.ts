function SOC (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function SO (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, 0)
}
function SOAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
radio.onReceivedNumber(function (receivedNumber) {
    Direcion = receivedNumber
})
function EH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function SEC (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function NAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function E (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function O (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function SAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function CAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function NEH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function SEAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function Parar () {
    xiamiBoard.motorStop(MOTOR.ALL)
}
function NEAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function NOH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function NO (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function SH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function SAUTO (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function CH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function NE (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function DEMO (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function N (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function OAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function NOC (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function SE (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function S (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function SEH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, Velocidad)
}
function SOH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function NEC (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function NOAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function EAH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
function OH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, Velocidad)
}
function NH (Velocidad: number) {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, Velocidad)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 0)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 0)
}
let Direcion = 0
xiamiBoard.initXiaMiBoard()
radio.setGroup(1)
Direcion = 0
let Velocidad = 100
basic.forever(function () {
    if (Direcion < 10) {
        if (Direcion == 0) {
            images.iconImage(IconNames.No).showImage(0)
            Parar()
        } else if (Direcion == 1) {
            images.arrowImage(ArrowNames.South).showImage(0)
            S(Velocidad)
        } else if (Direcion == 2) {
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            SO(Velocidad)
        } else if (Direcion == 3) {
            images.arrowImage(ArrowNames.West).showImage(0)
            O(Velocidad)
        } else if (Direcion == 4) {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            NO(Velocidad)
        } else if (Direcion == 5) {
            images.arrowImage(ArrowNames.North).showImage(0)
            N(Velocidad)
        } else if (Direcion == 6) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            NE(Velocidad)
        } else if (Direcion == 7) {
            images.arrowImage(ArrowNames.East).showImage(0)
            E(Velocidad)
        } else if (Direcion == 8) {
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            SE(Velocidad)
        } else {
            Direcion = 1
        }
    } else if (Direcion < 20) {
        if (Direcion == 11) {
            images.arrowImage(ArrowNames.South).showImage(0)
            SH(Velocidad)
        } else if (Direcion == 12) {
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            SOH(Velocidad)
        } else if (Direcion == 13) {
            images.arrowImage(ArrowNames.West).showImage(0)
            OH(Velocidad)
        } else if (Direcion == 14) {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            NOH(Velocidad)
        } else if (Direcion == 15) {
            images.arrowImage(ArrowNames.North).showImage(0)
            NH(Velocidad)
        } else if (Direcion == 16) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            NEH(Velocidad)
        } else if (Direcion == 17) {
            images.arrowImage(ArrowNames.East).showImage(0)
            EH(Velocidad)
        } else if (Direcion == 18) {
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            SEH(Velocidad)
        }
    } else if (Direcion < 30) {
        if (Direcion == 21) {
            images.arrowImage(ArrowNames.South).showImage(0)
            SAH(Velocidad)
        } else if (Direcion == 22) {
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            SOAH(Velocidad)
        } else if (Direcion == 23) {
            images.arrowImage(ArrowNames.West).showImage(0)
            OAH(Velocidad)
        } else if (Direcion == 24) {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            NOAH(Velocidad)
        } else if (Direcion == 25) {
            images.arrowImage(ArrowNames.North).showImage(0)
            NAH(Velocidad)
        } else if (Direcion == 26) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            NEAH(Velocidad)
        } else if (Direcion == 27) {
            images.arrowImage(ArrowNames.East).showImage(0)
            EAH(Velocidad)
        } else if (Direcion == 28) {
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            SEAH(Velocidad)
        }
    } else {
        if (Direcion == 31) {
            images.arrowImage(ArrowNames.South).showImage(0)
            SAUTO(Velocidad)
        } else if (Direcion == 32) {
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            SOC(Velocidad)
        } else if (Direcion == 33) {
            images.arrowImage(ArrowNames.West).showImage(0)
            CAH(Velocidad)
        } else if (Direcion == 34) {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            NOC(Velocidad)
        } else if (Direcion == 35) {
            images.arrowImage(ArrowNames.North).showImage(0)
            DEMO(Velocidad)
        } else if (Direcion == 36) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            NEC(Velocidad)
        } else if (Direcion == 37) {
            images.arrowImage(ArrowNames.East).showImage(0)
            CH(Velocidad)
        } else if (Direcion == 38) {
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            SEC(Velocidad)
        }
    }
})
