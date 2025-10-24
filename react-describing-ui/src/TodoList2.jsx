import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function TodoList2() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <h2>Katsuko Saruhashi’s To-dos</h2>
      <ul>
        <li>Study oceanographic carbon dioxide</li>
        <li>Present research findings</li>
        <li>Encourage women scientists</li>
      </ul>
    </Card>
  );
}
