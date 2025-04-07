import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    console.log('hit signupscreen')
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert('Authenitcation failed!', 'Could not log you in. Please check your credentials or try again later. we need to have different error messages')
    }
    setIsAuthenticating(false);
  }

  // async function signupHandler( { email, password }) {
  //   console.log('hit signupscreen')
  //   setIsAuthenticating(true);
  //   createUser(email, password);
  //   setIsAuthenticating(false);
  // }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user... " />
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;