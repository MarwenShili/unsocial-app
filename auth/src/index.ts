import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({ body: {} });
});

app.listen(3000, () => {
  console.log('Listining on port 30000');
});
