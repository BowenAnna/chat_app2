import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import UserLogOut from "../UserLogOut/UserLogOut";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Nav({ user, setUser }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
       <img className={styles.image} src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1718062316/Chattik%20App/chat_logo_wso8id.png"></img>
      </Link>
      {user ? (
        <>
          <div className={styles.helloDiv}>Hello, {user.name}!{" "}</div>
          <UserLogOut className={styles.links2} user={user} setUser={setUser} />
          </>
      ) : (
        <>
          <Link className={styles.links4} to="/users">
            {/* <button className={styles.signin}>Sign In</button> */}

            <Button variant="warning">Sign In</Button>
          </Link>
        </>
      )}
    </nav>

  );
}