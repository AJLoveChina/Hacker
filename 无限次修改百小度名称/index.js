/*
*   ��½�Լ��İٶ��˺�,�����С�������޸�ҳ��.(http://xiaodu.baidu.com/setting/)
*   �޸�һ�κ�,���޸���ʾ�����޸�,
*   �򿪿���̨(��F12),ע����δ���,��  cyl  �� ajax  ��������Ҫ��.
*   OK
*/
var xmlhttp = new XMLHttpRequest(),
    prop = {};
prop.xiaoduName = 'cyl';
prop.userName = 'Ajax';
//����Ĵ��벻��Ҫ�Ķ�-------------
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