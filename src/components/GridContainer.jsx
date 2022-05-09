import React from "react";

function GridContainer(props) {
  function modalOnDelete(event, index) {
    event.stopPropagation();
    props.onDelete(index);
  }
  return (
    <div>
      <div className="grid-container">
        {props.notes.map((note, index) => (
          <div
            className="notes"
            key={note.id}
            onClick={() => props.onModal(index)}
          >
            <div className="date">{note.currentDate}</div>{" "}
            <div className="title">{note.title}</div>
            <div className="note-text">
              {note.text}
              <button
                onClick={(event) => modalOnDelete(event, index)}
                className="deletebtn"
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridContainer;
