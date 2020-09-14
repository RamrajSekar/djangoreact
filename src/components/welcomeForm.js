import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class welcomeForm extends Component {
    render() {
        return (
            <div>
                <h3>React Welcome Component</h3>
            </div>
        );
    }
}

welcomeForm.propTypes = {
    handle_welcome: PropTypes.func.isRequired
  };
