// 接口说明:
// 接口只是对我们开发的约束, 在生产环境中并没有体现. 也可以说接口只是在TypeScript里帮我们作语法校验的工具, 编译成正式的js代码, 就不会有任何用处了

// 接口是用来约束 对象 {} 的, 该接口类型的对象必须符合接口的要求
interface Girl {
    name: string // 该接口类型对象必须有name属性, 且name属性值为string类型
    age: number // 该接口类型对象必须有age属性, 且age属性值为number类型
    bust: number // 该接口类型对象必须有bust属性, 且bust属性值为number类型
    waistline?: number // 该接口类型对象waistline类型属性可有可无, 若有waistline类型属性, 则属性值必须为number
    [propname: string]: any; // 该接口类型对象允许有任意属性(个数不限), 属性名为字符串, 属性值为任意类型
    say(): string // 该接口类型对象中必须有say方法, 且方法的返回值为string
}

// 1. 接口用作类型注解
const girl: Girl = {
    name: '刘英',
    age: 13,
    bust: 90,
    waistline: 50,
    sex: '女',
    say() {
        return 'Hello'
    }
}

const girl1 = {
    name: '刘英',
    age: 13,
    bust: 90,
    waistline: 50,
    sex: '女',
    say() {
        return 'Hello'
    }
}

const getName = (girl: Girl): Girl => {
    console.log(girl.name)
    return girl
}
getName(girl)
getName(girl1)

const arr: Girl[] = [girl, girl1]


// 2. 接口用于约束类
// Xiaojiejie类中实例的属性值必须符合Girl的约束
class Xiaojiejie implements Girl {
    name = "刘英"
    age = 18
    bust = 90
    say() {
        return 'Hello'
    }
    sex = '女'
}

// 3. 接口间的继承
// 接口Teacher继承了接口Girl的约束条件, 并额外增加了自己的teach(): string的约束条件
interface Teacher extends Girl {
    teach(): string
}

let teacher: Teacher = {
    name: '老师',
    age: 26,
    bust: 92,
    say() {
        return '我来教你'
    },
    teach() {
        return '学习'
    }
}

// 4. 接口和类型别名
type Girl1 = {
    name: string,
    age: number,
    bust?: number,
    say(): string,
    [propname: string]: any;
}

// 接口和类型别名语法和用法几乎一样, 但有一个不同点在于：
// 类只能用于约束JS对象 {}
// interface Girl2 = string // 这样是不行的
// 而类型别名不仅仅用于约束对象, 还可以用于约束其他类型
type Girl3 = string // 是可以的
let num: Girl3 = 'str'