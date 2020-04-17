
//% color=#FF0000 weight=8 icon="\uf0fb"
namespace microBlitz{

    const ADDR = 0x3c
    const SET_CONTRAST = 0x81
    const SET_ENTIRE_ON = 0xa4
    const SET_NORM_INV = 0xa6
    const SET_DISP = 0xae
    const SET_MEM_ADDR = 0x20
    const SET_COL_ADDR = 0x21
    const SET_PAGE_ADDR = 0x22
    const SET_DISP_START_LINE = 0x40
    const SET_SEG_REMAP = 0xa0
    const SET_MUX_RATIO = 0xa8
    const SET_COM_OUT_DIR = 0xc0
    const SET_DISP_OFFSET = 0xd3
    const SET_COM_PIN_CFG = 0xda
    const SET_DISP_CLK_DIV = 0xd5
    const SET_PRECHARGE = 0xd9
    const SET_VCOM_DESEL = 0xdb
    const SET_CHARGE_PUMP = 0x8d
       
    //% whenUsed
    const font8 = {
        charWidth: 5,
        charHeight: 8,
        data: hex`
    0000000000  
    3E5B4F5B3E    
    3E6B4F6B3E    
    1C3E7C3E1C
    183C7E3C18
    1C577D571C
    1C5E7F5E1C
    00183C1800
    FFE7C3E7FF
    0018241800
    FFE7DBE7FF
    30483A060E
    2629792926
    407F050507
    407F05253F
    5A3CE73C5A
    7F3E1C1C08
    081C1C3E7F
    14227F2214
    5F5F005F5F
    06097F017F
    006689956A
    6060606060
    94A2FFA294
    08047E0408
    10207E2010
    08082A1C08
    081C2A0808
    1E10101010
    0C1E0C1E0C
    30383E3830
    060E3E0E06
    0000000000
    00005F0000
    0007000700
    147F147F14
    242A7F2A12
    2313086462
    3649562050
    0008070300
    001C224100
    0041221C00
    2A1C7F1C2A
    08083E0808
    0080703000
    0808080808
    0000606000
    2010080402
    3E5149453E
    00427F4000
    7249494946
    2141494D33
    1814127F10
    2745454539
    3C4A494931
    4121110907
    3649494936
    464949291E
    0000140000
    0040340000
    0008142241
    1414141414
    0041221408
    0201590906
    3E415D594E
    7C1211127C
    7F49494936
    3E41414122
    7F4141413E
    7F49494941
    7F09090901
    3E41415173
    7F0808087F
    00417F4100
    2040413F01
    7F08142241
    7F40404040
    7F021C027F
    7F0408107F
    3E4141413E
    7F09090906
    3E4151215E
    7F09192946
    2649494932
    03017F0103
    3F4040403F
    1F2040201F
    3F4038403F
    6314081463
    0304780403
    6159494D43
    007F414141
    0204081020
    004141417F
    0402010204
    4040404040
    0003070800
    2054547840
    7F28444438
    3844444428
    384444287F
    3854545418
    00087E0902
    18A4A49C78
    7F08040478
    00447D4000
    2040403D00
    7F10284400
    00417F4000
    7C04780478
    7C08040478
    3844444438
    FC18242418
    18242418FC
    7C08040408
    4854545424
    04043F4424
    3C4040207C
    1C2040201C
    3C4030403C
    4428102844
    4C9090907C
    4464544C44
    0008364100
    0000770000
    0041360800
    0201020402
    3C2623263C
    1EA1A16112
    3A4040207A
    3854545559
    2155557941
    2154547841
    2155547840
    2054557940
    0C1E527212
    3955555559
    3954545459
    3955545458
    0000457C41
    0002457D42
    0001457C40
    F0292429F0
    F0282528F0
    7C54554500
    2054547C54
    7C0A097F49
    3249494932
    3248484832
    324A484830
    3A4141217A
    3A42402078
    009DA0A07D
    3944444439
    3D4040403D
    3C24FF2424
    487E494366
    2B2FFC2F2B
    FF0929F620
    C0887E0903
    2054547941
    0000447D41
    3048484A32
    384040227A
    007A0A0A72
    7D0D19317D
    2629292F28
    2629292926
    30484D4020
    3808080808
    0808080838
    2F10C8ACBA
    2F102834FA
    00007B0000
    08142A1422
    22142A1408
    AA005500AA
    AA55AA55AA
    000000FF00
    101010FF00
    141414FF00
    1010FF00FF
    1010F010F0
    141414FC00
    1414F700FF
    0000FF00FF
    1414F404FC
    141417101F
    10101F101F
    1414141F00
    101010F000
    0000001F10
    1010101F10
    101010F010
    000000FF10
    1010101010
    101010FF10
    000000FF14
    0000FF00FF
    00001F1017
    0000FC04F4
    1414171017
    1414F404F4
    0000FF00F7
    1414141414
    1414F700F7
    1414141714
    10101F101F
    141414F414
    1010F010F0
    00001F101F
    0000001F14
    000000FC14
    0000F010F0
    1010FF10FF
    141414FF14
    1010101F00
    000000F010
    FFFFFFFFFF
    F0F0F0F0F0
    FFFFFF0000
    000000FFFF
    0F0F0F0F0F
    3844443844
    7C2A2A3E14
    7E02020606
    027E027E02
    6355494163
    3844443C04
    407E201E20
    06027E0202
    99A5E7A599
    1C2A492A1C
    4C7201724C
    304A4D4D30
    3048784830
    BC625A463D
    3E49494900
    7E0101017E
    2A2A2A2A2A
    44445F4444
    40514A4440
    40444A5140
    0000FF0103
    E080FF0000
    08086B6B08
    3612362436
    060F090F06
    0000181800
    0000101000
    3040FF0101
    001F01011E
    00191D1712
    003C3C3C3C
    0000000000
    `,
    }
    
