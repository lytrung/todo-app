import React, {Component} from 'react';

class NewNoteForm extends Component {

  constructor(props){
    super(props);
    this.state = {
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

      this.props.addNote({
        id: Date.now(),
        text:this.state.newNoteInput
      });
      this.setState({newNoteInput:''})

    }

  }

  render(){
      return (
        <div className="note new-note">
          <form className="note-body">
              <div className="form-group">
                <label htmlFor="note-input">New note</label>
                <input type="text" className="form-control" id="note-input" value={this.state.newNoteInput} onChange={this.handleNoteInputChange}/>
              </div>
              <button type="submit" className="btn btn-primary" id="add-note"  onClick={this.handleAddNoteClick}>Add</button>
          </form>
        </div>
      );
  }

}

export default NewNoteForm;
