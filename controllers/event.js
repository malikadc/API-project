const express = require('express')
const router = express.Router()


const Event = require("../models/Event")

module.exports = {
    index: (req,res)=>{
        Event.find({}).then(events => res.json(events))
    },
    show: (req,res)=>{
        Event.findOne({id: req.params.id}).then(events => 
        res.json(events),
        console.log(req.params.id))  
    },
    create: (req,res)=>{
        Event.create(req.body).then( events => res.json(events))
    },
    update: (req,res)=> {
        Event.findOneAndUpdate({id: req.params.id},
        {$set: { "name" : req.body.name} }).then(events => res.json(events))
    },
    delete: (req,res)=>{
        Event.findOneAndDelete({id: req.params.id}).then(event => res.send(events))
    }

}
