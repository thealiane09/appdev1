// App.jsx (Part 1)
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>My Todo App</h1>
    </div>
  );
}

export default App;
