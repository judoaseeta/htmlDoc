import React from 'react';
import PropTypes from 'prop-types';
const AuthPanel = ({type, changeRoute}) => (
    <div>
        <button
            onClick={(e) => changeRoute('signup')}
        >testing</button>
    </div>
);
AuthPanel.propTypes = {
    type: PropTypes.string,
    changeRoute: PropTypes.func.isRequired
}
export default AuthPanel