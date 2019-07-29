import React, {Component} from 'react';
import './App.css';
import NewNoteForm from './newNoteForm.js';
import Note from './note.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [
        // {
        //   id:1,
        //   text: 'Watch youtube'
        // },
        // {
        //   id:2,
        //   text: 'Cook dinner'
        // },
        // {
        //   id:3,
        //   text: 'Do react'
        // },
        // {
        //   id:4,
        //   text: 'Do more react'
        // }
      ],
      newNoteInput:''
    };
  }

  addNote = (note) => {
    this.state.notes.push(note);
    this.setState({notes:this.state.notes})
  }

  removeNote = (noteId) => {
    var filtered = this.state.notes.filter(function(item) {
         return item.id !== noteId
    });
    this.setState({notes:filtered})
  }

  updateNote = (note) => {
    var notes = this.state.notes;
    var noteIndex = notes.findIndex(function(item){
      return item.id == note.id
    });

    notes[noteIndex].text = note.text;

    this.setState({notes})
  }

  render(){
      return (
          <div className="wrap">
            <div className="container">
              <div className="notes">
                {
                  this.state.notes.map((note) => {

                    var noteProps = {
                      ...note,
                      removeNote:this.removeNote,
                      updateNote:this.updateNote,
                      key:note.id
                    }
                    return (
                      <Note {...noteProps}/>
                    );
                  })
                }

                <NewNoteForm addNote={this.addNote} />
              </div>
            </div>
          </div>
      );
  }

}

export default App;
