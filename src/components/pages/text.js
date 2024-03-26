import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Text = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ content: '' });
  const navigate = useNavigate();

  // Load the saved notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notepad_text'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Function to handle saving the notes
  const handleSave = () => {
    const currentDate = new Date().toLocaleString();
    const updatedNotes = [...notes, { ...newNote, title: currentDate, id: Date.now() }];
    setNotes(updatedNotes);
    localStorage.setItem('notepad_text', JSON.stringify(updatedNotes));
    setNewNote({ content: '' });
    navigate("/all");
  };
  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  return (
    <div>
      <textarea
        placeholder="Content"
        name="content"
        value={newNote.content}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default Text;
