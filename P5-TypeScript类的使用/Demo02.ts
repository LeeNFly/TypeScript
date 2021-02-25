// TypeScript中类的访问类型

// 类的内部和外部: 凡是在 class 类名 {}, {} 括号内称为类的内部, {}外称为类的外部, 具有继承关系的类, 也属于类的外部

// public private protected
// public: 在类的内部和类的外部都可以访问
// private: 只能在类的内部进行访问, 在类的外部以及具有继承关系的类的内部不能访问, 一般private访问类型的属性名或方法名会在前面加一个_作区分
// protected: 在类的内部和具有继承关系的类的内部可以进行访问, 在类的其他外部不能访问

// PS: 属性或方法不写访问类型, 则默认是public类型
// PS: 访问包括取值和赋值

// public 详解
// class Person {
//     public name:string;
//     public sayHello(){
//         console.log(this.name + 'say Hello')
//     }
// }
// //-------以下属于类的外部--------
// const person = new Person()
// person.name = 'jspang.com'
// person.sayHello()
// console.log(person.name)

// private 详解
// class Person {
//     private name:string;
//     public sayHello(){
//         console.log(this.name + 'say Hello')  //此处不报错
//     }
// }
// //-------以下属于类的外部--------
// const person = new Person()
// person.name = 'jspang.com'    //此处报错
// person.sayHello()
// console.log(person.name)  //此处报错

// protected 详解
// class Person {
//     protected name:string;
//     public sayHello(){
//         console.log(this.name + 'say Hello')  //此处不报错
//     }
// }

// class Teacher extends Person{
//     public sayBye(){
//         this.name; // 可以访问
//     }
// }