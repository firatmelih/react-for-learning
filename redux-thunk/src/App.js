import "./styles.css";
import { connect } from "react-redux";
import { setTodo } from "./store/actions/todoAction";
import { useEffect } from "react";

const Component = ({ todos, setTodo }) => {
  useEffect(() => {
    setTodo();
  }, [setTodo]);
  return (
    <div className="App">
      {todos.length === 0 ? (
        <div>LOADING</div>
      ) : (
        todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)
      )}
    </div>
  );
};

const mapToStateProps = (state) => {
  const { todos } = state.todoReducer;
  return { todos };
};

const mapDispatch = {
  setTodo
};

export const App = connect(mapToStateProps, mapDispatch, null, {
  forwardRef: true
})(Component);
