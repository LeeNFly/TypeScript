// 类的构造函数

// 基本使用和原理和JS中ES6 class类一样
// class Person{
//     public name :string ;
//     constructor(name:string){
//         this.name=name
//     }

// }
// const person= new Person('jspang')
// console.log(person.name)

// 以上可以简写为以下
// class Person{
//     constructor(public name:string){
//     }
// }

// const person= new Person('jspang')
// console.log(person.name)

// 类继承中构造函数
// class Person{
//     constructor(public name:string){}
// }

// class Teacher extends Person{
//     constructor(public age:number){
//         super('jspang') // 子类构造函数中必须调用父类构造函数, 如果父类构造函数需要传值, 则子类构造函数也必须传值
//     }
// }

// const teacher = new Teacher(18)
// console.log(teacher.age) // 18
// console.log(teacher.name) // jspang

// 就算父类中没有构造函数, 子类的构造函数中也必须调用父类的构造函数
// class Person{} // 其实虽然省略了构造函数, 但是其实是有一个constructor(){}构造函数在的
// class Teacher extends Person{
//     constructor(public age:number){
//         super()
//     }
// }

// const teacher = new Teacher(18)
// console.log(teacher.age)