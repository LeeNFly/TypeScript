// ts数据类型和JS一样 5基本3复杂
// 一. 静态类型 (Static Typing)
// 1. 声明变量, 并指定该变量的静态类型
let count: number = 1
// 2. 变量的静态类型只要定义了, 这个变量的静态类型就不能被改变了, 并且这个变量只能存储对应类型的数据
// count = 'str' count是number类型变量, 只能赋予number类型的值
// 3. ts会提示变量所属的静态类型所可以使用的方法
// count.toString() count是number类型变量, 可以使用number上的所有方法

// PS: 静态类型只会约束值的类型

// 二: 自定义静态类型
interface XiaoJieJie {
    uname: string,
    age: number
}
const xiaohong: XiaoJieJie = {
    uname: 'xiaohong',
    age: 14
}

console.log(xiaohong.age)