import { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

   
    formData.append("access_key", "4a159935-3ed9-450e-8d5b-4a3d22624dd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-section" id="Contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-container">
        
     
        <div className="contact-info">
          <h3>Let's talk!</h3>
          <p>
            I'm currently looking for new opportunities and internships. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>sujitbhojrao665@gmail.com</span>
          </div>
          
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>

     
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" className="contact-input" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" className="contact-input" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" className="contact-textarea" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message <FaPaperPlane />
          </button>

          {result && <div className="success-message">{result}</div>}
        </form>

      </div>
    </section>
  );
}