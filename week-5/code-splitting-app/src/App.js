import './App.css';
import React, { Suspense } from 'react';

const ExampleComponent = React.lazy(() => import('./ExampleComponent'));

function App() {
  return (
    <div className="App">
      <div>
        <p>Hello React Lazy</p>
        <Suspense fallback={<div>Loading...</div>}>
          <ExampleComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
