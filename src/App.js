import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    projectManagement: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (event) => {
    setInterests({
      ...interests,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm Richard Otieno</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        I am a civil engineer with several years of experience in AutoCAD, supervision, and project management. I enjoy challenging assignments and work well under pressure. My core competencies include design, management of multi-disciplinary projects from inception to completion, including planning, structural inspections, tender preparations, contracts administration, tendering, and award processes, as well as site supervision. My key strengths are my communication skills and ability to build strong working relationships across departments within the organization. This has helped me develop excellent relationship management and negotiation skills, which have proven to be critical assets when leading multidisciplinary teams.
      </p>
      <p>
        I am also a tech enthusiast and I am currently doing a fullstack developer course at Moringa School.
      </p>

      <div>
        <a href="https://github.com/RICHARD-ODHIAMBO-OTIENO/">GitHub</a>
        <a href="https://www.linkedin.com/in/richard-otieno-7b210b7b/">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Coding
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleInterestChange}
            />
          </label>
          <label>
            Design
            <input
              type="checkbox"
              name="design"
              checked={interests.design}
              onChange={handleInterestChange}
            />
          </label>
          <label>
            Project Management
            <input
              type="checkbox"
              name="projectManagement"
              checked={interests.projectManagement}
              onChange={handleInterestChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you for signing up, {name}!</h3>
          <p>We've received your email address: {email}</p>
          <p>Your interests:</p>
          <ul>
            {Object.entries(interests)
              .filter(([key, value]) => value)
              .map(([key]) => (
                <li key={key}>{key}</li>
              ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;

