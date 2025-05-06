import { AuthProvider } from './context/authcontext';
import AppRoutes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
};

export default App;
