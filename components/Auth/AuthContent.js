import { useState } from 'react';
import { Alert, StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <Text style={styles.buttonsInfo}>
          {isLogin ? 'Dont have an account?' : 'Have an account?'}
        </Text>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Sign Up' : 'Log in'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 50,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 25,
  },
  logo: {
    width: 400,
    height: 150,
    marginVertical: 50
  },
  buttonsInfo: {
    color: 'white'
  }
});
