import useAuth from '../../hooks/useauth';
import CreditPoints from './creditpoints';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow mt-6">
      <h1 className="text-xl font-bold">Profile</h1>
      <p>Email: {user.email}</p>
      <CreditPoints />
    </div>
  );
};

export default Profile;
