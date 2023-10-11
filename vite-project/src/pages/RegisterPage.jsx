import { Link } from "react-router-dom";
import axios from "axios";
import  { useState } from "react";
import Modal from "react-modal"; // Import Modal

Modal.setAppElement("#root"); // Set the root app element for accessibility

export default function RegisterPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email.match(emailRegex)) {
      // Display an error message in a popup
      setErrorMessage("Please enter a valid email address.");
      setModalOpen(true);
      return;
    }

  
      await axios.post('/register', {
        name,
        email,
        password
      });

    
 
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-4">REGISTER</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="your name here" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="your@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
          <button type="submit" className="primary">
            Register
          </button>
          <div className="text center py-2 ml-20 text-gray-500">
            Already a member?
            <Link className="underline text-black" to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>

      {/* Modal to display error message */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Error Modal"
      >
        <h2>Error</h2>
        <p>{errorMessage}</p>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
