//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const _dirname=dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var check=false;

app.use(bodyParser.urlencoded({ extended: true }));




function passwordChecker(req,res,next) {
  const password = req.body["password"];
  if(password === "ILoveProgramming"){
    check=true;
  }
  next();
}
app.use(passwordChecker);
app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
    if(check){
        res.sendFile(_dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});