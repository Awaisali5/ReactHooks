import React, { useCallback, useState } from "react";
import Search from "./Search";

const UseCallBackHook = () => {
  const allUsers = [
    "Awais Ali",
    "Soban Shafiq",
    "Talal Hussain",
    "Jahanzaib",
    "Ahmed ayub",
  ]

  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text) => {
    const filterUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filterUsers);
  }, [users], );

  return (
    <>
      <div className="UseCallback">
        <h1>UseCallBackHook</h1>

        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

        <Search onChange={handleSearch} />
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
          ;
        </ul>
      </div>
    </>
  );
};

export default UseCallBackHook;
