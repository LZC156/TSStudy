let obj:unknown = {b:1,ccc:():number=>213}
//obj.b
//obj.ccc()
//console.log(obj["b"]);//非严格模式下 unknown可以通过【】取到值
//console.log(obj["ccc"]());

let a:Object= 123
let a1:Object= "123"
let a2:Object= []
let a3:Object= {name:"lzc"}
let a4:Object= ()=>123;
//a3.age=18

//let a5:object=123;    //错误 原始类型
//let a6:object="123";  //错误 原始类型
//let a7:object=false;  //错误 原始类型
let a8:object=[];   //支持所有引用类型
let a9:object= {};
let a10:object= ()=>123;
//a9.age=18

let a11:{}=123;    //效果等同于Object
let a12:{}="123";
let a13:{}=false;
let a14:{}=[];
let a15:{}= {};
let a16:{}= ()=>123;
//a15.age=18

let a17:any={};
a17.age=13
