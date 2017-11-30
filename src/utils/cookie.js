///设置cookie
export function setCookie(NameOfCookie, value, expiredays)
{
    var ExpireDate = new Date ();
    ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));

    document.cookie = NameOfCookie + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString())+ ";Path=/";
}

///获取cookie值
export function getCookie(NameOfCookie)
{
    if (document.cookie.length > 0)
    {
        var begin = document.cookie.indexOf(NameOfCookie+"=");
        if (begin != -1)
        {
// 说明存在我们的cookie.
            begin += NameOfCookie.length+1;//cookie值的初始位置
            var end = document.cookie.indexOf(";", begin);//结束位置
            if (end == -1) end = document.cookie.length;//没有;则end为字符串结束位置
            return unescape(document.cookie.substring(begin, end));
        }
    }

    return null;

// cookie不存在返回null
}

///删除cookie
export function delCookie (NameOfCookie)
{
    if (getCookie(NameOfCookie)) {
        document.cookie = NameOfCookie + "=" +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}