import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const MainScreen = ({ handleLogout, setPage, ads, currentUser }) => {
  const renderItem = ({ item }) => (
    <View style={styles.adContainer}>
      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
      <Text style={styles.posterName}>{currentUser.name} {currentUser.surname}</Text>
      <Text style={styles.jobDescription}>{item.jobDescription}</Text>
      <Text style={styles.jobDate}>{item.jobDate} {item.jobTime}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Ekran</Text>
      <Button title="İlan Oluştur" onPress={() => setPage('create-ad')} />
      <Button title="Profil" onPress={() => setPage('profile')} />
      <Button title="Çıkış Yap" onPress={handleLogout} />
      {ads.length === 0 ? (
        <Text style={styles.noAdsText}>Yakında ilan yok</Text>
      ) : (
        <FlatList
          data={ads}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  adContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  posterName: {
    fontSize: 16,
    marginVertical: 5,
  },
  jobDescription: {
    fontSize: 14,
  },
  jobDate: {
    fontSize: 12,
    color: 'gray',
  },
  noAdsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default MainScreen;
