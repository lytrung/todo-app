import React, {Component} from 'react';
import './App.css';
import NewTodoForm from './newTodoForm.js';
import Todo from './todo.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos : [
        {
          id:1,
          content: 'Watch youtube',
          priority: 'Important'
        },
        {
          id:2,
          content: 'Cook dinner',
          priority: 'Important'
        },
        {
          id:3,
          content: 'Do react',
          priority: 'Important'
        },
        {
          id:4,
          content: 'Do more react',
          priority: 'Important'
        }
      ],
  
    };
  }

  addTodo = (data) => {
    var newTodo = {
      id: Date.now(),
      ...data
    };
    var todos = this.state.todos;

    this.setState({
      todos:[newTodo,...todos]
    })
  }

  removeTodo = (id) => {
    var filteredItems = this.state.todos.filter(function(item) {
         return item.id !== id
    });
    this.setState({todos:filteredItems})
  }

  updateTodo = (id,data) => {
    var todos = this.state.todos;
    var index = todos.findIndex(function(item){
      return item.id == id
    });
    var updatedItem = {...todos[index],...data}
    todos[index] = updatedItem;

    this.setState({todos})
  }

  render(){
      return (
          <div className="wrap">
            <div className="container">
              <div className="todos">
                {
                  this.state.todos.map((todo) => {

                    var todoProps = {
                      ...todo,
                      removeTodo:this.removeTodo,
                      updateTodo:this.updateTodo,
                      key:todo.id
                    }
                    return (
                      <Todo {...todoProps}/>
                    );
                  })
                }

                <NewTodoForm addTodo={this.addTodo}/>
              </div>
            </div>
          </div>
      );
  }

}

export default App;
