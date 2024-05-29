import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import CreateAdScreen from './screens/CreateAdScreen';

const App = () => {
  const [page, setPage] = useState('login');
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ads, setAds] = useState([]);

  const handleLogin = () => {
    const user = userList.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setPage('main');
    } else {
      Alert.alert('Hata', 'E-posta veya şifre yanlış.');
    }
  };

  const handleRegister = (newUser) => {
    setUserList([...userList, newUser]);
    setPage('login');
  };

  const handleForgotPassword = () => {
    console.log('Şifre sıfırlama işlemi başlatılıyor...');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setCurrentUser(null);
    setPage('login');
  };

  const handleSaveProfile = (updatedUser) => {
    setUserList(userList.map(user => (user.email === updatedUser.email ? updatedUser : user)));
    setCurrentUser(updatedUser);
    setPage('profile');
  };

  const handleSavePassword = (newPassword) => {
    const updatedUser = { ...currentUser, password: newPassword };
    handleSaveProfile(updatedUser);
  };

  const handleCreateAd = (newAd) => {
    setAds([...ads, newAd]);
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn && page === 'login' && (
        <LoginScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          setPage={setPage}
        />
      )}
      {page === 'register' && (
        <RegisterScreen
          handleRegister={handleRegister}
          setPage={setPage}
        />
      )}
      {page === 'forgot-password' && (
        <ForgotPasswordScreen
          email={email}
          setEmail={setEmail}
          handleForgotPassword={handleForgotPassword}
          setPage={setPage}
        />
      )}
      {isLoggedIn && page === 'main' && (
        <MainScreen
          handleLogout={handleLogout}
          setPage={setPage}
          ads={ads}
          currentUser={currentUser}
        />
      )}
      {isLoggedIn && page === 'profile' && (
        <ProfileScreen
          currentUser={currentUser}
          handleLogout={handleLogout}
          setPage={setPage}
        />
      )}
      {page === 'edit-profile' && (
        <EditProfileScreen
          currentUser={currentUser}
          handleSaveProfile={handleSaveProfile}
          setPage={setPage}
        />
      )}
      {page === 'change-password' && (
        <ChangePasswordScreen
          handleSavePassword={handleSavePassword}
          setPage={setPage}
        />
      )}
      {page === 'create-ad' && (
        <CreateAdScreen
          handleCreateAd={handleCreateAd}
          setPage={setPage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
