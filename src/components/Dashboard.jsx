// frontend/src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (!user) return <div>Please login</div>;
  return (
    <div style={{padding:20}}>
      <h1>Welcome, {user.name}</h1>
      <p>Flat: {user.flatNumber}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <Link to="/members">Members</Link> | {user.role === 'admin' && <Link to="/admin/create">Create User</Link>}
      <br /><br />
      <button onClick={()=>{localStorage.clear(); window.location.href='/login'}}>Logout</button>
    </div>
  );
}
