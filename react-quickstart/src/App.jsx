import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <p className="about-text">
        Hello there.<br />How do you do?
      </p>
      <img className="avatar" src="https://via.placeholder.com/100" alt="Avatar" />
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function AdminPanel() {
  return <h2>Welcome back, Admin!</h2>;
}

function LoginForm() {
  return <h2>Please log in to continue.</h2>;
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Hello, React!</h1>

      <h2>Counters that update separately</h2>
      <MyButton />
      <MyButton />

      <AboutPage />
      <Profile />

      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}

      <ShoppingList />
    </div>
  );
}
