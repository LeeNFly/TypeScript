// 类的基本使用以及原理与JS中ES6的类几乎一样

// 类的基本使用
class Lady {
    content = "Hi，帅哥";
    sayHello() {
      return this.content;
    }
  }
  
//   const goddess = new Lady();
//   console.log(goddess.sayHello()); // Hi, 帅哥

// 类的继承
// class XiaoJieJie extends Lady {
//     sayLove() {
//       return "I love you";
//     }
//   }
  
//   const goddess = new XiaoJieJie();
//   console.log(goddess.sayHello()); // Hi, 帅哥
//   console.log(goddess.sayLove()); // I love you
  
// 类的重写

// class XiaoJieJie extends Lady {
//     sayLove() {
//       return "I love you!";
//     }
//     sayHello() {
//       return "Hi, honey!";
//     }
// }


//   const goddess = new XiaoJieJie();
//   console.log(goddess.sayHello()); // Hi, honey!
//   console.log(goddess.sayLove());  // I love you!

// super关键字的使用

// class XiaoJieJie extends Lady {
//     sayLove() {
//       return "I love you!";
//     }
//     sayHello() {
//       return super.sayHello() + "。你好！"; // 用super关键字访问父类中的方法
//     }
// }

// const goddess = new XiaoJieJie(); 
// console.log(goddess.sayHello()); // Hi，帅哥。你好！
// console.log(goddess.sayLove());  // I love you!