/**
 * [$ajax 封装 ajax 函数]
 * @param  {[object]}   value [要传入多个值时]
 * @param  {[string]}   get   [传输方式]
 * @param  {[string]}   url   [处理程序的地址]
 * @param  {Function} fn    [回调函数]
 * @return {[Function]}         [将获得的值，传入将要调用的函数中]
 */
function $ajax(obj,get,url,fn){
	var ajax = new XMLHttpRequest();
	var arr = [];
	for(var key in obj){
		arr[arr.length]=key+'='+obj[key]
	}
	var values = arr.join('&')
	console.log(url+'?'+values);
	if (get=='get') {
		ajax.open('get',url+'?'+values);
		ajax.send(null); // 可以没有这个请求主体，因为请求行上有（get的请求头被我省略了）
	}else if (get=='post') {
		ajax.open('post',url);
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
		ajax.send(values)
	}
	ajax.onreadystatechange = function(){
		if (ajax.readyState == 4&& ajax.status == 200) {
			var txt = ajax.responseText;
			return fn(txt)	
		}
	}
}