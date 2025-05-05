import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Form from "./components/Form/Form.jsx";
import Notes from "./components/Notes/Notes.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  /* [notes,setNotes] => array destructuring returning two values, 1)the current state(notes) and 2)the funstion that updates the state (setNotes)
  useState(NOTES) => the React hook : initailises the notes state value with NOTES (notes = NOTES). returns a state variable(notes) and a function to update it(setNotes)*/
  const NOTES = [
    // { id: 1, title: "Sample Note", content: "This is a sample note." },
  ];

  const [notes, setNotes] = useState(NOTES);
  const [isModalOpen, setIsModalOpen] = useState(false); //  This is a state that checks if the modal is open and sets it
  const [selectedNote, setSelectedNote] = useState({});
  /*The addNote function is used in child to parent communication in the Form component (child), where it pushes new notes to the notes array above.
 The funstion takes in a note> then accesses the notes array created above> the spreads the existing notes before adding a new note*/
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }

        return note;
      });
      return newArray;
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  const toggleModal = () => {
    // open or close the modal based on previous state - setIsModalOpen
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
}

export default App;
