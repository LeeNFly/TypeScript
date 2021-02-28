// 联合类型: 有多个类型注解, 可以是多种类型, 多个类型注解之间使用 | 来分割, 在任何可以使用类型注解的地方, 都可以使用联合类型注解
// 类型保护: 若变量是联合类型的情况下, 增加一些判断, 对变量的类型进行保护, 保证代码的严谨性

interface Waiter {
    anjiao: boolean;
    say: () => {};
}
  
interface Teacher {
    anjiao: boolean;
    skill: () => {};
}
  
// function judgeWho(animal: Waiter | Teacher) {
//     // animal 可以是Waiter或者Teacher类型, 因此不一定有say方法
//     animal.say();
// }

// 类型保护: 类型断言
// function judgeWho(animal: Waiter | Teacher) {
//     if (animal.anjiao) {
//         (animal as Teacher).skill();
//     }else{
//         (animal as Waiter).say();
//     }
// }

// 类型保护: in语法
// function judgeWhoTwo(animal: Waiter | Teacher) {
//     // 判断animal中是否有skill方法
//     if ("skill" in animal) {
//       animal.skill();
//     } else {
//       animal.say();
//     }
// }

// 类型保护: typeof语法
// function add(first: string | number, second: string | number) {
//     return first + second;
// }

// function add(first: string | number, second: string | number) {
//     if (typeof first === "string" || typeof second === "string") {
//       return `${first}${second}`;
//     }
//     return first + second;
// }

// 类型保护: instanceof语法
class NumberObj {
    count: number;
}

// function addObj(first: object | NumberObj, second: object | NumberObj) {
//     return first.count + second.count;
// }

// function addObj(first: object | NumberObj, second: object | NumberObj) {
//     if (first instanceof NumberObj && second instanceof NumberObj) {
//       return first.count + second.count;
//     }
//     return 0;
// }
