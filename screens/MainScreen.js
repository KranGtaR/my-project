
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Modal, Picker } from 'react-native';

const MainScreen = ({ handleLogout, setPage, ads, currentUser }) => {
  const [selectedCity, setSelectedCity] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.adContainer}>
      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
      <Text style={styles.posterName}>{currentUser.name} {currentUser.surname}</Text>
      <Text style={styles.jobDescription}>{item.jobDescription}</Text>
      <Text style={styles.jobDate}>{item.jobDate} {item.jobTime}</Text>
      <Text style={styles.jobCity}>Şehir: {item.city}</Text> {/* İlanın şehri burada gösteriliyor */}
    </View>
  );

  const cities = ["", "İstanbul", "İzmir", "Ankara", "Konya", "Bursa", "Antalya", "Gaziantep"];

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setModalVisible(false);
  };

  const resetFilters = () => {
    setSelectedCity('');
  };

  const filterAdsByCity = () => {
    if (selectedCity === '') return ads;
    return ads.filter(ad => ad.city === selectedCity);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Ekran</Text>
      <Button title="İlan Oluştur" onPress={() => setPage('create-ad')} />
      <Button title="Profil" onPress={() => setPage('profile')} />
      <Button title="Çıkış Yap" onPress={handleLogout} />
      <View style={styles.filterButtonContainer}>
        <Button title="Filtrele" onPress={() => setModalVisible(true)} />
        <Button title="Filtreleri Sıfırla" onPress={resetFilters} /> {/* Filtreleri sıfırlama butonu */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Şehir Seç</Text>
              <Picker
                selectedValue={selectedCity}
                onValueChange={(itemValue) => handleCityChange(itemValue)}
              >
                {cities.map((city, index) => (
                  <Picker.Item label={city} value={city} key={index} />
                ))}
              </Picker>
              <Button title="Kapat" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
      {filterAdsByCity().length === 0 ? (
        <Text style={styles.noAdsText}>Yakında ilan yok</Text>
      ) : (
        <FlatList
          data={filterAdsByCity()}
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
  jobCity: {
    fontSize: 12,
    color: 'blue',
  },
  noAdsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});

export default MainScreen;
