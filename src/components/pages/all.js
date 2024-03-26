// NoteList.js
import React, { useState, useEffect } from 'react';
import './all.css'; // Import CSS file for styling

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
    <div className="note-list-container">
      <div className="text-notes">
        <h2>Text Notes</h2>
        {textNotes.map((note) => (
          <div key={note.id} className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
      <div className="photo-notes">
        <h2>Photo Notes</h2>
        {photoNotes.map((note) => (
          <div key={note.id} className="note">
            <img src={note.image} alt="Note" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
