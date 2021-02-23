function fn() {
    let str: string = 'Hello World'
    console.log(str)
}

fn()

// 一. ts介绍: ts是js的一个超集, 最终也是编译成js文件. ts文件不能直接被执行, 需要编译成js后, 执行编译后的js文件. 所有js中支持的语法, 在ts中也是支持以及合法的

// 二. 全局安装ts: npm install typescript -g

// 三. 编译执行: 
//  1. 编译: tsc xxx.ts, 将 xxx.ts 编译成 xxx.js
//  2. 执行: node xxx.js // 暂时使用node来执行js文件, 方便学习

// 四. 辅助插件ts-node
//  1. 全局安装 npm install ts-node -g
//  2. ts-node xxx.ts 同(三), 编译+执行