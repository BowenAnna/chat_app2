import styles from './Home.module.css'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
    <div className={styles.group}>
      <h1 className={styles.h1}>Welcome to The Chat App</h1>  
      <p>In order to proceede, please Login In or Sign Up below:</p>
      <button> Login</button> 
      <button>Sign Up</button>
      </div>
    </main>
  );
}