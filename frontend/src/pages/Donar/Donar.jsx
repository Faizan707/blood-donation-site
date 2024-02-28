import  { useState } from 'react';
import axios from 'axios';
import './Donar.css'; 

function Donar() {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/donors', { name, bloodGroup, email, address });
      setName('');
      setBloodGroup('');
      setEmail('');
      setAddress('');
      alert('Donor added successfully!');
    } catch (error) {
      console.error('Error adding donor:', error);
      alert('Error adding donor. Please try again.');
    }
  };

  return (
    <div className="donar-container">
      <h2>Add Donor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Blood Group:</label>
          <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Donar;
