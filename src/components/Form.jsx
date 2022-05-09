import React, { useState } from "react";

const NoteForm = ({
  onSubmit,
  buttonText,
  originalText,
  originalTitle,
  id,
}) => {
  const [text, setText] = useState(originalText || "");
  const [title, setTitle] = useState(originalTitle || "");
  const onTextChange = (e) => setText(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onClick = () => {
    onSubmit(title, text, id);
    setText("");
    setTitle("");
  };

  return (
    <div className="container-card">
      <textarea
        className="title-container"
        placeholder="add title"
        value={title}
        onChange={onTitleChange}
      ></textarea>
      <textarea
        className="note-container"
        value={text}
        placeholder="add note"
        onChange={onTextChange}
      ></textarea>
      <button
        className="add-button"
        onClick={onClick}
        disabled={text ? false : true}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NoteForm;
