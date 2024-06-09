import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ currentUser, handleLogout, setPage }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{`${currentUser.name.charAt(0)}${currentUser.surname.charAt(0)}`}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>{currentUser.name} {currentUser.surname}</Text>
          <Text style={styles.userInfo}>E-posta: {currentUser.email}</Text>
          <Text style={styles.userInfo}>Telefon Numarası: {currentUser.phoneNumber}</Text>
          <Text style={styles.userInfo}>Şehir: {currentUser.city}</Text>
          <Text style={styles.userInfo}>İlçe: {currentUser.district}</Text>
          <Text style={styles.userInfo}>Yaş: {currentUser.age}</Text>
          <Text style={styles.userInfo}>Cinsiyet: {currentUser.gender}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Profilimi Düzenle" onPress={() => setPage('edit-profile')} />
        <Button title="Şifre Değiştir" onPress={() => setPage('change-password')} />
        <Button title="Çıkış Yap" onPress={handleLogout} />
      </View>
      <Button title="Geri Dön" onPress={() => setPage('main')} style={styles.backButton} />
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  avatarText: {
    fontSize: 36,
  },
  userInfoContainer: {
    flex: 1,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backButton: {
    marginTop: 10,
  }
});

export default ProfileScreen;