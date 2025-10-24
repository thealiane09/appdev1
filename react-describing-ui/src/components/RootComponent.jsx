import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

function RootComponent() {
  return (
    <div style={{ padding: '20px', border: '2px solid blue', margin: '20px' }}>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;