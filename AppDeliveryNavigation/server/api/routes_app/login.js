const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res, next) => {
    var storeName = req.body.storeName || ''
    var phone = req.body.phone || ''
    var password = req.body.password || ''
    var bankNumber = req.body.bankNumber || null
    var bankName = req.body.bankName || null
    var sql = `INSERT INTO tblSeller
        (selStoreName, selPhone, selPassword, selBankNumber, selBankName) 
        VALUES (?, ?, ?, ?, ?)
    `
    var dataSql = [storeName, phone, sha1(password), bankNumber, bankName]
    pool.getConnection(function(err, connection) {
        if(err){
            res.status(400).json({
                err: err,
            });
        }else{
            connection.query(sql, dataSql, function (error, results, fields) {
                connection.release();
                if(error){
                    if(error.code && error.code === "ER_DUP_ENTRY"){
                        res.status(400).json({
                            message: 'duplicate_phone',
                        });
                    }else{
                        res.status(400).json({
                            error: error,
                        });
                    }
                }else{
                    if(results.insertId){
                        res.status(200).json({
                            message:'success',
                        })
                    }else{
                        res.status(400).json({
                            message:'insert_error',
                        })
                    }
                }
            })
        }
    })
});

router.post('/login', (req, res, next) => {
    var phone = req.body.phone || ''
    var password = req.body.password || ''
    var sql = `
        SELECT * FROM tblSeller WHERE selPhone = ? AND selPassword = ?
    `
    var dataSql = [phone, sha1(password)]
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
                        var data = {
                            ...results[0]
                        }
                        jwt.sign({
                            data: data
                        }, phone, (err, token) => {
                            res.status(200).json({
                                message:'success',
                                token:token
                            })
                        });
                    }else{
                        res.status(400).json({
                            message:'invalid_user',
                        })
                    }
                }
            })
        }
    })
});

module.exports = router;