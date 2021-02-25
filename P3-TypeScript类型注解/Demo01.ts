// type annotation 类型注解
// type inference 类型推断

// 类型注解
let count: number
count = 123

// 类型推断
let countInference = 456 // 鼠标放在countInference, 可以看到ts可以自动推断出countInference是number类型变量
let nameInference = '刘英' // 鼠标放在nameInference, 可以看到ts可以自动推断出nameInference是string类型变量

countInference = '' // ts对一个变量类型推断之后, 则该变量的静态类型就是类型推断出的类型, 不能赋予其他类型的值了

// ts也可以推断出对象中的属性类型
const XiaoJieJie = {
    name: '刘英',
    age: 18
} // 鼠标放在XiaoJieJie上, 可以看到ts可以自动推断出Xiaojiejie的name属性是string类型, age属性是number类型



// 工作中使用问题(潜规则)
// 如果ts能够自动分析变量类型, 我们就什么也不需要做了
// 如果ts无法分析变量类型的话, 我们就需要使用类型注解

// 不需要使用注解类型的情况
const one = 1 // 鼠标放在one上, 可以看到ts可以自动推断出one就是常量1, 即也是数字类型
const two = 2 
const three = one + two // 鼠标放在three上, 可以看到ts可以自动推断出three是number类型

// 需要使用注解类型的情况
// 只要ts提示是any类型的情况下, 说明ts不确定是什么类型的, 这时候就需要加上类型注解了

// 鼠标放在getTotal上, 可以看到ts可以自动推断出函数的返回值是number类型
function getTotal(one: number, two: number) {
    return one + two
}

const total = getTotal(1, 2) // 鼠标放在total上, 可以看到ts可以自动推断出total是number类型