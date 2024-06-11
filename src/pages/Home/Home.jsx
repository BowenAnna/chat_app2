import styles from './Home.module.css'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    // <main>
    <div className={styles.group}>
      <h1 className={styles.h1}>Welcome to Chattik</h1>  
      {/* <Link to="/login"><button> Login</button> </Link>
      <Link to="/signup"><button> Sign Up</button> </Link> */}
      </div>
  );
}