import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import {
  MDBBtn,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

const LoginForm = ({ setUser }) => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the form is already being submitted
    if (loading) {
      return;
    }

    try {
      // Set loading state to true
      setLoading(true);

      const user = await usersService.logIn(credentials);
      setUser(user);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(`Login Failed: ${error.response.data.message}`);
      } else {
        setError("Login Failed - Try Again");
      }
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <MDBCol className="mt-5">
      <div className="d-flex flex-column">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1718062316/Chattik%20App/chat_logo_wso8id.png"
            style={{ width: "60px" }}
            alt="logo"
          />
          <h4 className="mt-1 mb-5 pb-1">Chattik</h4>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <p>Please login to your account</p>

        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <div className="text-center pt-1 mb-5 pb-1">
          <MDBBtn
            className="w-100 gradient-custom-2 p-1"
            style={{ backgroundColor: "orange" }} type="submit"
            disabled={loading}
          >
           {loading ? "Logging in..." : "SIGN IN"}
          </MDBBtn>
        </div>
        </form>
        <p className="error-message">&nbsp;{error}</p>
      </div>
     </MDBCol>
  );
};

export default LoginForm;
