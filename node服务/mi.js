// 加载模块
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app  = express();

// 静态文件加载
app.use(express.static("./public"))
app.use(express.static("./public/img"))

//post数据请求处理 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//axios配置
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',req.headers.origin);
    res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});

var filename = path.join(__dirname,"./mi.json");
console.log(filename);

app.get('/', (req, res) => {
    fs.readFile(filename,function (err,data) {
        if(err){
            console.log("error");
        }else{
            res.json(JSON.parse(data.toString()));
        }
    });
});

// app.listen(3000, '192.168.0.82', () => console.log('请访问：http://192.168.0.82:3000'))
app.listen(3000, '127.0.0.1', () => console.log('请访问：http://127.0.0.1:3000'))