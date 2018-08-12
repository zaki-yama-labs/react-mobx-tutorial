import React from 'react';
import DevTools from 'mobx-react-devtools';
import TodoList from './TodoList';
import observableTodoStore from '../ObservableTodoStore';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList store={observableTodoStore} />
        <DevTools />
      </div>
    );
  }
}
