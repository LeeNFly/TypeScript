// 类的静态属性和只读属性

// 只读属性

// 只读属性要么在属性声明时就赋值, 要么在构造函数中赋值, 只读属性可以在构造函数中赋值多次, 在其他地方, 只读属性则不能被赋值了

// class Person {
//     public readonly _name :string;
//     constructor(name:string ){
//         this._name = name;
//     }
// }

// const person = new Person('jspang')
// // person._name= '谢广坤' // 不允许修改了
// console.log(person._name)

// 或简写

// class Person {
//     constructor(public readonly _name:string ){
//     }
// }

// const person = new Person('jspang')
// // // person._name= '谢广坤' // 不允许修改了
// console.log(person._name)

// 静态属性
// 基本用法和原理与JS ES6中class属性一样, 静态属性存在于类对象本身上, 而不存在于类实例身上, 可以直接通过类对象来访问
// class Girl {
//     static sayLove() {
//       return "I Love you";
//     }
// }
// console.log(Girl.sayLove());