
//% color=#FF0000 weight=8 icon="\uf0fb"
//% groups='["Sensors", "Motors", "OLED", "IR"]'
namespace microBlitz{

let SENS_NUM:number=8
let sensors: number[] = [];
let W: number[]=[];
let lastPosition=0

  
  //% block="sensorsInit N %snum"
  //% snum.min=1 snum.max=16
  //% snum.defl=8
  //% weight=90
  //% blockGap=8
  //% group="Sensors"
  export function sensorsInit( snum: number) { 
    if (snum > 0 && snum <= 16) {
      SENS_NUM=snum
      let START=0
      if ((SENS_NUM % 2)==1){
        START=(1-SENS_NUM)/2
        for (let i=0; i<SENS_NUM; i++){
          W[i]=START+i
        }
      }
      else {
        START=1-SENS_NUM
        for (let i=0; i<SENS_NUM; i++){
          W[i]=START+i*2
        }
      }
    } else {
      SENS_NUM=8
      for (let i=0; i<8; i++){
          W[i]=-7+i*2
        }
    }  
  }
    

  //% block="readSensors"
  //% weight=90
  //% blockGap=8
  //% group="Sensors"
  export function readSensors() { 
      let a3:number=0;
      let a2:number=0;
      let a1:number=0;
      let a0:number=0;
      for (let i = 0; i < SENS_NUM; i++) {
         let N:number = i
         if (N >= 8) {
            N += -8
            a3 = 1
        } else {
            a3 = 0
        }
          
        if (N >= 4) {
            N += -4
            a2 = 1
        } else {
            a2 = 0
        }
          
        if (N >= 2) {
            N += -2
            a1 = 1
        } else {
            a1 = 0
        }
          
        if (N >= 1) {
            a0 = 1
        } else {
            a0 = 0
        }
        pins.digitalWritePin(DigitalPin.P0, a0)
        pins.digitalWritePin(DigitalPin.P1, a1)
        pins.digitalWritePin(DigitalPin.P2, a2)
        pins.digitalWritePin(DigitalPin.P3, a3)  
        sensors[i]=pins.analogReadPin(AnalogPin.P10)       
    }  
  }
    
  
  //% block
  //% n.min=0 n.max=SENS_NUM-1
  //% n.defl=3
  //% group="Sensors"
    export function sensorValue(n: number): number {
      
      if (n<SENS_NUM && n>=0){
        return sensors[n];
      }
      else {
        return 0;
      }
    }

  
    //% block="calibrate sensors with min %minV  max %MaxV"
    //% minV.min=0 minV.max=900
    //% minV.defl=80
    //% maxV.min=100 maxV.max=1000
    //% maxV.defl=800
    //% weight=90
  //% blockGap=8
  //% group="Sensors"
  export function calibrateWith( minV: number,  maxV: number): void {
    let delta=maxV-minV
    if (delta>0) {
      for (let i = 0; i < SENS_NUM; i++) {
        sensors[i]=1000*(sensors[i]-minV)/delta
      }  
    }
    
  }
  
  //% block
  //% group="Sensors"
    export function allSensorValue(): number {
      let SUM_SW=0
      let SUM_S=0
      let value=0
      let onLine=0
      for (let i = 0; i < SENS_NUM; i++) {
        value=sensors[i]
        if (value>50){
          SUM_SW=SUM_SW+value*W[i]
          SUM_S=SUM_S+value
        }
        if (value>200){
          onLine=1
        }
      }
      if (onLine=0){
        if (lastPosition>0) {return W[SENS_NUM-1]}
        else return W[0]
      }  
    if (SUM_S>0) {
        lastPosition=SUM_SW/SUM_S
        return lastPosition
    }
      else return 0
  }
  
  
   //% block="motorsInit"
   //% weight=90
  //% blockGap=8
  //% group="Motors"
  export function motorsInit( ) { 
    led.enable(false)
    pins.analogSetPeriod(AnalogPin.P9, 500)
    pins.analogSetPeriod(AnalogPin.P16, 500)
    pins.analogWritePin(AnalogPin.P9, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
      
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)  
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)  
  }
    
    //% block="drive  left %left  right %right"
    //% left.min=-1023 left.max=1023
    //% right.min=-1023 right.max=1023
    //% weight=90
  //% blockGap=8
  //% group="Motors"
  export function drive( left: number,  right: number): void {
    let r = right
    let l = left
    l = Math.constrain(l,-1023,1023)
    r = Math.constrain(r, -1023, 1023)
   
    if (l >= 0) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (r >= 0) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    pins.analogSetPeriod(AnalogPin.P9, 500)
    pins.analogSetPeriod(AnalogPin.P16, 500)
    pins.analogWritePin(AnalogPin.P9, Math.abs(l))
    pins.analogWritePin(AnalogPin.P16, Math.abs(r))
  }
    
  //% block="motorsStop "
  //% weight=90
  //% blockGap=8
  //% group="Motors"
  export function motorsStop( ) { 
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)  
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)  
    pins.analogSetPeriod(AnalogPin.P9, 500)
    pins.analogSetPeriod(AnalogPin.P16, 500)
    pins.analogWritePin(AnalogPin.P9, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
  }
    
}

    



