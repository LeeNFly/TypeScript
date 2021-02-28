// 泛型

// 泛型一般都作为类型注解使用, 作为一种约束

// 1. 泛型在函数中的使用
// 泛型可以使用任意名称, 一般推荐使用T
function join<T> (first: T, second: T) {
    return `${first}${second}`
}

// 调用函数时要指明泛型, 并且传的参数要符合指明泛型后的函数中对应的参数类型注解
join<string>('123', '456')  // join<string> 则说明原函数 join<T>(first: T, second: T) 变成了join<string>(first: string, second: string), 要求第一个参数和第二个参数都是string类型
join<number>(123, 456)  // join<number> 则说明原函数 join<T>(first: T, second: T) 变成了join<number>(first: number, second: number), 要求第一个参数和第二个参数都是string类型

// 函数在定义时, 参数的类型为泛型, 具体的参数类型由调用函数时的泛型决定
// 调用函数时, 根据指定的泛型, 传入的参数要符合泛型定义, 每次调用函数时, 泛型可以不一样, 即参数类型也可能不一样

// 2. 泛型中数组的使用
// function myFun<T> (params: T[]) {
//     return params
// }

// 或

function myFun<T> (params: Array<T>) {
    return params
}

myFun<string>(['1', '2']) // 调用函数时, 指明泛型为string时, 则原函数变为了myFun<string> (params: string[]), 则要求传入的参数是一个数组且数组中的元素必须是字符串

// 3. 多个泛型定义
function join1<T, P> (first: T, second: P) {
    return `${first}${second}`
}

join1<string, number>('1', 2) // join1<string, number> 则说明原函数 join<T, P>(first: T, second: P) 变成了join<string, number>(first: string, second: number), 要求第一个参数和第二个参数都是string类型
join1<number, string>(1, '2')

// 4. 泛型的类型推断
// 一般不建议让ts进行泛型推断, 既然使用了泛型, 在调用函数时就要加上泛型, 否则就失去了使用泛型的意义了
function join2<T, P>(first: T, second: P) {
    return `${first}${second}`;
}
join2(1, "2"); // 鼠标放到join2上可以看到, ts自己推断出了join2(1, "2")其实是join2<number, string>
