const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어 설정

app.get('/', (req, res) => {
  res.status(200).send('요청이 성공했습니다.');
});

app.get('/notfound', (req, res) => {
  res.status(404).send('요청한 페이지를 찾을 수 없습니다.');
});

app.post('/badrequest', (req, res) => {
  // 잘못된 요청 처리
  if (!req.body.username || !req.body.password) {
    res.status(400).send('유효한 사용자 정보가 제공되지 않았습니다.');
  } else {
    // 유효한 요청 처리
    // ...
    res.status(200).send('요청이 성공적으로 처리되었습니다.');
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
