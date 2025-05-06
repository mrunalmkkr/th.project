import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useauth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // assuming auto-login after register
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      await login({ email, password });
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
        className="w-full p-2 border mb-2" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
        className="w-full p-2 border mb-2" required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
