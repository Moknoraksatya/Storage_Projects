const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require("axios");

router.get('/:phone', (req, res, next) => {
    var code = smsCodeGenerate()
    var phone = req.params.phone
    var sql = `SELECT * FROM tblSeller WHERE selPhone = ?`
    var dataSql = [phone]
    pool.getConnection(function(err, connection) {
        if(err){
            res.status(400).json({
                err: err,
            });
        }else{
            connection.query(sql, dataSql, function (error, results, fields) {
                connection.release();
                if(error){
                    res.status(400).json({
                        error: error,
                    });
                }else{
                    if(results.length > 0){
                        res.status(400).json({
                            message:'registerd',
                            results,
                        })
                    }else{
                        var data = {
                            smsCode: code,
                        }
                        jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 5), 
                            data: data
                        }, phone, (err, token) => {
                            res.status(200).json({
                                message:'success',
                                token:token
                            })
                        });
                    }
                }
            })
        }
    })
});

router.post('/check-sms-code', verifyTokenSMS, (req, res, next) => {
    res.status(200).json({
        messgae:'success',
    })
});


function smsCodeGenerate(){
    var val = Math.floor(100000 + Math.random() * 900000);
    // return val;
    return 123456;
}

module.exports = router;