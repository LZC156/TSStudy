{
    let b: Boolean = new Boolean(1)
    console.log(b)
    let n: Number = new Number(true)
    console.log(n)
    let s: String = new String('哔哩哔哩关注小满zs')
    console.log(s)
    let d: Date = new Date()
    console.log(d)
    let r: RegExp = /^1/
    console.log(r)
    let e: Error = new Error("error!")
    console.log(e)

    // HTMLInputElement
    let body: HTMLElement = document.body;
    //var div = document.querySelector("canvas");
    var elementNodeListOf: NodeListOf<HTMLDivElement> = document.querySelectorAll("div footer");

    //var localStorage:Storage = localStorage;
    //var location:Location = location;
    let promise:Promise<string>=new Promise((r) => r("李子成"));
    var cookie:string = document.cookie;


    let canvas = document.querySelector("canvas");
    if(canvas){
        let context = canvas.getContext("2d");
        canvas.width=screen.width;
        canvas.height=screen.height;

        let str:string="lizicheng1122";
        let arr = Array(Math.ceil(canvas.width/10)).fill(0);

        const rain=()=>{
            context.fillStyle="rgba(0,0,0,0.05)";
            context.fillRect(0,0,canvas.width,canvas.height)
            context.fillStyle="#0F0";
            arr.forEach((item,index)=>{
                context.fillText(str[Math.floor(Math.random()*str.length)],index*10,item+10)
                arr[index]=item>=canvas.height || item > 20000*Math.random() ?0:item+10
            })
        }

        setInterval(rain,40)
    }
}