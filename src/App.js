import React, {Component} from 'react';
import './App.css';

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

  handleNoteInputChange = (e) => {
    this.setState({
      newNoteInput:e.target.value
    })
  }

  handleAddNoteClick = (e) => {

    e.preventDefault();

    if(this.state.newNoteInput != ''){

      this.state.notes.push({
        id: Date.now(),
        text:this.state.newNoteInput
      });
      this.setState({notes:this.state.notes})
      this.setState({newNoteInput:''})

    }

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
                  this.state.notes.map(function(note){
                    return (
                      <div className="note" key={note.id} onClick={(e) => this.removeNote(note.id)}>
                        <div className="note-body">
                          <i className="far fa-times-circle note-remove"></i>
                          <div className="note-text">
                            {note.text}
                          </div>
                        </div>
                      </div>
                    );
                  },this)
                }

                <div className="note new-note">
                  <form className="note-body">
                      <div className="form-group">
                        <label htmlFor="note-input">New note</label>
                        <input type="text" className="form-control" id="note-input" value={this.state.newNoteInput} onChange={this.handleNoteInputChange}/>
                      </div>
                      <button type="submit" className="btn btn-primary" id="add-note"  onClick={this.handleAddNoteClick}>Add</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      );
  }

}

export default App;
