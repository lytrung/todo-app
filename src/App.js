import React, {Component} from 'react';
import './App.css';
import NewNoteForm from './newNoteForm.js';
import Note from './note.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [
        {
          id:1,
          text: 'Watch youtube'
        },
        {
          id:2,
          text: 'Cook dinner'
        },
        {
          id:3,
          text: 'Do react'
        },
        {
          id:4,
          text: 'Do more react'
        }
      ],
      newNoteInput:''
    };
  }

  addNote = (note) => {
    this.state.notes.push(note);
    this.setState({notes:this.state.notes})
  }

  removeNote = (nodeId) => {
    var filtered = this.state.notes.filter(function(item) {
         return item.id !== nodeId
    });
    this.setState({notes:filtered})
  }

  render(){
      return (
          <div className="wrap">
            <div className="container">
              <div className="notes">
                {
                  this.state.notes.map((note) => {

                    console.log(this);
                    return (
                      <Note key={note.id} {...note} />
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
