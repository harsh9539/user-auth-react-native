import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';

function SignupScreen() {

  const [isAuthenticating,setIsAuthenticating] = useState(false);

  const {authenticate}=  useContext(AuthContext);

  async function signUpHandler({email,password}){
    setIsAuthenticating(true);
    try {
      const token= await createUser(email,password);
      authenticate(token);
    } catch (error) {
      Alert.alert("Authentication Failed",
      'Could not create user. Please check your input or try again later!');
      setIsAuthenticating(false);
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating User...."/>
  }
  return <AuthContent onAuth={signUpHandler}/>;
}

export default SignupScreen;
