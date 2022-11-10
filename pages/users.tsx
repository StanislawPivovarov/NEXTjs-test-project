import Link from "next/link";
import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "petya" },
    { id: 2, name: "oleg" },
    { id: 3, name: "alina" },
    { id: 4, name: "misha" },
    { id: 5, name: "dima" },
    { id: 6, name: "stas" },
  ]);
  return (
    <div>
      <div>Пользователи</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
