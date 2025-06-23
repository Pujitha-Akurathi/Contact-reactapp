import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function EditContact({ updateContactHandler }) {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get contact from route state
  const { id, name: initName, email: initEmail } = location.state.contact;

  // ✅ Set initial values using contact info
  const [name, setName] = useState(initName);
  const [email, setEmail] = useState(initEmail);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are required!");
      return;
    }

    // ✅ Send the id as well
    updateContactHandler({ id, name, email });
    navigate("/");
  };

  return (
    <div className='ui main'>
      <h2>Edit Contact</h2>
      <form className='ui form' onSubmit={update}>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='ui button blue'>Update</button>
      </form>
    </div>
  );
}

export default EditContact;
