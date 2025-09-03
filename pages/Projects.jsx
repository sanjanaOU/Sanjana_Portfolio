import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Datasaurus Visualization system",
      description:
        "This is an application to study how datasets with same statistical measures vary visually.",
      image: "public/images/datasaurus.png",
      link: "https://datasaurusvizsystem.netlify.app/",
    },
    {
      title: "Visitor Analysis Dashboard",
      description:
        "Analysis of visitors to Draco National Park based on historical data.",
      image: "public/images/visitor.png",
      link: "https://app.netlify.com/projects/bright-frangollo-6d9086/overview",
    },
    {
      title: "OU Chatbot",
      description: "An intelligent chatbot to explore OU campus information.",
      image: "public/images/chatbot.png",
      link: "https://github.com/sanjanaOU/OU-chatbot-frontend",
    },
    {
      title: "Heart Disease Dashboard",
      description: "A system to predict heart disease using medical data.",
      image: "public/images/heart.png",
      link: "https://github.com/sanjanaOU/heart-disease",
    },
    {
      title: "Invoice Analytics",
      description:
        "Retail invoice analytics dashboard across four countries.",
      image: "public/images/invoice.png",
      link: "https://github.com/sanjanaOU/InvoiceAnalyticsDashboard",
    },
    {
      title: "Air Quality Explorer",
      description:
        "Interactive dashboard for pollutant comparison in Italy.",
      image: "public/images/airpollution.png",
      link: "https://air-dashboard-updated.vercel.app/",
    },
  ];

  return (
    <div className="projects-section">
      <div className="projects-header">
        <p className="projects-subtitle">PROJECTS</p>
        <h2 className="projects-title">PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="card"
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-section {
          padding: 60px 80px;
          background: #fff;
          font-family: 'Segoe UI', sans-serif;
        }

        .projects-header {
          text-align: left;
          margin-bottom: 40px;
        }

        .projects-subtitle {
          font-size: 12px;
          letter-spacing: 6px;
          color: #888;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .projects-title {
          font-size: 36px;
          font-weight: 700;
          color: #000;
          margin: 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .card {
          position: relative;
          height: 340px;
          border-radius: 18px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.03);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          transition: opacity 0.3s ease;
          color: white;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .overlay h3 {
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .overlay p {
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-section {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
