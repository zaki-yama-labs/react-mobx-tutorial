import React from 'react';
import TodoList from './TodoList';
import observableTodoStore from '../ObservableTodoStore';

export default class App extends React.Component {
  render() {
    return <TodoList store={observableTodoStore} />;
  }
}
