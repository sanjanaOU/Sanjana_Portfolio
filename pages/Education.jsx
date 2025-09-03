import React, { useState } from 'react';

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const educationData = [
    {
      title: 'MASTERS 2023–2025',
      details: (
        <>
          <p><strong>Masters in Computer Science</strong></p>
          <p>University of Oklahoma – Norman, OK</p>
          <p>GPA: 3.9/4.0</p>
        </>
      ),
    },
    {
      title: 'BACHELOR OF TECHNOLOGY 2019–2023',
      details: (
        <>
          <p><strong>Bachelor in Computer Science</strong></p>
          <p>Jawaharlal Nehru Technological University,Hyderabad</p>
          <p>GPA: 8.0/10</p>
        </>
      ),
    },
    {
      title: 'XII (SENIOR SECONDARY) 2017–2019',
      details: (
        <>
          <p><strong>MPC Stream</strong></p>
          <p>Deeksha Junior College</p>
          <p>GPA: 8.8/10</p>
        </>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <p style={styles.subheading}>EDUCATION</p>
      <h2 style={styles.heading}>EDUCATION</h2>

      {educationData.map((edu, index) => (
        <div key={index} style={styles.accordionItem}>
          <div
            style={{
              ...styles.titleBar,
              backgroundColor: openIndex === index ? '#2196F3' : '#f1f1f1',
              color: openIndex === index ? '#fff' : '#333',
            }}
            onClick={() => toggleAccordion(index)}
          >
            <span>{edu.title}</span>
            <span style={styles.toggleIcon}>
              {openIndex === index ? '−' : '+'}
            </span>
          </div>

          {openIndex === index && (
            <div style={styles.detailsBox}>{edu.details}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  subheading: {
    letterSpacing: '5px',
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '2rem',
  },
  accordionItem: {
    marginBottom: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.3rem 2rem',
    fontSize: '1.2rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  toggleIcon: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  detailsBox: {
    padding: '1.3rem 2rem',
    backgroundColor: '#fff',
    color: '#333',
    borderTop: '1px solid #ddd',
    lineHeight: '1.7',
    fontSize: '1rem',
  },
};

export default Education;
