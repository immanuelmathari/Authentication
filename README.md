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

11.180 Authentication Error Handling
- say signing in with a non existant email
@LoginScreen

11.181 Storing and Managing the user Authentication state with context
- what should happend when a user logs in successfully
create store/
auth-context.js
- we create the values and the methods in the createContex
- we create the AuthContextProvider
- we manage state inthis above
- we create functions to set and dump the token
- we set the values
- set value to context provider
- this way we expose our context to any part of the app that wants to use it
- we wrap our authcontextprovider to app
APp.js
- well use this context provider inside signup and login screen

11.182 Extrating the auth token
SignUpScreen.js
@context
- we pass the token from firebase
- extract token from auth.js
auth.js
LoginScreen.js

11.183 Protecting Screens
NOTE) you can do this
- we want to make sure that under no circumstances certain screen cannot be met unless certain conditions are not met eg Welcome. 
- we render a navigator unless a certain condition is met
- we want to conditionally use AuthStack in 
App.js
- we commented all previous code
- we wrap AuthContextProvider inside app
- we import context in navigation component
- render AuthStack dynamically
NOTE) say you can conditionally render screens depending on authentication and protection requirements

11.184 Adding a logout functionality
App.js
@AuthenticatesStack - Stack.Screen - options
- we add context
NB ERROR NOTE 
- somehow onPress refuses to work in navigation so we use onPressOut

## 11.185 Accessing Protected Resources
- we could use token to get access to protected resources in our backend
- go add a node in realtime database in firebase console
- we want to fetch this in welcome screen. by sending a http request to the firebast
WelcomeScreen.js
@useEffect
- copy reference url in firebase
- remember to add .json at the end
@state fetchedMessage
NB) NOTE) you dont use async await in useEffect. its better if you use promises. see the useEffect
- note that the rule to the access of the database is open.
- wed wantt o have certain urls that can only be accessed by certain users
- so protect endpoint by having hte rules read as such
as it is its like this
{
  "rules": {
    ".read": "now < 1746478800000",  // 2025-5-6
    ".write": "now < 1746478800000",  // 2025-5-6
  }
}
we set it as such 
{
  "rules": {
    ".read": "auth.uid != null",  // 2025-5-6
    ".write": "auth.uid != null",  // 2025-5-6
  }
}
it only grants resource when the url proves that the request is authenticated 
- so we need to attach the token to a resource in 
WelcomeScreen.js
 at the useEffect, we add at the end of this
 https://react-native-express-tracker-default-rtdb.firebaseio.com/message.json
 ?auth= 
 - we need to get token
 - note that in some frameworks like node you need to add headers
 using authCtx 

 - we also use this to know whether a request is coming from an authenticated user or not
 - because restapis dont store that information. they dont know if a user is authenticated or not
 research on this NOTE TODO NB

 ## 11.186 Storing Auth Token on the Device & Loggin users automatically
 - when we close our app, and reopen, we loose our context state. 
 - we might want to store the token in device so that we store it when users come back later
 TODO) NB) write ability list
 NOTE) This is something you can do. caching data locally
 - to do this, we use AsyncStorage
 search async storage react native
 https://reactnative.dev/docs/asyncstorage 

 https://react-native-async-storage.github.io/async-storage/docs/install/ 

 > npm install @react-native-async-storage/async-storage

 auth-context.js
 @authenticate
 - when using AsyncStorage, you give the item a key which you can use to get or retrieve that item, the second item is what you want to store and should always be a string
 @useEffect
 - this return a token but getItem returns a promise so you do async await
 - you see the two ways to do it, either you set an async function or wait for a promise

 - now if you close your app and open you'll see welcome
 - but we see login screen momentarily. to avoid this flickering, we need to prolong loading screen of our app a little bit enough for it to fetch welcome because by default login starts. but as you see just when it starts there are some things checked
 auth-context.js
 @useEffect 
 - we cut it
 and go and add it in app.js
 App.js
 @App
 - but since we are in the component where the very context or component we use is provided, we cant tap into our context, so we add Root fn
 - then we load Root in App
 then we install something to prolong loading
 > expo install expo-app-loading
 - so we load up until we know we have fetched our token
 @isTryingLogin state

 auth-context.js
 - now we want to clear the token even in asyncStorage