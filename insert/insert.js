var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/",(req,res)=>{
    var v_id = req.body.v_id;
    var v_name = req.body.v_name;
    var v_likes = req.body.v_likes;
    connection.query("insert into youtube values("+v_id+",'"+v_name+"',"+v_likes+")",
                    (err,result)=>{
        if(err){
            res.send({"insert":"fail"});
        }else{
            res.send({"insert":"success"});
        }
    }); 
});
module.exports = router;