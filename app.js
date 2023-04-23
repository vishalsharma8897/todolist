const express = require("express");
const app = express();
const date=require(__dirname + "/date.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// now i can use body-pareser ;

app.use(express.static("public"));
// above statement is used to include all the static files like css ,js and images to browser;


app.set("view engine", "ejs");  // for templating ,we are using view engine as ejs ;


const items = ["Buy food", "Cook Food", "Eat Food"];
const workItems = [];
app.get("/", function (req, res) {
   
   let day=date.getDate();
   res.render("list", { listTitle: day, listNewItems: items });

});

// targeting a work route;
app.get("/work", (req, res) => {
   res.render("list", { listTitle: "Work", listNewItems: workItems });
});

app.get("/about",function(req,res){
     res.render("about");
});

app.post("/", function (req, res) {
   let newItem = req.body.newItem;
   let listType = req.body.list;

   if (listType ==="Work") {
      if (newItem.length !== 0) {
         workItems.push(newItem);
      }
      res.redirect("/work");
   }
   else {
      if (newItem.length !== 0) {
         items.push(newItem);
      }
      res.redirect("/");
   }

});


app.listen(8080, function () {
   console.log("server started on port 8080");
});

