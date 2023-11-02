const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // 정적 파일을 제공하기 위한 미들웨어 설정

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // index.html 파일을 응답으로 보냄
});

app.post('/login', (req, res) => {
  // 로그인 처리 로직을 여기에 추가할 수 있음
  const username = req.body.username;
  const password = req.body.password;
  // todo 로그인 로직 추가 예정
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
