import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

type ToDoListProps = {}

type ToDoListState = {
  toDos: Array<string>,
  input: string
}
class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
  constructor(props: ToDoListProps) {
    super(props);
    this.state = {
      toDos: [],
      input: ''
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({
      toDos: [...this.state.toDos, this.state.input],
      input: ''
    })
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    this.setState({ input: input });
  }

  render() {
    let toDoList: React.ReactNode = this.state.toDos.map((toDoItem: string) => {
      return(
        <li>{toDoItem}</li>
      );
    });

    return (
      <div className="container">
        <div className="Todo">Todoリスト</div>
        <ul>
          {toDoList}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.input}/>
          <button type="submit">追加</button>
        </form>

      </div>
    )
  }
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
