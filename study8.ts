{

    interface Options{
        el:string|HTMLElement;
    }

    interface VueCls{
        Options:Options;
        init():void;
    }

    interface Vnode{
        tag:string;
        text?:string;
        children?:Vnode[];
    }

    class Dom{
        createElement(el:string){
            return document.createElement(el)
        }

        setText(el:HTMLElement,text:string){
            el.textContent = text;
        }
        render(data:Vnode){
            let root = this.createElement(data.tag);
            if(data.children&&Array.isArray(data.children)){
                data.children.forEach(item=>{
                    root.append(this.render(item))
                })
            }else {
                this.setText(root,data.text)
            }
            return root;

        }
    }

    class Vue extends Dom implements VueCls{
        Options: Options;

        constructor(options: Options) {
            super();
            this.Options = options;
            this.init()
        }
        init(): void {
            let data:Vnode={
                tag: "div",
                children: [
                    {
                        tag: "div",
                        text: "hello"
                    },
                    {
                        tag: "section",
                        text: "world"
                    }
                ]
            }
            let app:HTMLElement=typeof this.Options.el=="string"?document.querySelector(this.Options.el):this.Options.el;
            console.log(app);
            app.append(this.render(data));
        }



    }


    let vue = new Vue({el:"#app"});


}