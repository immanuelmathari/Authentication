# PROJECT CODENAME

- The index for this project is 25.3
## Installation

Use npm

```bash
npm install
```

## Usage

```bash
npm start
```
use an app called expoGo

## Lastly

Mbele Naona success

## License

[Emunah Technologies](https://www.natfirecompany.co.ke/)

# PROJECT CODENAME

- The index for this project is 25.3
## Installation

Use npm

```bash
npm install
```

## Usage

```bash
npm start
```
use an app called expoGo

## Lastly

Mbele Naona success

## License

[Emunah Technologies](https://www.natfirecompany.co.ke/)

> npx create-expo-app@latest --template blank Authentication
- the first thing we want to do is create an AuthForm and for it we need a button and a inputs
- so we create compoents folder with Auth folder with AuthContent.js, AuthForm.js, Input.js
- we create in compoents folder, ui folder with Button.js, FlatButton.js, IconButton.js, LoadingOverlay.js 
- we create a screens folder with LoginScreen.js, SignupScreen.js, WelcomeScreen.js
- we need to first work on the button and input so 
Button.js
- but before that we add the colors in 
create a folder 
constants/styles.js

Input.js

NOTE)
secureTextEntry
If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false

<TextInput 
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        
NOTE) we have different style when an input is invalid

AuthForm.js

11.175 Backend Setup
- so we use firebase authentication
> goto firebase authentication and create
- we use email/password
- enable email/password
- then we use Firebase Auth REST API
- we use sign up & in with email & password
- we see we need to send a http to this url
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
- and we see the kind of body we send and the token/response we receive

11.175. Controlling Signup & Login Screens
AuthContent.js
@ FlatButton
we want to when we press create new user to go to a new screen and also for log in
- we want to work on 
@switchAuthModeHandler
NOTE) we could use navigation.replace instead of navigation.navigate which instead of adding a new screen to the stack of screens, it replaces

11.176 Sending Authentication Requests to the Backend
- we want to send data to 
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
we create util/auth.js
auth.js
> npm install axios
- the apikey is in your firebase project
at project settings
take the web api key
- the reason wed use async await is for us to get a response say that wed want to stoer

11.178 Creating new users 
Signupscreen.js
@signuphandler
- in AuthContent, onAuthenticated is triggered whenever a form is triggered with valid data and a data with email and password in passed. 
so we need to accept those props in 
SignupScreen.js
- so what we are saying is that the data we take from authcontent will be received in signupscreen and acted on by signupHandler (i guess) then the signup handler has to accept those props. and they'll already be authenticated because firebase needs passwords at least 8 characters long so thats why we validate them in auth content and use signupHandler to pass them to auth.js which fowards them to firebase
- then we handle the loading state using the usestate isAuthenticating
NOTE) say that you know how to write modular code that follows the best coding practices making it modular and easy to be read and understood
- so if its loading, we set the loader else, we go to the next screen

11.179 Logging in Users
- we send request to signin api
auth.js
@authenticate, 
we use a mode because there is a minimal difference in the names

LogIsScreen.js

