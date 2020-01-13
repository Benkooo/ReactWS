import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {

  // render is like main function in C / C++
  render () {
    return (
      <div>
          <TodoList />
      </div>
    );
  }
}

export default App;