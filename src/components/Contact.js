import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {

        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Add your form submission logic here (e.g., sending data to the server)
          console.log('Form submitted:', formData);
        };

    return(
        <div className="contact-container">
        <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

        <div>
            {/* <h1>This is Contact us page</h1> */}
            {/* <p>Join Us With:- </p> */}
            <ul className="flex contact-links">
                <li>
                    <Link to="/gitHub">
                        <img className="contact-us-icon" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="gitHub"></img>
                    </Link>
                </li>
                <li>
                    <Link to="/linkedIn">
                        <img className="contact-us-icon" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="linkedIn"></img>
                    </Link>
                </li>
                <li>
                    <Link to="/instagram">
                        <img className="contact-us-icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="instagram"></img>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Contact;