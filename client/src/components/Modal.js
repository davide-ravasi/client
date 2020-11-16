import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div class="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div class="header">{props.title}</div>
                <div class="content">
                    {props.content}
                </div>
                <div class="actions">
                    {props.actions}
                </div>
            </div>
        </div>
    , document.querySelector('#modal'));
}

export default Modal;