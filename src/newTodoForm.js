import React, {Component} from 'react';

class NewTodoForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      contentInput:'',
      priorityInput:''
    };
  }

  handleContentInputChange = (e) => {
    this.setState({
      contentInput:e.target.value
    })
  }
  handlePriorityInputChange = (e) => {
    this.setState({
      priorityInput:e.target.value
    })
  }

  handleAddTodoClick = (e) => {

    e.preventDefault();

    if(this.state.contentInput != ''){

      this.props.addTodo({
        content:this.state.contentInput,
        priority:this.state.priorityInput,
      });

      this.setState({
        contentInput:'',
        priorityInput:'',
      })
    }
  }
  render(){
      return (

        <div className="todo new-todo">
          <form className="todo-body">
              <div className="form-group">
                <label htmlFor="content-input">Content</label>
                <input value={this.state.contentInput} onChange={this.handleContentInputChange} type="text" className="form-control" id="content-input"/>
              </div>

              <div className="form-group">
                <label htmlFor="priority-input">Priority</label>
                <input value={this.state.priorityInput} onChange={this.handlePriorityInputChange} type="text" className="form-control" id="priority-input"/>
              </div>
        
              <button onClick={this.handleAddTodoClick} type="submit" id="add-todo" className="btn btn-primary">Add</button>
          </form>
        </div>
      );
  }

}

export default NewTodoForm;
