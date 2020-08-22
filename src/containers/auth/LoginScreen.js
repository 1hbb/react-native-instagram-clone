import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import images from 'res/images';

export default function LoginScreen({_signInAsync}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          source={images.logoBlack}
          style={{height: 70, resizeMode: 'contain'}}
        />
      </View>
      <View style={Styles.userNameContainer}>
        <TextInput
          style={Styles.userNameInput}
          placeholder="Telefon numarası, kullanıcı adı veya e-posta"
        />
      </View>
      <View style={Styles.passwordContainer}>
        <TextInput style={Styles.passwordInput} placeholder="Şifre" />
      </View>
      <View style={Styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText}>Şifreni mi unuttun?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={Styles.loginContainer}
        onPress={() => _signInAsync}>
        <Text style={Styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  userNameContainer: {
    borderColor: '#ececec',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  userNameInput: {
    marginStart: 10,
  },
  passwordContainer: {
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: '#fafafa',
    marginBottom: 20,
  },
  passwordInput: {marginStart: 10},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: '#0088f8',
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
  },
});
