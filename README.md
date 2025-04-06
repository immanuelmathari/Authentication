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