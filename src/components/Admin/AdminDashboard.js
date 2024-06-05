import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/admin/userlist');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/admin/user/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="user-list">
          <h2>User List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th className="name-header">Name</th>
                  <th className="action-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td className="name-cell">{user.name}</td>
                    <td className="action-cell">
                      <button className="edit-btn" onClick={() => handleEdit(user._id)}>Make Admin</button>
                      <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
