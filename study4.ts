
interface x{
    name:string
}

let arr:number[] = [1,2,3]

let arr2:Array<number> = [1,2,3]

let arr3:x[] = [{name:'1'},{name:'2'}]

function c(...args:string[]){
    console.log(arguments)
    let a:A=  arguments

}

c('1','2','3')

interface A {
    [index: number]: any;
    length: number;
    callee: Function;
}
