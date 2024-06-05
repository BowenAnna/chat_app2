import { useState } from "react";
import { signUp } from "../../utilities/users-service.js";
import styles from "./SignUp.module.css";
// imports the useState hook from the 'react' package

export const SignUpForm = ({ setUser }) => {
  //functional component declaration
  const [formData, setFormData] = useState({
    //using useState hook from 'react' to setthe formData using a setFormData function; also initializes formData as object with form fields;
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    //this function called when form submitted
    event.preventDefault();
    //prevents default refresh after form submit;
    try {
      const userData = { ...formData };
      delete userData.confirm;
      // const user = {
      //   name:formData.name,
      //   email: formData.email,
      //   password: formData.password
      // }

      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(userData);
      setUser(user);
    } catch (error) {
      setError("Sign Up Failed -Try Again");
    }
  };

  const handleFormChange = (event) => {
    //this function is called when form input changes
    setFormData({ ...formData, [event.target.name]: event.target.value });
    //this updates the formData state using spread operator and updating field corresponding to change input
  };

  // useEffect(()=> {
  //   console.log(formData);
  // }, [formData]);

  const disable = formData.password !== formData.confirm;

  return (
    <div className={styles.SignUp}>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          {/* <label>Name</label> */}
          <input
            style={{ width: "300px", maxWidth: "300px" }}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <br />

          {/* <label>Email</label> */}
          <input
            style={{ width: "300px", maxWidth: "300px" }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />

          <br />
          {/* <label>Password</label> */}
          <input
            style={{ width: "300px", maxWidth: "300px" }}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleFormChange}
            required
          />

          <br />
          {/* <label>Confirm</label> */}
          <input
            style={{ width: "300px", maxWidth: "300px" }}
            type="password"
            name="confirm"
            placeholder="Confirm"
            value={formData.confirm}
            onChange={handleFormChange}
            required
          />
          <br />
          <button
            style={{
              width: "300px",
              maxWidth: "300px",
              backgroundColor: "--golden",
              color: "#014670",
              fontSize: "20px",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            }}
            type="submit"
            disabled={disable}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default SignUpForm;
