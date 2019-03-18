import React from 'react';
import './../../styles/components/ConfirmSave.css';

class ConfirmSave extends React.Component {
  constructor() {
    super();

    this.closeBtn = React.createRef();
  }

  componentDidMount() {
    this.closeBtn.current.focus();
  }
  
  render() {
    return (
      <div className='modal__background'>
        <div className='confirm-save__modal'>
          <p>Saved <span className='confirm-save__name'>{this.props.pokemon.name}</span></p>
          <button 
            onClick={this.props.handleToggleSaveModal} 
            className='btn confirm-save__btn'
            ref={this.closeBtn}
          >
          Close
          </button>
        </div>
      </div>
    );
  }
};

// const ConfirmSave = ({ pokemon, handleToggleSaveModal }) => {
//   return (
//     <div className='modal__background'>
//       <div className='confirm-save__modal'>
//         <p>Saved <span className='confirm-save__name'>{pokemon.name}</span></p>
//         <button onClick={handleToggleSaveModal} className='btn confirm-save__btn'>Close</button>
//       </div>
//     </div>
    
//   );
// };

export default ConfirmSave;
