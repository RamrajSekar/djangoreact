import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SignupForm extends Component {
    render() {
        return (
            <div>
                <h3>React SignUp Component</h3>
            </div>
        );
    }
}

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};