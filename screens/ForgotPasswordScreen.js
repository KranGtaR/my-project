import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ email, setEmail, handleForgotPassword, setPage }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Şifremi Unuttum</Text>
      <Text style={styles.label}>E-posta adresinizi girin:</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Gönder" onPress={handleForgotPassword} />
      <Button title="Geri Dön" onPress={() => setPage('login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default ForgotPasswordScreen;
