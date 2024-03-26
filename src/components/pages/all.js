// NoteList.js
import React, { useState, useEffect } from 'react';

const All = () => {
  const [textNotes, setTextNotes] = useState([]);
  const [photoNotes, setPhotoNotes] = useState([]);

  useEffect(() => {
    const savedTextNotes = JSON.parse(localStorage.getItem('notepad_text')) || [];
    setTextNotes(savedTextNotes);

    const savedPhotoNotes = JSON.parse(localStorage.getItem('notepad_photos')) || [];
    setPhotoNotes(savedPhotoNotes);
  }, []);

  return (
    <div>
      <h2>Text Notes</h2>
      {textNotes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}

      <h2>Photo Notes</h2>
      {photoNotes.map((note) => (
        <div key={note.id}>
          <img src={note.image} alt="Note" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
      ))}
    </div>
  );
};

export default All;
