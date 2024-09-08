import React from 'react';
import tashaImage from './tasha.png';
const CancerCareConnect = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '25px',
    },
    icon: {
      width: '48px',
      height: '48px',
      margin: '0 16px',
    },
    arrow: {
      fontSize: '24px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center',
    },
    purpose: {
      textAlign: 'center',
      marginBottom: '32px',
    },
    testimonials: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '32px',
    },
    testimonial: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    profilePic: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
    },
    quote: {
      fontStyle: 'italic',
      color: '#90caf9',
    },
    footer: {
      marginTop: 'auto',
    },
    footerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '16px',
    },
    button: {
      flex: 1,
      padding: '8px 16px',
      border: '1px solid #90caf9',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      color: '#90caf9',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.header}>
          <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
            <circle cx="7" cy="17" r="2"></circle>
            <path d="M9 17h6"></path>
            <circle cx="17" cy="17" r="2"></circle>
          </svg>
          <span style={styles.arrow}>&rarr;</span>
          <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
            <path d="m9 22 3-3 3 3"></path>
            <path d="M8 10h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M16 10h.01"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 14h.01"></path>
          </svg>
        </div>

        <h1 style={styles.title}>
          Welcome to Cancer Care Connect.
        </h1>

        <p style={styles.purpose}>
          Our purpose is to bridge the transportation gap
          for cancer patients in rural and remote areas,
          ensuring they have reliable access to screening
          and treatment.
        </p>

        <div style={styles.testimonials}>
          <div style={styles.testimonial}>
    
            <img src={tashaImage} alt="Tasha" style={styles.profilePic} />
            <p style={styles.quote}>
              "Cancer Care Connect made be realize how accessible heathcare was" - Tasha
            </p>
          </div>
          <div style={styles.testimonial}>
            <img src="/api/placeholder/60/60" alt="Michael" style={styles.profilePic} />
            <p style={styles.quote}>
              "I struggled to find rides, but thanks to Cancer Care connect, I can feel at ease." - Michael
            </p>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <h2 style={styles.footerTitle}>I am a</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>
            Patient
          </button>
          <button style={styles.button}>
            Volunteer Driver
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancerCareConnect;