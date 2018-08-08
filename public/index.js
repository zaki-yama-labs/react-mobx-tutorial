import observableTodoStore from './ObservableTodoStore';

observableTodoStore.addTodo('read MobX tutorial');
observableTodoStore.addTodo('try MobX');
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = 'try MobX in own project';
observableTodoStore.todos[0].task = 'grok MobX tutorial';