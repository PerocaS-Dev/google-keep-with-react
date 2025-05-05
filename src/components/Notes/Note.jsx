import React, { useState } from "react";
/* useState is a React method which allows dynamic changes to occur in the variable it is called to. */

const Note = (props) => {
  const { toggleModal, note, deleteNote, setSelectedNote } = props;
  // const [title, setTitle] = useState(note.Title);
  // const [text, setText] = useState(note.Text);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);
  };

  const deleteHandler = (e) => {
    e.stopPropagation(); //fixes the issue of clicking delete and instead opening the form
    deleteNote(note.id);
  };

  const onMouseOverHandler = (event) => {
    setIsMouseOver(true);
  };

  const onMouseOutHandler = (event) => {
    setIsMouseOver(false);
  };

  return (
    <div
      className="note"
      id={props.id}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={noteClickHandler}
    >
      {isMouseOver && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}

      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>
      <div
        className="note-footer"
        style={{ visibility: isMouseOver ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="material-symbols-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
