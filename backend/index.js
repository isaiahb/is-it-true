const express = require('express');
const app = express();
const port = 3000;

function isItTrue(value) {
  const _value = value.toLowerCase();
  if (_value === "false") return false;
  if (_value === "zero") return false;
  if (_value === "0") return false;
  if (_value === "undefined") return false;
  if (_value === "null") return false;
  if (_value === "nill") return false;
  if (_value === "nil") return false;
  if (_value === "no") return false;
  if (_value === "nope") return false;
  if (_value === "na") return false;

  return true;
}

app.get('/v1', (req, res) => {
  res.send("it's true!");
});

app.get('/v2/:value', (req, res) => {
  const param = req.params.value;
  if (!isItTrue(param)) return res.send("It's not true.");
  return res.send("It's true!");
});

app.get('*/:value', (req, res) => {
  const param = req.params.value;
  if (!isItTrue(param)) return res.send("It's not true.");
  return res.send("It's true!");
});

app.get('*', (req, res) => {
  res.send("It's true!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});