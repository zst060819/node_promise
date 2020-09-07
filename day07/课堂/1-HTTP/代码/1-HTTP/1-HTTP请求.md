## 请求报文
```
GET http://www.xiaohigh.com/ HTTP/1.1
Host: www.xiaohigh.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7


```

## 结构
* 请求行
* 请求头
* 空行
* 请求体

### 请求行
```
GET http://www.xiaohigh.com/ HTTP/1.1
```
* GET                           请求类型  GET POST PUT DELETE 
* http://www.xiaohigh.com/      请求 URL
* HTTP/1.1                      HTTP 协议版本号 1.1 


### 请求头
```
Host: www.xiaohigh.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
```

#### 请求头格式
```
key: value
```

* host 主机名
* Connection 连接  keep-alive 保持连接  close 关闭
* Pragma   设置缓存 是 HTTP/1.0 缓存设置  no-cache 不缓存
* Cache-Control 缓存设置 是 HTTP/1.1 缓存设置
* Upgrade-Insecure-Requests 升级不安全请求
* User-Agent  用户代理, 是对客户端的字符串标识. 每一次向服务器发送请求, 都会带着这个头, 每个浏览器的UA 都不一样. 
* Accept 接受 q 喜好系数, 默认值为 1.  读书, 玩游戏, 逛街, 学习敲代码
* Accept-Encoding 接受的压缩方式  gzip, deflate
* Accept-Language 接受的语言  
  
## 响应报文
```
HTTP/1.1 200 OK
server: ecstatic-3.3.2
cache-control: max-age=3600
last-modified: Fri, 13 Sep 2019 01:18:04 GMT
etag: W/"1202827-283-2019-09-13T01:18:04.000Z"
content-length: 283
content-type: text/html; charset=UTF-8
Date: Mon, 06 Jul 2020 01:55:01 GMT
Connection: keep-alive

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>网站首页</title>
	<link rel="stylesheet" href="./css/index.css">
	<script src="./js/index.js"></script>
</head>
<body>
	<h3>欢迎来到尚硅谷</h3>
	<img src="./images/welcome.jpg" alt="">
</body>
</html>
```

### 响应报文的格式
* 响应行
* 响应头
* 空行
* 响应体

#### 响应行
```
HTTP/1.1 200 OK
```
* HTTP/1.1 版本号
* 200      响应状态码  200 成功  404 未找到   403 禁止的  500 服务器内部错误
* OK       响应状态字符串 OK    Not Found    Forbidden    Server Internal Error

#### 响应头
```
server: ecstatic-3.3.2
cache-control: max-age=3600
last-modified: Fri, 13 Sep 2019 01:18:04 GMT
etag: W/"1202827-283-2019-09-13T01:18:04.000Z"
content-length: 283
content-type: text/html; charset=UTF-8
Date: Mon, 06 Jul 2020 01:55:01 GMT
Connection: keep-alive
```
* server:  服务采用的技术
* cache-control: 缓存设置  max-age=3600 生命周期
* last-modified: 最后修改 时间. 表示当前资源的最后修改时间.
* etag:    当前资源的唯一标志
* content-length 内容长度. 响应体的长度(单位为字节)
* content-type   内容类型. 响应体的类型
* Date 响应时间
* Connection 连接   keep-alive 保持连接  close 关闭
#### 响应体
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>网站首页</title>
	<link rel="stylesheet" href="./css/index.css">
	<script src="./js/index.js"></script>
</head>
<body>
	<h3>欢迎来到尚硅谷</h3>
	<img src="./images/welcome.jpg" alt="">
</body>
</html>
```

#### 响应体
格式灵活. 随便写. HTML, CSS, JS, 图片, 字体， JSON



