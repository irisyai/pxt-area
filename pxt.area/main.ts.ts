enum numOption {
    //% block="round"
    round,
    //% block="float"
    float
}

//% weight=100 color=#0fbc11 icon="f2bb" block="area"
namespace areacaculator {

    //% blockId="showareaoftriangle" block="Show the area of triangle:base: %base|height: %height|option: %myopt"
    //% base.min=0 base.max=100 base.defl=0 height.min=0 height.max=100 height.defl=0
    export function showareaoftriangle(base: number, height: number, myopt: numOption): void {
        let mynum = 0
        mynum = base * height / 2
        if (myopt == numOption.round)
            mynum = base * height / 2;
        basic.showNumber(mynum)
    }
    //% blockId="areaOfRectangle" block="get the area of triangle:base: %base|height: %height|option: %myopt"
    //% base.min=0 base.max=100 base.defl=0 height.min=0 height.max=100 height.defl=0
    export function areaoftriangle(base: number, height: number, myopt: numOption): number {
        let mynum = 0
        mynum = base * height / 2
        return mynum
    }

    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
