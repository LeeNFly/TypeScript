// 虽然$报错了, 但是可以成功编译和运行

// 可以解决$报错, 简单粗暴
declare var $: any

$(function () {
    console.log('jq的入口函数')
})