// 静态类型的分类

// 一: 基本静态类型
const count: number = 1
const myName: string = 'zs'
const flag: boolean = true
const err: null = null
const udf: undefined = undefined

// 二: 对象静态类型
// 1. 基本对象类型
const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: 'xiaojiejie',
    age: 14
}
// 2. 数组类型
const xiaoJieJies: string [] = ['小姐姐', '小红', '小樱'] // 数组类型且数组的元素必须都是string

// 3. 类 类型
class Person {}
const dajiao: Person = new Person() // 必须是类Person的实例

// 4. 函数类型
const jianXiaoJieJie: ()=>string = () => { return '' } // 必须是一个函数, 且函数的返回值是string