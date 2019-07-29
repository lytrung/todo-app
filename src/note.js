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

  handleCancelUpdateNoteClick = (e) => {
    this.setState({text:this.props.text,beingEdited:false});
  }

  handleUpdateNoteClick = (e) => {
    e.preventDefault();
    var note = {
      id: this.props.id,
      text:this.state.text
    }
    this.props.updateNote(note);
    this.setState({beingEdited:false});
  }
  handleNoteRemoveClick = (e) => {
    this.props.removeNote(this.props.id);
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
                  <button onClick={this.handleUpdateNoteClick} type="submit" className="btn btn-primary" id="update-note">Update</button>&nbsp;
                  <button onClick={this.handleCancelUpdateNoteClick} type="submit" className="btn btn-primary" id="cancelupdate-note">Cancel</button>
                </div>
              ) : (
                <div className="note-body">
                  <i className="far fa-times-circle note-remove" onClick={this.handleNoteRemoveClick}></i>
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
