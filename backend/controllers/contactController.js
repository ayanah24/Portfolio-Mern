import Contact from '../models/contact.js';
export const createContact=async(req,res)=>{
    try{
        const {name,email,message}=req.body;

        if(!name || !email || !message){
            return res.status(400).json({message:"All fields are required"});
        }
        
        const contact=await Contact.create({
            name,
            email,
            message
        });
        res.status(201).json({
            message:"message received successfully",
            contact
        });
    }catch(error){
        res.status(500).json({message:"Server Error"
        });
    }

};