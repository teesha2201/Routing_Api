const {Bollywood,Hollywood,Technology,fitness,food} = require("../store/apiStore");

const BWood = (req,res)=>{
    res.send(Bollywood);
}
const HWood = (req,res)=>{
    res.send(Hollywood)
}
const Tech = (req,res)=>{
    res.send(Technology)
}
const fit = (req,res)=>{
    res.send(fitness)
}
const foodie = (req,res)=>{
    res.send(food)
}

module.exports = {BWood,HWood,Tech,fit,foodie}