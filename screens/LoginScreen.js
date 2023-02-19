import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const {authenticate}=  useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert("Authentication Failed",
      'Could not log you in. Please check your credentails or try again later!');
      setIsAuthenticating(false);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in...." />
  }
  return <AuthContent isLogin onAuth={loginHandler}/>;
}

export default LoginScreen;
