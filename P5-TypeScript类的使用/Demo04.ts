// 类的Getter 和 Setter方法
// Getter主要用于对类中private修饰的属性或方法进行访问
// Setter主要用于对类中private修饰的属性或方法进行赋值

// Getter方法
class Xiaojiejie {
    constructor(private _age:number){}
    get age(){
        // return this._age
        return this._age - 10
    }

    set age(age:number){
        this._age = age + 3
    }
}
const dajiao = new Xiaojiejie(28)
console.log(dajiao.age) // 得到的是实例的 get age() {} 方法的返回值
dajiao.age = 25 // 相当于调用了set age(){} 方法, 并将=右侧25作为set方法的实参传入
console.log(dajiao.age) // 18

// set get 方法有利于保护真是数据, 而真正返回或设置的数据可以由自己通过get, set方法来掌控
