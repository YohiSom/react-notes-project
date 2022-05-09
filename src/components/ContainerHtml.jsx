import React, { useState } from "react";
import NoteForm from "./Form";
import ModalComponent from "./Modal";
import GridContainer from "./GridContainer";
import Background from "./Background";
import { v4 as uuidv4 } from "uuid";

function ContainerFunc() {
  const [myNotes, setMyNotes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const formAdd = (title, text) => {
    const currentDate = Date().toLocaleString();
    const id = uuidv4();
    const newNote = { text, title, currentDate, id };
    setMyNotes([...myNotes, newNote]);
  };

  const formEdit = (title, text, id) => {
    const currentDate = Date().toLocaleString();
    const selectedIndex = myNotes.findIndex((note) => note.id === id);
    const updatedNotes = [...myNotes];
    const updatedNote = { title, text, id, currentDate };
    updatedNotes.splice(selectedIndex, 1, updatedNote);
    setMyNotes(updatedNotes);
  };

  const deleteNote = (noteIndex) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let myNotesCopy = [...myNotes];
      myNotesCopy.splice(noteIndex, 1);
      setMyNotes(myNotesCopy);
    }
  };

  function modalHandler(index) {
    setSelectedNote(myNotes[index]);
    setModalIsOpen(true);
  }

  function modalOnCancel() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <NoteForm onSubmit={formAdd} buttonText={"Add Note"} />
      <div>
        <GridContainer
          notes={myNotes}
          onDelete={deleteNote}
          onModal={modalHandler}
        />
      </div>
      {selectedNote && modalIsOpen && (
        <ModalComponent onCancelModal={modalOnCancel}>
          <NoteForm
            onSubmit={formEdit}
            buttonText={"Edit Note"}
            note={selectedNote}
            originalTitle={selectedNote && selectedNote.title}
            originalText={selectedNote && selectedNote.text}
            id={selectedNote && selectedNote.id}
          />
        </ModalComponent>
      )}
      {modalIsOpen ? <Background onCancel={modalOnCancel} /> : null}
    </div>
  );
}

export default ContainerFunc;
