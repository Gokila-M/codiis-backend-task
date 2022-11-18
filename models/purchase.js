import  Joi from 'joi';
import mongoose from "mongoose";

// const env=require('dotenv').config()
//const encrypt=require('mongoose-encryption');

//const secret= "mysecret";


const Purchase = mongoose.model('Purchase',new  mongoose.Schema({

 
  planId:{
    type:String,
   
   },
   
   
   purchasetype: {
    type: String,
    enum: ['group','individual']
  },
    
    customerId: {
      type: String,
  
      },
    groupId:{
      type: String,
    
    },
  
    dateofcreation: {
        type: Date,
        default:Date.now
    } 
   
  }));





export default Purchase