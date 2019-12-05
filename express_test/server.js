const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const ejsLint = require('ejs-lint');
//라우터 모듈인 main.js 를 불러와서 app 에 전달해줍니다.
// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
app.set('views', __dirname + '/views');

//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

/*
정적 파일이란? HTML 에서 사용되는 .js 파일, css 파일, image 파일 등을 가르킵니다.
서버에서 정적파일을 다루기 위해선, express.static() 메소드를 사용하면 됩니다.
*/
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',//쿠키를 임의로 변조하는것을 방지하기 위한 값 입니다. 이 값을 통하여 세션을 암호화 하여 저장합니다.
 resave: false,//세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
 saveUninitialized: true// 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다.
}));


const router = require('./router/main')(app, fs);
