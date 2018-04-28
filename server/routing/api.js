const router = require("express").Router();


router.get("/hello", (req,res)=>{
  res.send("hi");
}
)


module.exports = router;

