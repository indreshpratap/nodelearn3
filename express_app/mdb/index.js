var Batch = require('./batch.model');
var Student = require('./student.model');
var mongoose = require('mongoose');

module.exports = {

    mongoDBConnect:function(){
        mongoose.connect("mongodb://localhost/coursemgr",(err)=>{
            if(err) console.warn(err);
            else console.log('Mongo connection success');
        });
    },
    Collections: {
        Batch: Batch,
        Student: Student 
    }
}