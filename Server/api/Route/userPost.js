const express= require('express')

const router = express.Router();
app.post('/userPost' , async (req , res)=>{
  try{
   const{image, title, category, description, cost, editorName} = req.body
   if(!image || !title || !category || !description || !cost || !editorName){
      return res.status(400).json ({message: "All fields are required"})
   }

   const newUser= new User({
      image,
      title,
      category,
      description,
      cost,
      editorName
   })
   await newUser.save()
   res.status(201).json ({message: "Created Successfully"})
}catch(error){
  console.log("error fetching data:", error)
  res.status(500).json({message: "Internal Server error"})
}
})

module.exports=router;