import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import About from '../About/About';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dxh60x8dq/image/upload/v1718146849/Chattik%20App/wp4410721_ltbdgm.jpg')", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center center' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(355, 355, 355, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-warning'>
              <h1 className='mb-3'>Chat with your friends using Chattik</h1>
              <h5 className='mb-4'>Best &amp; free chat app</h5>
             
                <Link to={'/about'} element={<About/>}> <MDBBtn
                className="me-1"
                color='warning'
                tag="a"
                rounded
                size="lg"
                rel="nofollow"
              >About</MDBBtn></Link>
                
              
            <Link to={'/users'}>  <MDBBtn
                className="me-1"
                color='warning'
                tag="a"
                rounded
                size="lg"
              >Sign Up</MDBBtn></Link>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
