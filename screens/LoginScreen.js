import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser, login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

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
      // await login(email, password);

      // we want to get the token and pass it to our context
      const token = await login(email, password);
      authCtx.authenticate(token);
      
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