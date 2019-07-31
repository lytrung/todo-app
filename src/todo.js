import React, {Component} from 'react';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state = {
      content:props.content,
      priority:props.priority,
      isContentUpdated:false,
      isPriorityUpdated:false,
    };
  }

  handleContentDoubleClick = (e) => {
    this.setState({isContentUpdated:true});
  }
  handlePriorityDoubleClick = (e) => {
    this.setState({isPriorityUpdated:true});
  }

  handleContentInputChange = (e) => {
    this.setState({
      content:e.target.value
    })
  }
  handlePriorityInputChange = (e) => {
    this.setState({
      priority:e.target.value
    })
  }

  handleContentInputBlur = (e) => {
    var id = this.props.id;
    var data = {
      content:this.state.content
    }
    this.props.updateTodo(id,data);
    this.setState({isContentUpdated:false});
  }
  handlePriorityInputBlur = (e) => {
    var id = this.props.id;
    var data = {
      priority:this.state.priority
    }
    this.props.updateTodo(id,data);
    this.setState({isPriorityUpdated:false});
  }

  handleTodoRemoveClick = (e) => {
    this.props.removeTodo(this.props.id);
  }

  render(){
      return (
        <div className="todo">
          <div className="todo-body">
            <i onClick={this.handleTodoRemoveClick} className="far fa-times-circle todo-remove"></i>
            <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}>
              {(this.state.isContentUpdated == false) ? this.props.content : <input onChange={this.handleContentInputChange} onBlur={this.handleContentInputBlur} type="text" autoFocus className="form-control" value={this.state.content}/>}
            </div>
            <div className="todo-priority" onDoubleClick={this.handlePriorityDoubleClick}>
              {(this.state.isPriorityUpdated == false) ? this.props.priority : <input onChange={this.handlePriorityInputChange} onBlur={this.handlePriorityInputBlur} type="text" autoFocus className="form-control form-control-sm" value={this.state.priority}/>}
            </div>
          </div>
        </div>
      );
  }

}

export default Todo;
