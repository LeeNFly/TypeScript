// 泛型在类中的使用

// class SelectGirl {
//     constructor(private girls: string[]) {}
//     getGirl(index: number): string {
//       return this.girls[index];
//     }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));

// 要求Girl可以是字符串数组也可以是数字数组
// class SelectGirl {
//     constructor(private girls: string[] | number[]) {}
//     getGirl(index: number): string | number {
//       return this.girls[index];
//     }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));
// 显然以上写法不够优雅

// 使用泛型
// class SelectGirl<T> {
//     constructor(private girls: T[]) {}
//     getGirl(index: number): T {
//       return this.girls[index];
//     }
// }
  
// const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));


// 泛型的继承

// 需求: 要求女孩必须有name属性, 且getGirl要返回女孩的名称

// interface Girl{
//     name: string
// }

// class SelectGirl<T extends Girl> { // T extends Girl 的意思是: 接口interface是用于约束对象的, 则可以知道, 求泛型必须要是一个对象, 且必须要有name属性
//     constructor(private girls: T[]) {}
//     getGirl(index: number): string {
//       return this.girls[index].name;
//     }
// }
  
// const selectGirl = new SelectGirl([
//     {name: "大脚"},
//     {name: "刘英"},
//     {name: "晓红"},
// ]);
// console.log(selectGirl.getGirl(1));



// interface Girl {
//     name: string
// }

// function getGirl<T extends Girl> (girl: T) {
//     return girl.name
// }

// console.log(getGirl({name: '哈哈'}))

// 泛型约束

// 现在这个泛型可以是任意类型
function add<T> (first: T, second: T) {
    return `${first}${second}`
}

add<number>(1, 2)
add<string>('3', '4')
add<boolean>(true, false)

// 泛型只能是number或string
function add1<T extends number | string> (first: T, second: T) {
    return `${first}${second}`
}
add1<number>(1, 2)
add1<string>('3', '4')                                                      
add1<boolean>(true, false)

// 类中的泛型只能是number或string类型
class SelectGirl<T extends number | string> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
      return this.girls[index];
    }
}
  
const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));