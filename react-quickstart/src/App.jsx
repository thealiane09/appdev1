import './App.css';

function MyButton() {
  return (
    <button className="my-button">I'm a button</button>
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

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <MyButton />
      <AboutPage />
      <Profile />
    </div>
  );
}
