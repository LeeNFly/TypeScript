"use strict";
// class Header {
//     constructor() {
//         const elem = document.createElement('div')
//         elem.innerText = 'this is header'
//         document.body.appendChild(elem)
//     }
// }
// class Content {
//     constructor() {
//         const elem = document.createElement('div')
//         elem.innerText = 'this is content'
//         document.body.appendChild(elem)
//     }
// }
// class Footer {
//     constructor() {
//         const elem = document.createElement('div')
//         elem.innerText = 'this is footer'
//         document.body.appendChild(elem)
//     }
// }
// class Page {
//     constructor() {
//         new Header()
//         new Content()
//         new Footer()
//     }
// }
// 以上写法, Header, Content, Footer, Page全部都是全局变量, 会造成全局变量污染
// 使用命名空间
// 在全局作用域中声明了一个Home全局变量, 值是一个空对象{}
// ts会自己创建一个自调用函数, 来声明创建命名空间中的数据, 命名空间中的数据都是存储在这个自调用的函数中的, 所以这个命名空间中的数据可以互相访问, 命名空间中的数据, 与全局变量Home无关, 不在全局变量Home对象上
// 在命名空间中, 只有export修饰的数据, 最终会被赋值到Home对象上
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
    Home.a = 1;
})(Home || (Home = {}));
// 全局变量Home -> { page: f, a: 1 }
