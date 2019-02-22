import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propType = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default TodoList;
