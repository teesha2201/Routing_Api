const {Bollywood,Hollywood,Technology,fitness,food} = require("../store/apiStore");
const blog = require("../store/BlogStore")
const BWood = (req,res)=>{
    // for target any particular single key data of object
    const id = req.params.id;
    console.log(id)
    const getIdData = Bollywood.find((item)=>item.id==id)
    res.send(getIdData);
}
const HWood = (req,res)=>{
    const id= req.params.id;
    console.log(id)
    const getIdData=Hollywood.find(item=>item.id==id)
    res.send(getIdData)
}
const Tech = (req,res)=>{
    const id= req.params.id;
    console.log(id)
    const getIdData=Technology.find(item=>item.id==id)
    res.send(getIdData)
}

const fit = (req,res)=>{
    const id= req.params.id;
    console.log(id)
    const getIdData=fitness.find(item=>item.id==id)
    res.send(getIdData)
}

const foodie = (req,res)=>{
    const id= req.params.id;
    console.log(id)
    const getIdData=food.find(item=>item.id==id)
    res.send(getIdData)
}

// blog 
const BlogData = (req,res)=>{
    const getCategory = req.query.Category;
    const getId= req.params.id;
    console.log(getCategory,getId)
    const filterCategory = blog.filter((item)=>item.Category==getCategory && item.id==getId)
    // const filterCategory = blog.filter((item)=>item.Category==getCategory)
    console.log(filterCategory)
    res.send(filterCategory)
    // const filterId = blog.find((itemid)=>itemid==getId)
    // console.log(filterId)
    // res.send(filterId);

}

module.exports = {BWood,HWood,Tech,fit,foodie,BlogData}