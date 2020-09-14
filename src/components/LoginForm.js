import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {} from 'bootstrap'

export default class LoginForm extends Component {
    signupClick() {
        this.props.history.push('/sign-up');
    }
    loginClick() {
        this.props.history.push('/welcome');
    }
    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block login" onClick={() => this.loginClick()}>Login</button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block signup" onClick={() => this.signupClick()}>Sign-up</button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};