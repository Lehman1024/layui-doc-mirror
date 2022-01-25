
/**
 * 扩展组件页面tab切换
 */
layui.define(['element'], function(exports){

    var $ = layui.jquery;
    var element = layui.element;

    //文档导航切换
    element.tab({
        headerElem: '.fly-extend-doc-nav>li' //指定tab头元素项
        ,bodyElem: '.fly-extend-doc' //指定tab主体元素项
    });

    //获取hash来切换选项卡，假设当前地址的hash为lay-id对应的值
    var layid = location.hash.replace(/^#/, '');
    layid && $('.fly-extend-doc-nav>li[lay-id="'+ layid +'"]').trigger('click')

    //监听文档导航
    element.on('tab(extend-doc-nav)', function(){
        location.hash = this.getAttribute('lay-id');
    });

});