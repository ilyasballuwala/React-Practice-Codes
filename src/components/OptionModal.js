import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( 
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleRemoveModal}
        contentLabel="Selected Option"
    >
        <h2>Selected Option</h2>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleRemoveModal}>OK</button>
    </Modal>       
);

export default OptionModal;