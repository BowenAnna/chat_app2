//SignUpForm.jsx

import { useState } from "react";
import { signUp } from "../../utilities/users-service.jsx";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
// imports the useState hook from the 'react' package

export const SignUpForm = ({ setUser }) => {
  //functional component declaration
  const [formData, setFormData] = useState({
    //using useState hook from 'react' to set the formData using a setFormData function; also initializes formData as object with form fields;
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.confirm,
          },
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user); // Adjust according to the response structure
      } else {
        setError(data.errors.join(', '));
      }
    } catch (error) {
      setError('Sign Up Failed - Try Again');
    }
  };
  

  const handleFormChange = (event) => {
    //this function is called when form input changes
    setFormData({ ...formData, [event.target.name]: event.target.value });
    //this updates the formData state using spread operator and updating field corresponding to change input
  };

  const disable = formData.password !== formData.confirm;
  return (
     <div className="d-flex flex-column mt-5">
      <div className="text-center">
        <img
          src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1718062316/Chattik%20App/chat_logo_wso8id.png"
          style={{ width: "60px" }}
          alt="logo"
        />
        <h4 className="mt-1 mb-5 pb-1">Chattik</h4>
      </div>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <p>Please login to your account</p>
        <MDBInput
          wrapperClass="mb-4"
          label="Your Name"
          size="lg"
          id="form1"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Your Email"
          size="lg"
          id="form2"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          size="lg"
          id="form3"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Repeat your password"
          size="lg"
          id="form4"
          type="password"
          name="confirm"
          placeholder="Confirm"
          value={formData.confirm}
          onChange={handleFormChange}
          required
        />
        <MDBBtn
          className="mb-4 w-100 gradient-custom-4"
          size="md"
          color="warning"
          type="submit"
          disabled={disable}
        >
          Register
        </MDBBtn>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default SignUpForm;
