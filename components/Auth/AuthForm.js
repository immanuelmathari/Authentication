import { useState } from "react";
import Input from "./Input";
import { StyleSheet, View } from "react-native";
import Button from "../ui/Button";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    // we want one function to update all inputs according to the inputType that is declared on the bind
    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'confirmEmail':
                setEnteredConfirmEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    // then we submit 
    function submitHandler() {
        console.log('hit auth form')
        onSubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        });
    }

    // this is for setting error though not fully understood
    const {
        email: emailIsInvalid,
        confrimEmail: emailsDontMatch,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;
    // this is simply an object carring what could be invalid

    // now we procceed

    return (
        <View>
            <View>
                <Input
                    label="Email Address"
                    keyboardType="email-address"
                    onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                    value={enteredEmail}
                    isInvalid={emailIsInvalid}
                />
                {!isLogin && (
                    <Input
                        label="Confirm Email Address"
                        keyboardType="email-address"
                        onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
                        value={enteredConfirmEmail}
                        isInvalid={emailsDontMatch}
                    />
                )}
                <Input
                    label="Password"
                    onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                    secure
                    value={enteredPassword}
                    isInvalid={passwordIsInvalid}
                />
                {!isLogin && (
                    <Input
                        label="Confirm Password"
                        onUpdateValue={updateInputValueHandler.bind(
                            this,
                            'confirmPassword'
                        )}
                        secure
                        value={enteredConfirmPassword}
                        isInvalid={passwordsDontMatch}
                    />
                )}
                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default AuthForm;

const styles = StyleSheet.create({
    buttons: {
      marginTop: 12,
    },
  });