// 函数参数和返回值类型的注解

// 一. 函数返回值类型注解

// 函数的返回值类型必须是number类型, 否则会报错
function getTotal(one: number, two: number): number {
    return one + two
}
const tatal = getTotal(1, 2)

// void: 函数不能写返回值, 即不能有return, 否则会报错 (实际上就是函数不写返回值, 但是函数不写返回值会默认返回undefined)
function sayHello(): void {
    console.log('Hello World')
}

// never: 函数永远执行不完
function errorFunc(): never {
    throw new Error() // 抛出异常后, 程序停止执行
    console.log('')
}

function forNever(): never {
    while(true) {} // 死循环, 函数永远执行不完
    console.log('Hello World')
}

// 二. 函数的参数类型注解

// 调用函数时, 必须且只能传递一个参数, 参数的类型为number类型
function addOne(one: number): number {
    return one
}

// 调用函数时, 必须且只能传递两个参数, 且第一个实参和第二个实参值必须为number类型
function add(one: number, two: number): number {
    return one + two
}

// 调用函数时, 必须且只能传递一个参数, 且参数必须是对象类型, 对象有且只能有2个属性one 和 two, 并且属性one的属性值类型为number, 属性two的属性值类型为number
function add1({one, two}: {one: number, two: number}): number {
    return one + two
}
add1({one: 1, two: 1})

// 调用函数时, 必须且只能传递一个参数, 且参数必须是对象类型, 对象有且只能有1个属性one, 并且属性one的属性值类型为number
function add2({one}: {one: number}): number {
    return one
}

add2({one: 1})

// 调用函数时, 必须且只能传递两个参数, 且第一个参数必须是对象类型, 对象有且只能有1个属性one, 并且属性one的属性值类型为number, 第二个参数必须是number类型的对象
function add3({one}: {one: number}, age: number): number {
    return one
}