"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// 子命名空间
// 子命名空间是在ts创建的自调用函数来声明创建Home命名空间里的数据时, 在自调用函数中又创建了子命名空间SubComponents的自调用函数来声明子命名空间中的数据
// 子命名空间SubComponents不是全局变量, 而是Home命名空间自调用函数中的变量, 且同样的不在Home对象上, 需要加上export修饰符, 才可以将子命名空间变量赋值到Home对象上
// 子命名空间中的数据同样的也不在子命名空间SubComponents对象上, 子命名空间中只有export修饰的数据, 才会添加到子命名空间对象SubComponents上
var Home;
(function (Home) {
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Home.SubComponents || (Home.SubComponents = {}));
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
// 全局变量Home -> { page: f, a: 1 }
