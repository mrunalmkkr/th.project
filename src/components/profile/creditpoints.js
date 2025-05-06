import { useEffect, useState } from 'react';
import axios from 'axios';

const CreditPoints = () => {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    axios.get('/user/credits', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then(res => setCredits(res.data.credits))
      .catch(console.error);
  }, []);

  return (
    <div className="mt-4">
      <p className="text-lg">Credits: {credits}</p>
    </div>
  );
};

export default CreditPoints;

