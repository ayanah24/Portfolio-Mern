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
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default AdminContact;