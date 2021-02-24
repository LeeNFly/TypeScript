// 数组类型注解方法
const numberArr: number[] = [1, 2, 3] // 数组类型且数组中的元素只能是number类型, 数组中元素个数任意
const stringArr: string[] = ['1', '2', '3'] // 数组类型且数组中的元素只能是string类型, 数组中元素个数任意
const undefinedArr: undefined[] = [undefined, undefined, undefined] // 数组类型且数组中的元素只能是undefined类型, 数组中元素个数任意
const arr: (string | number)[] = [1, 'string', 3] // 数组类型且数组中的元素只能是string或number类型(对顺序没有要求), 数组中元素个数任意

// 数组类型且数组中的元素只能对象, 且对象中有且只能有2个属性name和age, 且name为string类型, age为number类型, 数组中元素个数任意
const xiaojiejies: {name: string, age: number}[] = [
    { name: '刘英', age: 18 },
    { name: '小樱', age: 28 }
]

// 对xiaojiejies类型注解优化

// 1. type alias 类型别名
type Lady = {name: string, age: number}
const xiaojiejies1: Lady[] = [
    { name: '刘英', age: 18 },
    { name: '小樱', age: 28 }
]

// 2. class类
class Madam {
    name: string
    age: number
}
const xiaojiejies2: Madam[] = [
    { name: '刘英', age: 18 },
    { name: '小樱', age: 28 }
]