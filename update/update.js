var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/",(req,res)=>{
    var v_id = req.body.e_id;
    var v_name = req.body.e_name;
    var v_likes = req.body.v_likes;
    connection.query("update youtube set v_name='"+v_name+"',v_likes="+v_likes+" where v_id="+v_id,
                    (err,result)=>{
        if(err){
            res.send({"update":"fail"});
        }else{
            res.send({"update":"success"});
        }
    });
});

module.exports = router;