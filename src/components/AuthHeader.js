import  React from 'react';
const AuthHeader = ({id}) =>
    <div>
        <h4>
        {id === 'signin' 
            ? 'Sign In'
            : 'Sign Up'
        }
        </h4>
    </div>
;
export default AuthHeader;