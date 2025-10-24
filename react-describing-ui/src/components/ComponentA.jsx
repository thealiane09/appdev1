import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div style={{ padding: '15px', border: '2px solid green', margin: '10px' }}>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

export default ComponentA;