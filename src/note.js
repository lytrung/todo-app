import React, {Component} from 'react';

class Note extends Component {

  constructor(props){
    super(props);
    this.state = {
      text:props.text,
      beingEdited:false,
    };

    this.editedNoteInput = React.createRef();
  }

  handleNoteTextDoubleClick = () => {
    this.setState({beingEdited:true});
  }

  handleEditedNoteInputChange = (e) => {
    this.setState({
      text:e.target.value
    })
  }

  handleEditedNoteInputBlur = (e) => {
    this.setState({beingEdited:false});
  }

  componentDidUpdate(prevProps) {
   
    if (this.state.beingEdited) {
      this.editedNoteInput.current.focus();
    }
  }
  render(){
      return (
        <div className="note">
          {
            this.state.beingEdited ? (
                <div className="note-body">
                  <div className="form-group">
                    <input type="text" ref={this.editedNoteInput} className="form-control" id="edited-note-input" value={this.state.text} onChange={this.handleEditedNoteInputChange} onBlur={this.handleEditedNoteInputBlur}/>
                  </div>
                  <button type="submit" className="btn btn-primary" id="update-note">Update</button>
                </div>
              ) : (
                <div className="note-body">
                  <i className="far fa-times-circle note-remove"></i>
                  <div className="note-text" onDoubleClick={this.handleNoteTextDoubleClick}>
                    {this.props.text}
                  </div>
                </div>

              )
          }
        </div>
      );
  }

}

export default Note;


{/*<div className="note" key={note.id} onClick={(e) => this.removeNote(note.id)}>
          <div className="note-body">
            <i className="far fa-times-circle note-remove"></i>
            <div className="note-text">
              {note.text}
            </div>
          </div>
        </div>*/}