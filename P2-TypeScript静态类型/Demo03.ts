// type annotation 类型注解
// type inference 类型推断

// 类型注解
let count: number
count = 123

// 类型推断
let countInference = 456

// ts也可以推断出对象中的属性类型
const XiaoJieJie = {
    name: '刘英',
    age: 18
} // 鼠标放在XiaoJieJie上, 可以看到ts可以推断出Xiaojiejie的name属性是string类型, age属性是number类型



// 工作中使用问题(潜规则)
// 如果ts能够自动分析变量类型, 我们就什么也不需要做了
// 如果ts无法分析变量类型的话, 我们就需要使用类型注解

// 不需要使用注解类型的情况
const one = 1 // 鼠标放在one上, 可以看到ts可以直接推断出one就是常量1, 即也是数字类型
const two = 2 
const three = one + two // 鼠标放在three上, 可以看到ts可以直接推断出three是number类型

// 需要使用注解类型的情况
// 只要ts提示是any类型的情况下, 说明ts不确定是什么类型的, 这时候就需要加上类型注解了

// 鼠标放在getTotal上, 可以看到ts可以直接推断出函数的返回值是number类型
function getTotal(one: number, two: number) {
    return one + two
}

const total = getTotal(1, 2) // 鼠标放在total上, 可以看到ts可以直接推断出total是number类型