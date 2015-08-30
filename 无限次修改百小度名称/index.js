/*
*   登陆自己的百度账号,进入百小度名称修改页面.(http://xiaodu.baidu.com/setting/)
*   修改一次后,再修改提示不能修改,
*   打开控制台(按F12),注入这段代码,把  cyl  和 ajax  换成你需要的.
*   OK
*/
var xmlhttp = new XMLHttpRequest(),
    prop = {};
prop.xiaoduName = 'cyl';
prop.userName = 'Ajax';
//下面的代码不需要改动-------------
prop.url = 'http://xiaodu.baidu.com/s?sample_name=bear_brain' +
            '&request_type=4&callback=jQuery110202043993091210723_1439446331525' + 
            '&system_name=' + 
            prop.xiaoduName + '&user_name='+
            prop.userName + '&_=1439446331528';
prop.type = 'GET';
prop.succes = function(val) {
    console.log(val);
}
prop.error = function () {}
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
        prop.succes(xmlhttp.responseText);
    }
}
xmlhttp.open(prop.type, prop.url);
xmlhttp.send();