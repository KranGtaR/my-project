import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ handleRegister, setPage }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    // Doğrulamaları burada gerçekleştiriyoruz
    if (!isValidName(name)) {
      alert('Lütfen geçerli bir isim giriniz.');
      return;
    }
    if (!isValidName(surname)) {
      alert('Lütfen geçerli bir soyad giriniz.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Lütfen geçerli bir e-posta adresi giriniz.');
      return;
    }
    if (!isValidPassword(password)) {
      alert('Lütfen geçerli bir şifre giriniz.');
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      alert('Lütfen geçerli bir telefon numarası giriniz.');
      return;
    }
    if (!isValidAge(age)) {
      alert('Lütfen geçerli bir yaş giriniz.');
      return;
    }

    // Eğer doğrulama işlemi başarılıysa yeni kullanıcıyı oluştur
    const newUser = {
      name,
      surname,
      email,
      password,
      phoneNumber,
      city,
      district,
      age,
      gender,
    };
    handleRegister(newUser);
  };

  // Yardımcı fonksiyonlar
  const isValidName = (name) => /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(name);
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
  const isValidPhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);
  const isValidAge = (age) => /^\d+$/.test(age);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        value={surname}
        onChangeText={(text) => setSurname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon Numarası"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şehir"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="İlçe"
        value={district}
        onChangeText={(text) => setDistrict(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Yaş"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cinsiyet"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <Button title="Kayıt Ol" onPress={handleSubmit} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default RegisterScreen;
