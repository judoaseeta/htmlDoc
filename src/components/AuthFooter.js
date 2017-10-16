import React from 'react';
import { Link } from 'react-router-dom';
const AuthFooter = ({id}) =>
    <div>
        {id === 'signin' 
            ? <p>don't you have a account yet? Go to <Link to="/auth/signup">Sign Up.</Link></p>
            : <p>do you already have a account ? Go to <Link to="/auth/signin">Sign In.</Link></p>
        }
    </div>
;
export default AuthFooter;