import React from 'react'
import styles from './Footer.module.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {

return (
  <MDBFooter className='text-center text-black' style={{ backgroundColor: 'rgb(252, 143, 161)' }}>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='mailto: anna.bowen16@gmail.com' target="_blank" role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/realannabowen/' target="_blank" role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://github.com/BowenAnna' target="_blank" role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgb(252, 143, 161)' }}>
      © 2024 Copyright:&nbsp;
      <a className='text-white' href='https://chattik.netlify.app/'>
        Chattik
      </a>
    </div>
  </MDBFooter>
);
}
