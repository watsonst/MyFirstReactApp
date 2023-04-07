import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(){
     setModalIsOpen(true);
  }

  function closeModalHandler() {
      setModalIsOpen(false);
  }


  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button> 
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo; //Have to export it to be usuable by other components. Start function name with Capital
//deleteHandler is NOT executed on button line, no (). Just points to function. Only want to execute function when button is clicked, not when js evaluates the code at the start
//Get access to current state through 1st element(modalIsOpen), 2nd element(setModalIsOpen) to assign new value- React re-executes, re-evaluates, and displays in browser
//Props are for building reuseable componenets
//State is for changing what we see on the screen dynamically. Adding, removing, changing text, showing/hiding an overlay

