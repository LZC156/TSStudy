{
    let num: Number = 123;
    let str: any = `${num}`
//let v1:void=null;
    let v2: void = undefined;

    let v3: null = null;


    console.log(str)

    function myF(): string {
        return "";
    }

    let foo: unknown = {key: "123"}

    let foo1: any = {key: "123"}
    foo1.key = "456"
}