import React from 'react';
import '../App.css';
class Modal extends React.Component
{
  render()
  {
  return this.props.show===true?
  (
  <div className="backdropStyle">
    <div className="modalStyle">
      {this.props.children}
      <div><button className="primary deleteButton" onClick={this.onClose}>
        Close</button></div>
    </div>

  </div>
):null;
  }

  onClose=()=>
  {
    this.props.onClose();
  }

}

export default Modal;
