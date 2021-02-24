// 元组的使用和类型约束

// 元组是用于弥补数组的缺陷的, 其使用方法与数组差不多
// const xiaojiejie: (number | string)[] = ['dajiao', 'teacher', 28] // xiaojiejie是一个数组类型, 且数组中的元素类型只能是number和string, 并且没有顺序要求, 数组中元素个数任意

// 假设第一个元素是名称, 第二个元素是职位, 第三个元素是年龄
const xiaojiejie: [string, string, number] = ['dajiao', 'teacher', 28] // xiaojiejie是一个元组, 且有且只能有3个元素, 第一个元素必须是string类型, 第二个元素必须是string类型, 第三个元素必须是number类型
// console.log(xiaojiejie[0])
// xiaojiejie[0] = '123'
// console.log(xiaojiejie[0])

// xiaojiejie是一个数组, 且数组中的元素都是元组, 元组有且只能有3个元素, 第一个元素必须是string类型, 第二个元素必须是string类型, 第三个元素必须是number类型
const xiaojiejies: [string, string, number][] = [
    ['dajiao1', 'teacher1', 28],
    ['dajiao2', 'teacher2', 18],
    ['dajiao3', 'teacher3', 20]
] 

// ps: 元组很少使用, 除非服务端数据源是CSV, 返回的数据格式类似于元组
