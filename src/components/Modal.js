import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    render() {

        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div className={showHideClassName}>
                    {this.props.children}
                    <div className="footer">
                        <button style={{width: '41px',
                            height: '31px',
                            position: 'relative'}}onClick={this.props.onClose}>
                           X
                        </button>
                    </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;