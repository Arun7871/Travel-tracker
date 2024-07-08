import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';
const app = express();
const port = 3000;
let visCountries=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"ajayaadhi",
  port:5432,
});
db.connect();

app.get("/", async (req, res) => {
  //Write your code here.
  visCountries = [];
  const result = await db.query("select code from visited_country");
  result.rows.forEach((cc) => {visCountries.push(cc.code)});
  console.log(visCountries);
  res.render('index.ejs',{countries:visCountries,total:visCountries.length})
  //db.end();
});

app.post('/add',async (req,res) => {
  let cName = req.body.country;
  try{
  let result = await db.query("select country_code from countries where country_name like $1 || '%';",[cName]);
  let cc = result.rows[0].country_code;
  await db.query(`Insert into visited_country(country,code) values ('${cName}','${cc}')`);
  }catch(error){
    let msg = "Country doesnt exists";
    if(error.code){
      msg = "Country already found";
    }
    res.render('index.ejs',{countries:visCountries,total:visCountries.length,error:msg})
    return;
  }
  res.redirect('/');
  //db.end();
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
