import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ModalWrapper.scss';
const modalRoot = document.getElementById('modalRoot');
class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }
  
    componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }

    render() {
      const ModalCloseButton = (ModalSwitcher) => 
        ModalSwitcher 
            ? <button
                className="modalWrapper_button"
                onClick={ModalSwitcher}
            >X</button>
            : null;
      const {isModalOn, ModalSwitcher} = this.props;
      return ReactDOM.createPortal(
        <div
        className={`modalWrapper_container ${isModalOn ? 'on' : null}`}
      >   
        {ModalCloseButton(ModalSwitcher)}
        <div
            className="modalWrapper_children"
        >
            {this.props.children(this.props)}
        </div>
    </div>,
        this.el,
      );
    }
}
export default Modal;