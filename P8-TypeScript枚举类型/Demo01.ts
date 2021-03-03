// 初级程序员
// function getServe(status: number) {
//     if (status === 0) {
//       return "massage";
//     } else if (status === 1) {
//       return "SPA";
//     } else if (status === 2) {
//       return "dabaojian";
//     }
//   }
//   const result = getServe(0);
//   console.log(`我要去${result}`);

// 中级程序员
// const Status = {
//     MASSAGE: 0,
//     SPA: 1,
//     DABAOJIAN: 2,
//   };
  
//   function getServe(status: any) {
//     if (status === Status.MASSAGE) {
//       return "massage";
//     } else if (status === Status.SPA) {
//       return "spa";
//     } else if (status === Status.DABAOJIAN) {
//       return "dabaojian";
//     }
//   }
  
//   const result = getServe(Status.SPA);
  
//   console.log(`我要去${result}`);

// 高级程序员
// enum Status {
//     MASSAGE,
//     SPA,
//     DABAOJIAN,
//   }
  
//   function getServe(status: any) {
//     if (status === Status.MASSAGE) {
//       return "massage";
//     } else if (status === Status.SPA) {
//       return "spa";
//     } else if (status === Status.DABAOJIAN) {
//       return "dabaojian";
//     }
//   }
  
//   const result = getServe(Status.SPA);
  
//   console.log(`我要去${result}`);

// 枚举类型
enum Status {
    MESSAGE,
    SPA,
    DABAOJIAN
}
// 如果不给值, 默认从数字0开始
console.log(Status.MESSAGE) // 0
console.log(Status.SPA) // 1
console.log(Status.DABAOJIAN) // 2

// 从1开始
enum Status1 {
    MESSAGE = 1,
    SPA,
    DABAOJIAN
}

console.log(Status1.MESSAGE) // 1
console.log(Status1.SPA) // 2
console.log(Status1.DABAOJIAN) // 3

// 也可以自己赋值
enum Status2 {
    MESSAGE = 3,
    SPA = 4,
    DABAOJIAN = '哈哈'
}

console.log(Status2.MESSAGE) // 3
console.log(Status2.SPA) // 4
console.log(Status2.DABAOJIAN) // 哈哈

// 取值 Status2.MESSAGE // 3
// Status2.MESSAGE.AA = 3: 枚举类型后续不能再赋值, 只能在声明的时候就赋值
// 反查 Status2[4] // SPA
console.log(Status2['哈哈']) // undefined 一般来说, 枚举类型的值取数字即可

// 不同枚举类型之间的key 和 value值可以一样, 同一个枚举类型里key值可以不一样, value值可以一样