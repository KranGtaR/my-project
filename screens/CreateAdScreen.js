import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateAdScreen = ({ handleCreateAd, setPage }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobDate, setJobDate] = useState('');
  const [jobTime, setJobTime] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    const newAd = {
      jobTitle,
      jobDescription,
      jobDate,
      jobTime,
      price
    };
    handleCreateAd(newAd);
    setPage('main');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>İlan Oluştur</Text>
      <TextInput
        style={styles.input}
        placeholder="İş Tanımı"
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Yapılacak İşler"
        value={jobDescription}
        onChangeText={(text) => setJobDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="İş Tarihi (GG/AA/YYYY)"
        value={jobDate}
        onChangeText={(text) => setJobDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="İş Saati (SS:DD)"
        value={jobTime}
        onChangeText={(text) => setJobTime(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fiyat Bilgisi"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <Button title="İlanı Kaydet" onPress={handleSubmit} />
      <Button title="İptal" onPress={() => setPage('main')} />
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

export default CreateAdScreen;
