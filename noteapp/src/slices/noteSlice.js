import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    editNote: (state, action) => {
        const { id, newText, newCategory } = action.payload;
        const updatedNotes = state.map(note => {
          if (note.id === id) {
            // Preserve the existing "category" field and update the "text" field
            return { ...note, text: newText, category: newCategory };
          }
          return note;
        });
        return updatedNotes;
      },
    deleteNote: (state, action) => {
      
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote,editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
