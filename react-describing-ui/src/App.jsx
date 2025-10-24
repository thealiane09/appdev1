import Gallery from './Gallery.jsx';
import TodoList from './TodoList.jsx';
import TodoList2 from './TodoList2.jsx';
import PackingList from './PackingList.jsx'; // ← import the new component

export default function App() {
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
    </div>
  );
}
