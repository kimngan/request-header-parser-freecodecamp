var express = require("express");
var app = express();

app.get("/header", function(req, res){
  var ip = req.headers["x-forwarded-for"] ;
  var info = {
  "ipaddress": ip,
  "language": req.headers["accept-language"].split(",")[0],
  "software": req.headers["user-agent"].split(") ")[0].split(" (")[1]
  };
  res.json(info);
  console.log(req.headers);
});

app.listen(process.env.PORT || 5000, function() {
    console.log('Example app listening on port 8080');
    
});