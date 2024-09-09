import React, { useState } from 'react';
//import HomePage from './PfizerRideShareMainCode.js'; 

const RideRequestPage = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    pickupAddress: '',
    hospitalAddress: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Ride request submitted successfully!');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px',
      margin: '0 auto',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      borderRadius: '4px',
      border: 'none',
    },
    button: {
      padding: '10px',
      fontSize: '18px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    backButton: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: 'transparent',
      color: '#90caf9',
      border: '1px solid #90caf9',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Request a Ride</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="pickupAddress"
          placeholder="Pickup Address"
          value={formData.pickupAddress}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="hospitalAddress"
          placeholder="Hospital Address"
          value={formData.hospitalAddress}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Submit Request</button>
      </form>
      <button onClick={onBackToHome} style={styles.backButton}>Back to Home</button>
    </div>
  );
};

export default RideRequestPage;