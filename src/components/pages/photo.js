import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Photo = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ image: null });
  const navigate = useNavigate();

  // Load the saved notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notepad_photos'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Function to handle saving the notes
  const handleSave = () => {
    const updatedNotes = [...notes, { ...newNote, id: Date.now() }];
    setNotes(updatedNotes);
    localStorage.setItem('notepad_photos', JSON.stringify(updatedNotes));
    setNewNote({ image: null });
    navigate("/all");
  };

  // Function to handle changes in the input fields
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewNote({
        ...newNote,
        image: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <br />
      {newNote.image && (
        <img src={newNote.image} alt="Uploaded Note" style={{ maxWidth: '300px', maxHeight: '300px' }} />
      )}
      <br />
      <button onClick={handleSave}>Save Note</button>
      <br />
    </div>
  );
};

export default Photo;
