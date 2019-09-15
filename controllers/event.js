const express = require('express')
const router = express.Router()


const Event = require("../models/Event")

module.exports = {
    index: (req,res)=>{
        Event.find({}).then(events => res.json(events))
    },
    show: (req,res)=> {
        console.log(req.params.id)
        Event.findOne({_id: req.params.id}).then(events => {
            // console.log(req.params.id))  
        res.json(events)
    })
    },
    showByName: (req,res)=>{
        Event.find({name: req.params.name}).then(events =>
        res.json(events))
    },
    create: (req,res)=>{
        console.log(req.body, (typeof req.body))
        Event.create(req.body).then( events => res.json(events))
    },
    update: (req,res)=> {
        Event.findOneAndUpdate({_id: req.params.id},
        {$set: { "name" : req.body.name} }).then(events => res.json(events))
    },
    delete: (req,res)=>{
        Event.findOneAndDelete({_id: req.params.id}).then(events => res.send(events))
    }

}
