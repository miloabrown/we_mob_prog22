import React from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import noteService from "./services/notes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: "",
      showAll: true,
      error: null,
    };
  }
  componentDidMount() {
    noteService.getAll().then((response) => {
      this.setState({ notes: response });
    });
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  toggleImportanceOf = (id) => {
    return () => {
      const note = this.state.notes.find((n) => n.id === id);
      const changedNote = { ...note, important: !note.important };

      noteService
        .update(id, changedNote)
        .then((changedNote) => {
          const notes = this.state.notes.filter((n) => n.id !== id);
          this.setState({
            notes: notes.concat(changedNote),
          });
        })
        .catch((error) => {
          this.setState({
            error: `muistiinpano "${note.content}" on jo valitettavasti poistettu palvelimelta`,
            notes: this.state.notes.filter((n) => n.id !== id),
          });
          setTimeout(() => {
            this.setState({ error: null });
          }, 5000);
        });
    };
  };

  handleNoteChange = (event) => {
    this.setState({ newNote: event.target.value });
  };

  addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    };
    noteService.create(noteObject).then((newNote) => {
      this.setState({
        notes: this.state.notes.concat(newNote),
        newNote: "",
      });
    });
  };

  render = () => {
    const notesToShow = this.state.showAll
      ? this.state.notes
      : this.state.notes.filter((note) => note.important === true);

    const label = this.state.showAll ? "Important" : "All";

    return (
      <div>
        <h1>Notes</h1>
        <Notification message={this.state.error} />
        <div>
          <button onClick={this.toggleVisible}>Show {label} </button>
        </div>

        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={this.toggleImportanceOf(note.id)}
            />
          ))}
        </ul>
        <form onSubmit={this.addNote}>
          <input value={this.state.newNote} onChange={this.handleNoteChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };
}
export default App;
