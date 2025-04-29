{// interface 重名 重合
// interface 任意key
// interface ? readonly
// interface 定义函数类型
    interface Axx extends b {
        name?: string;//可不赋值
        [propName: string]: any//索引签名
        readonly cb: () => boolean//只读
    }

    interface Axx {
        sex: string;
    }

    interface b {
        xxx: string
    }

    let b: Axx = {
        xxx: "",
        cb(): boolean {
            return false;
        },
        //name:"lzc",
        //age:18
        sex: "男",
        a: 1,
        b: "2",
        c: false
    }

    b.cb();

//b.cb=()=> true


    interface Fn {
        (name: string): string[]; // 函数签名
        fun1(name: string): number[]; // 方法1
        fun2(): void; // 方法2
    }

    /*const fn:Fn=(name:string):string[]=>{
        return [name]
    }*/

    const fn1: Fn = ((name: string): string[] => {
        return [name];
    }) as Fn;


}