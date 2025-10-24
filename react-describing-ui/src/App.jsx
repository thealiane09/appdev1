import { useEffect } from 'react';
import Gallery from './Gallery.jsx';
import TodoList from './TodoList.jsx';
import TodoList2 from './TodoList2.jsx';
import PackingList from './PackingList.jsx';
import List from './List.jsx';
import TeaSet from './TeaSet.jsx';
import RootComponent from './components/RootComponent.jsx';
import { rootGreet } from './modules/RootModule.js';

export default function App() {
  useEffect(() => {
    console.log('=== Module Dependency Tree Demo ===');
    rootGreet();
  }, []);

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <Gallery />
      <hr />
      <TodoList />
      <hr />
      <TodoList2 />
      <hr />
      <PackingList />
      <hr />
      <List />
      <hr />
      <TeaSet />
      <hr />
      
      <section style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px'
      }}>
        <h2>🌲 React Tree Tutorial</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3>📊 1. Component Render Tree</h3>
          <p><strong>Explanation:</strong> Ito yung visual representation kung paano nag-connect ang mga components.</p>
          <p>Tingnan ang hierarchy at borders:</p>
          <ul>
            <li><strong>Blue border</strong> = Root Component (top-level)</li>
            <li><strong>Green border</strong> = Middle components (Component A & C)</li>
            <li><strong>Red border</strong> = Leaf components (Component B & D)</li>
          </ul>
          <RootComponent />
        </div>

        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '15px', 
          borderRadius: '5px',
          border: '1px solid #ffc107'
        }}>
          <h3>🔗 2. Module Dependency Tree</h3>
          <p><strong>Explanation:</strong> Ito naman yung relationships ng JavaScript modules (imports).</p>
          <p><strong>Para makita:</strong></p>
          <ol>
            <li>Press <kbd>F12</kbd> (o right-click → Inspect)</li>
            <li>Pumunta sa <strong>Console</strong> tab</li>
            <li>Makikita mo yung messages from modules</li>
          </ol>
          <p>Expected output sa console:</p>
          <pre style={{ 
            backgroundColor: '#000', 
            color: '#0f0', 
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px'
          }}>
{`=== Module Dependency Tree Demo ===
Hello from RootModule
Hello from ModuleA
Hello from ModuleB
Hello from ModuleC
Hello from ModuleD`}
          </pre>
        </div>
      </section>
    </div>
  );
}