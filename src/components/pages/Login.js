import React from 'react';
import './Login.css';
// export default function Signup() {
//   const headingStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   };

//   return <h1 style={headingStyle}>Signup</h1>;
// }


function Login ()  {
  return(
    <>
      <section className='section'>
            <div class="login-box">
                <form action="">
                    <h2>Login</h2>
                    <div class="input-box">
                        <span class="icon">
                            {/* <!-- <ion-icon name="mail"></ion-icon> --> */}
                        </span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            {/* <!-- <ion-icon name="lock-closed"></ion-icon> --> */}
                        </span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" /> Remember me </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div class="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </section>
    </>
  );
}

export default Login;