import { apiSlice } from '../services/apiSlice';
import { useNavigate } from 'react-router-dom';

const tokenExpirationMiddleware = () => (next) => async (action) => {
 
  if (action.type.startsWith(apiSlice.reducerPath) && action.error && action.payload?.status === 401) {
    const errorMessage = action.payload?.data?.message; // Assuming the server provides a message field in the response
    if (errorMessage === 'Token expiration') {
      // Redirect to the sign-in page
      const navigate = useNavigate()
      navigate('/signin');
    }
  }

  return next(action);
};

export default tokenExpirationMiddleware;
