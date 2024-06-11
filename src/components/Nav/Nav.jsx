import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import UserLogOut from "../UserLogOut/UserLogOut";


export default function Nav({ user, setUser }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
       <img className={styles.image}src="../../../images/chat_logo.png"></img>
      </Link>
      {user ? (
        <>
          <div className={styles.helloDiv}>Hello, {user.name}!{" "}</div>
          <UserLogOut className={styles.links2} user={user} setUser={setUser} />
          </>
      ) : (
        <>
          <Link className={styles.links4} to="/users">
            <button className={styles.signin}>Sign In</button>
          </Link>
        </>
      )}
    </nav>
  );
}