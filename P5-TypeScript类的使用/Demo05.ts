// 抽象类的使用

// 抽象类的基本使用
// 类和方法都使用abstract进行修饰
abstract class Girl{
    abstract skill(): string  //因为没有具体的方法，所以我们这里不写括号
}

// 子类继承抽象类, 必须实现抽象类中的所有 抽象 方法
class Waiter extends Girl{
    skill(){
        console.log('大爷，请喝水！')
        return ''
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('大爷，来个泰式按摩吧！')
        return ''
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('大爷，来个SPA全身按摩吧！')
        return ''
    }
}