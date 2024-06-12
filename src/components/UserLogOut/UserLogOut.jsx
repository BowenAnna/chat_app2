import { logOut } from '../../utilities/users-service';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function LogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div>
      <MDBBtn className='mx-2 rounded' rounded color='danger' onClick={handleLogOut}>
        Sign Out
      </MDBBtn>
  </div>
);
}