import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser, login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

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
      console.error(error);
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Logging you in... " />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;