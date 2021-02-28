// 子命名空间
// 子命名空间是在ts创建的自调用函数来声明创建Home命名空间里的数据时, 在自调用函数中又创建了子命名空间SubComponents的自调用函数来声明子命名空间中的数据
// 子命名空间SubComponents不是全局变量, 而是Home命名空间自调用函数中的变量, 且同样的不在Home对象上, 需要加上export修饰符, 才可以将子命名空间变量赋值到Home对象上
// 子命名空间中的数据同样的也不在子命名空间SubComponents对象上, 子命名空间中只有export修饰的数据, 才会添加到子命名空间对象SubComponents上
// 命名空间export的数据只会添加到该命名空间的变量上, 不会添加到其他命名空间的对象上:
//   Home空间中export的数据只会添加到Home对象身上, 不会添加到SubComponents对象上, 同样的, SubComponents命名空间中export的数据只会添加到SubComponents上, 不会添加到Home上
namespace Home {
    export namespace SubComponents {
        export class Test {}
    }
    export class Page {
        constructor() {
            new Components.Header()
            new Components.Content()
            new Components.Footer()
        }
    }
}

// 全局变量Home -> { page: f, a: 1 }
