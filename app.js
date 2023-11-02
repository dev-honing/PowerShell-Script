const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // POST 요청의 body를 파싱하기 위한 미들웨어 설정
app.use(express.static('public')); // 정적 파일을 제공하기 위한 미들웨어 설정

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // index.html 파일을 응답으로 보냄
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(`ID: ${username}`);
  console.log(`PW: ${password}`);
  // 여기서 로그인 로직을 추가할 수 있음
  // ...
  res.send('로그인 요청을 받았습니다.'); // 클라이언트에 응답을 보냄
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
