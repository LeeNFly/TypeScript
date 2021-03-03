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

    // set 方法必须且只能有一个参数
    set age(age:number){
        this._age = age + 3
    }

    say() {
        console.log('my age is ' + this._age)
        console.log('my age is ' + this.age) // 在内部也可以使用this.age来调用Setter或Getter方法, 但是内部可以直接访问private的值, 所以推荐直接访问
    }
}
const dajiao = new Xiaojiejie(28)
console.log(dajiao.age) // 每次获取都会同步调用一次get age() {} 方法, 并将本次调用的返回值作为dajiao.age的值
dajiao.age = 25 // 每次赋值都会同步调用一次set age(){} 方法, 并将=右侧25作为set方法的实参传入 (等号右侧可以是任意类型数据, 也可以是表达式或函数调用, 先同步执行等号右侧, 拿到具体的值之后, 才会调用set age(){} 方法)
console.log(dajiao.age) // 18

// set get 方法有利于保护真是数据, 而真正返回或设置的数据可以由自己通过get, set方法来掌控
