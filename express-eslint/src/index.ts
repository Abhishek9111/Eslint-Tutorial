import express from "express";

const app = express();
//removing the below comment will throw errors->
//eslint-disable-next-line  @typescript-eslint/no-unused-vars
const x = 1;

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
  });
});

// function withSpace (x:number){
//   //..
// }

// let temp = ( 1 + 2 ) * 3
