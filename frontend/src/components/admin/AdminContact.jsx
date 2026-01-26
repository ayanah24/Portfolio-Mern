import { useEffect,useState } from "react";
import axios from "axios";

const AdminContact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/contact")
        .then((res) => setContacts(res.data))
        .catch((err) => console.log(err));
    },[]);

const handleDelete = async (id) => {
  if(!window.confirm("Delete this contact message?")) return;
  try{
    await axios.delete(`http://localhost:5000/api/contact/${id}`);
    setContacts((prev)=>prev.filter((c)=>c._id!==id));
  }catch(error){
    console.error("Delete failed",error);
  } 
};

    return(
            <div>
      <h1 className="text-2xl font-semibold mb-6">Contact Messages</h1>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.message}</td>
                 <td className="p-3">
              <button 
              onClick={()=>handleDelete(c._id)}
              className="text-red-400 hover:underline"
              >Delete
              </button>
            </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default AdminContact;