import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://literate-space-funicular-69w6jxwgqx65hx6vv-8000.app.github.dev/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-warning">
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
