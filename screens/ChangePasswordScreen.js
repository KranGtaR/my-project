import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ChangePasswordScreen = ({ handleSavePassword, setPage }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = () => {
    handleSavePassword(newPassword);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Şifre Değiştir</Text>
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifre"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <Button title="Kaydet" onPress={handleSubmit} />
      <Button title="İptal" onPress={() => setPage('profile')} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default ChangePasswordScreen;