    let width: number = 128;
    let height: number = 32;

        
    function i2ccmd(value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = 0x80
        buf[1] = value
        pins.i2cWriteBuffer(ADDR, buf)
    }
    
    function oledPwrOn(){
        i2ccmd(SET_DISP | 0x01)
    }

    export enum OledType {
        //% blockId="oled12832" block="128x32 0.91"
        oled12832 = 0,
        //% blockId="oled12864" block="128x64 0.96"
        oled12864 = 1
    }
    
    //% block="Oled Init %t"
    //% weight=100
    //% blockGap=8
    //% group="OLED"
    export function oledInit(t: OledType){
        if (t == OledType.oled12864){
            height = 64;
        }

        let cmdList = [
            SET_DISP | 0x00, // off
            // address setting
            SET_MEM_ADDR, 0x00, // horizontal
            // resolution and layout
            SET_DISP_START_LINE | 0x00,
            SET_SEG_REMAP | 0x01, // column addr 127 mapped to SEG0
            SET_MUX_RATIO, height - 1,
            SET_COM_OUT_DIR | 0x08, // scan from COM[N] to COM0
            SET_DISP_OFFSET, 0x00,
            SET_COM_PIN_CFG, height == 32 ?  0x02 : 0x12,
            // timing and driving scheme
            SET_DISP_CLK_DIV, 0x80,
            SET_PRECHARGE, 0xf1,
            SET_VCOM_DESEL, 0x30, // 0.83 * Vcc
            // display
            SET_CONTRAST, 0xff, // maximum
            SET_ENTIRE_ON, // output follows RAM contents
            SET_NORM_INV, // not inverted
            // charge pump
            SET_CHARGE_PUMP, 0x14,
            SET_DISP | 0x01
        ];
        oledPwrOn();
        for (let cmd of cmdList){
            i2ccmd(cmd)
        }
        fill(0)
    }

        export function fill(pattern: number) {
        let pages = height / 8;
        let xpos0 = 0
        let xpos1 = width - 1
        
        i2ccmd(SET_COL_ADDR)
        i2ccmd(xpos0)
        i2ccmd(xpos1)
        i2ccmd(SET_PAGE_ADDR)
        i2ccmd(0)
        i2ccmd(pages - 1)
        let data = pins.createBuffer(17); // 16 pix in x direction
        data[0] = 0x40; // Data Mode
        for (let i = 1; i < 17; i++) {
            data[i] = pattern
        }
        for (let cnt=0;cnt<8*pages;cnt++){ // 8 cluster
            pins.i2cWriteBuffer(ADDR, data)
        }
    }

    //% block="Oled Clear"
    //% weight=99
     //% blockGap=8
    //% group="OLED"
    export function clear() {
        fill(0)
    }


    /**
    * Displays a text on OLED
    * @param str the text to show, eg: "uBlitz"
    */
    //% block="Oled display x%x line%line Text %str"
    //% x.min=0 x.max=127
    //% line.min=0 line.max=3
    //% weight=99
     //% blockGap=8
    //% group="OLED"
    export function drawText(x: number, line: number, str: string){
        let numchar = str.length;
        let maxchar = Math.floor((width-1-x)/8)
        if (numchar > maxchar) numchar = maxchar;
        i2ccmd(SET_COL_ADDR)
        i2ccmd(x)
        i2ccmd(width - 1)
        i2ccmd(SET_PAGE_ADDR)
        i2ccmd(line)
        i2ccmd(line+1)
        let buf = pins.createBuffer(9)
        buf[0] = 0x40
        let xpos = x;
        for (let idx = 0; idx < numchar;idx++){
            let uni = str.charCodeAt(idx)
            buf.write(1, font8.data.slice(uni*5, 5))
            pins.i2cWriteBuffer(ADDR, buf)
        }
    }
    
    export function displayBuffer(x: number, y: number, w:number, h:number, a: Buffer) {
        i2ccmd(SET_COL_ADDR)
        i2ccmd(x)
        i2ccmd(x + w-1)
        i2ccmd(SET_PAGE_ADDR)
        i2ccmd(y)
        i2ccmd(y + 1)
        let buf = pins.createBuffer(1+a.length)
        buf[0] = 0x40
        buf.write(1, a)
        pins.i2cWriteBuffer(ADDR, buf)
    }
 
}

    



