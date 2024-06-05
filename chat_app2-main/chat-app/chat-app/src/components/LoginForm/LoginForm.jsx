import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import styles from "./Login.module.css";

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
    <div className={styles.Login}>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* <label>Email:</label> */}

          <input
            style={{ width: "300px", maxWidth: "300px" }}
            type="email"
            name="email"
            placeholder="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <br />

          {/* <label>Password:</label> */}

          <input
            style={{ width: "300px", maxWidth: "300px" }}
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
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
            disabled={loading}
          >
            {loading ? "Logging in..." : "LOG IN"}
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default LoginForm;
