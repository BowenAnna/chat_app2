import { logOut } from '../../utilities/users-service';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function LogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div>
      <button className='btn btn-rounded bg-danger text-white me-2' color='danger' onClick={handleLogOut}>
        Sign Out
      </button>
  </div>
);
}