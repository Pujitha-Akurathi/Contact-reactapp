import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import api from '../api/contacts';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";


function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm,setSearchTerm]=useState("");
 const [searchResults,setSearchResults]=useState([]);
  //RetrieveContacts
  const retrieveContacts = async () => {
  const response = await api.get("/contacts");
  return response.data;
};

  const addContactHandler = async(contact) => {
    console.log(contact);
    const request={
      id: uuidv4(),
      ...contact,
    }
    const response= await api.post("/contacts",request);
    console.log(response);
    setContacts([...contacts,response.data]);
  };

const updateContactHandler = async(contact) => {
  console.log("Updating contact with ID:", contact.id); // ✅ Add this
  try {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((c) => (c.id === id ? response.data : c))
    );
  } catch (error) {
    console.error("Failed to update contact:", error);
  }
};



  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const searchHandler=(searchTerm)=>{
setSearchTerm(searchTerm);
if(searchTerm!==""){
  const newContactList=contacts.filter((contact)=>{
    return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
  });
  setSearchResults(newContactList);
}
else{
  setSearchResults(contacts);
}
  };

  useEffect(() => {
   // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   // if (retrieveContacts) setContacts(retrieveContacts);
   const getAllContacts= async()=>{
    const allContacts=await retrieveContacts();
    if(allContacts) setContacts(allContacts);
   };
   getAllContacts();
  }, []);

  useEffect(() => {
   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length<1 ? contacts: searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact addContactHandler={addContactHandler} />
            }
          />
          <Route
  path="/edit"
  element={<EditContact updateContactHandler={updateContactHandler} />}
/>

          <Route
            path="/contact/:id"
            element={<ContactDetail />}
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
