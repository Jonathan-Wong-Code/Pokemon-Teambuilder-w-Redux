import React from 'react';
import { connect } from 'react-redux';
import { startLogin, loginGuest } from './../actions/auth';


const LoginPage = ({ startLogin, loginGuest, history }) => {
  const onLoginClick = () => {
    startLogin();
  };

  const onGuestLoginClick = () => {
    loginGuest();
    history.push('/create');
  };
  
  return (
    <section className='login'>
      <div className='login__buttons'>
        <button onClick={onLoginClick} className='login__button btn'>Login with Google</button>
        <button onClick={onGuestLoginClick} className='login__button btn'>Guest</button>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin : () => dispatch(startLogin()),
  loginGuest : () => dispatch(loginGuest())
});

export default connect(null, mapDispatchToProps)(LoginPage);
