import { useState} from "react";
import axios from "axios";


const Contact=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const[loading,setLoading]=useState(false);
    const[successMsg,setSuccessMsg]=useState("");
    const[errorMsg, setErrorMsg]=useState("");

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        });
    };
    const handleSubmit= async (e)=>{ 
        e.preventDefault();
       // console.log('Form Data Submitted:', formData);
        setLoading(true);
        setSuccessMsg("");
        setErrorMsg("");

     try{
        const res=await axios.post("http://localhost:5000/api/contact",formData);
        setSuccessMsg(res.data.message);
        setFormData({
            name:"",
            email:"",
            message:""
        }); 
       } catch(error){
        console.error('Error submitting form:', error);
        setErrorMsg('Failed to send message');
       }finally{
        setLoading(false);
       }
    };

    return(
        <section className="py-20 px-4 bg-gray-50 ">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
        <form 
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
        >
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
            <input
            className="w-full mb-4 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
            ></input>
            <textarea
            className="w-full mb-4 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
            > </textarea>

            
                    {/* Success / Error Messages */}
        {successMsg && (
          <p className="text-green-600 mb-3 text-sm">
            {successMsg}
          </p>
        )}

        {errorMsg && (
          <p className="text-red-600 mb-3 text-sm">
            {errorMsg}
          </p>
        )}


        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-sky-600 hover:bg-sky-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
</form>

<div className="mt-6 text-center text-sm text-gray-600">
  <p>Email: <a href="mailto:ayan@email.com" className="text-blue-600">ayan@email.com</a></p>

  <div className="flex justify-center gap-4 mt-2">
    <a href="https://github.com/ayanah24" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/ayan-ahmad-464528214/" target="_blank">LinkedIn</a>
  </div>
</div>
        </section>
    );
};

export default Contact;

