import React from 'react';
import Button from './Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
export const Prompter  = ({ history , YesPath, NoPath}) => (
    <div>
        <h5>You need to signin to use this service.</h5>
        <Button
            color="blue"
            onClick={() => history.push(YesPath)}
        >Yes, I will.
        </Button>
        <Button
            color="red"
            onClick={() => history.push(NoPath)}
        >
            No, I want to back.
        </Button>
    </div>
);
Prompter.propTypes = {
    YesPath: PropTypes.string.isRequired,
    NoPath: PropTypes.string.isRequired
}
export default withRouter(Prompter);