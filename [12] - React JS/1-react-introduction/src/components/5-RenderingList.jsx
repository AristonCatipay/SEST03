function List() {
  const userList = ["John", "Jane", "Alex"];
  return (
    <div>
      <h1>Rendering List</h1>
      <ul>
        {userList.map((user) => (
          <li key={user}>Hi {user}!</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
