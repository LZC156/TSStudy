{//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
    let myPhone: number | string = '010-820'


//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
//let myPhone1: number | string  = true

    console.log(myPhone);

    interface People {
        age: number,
        height: number
    }

    interface Man {
        sex: string
    }

    const xiaoman = (man: People & Man) => {
        console.log(man.age)
        console.log(man.height)
        console.log(man.sex)
    }

    xiaoman({age: 18, height: 180, sex: 'male'});

    interface A {
        run: string
    }

    interface B {
        build: string
    }

    const fn = (type: A | B): string => {
        //return type.build
        //return (<A>type).run
        return (type as A).run
    }
//这样写是有警告的应为B的接口上面是没有定义run这个属性的

    let fn2 = (num: number | string) => console.log((num as string).length)
    let fn3 = (num: number | string) => console.log((<string>num).length)


    fn2(1234)
}