const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.axadv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (에러, client) {
    if (에러) return console.log(에러);
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);

app.get("/pet", function (요청, 응답) {
  응답.send("펫용품 쇼핑할수 있는 페이지입니다.");
});
app.get("/beauty", function (요청, 응답) {
  응답.send("뷰티용품 쇼핑할수 있는 페이지입니다.");
});
app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});
