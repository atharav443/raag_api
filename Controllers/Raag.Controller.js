const Raag=require('../Models/Product.model')

module.exports={
  GetAllRaags:async(req,res)=>{

    try {

        const results=await Raag.find({},{__v:0})
        if(!results) return res.send("Raag Not Found")
        //find method has two parameters :query and projection
        //to get raag of kalyan thaat
      
        // const results=await Raag.find({thaat:"kalyan"},{})
        
       // to exclude and include we need to pass projecction in find
       //to  include only name of raag with kalyan Thaat
        // const results=await Raag.find({thaat:"kalyan"},{name:1})

        res.send(results)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Unable to get raag in DB"
        })
    }
},
  
  AddRaag :async(req,res)=>{
    try{    
    const raag=new Raag(req.body)
    const result=await raag.save()
    res.send(result)
    }catch(error){
        res.status(500).json({
        message:"Unable to add raag in DB"
        })
    }
},
  GetSingleRaag:async(req,res)=>{
    const single_raag=req.params.name
    try {
        const raag=await Raag.findOne({name:single_raag})
        if(!raag) return res.status(500).json({
            message:"Raag Not Found"
        })
        res.send(raag)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
 GetRaagwithThatt:async(req,res)=>{
    const single_thatt=req.params.name
    try {
        const raag_thatt=await Raag.find({thaat:single_thatt});
        if(!raag_thatt) return res.status(500).json({
            message:`Raag with ${single_thatt} thatt not Found`
        })
        res.send(raag_thatt)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
GetRaagwithVadi:async(req,res)=>{
    const single_vadi=req.params.name
    try {
        const raag_vadi=await Raag.find({vadi:single_vadi});
        if(!raag_vadi) return res.status(500).json({
            message:`Raag with ${single_vadi} vadi not Found`
        })
        res.send(raag_vadi)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
GetRaagwithSamVadi:async(req,res)=>{
    const single_samvadi=req.params.name
    try {
        const raag_samvadi=await Raag.find({samvadi:single_samvadi});
        if(!raag_samvadi) return res.status(500).json({
            message:`Raag with ${single_samvadi} samvadi not Found`
        })
        res.send(raag_samvadi)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
GetRaagwithTime:async(req,res)=>{
    const single_time=req.params.name
    try {
        const raag_time=await Raag.find({time:single_time});
        if(!raag_time) return res.status(500).json({
            message:`Raag with ${single_time} time not Found`
        })
        res.send(raag_time)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
UpdateSingleRaag:async(req,res)=>{
   try{
    const update_name=req.params.name
    const updates=req.body
    if(!updates) {return res.status(400).json({
        message:"Invalid Request"
    })}
    const options={new:true}
    const update_result=await Raag.findOneAndUpdate({name:update_name},updates,options);
    if(!update_result) return res.status(400).json({
        message:"Raag Not Found"
    })
    res.send(update_result)
   }catch(error){
    res.status(500).json({
        message:"Unable to update raag from DB"
    })
   }
},

  DeleteSingleRaag:async(req,res)=>{
    const name=req.params.name
   
    try {
        const answer=await Raag.findOneAndDelete({name:name})
        if(!answer) return res.status(400).json({"message":"Raag does not exist "})
        res.send(answer)
    } catch (error) {
        res.status(500).json({
            message:"Unable to update raag from DB"
        })
    }
}
}