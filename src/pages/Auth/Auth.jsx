import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import styles from "./Auth.module.css";
import { MDBBtn } from "mdb-react-ui-kit";
export default function Auth({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div
    id='intro-example'
    className='p-5 text-center bg-image'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dxh60x8dq/image/upload/v1718146849/Chattik%20App/wp4410721_ltbdgm.jpg')", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center center' }}
  >
        <div className={styles.content}>
          <div className={styles.login}>
              {showLogin ? (
                <LoginForm setUser={setUser} />
              ) : (
                <SignUpForm setUser={setUser} />
              )}
              {showLogin ? (
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0 fs-6">Don't have an account?</p>
                  <MDBBtn
                    outline
                    className="mx-2 p-1"
                    color="warning"
                    text-color="black"
                    rounded
                    onClick={() => setShowLogin(!showLogin)}
                  >
                    Register
                  </MDBBtn>
                </div>
              ) : (
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0 fs-6">Already have an account?</p>
                  <MDBBtn
                    outline
                    className="mx-2 p-1"
                    color="warning"
                    text-color="black"
                    rounded
                    onClick={() => setShowLogin(!showLogin)}
                  >
                    Sign In
                  </MDBBtn>
                </div>
              )}
          </div>
        </div>
    </div>
  );
}
