import React,{useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList=(props)=>{
    console.log(props);
    const inputel=useRef("");
    const deleteContactHandler =(id)=>{
        props.getContactId(id);
    };
   
    const renderContactList=props.contacts.map((contact) => {
return (
    <ContactCard contact={contact}clickHandler={deleteContactHandler} key={contact.id}/>
    );
    });

const getSearchterm=()=>{
    props.searchKeyword(inputel.current.value);
};

    return(<div className="main">
  <div className="contact-header">
    <h2>Contact List</h2>
    <div className="ui search">
        <div className="ui icon input">
            <input 
            ref={inputel} type="text" placeholder="search Contacts" className="prompt" value={props.term} 
            onChange={getSearchterm} style={{ width: "300px" }}/>
            <i className="search icon"></i>
        </div>
    </div>
    <Link to="/add">
      <button className="ui button blue">Add Contact</button>
    </Link>
    
  </div>
  <div className="ui celled list">{renderContactList.length >0 ? renderContactList:"No Contacts available"}</div>
</div>


    );
};
export default ContactList;