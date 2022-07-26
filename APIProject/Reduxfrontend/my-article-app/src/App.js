import React from 'react';
import { Counter } from './features/counter/Counter';
import { Login } from './features/counter/login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Login></Login>
       </header>
    </div>
  );
}

export default App;
