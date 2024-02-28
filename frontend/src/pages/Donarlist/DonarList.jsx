import  { useState, useEffect } from 'react';
import axios from 'axios';
import './DonarList.css'; 

function DonarList() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch the list of donors from the backend when the component mounts
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:3000/donors');
      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors:', error);
    }
  };

  return (
    <div className="donar-list-container">
      <h2>Donor List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.email}</td>
              <td>{donor.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonarList;
