import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [redditPosts, setRedditPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/reports').then(res => setReports(res.data)).catch(err => console.error(err));
    axios.get('/api/admin/users').then(res => setUsers(res.data)).catch(err => console.error(err));
    axios.get('/api/posts').then(res => setRedditPosts(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>

      <div>
        <h3 className="mt-4 font-semibold">User Reports</h3>
        <ul>{reports.map(r => <li key={r.id}>{r.reason} (Post ID: {r.postId})</li>)}</ul>
      </div>

      <div>
        <h3 className="mt-4 font-semibold">Users</h3>
        <ul>{users.map(u => <li key={u.id}>{u.email} - {u.role}</li>)}</ul>
      </div>

      <div>
        <h3 className="mt-4 font-semibold">Reddit Posts</h3>
        <ul>
          {redditPosts.map(p => (
            <li key={p.id}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
              <p className="text-sm text-gray-600">{p.preview}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
