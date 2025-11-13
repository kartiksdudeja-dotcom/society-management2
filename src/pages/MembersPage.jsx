// frontend/src/pages/MembersPage.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function MembersPage(){
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState('');

  useEffect(()=> {
    API.get('/admin/users')
      .then(r => setUsers(r.data.users))
      .catch(e => setErr(e.response?.data?.message || 'Could not load'));
  }, []);

  return (
    <div style={{padding:20}}>
      <h2>Members</h2>
      {err && <p style={{color:'red'}}>{err}</p>}
      <table border="1" cellPadding="8" style={{width:'100%'}}>
        <thead><tr><th>Name</th><th>Flat</th><th>Email</th><th>Role</th></tr></thead>
        <tbody>
          {users.map(u => <tr key={u._id}><td>{u.name}</td><td>{u.flatNumber}</td><td>{u.email}</td><td>{u.role}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
