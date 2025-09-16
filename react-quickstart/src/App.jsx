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
        <img className="avatar"
      scr="https://via.placeholder.com/100" alt="Avatar" />
    </>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}
