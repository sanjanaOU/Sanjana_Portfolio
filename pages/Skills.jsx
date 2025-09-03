import React from 'react';
import skillBanner from '../assets/banner.png'; // Make sure this exists

const Skills = () => {
  return (
    <div style={styles.container}>
      <img src={skillBanner} alt="Skills Banner" style={styles.banner} />

      <div style={styles.skillsBox}>
        <p style={styles.subheading}>SKILLS</p>
        <h2 style={styles.heading}>SKILLS</h2>

        <ul style={styles.list}>
          <li><strong style={styles.bold}>Programming:</strong> Java, Python, JavaScript, SQL, R</li>
          <li><strong style={styles.bold}>Web Technologies:</strong> ReactJS, ExpressJS, NodeJS, HTML, CSS, Bootstrap, D3JS</li>
          <li><strong style={styles.bold}>Databases:</strong> MySQL, Mongo DB</li>
          <li><strong style={styles.bold}>Cloud:</strong> AWS(S3,Bedrock,EC2)</li>
          <li><strong style={styles.bold}>Data Analysis and Visualization Tools:</strong> Excel, Pivot Tables, VLOOKUP, pandas, NumPy, matplotlib, seaborn,Tableau, Power BI, Plotly, Matplotlib, Seaborn</li>
          <li><strong style={styles.bold}>Tools & Frameworks:</strong> GIT, Apache Airflow, Adobe XD, Figma, IntelliJ</li>
          <li><strong style={styles.bold}>Specialties:</strong> SDLC, Requirement Analysis, Machine Learning, Data Analysis</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#fff',
    color: '#2c2c2c',
  },
  banner: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '2rem',
  },
  skillsBox: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  subheading: {
    letterSpacing: '5px',
    fontSize: '0.8rem',
    color: '#777',
    marginBottom: '0.2rem',
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    fontFamily: "'Playfair Display', serif", // Optional for stylish look
    marginBottom: '1.5rem',
  },
  list: {
    listStyleType: 'circle',
    paddingLeft: '1.5rem',
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  bold: {
    fontWeight: '600',
    color: '#000',
  }
};

export default Skills;
