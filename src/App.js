import React from 'react';
import Counter from './components/Counter';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <div className='App'>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
