import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import styles from "./Auth.module.css";
export default function Auth({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <div className={styles.container} style={{ marginTop: "40px" }}>
        <div className={styles.content} style={{ marginTop: "50px" }}>
          <div className={styles.login}>
            <div className={styles.header}>
              <h1
                style={{
                  color: "rgb(173, 131, 26)",
                  fontSize: "40px",
                  fontFamily:
                    "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                  textAlign: "center",
                  marginBottom: "0px",
                }}
              >
                Welcome to Chat App
              </h1>
            </div>
            <div className={styles.main}>
              {showLogin ? (
                <LoginForm setUser={setUser} />
              ) : (
                <SignUpForm setUser={setUser} />
              )}
              <h1
                role="button"
                tabIndex="0"
                style={{
                  color: "rgb(33, 88, 33)",
                  fontSize: "8px",
                  textAlign: "center",
                }}
                onClick={() => setShowLogin(!showLogin)}
              >
                {showLogin ? (
                  <h1
                    role="button"
                    tabIndex="0"
                    onClick={() => setShowLogin(!showLogin)}
                    style={{
                      color: "rgb(33, 88, 33)",
                      fontSize: "18px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    New User? Click{" "}
                    <span style={{ color: "rgb(0, 200, 0)" }}>here</span> to
                    sign up
                  </h1>
                ) : (
                  <h1
                    role="button"
                    tabIndex="0"
                    onClick={() => setShowLogin(!showLogin)}
                    style={{
                      color: "rgb(33, 88, 33)",
                      fontSize: "18px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    Already have an account? Click{" "}
                    <span style={{ color: "rgb(199, 9,9)" }}>here</span> to log
                    in
                  </h1>
                )}
              </h1>
            </div>
          </div>
          <div className={styles.img}>
          </div>
        </div>
      </div>
    </div>
  );
}