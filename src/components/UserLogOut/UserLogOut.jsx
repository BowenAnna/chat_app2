import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';

export default function LogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.UserLogOut}>
    {/* <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div> */}
    <button className={styles.button} style={{margin:"0",  borderRadius:"30px", marginRight:"20px", backgroundColor: "var(--red", color:"var(--base-color)", border:"none", fontSize:"18px"}}onClick={handleLogOut}>Log Out</button>
  </div>
);
}