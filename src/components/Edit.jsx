import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/action';

const Edit = ({task}) => {
  const [text, setText] = useState(task.action)
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const editedOne={
      id:task.id,action:text,isDone:task.isDone
    }
    dispatch (handleEdit(editedOne))
    closeModal()

  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div><button onClick={openModal}>Edit</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <input type="text" value={text}  onChange={e=>setText(e.target.value)}/>
        <button type='submit'>confirm</button>
        <button onClick={closeModal} >cancel</button>
      </form>
    </Modal></div>
  )
}

export default Edit