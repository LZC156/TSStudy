{//1.函数定义类型和返回值 | 箭头函数定义类型和返回值
//2：函数默认的参数 | 函数可选的参数
//3:参数是一个对象
//4:函数this类型
//5:函数重载

    function add(a: number = 10, b: number = 20): number {
        return a + b
    }

    const add1 = (a: number, b: number): number => a + b

    console.log(add())
    console.log(add1(1, 2))

    interface User {
        name: string,
        age: number
    }

    function getUserInfo(user: User): User {
        return user
    }

    console.log(getUserInfo({name: 'zhangsan', age: 18}))

    interface Obj1 {
        user: number[]
        add: (num: number) => void
    }

    let obj1: Obj1 = {
        user: [1, 2, 3],
        add(this: Obj1, num: number) {
            this.user.push(num)
        }
    }

    obj1.add(4)
    console.log(obj1.user)


    let user: number[] = [1, 2, 3]

    function findNum(add: number[]): number[]
    function findNum(id: number): number[]
    function findNum(): number[]
    function findNum(ids?: number | number[]): number[] {
        if (typeof ids === 'number') {
            return user.filter(item => item === ids)
        } else if (Array.isArray(ids)) {
            user.push(...ids)
            return user
        } else {
            return user
        }
    }

}