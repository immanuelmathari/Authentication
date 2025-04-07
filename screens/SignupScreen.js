import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import  LoadingOverlay  from '../components/ui/LoadingOverlay'

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler( { email, password }) {
    console.log('hit signupscreen')
    setIsAuthenticating(true);
    try {
      await createUser(email, password); 
    } catch (error) {
      console.error(error); 
    }
    createUser(email, password);
    setIsAuthenticating(false);
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Creating user... " />
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;