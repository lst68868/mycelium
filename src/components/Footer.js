import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  const user = localStorage.getItem('user');
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(authTokens);

  const handleUserProfile = () => {
    if (isLoggedIn) {
      navigate(`/userprofile/${user}`);
    } else {
      navigate('/signin');
    }
  };

  return (
    <MDBFooter className='text-center bg-slate-900 text-white m-[0]'>
      <MDBContainer className='bg-slate-900 p-4'>
        <section className='mb-4 align-items-center'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='d-flex flex-column align-items-center'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating MyCelium.</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' sm='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Marketplace</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    All NFTs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    PFPs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Art
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Gaming
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Music
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Photography
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Memberships
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Generative art PFP
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>My Account</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a onClick={handleUserProfile} className='text-white'>
                    Profile
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Favorites
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    My Collections
                  </a>
                </li>
                <li>
                  <Link to='/createNFT' className='text-white'>
                    Create
                  </Link>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Settings
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Learn</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    What is an NFT?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    How to buy an NFT?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    What are NFT drops?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    How to sell an NFT using MyCelium
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    How to create an NFT on MyCelium
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    What is a crypto wallet?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    What is cryptocurrency?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    What are blockchain gas fees?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    What is a blockchain?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    What is web3?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    How to stay protected in web3
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/about' className='text-white'>
                    About
                  </Link>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Our blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Join our team!
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 bg-black'>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MyCelium.com
        </a>
      </div>
    </MDBFooter>
  );
}
