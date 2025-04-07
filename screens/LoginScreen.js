import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser, login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // function loginHandler( { email, password }) {
  //   console.log('hit login screen')
  //   setIsAuthenticating(true);
  //   login(email, password);
  //   setIsAuthenticating(false);
  // }

  async function loginHandler( { email, password }) {
    console.log('hit login screen')
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Authenitcation failed!', 'Could not log you in. Please check your credentials or try again later. we need to have different error messages')
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Logging you in... " />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;