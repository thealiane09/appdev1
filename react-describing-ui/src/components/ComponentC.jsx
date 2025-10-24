import ComponentD from './ComponentD';

function ComponentC() {
  return (
    <div style={{ padding: '15px', border: '2px solid green', margin: '10px' }}>
      <h2>Component C</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;