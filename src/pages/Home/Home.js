import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Profil from '../../components/Profil';
import SettingAndAccount from '../../components/SettingAndAccount';
import Camera from '../../components/Camera';
import Menus from '../../components/Menus';
import DaftarWajah from '../DaftarWajah/DaftarWajah';

const Home = () => {
  return (
    <View style={styles.view}>
      <Profil />
      <SettingAndAccount />
      <ScrollView>
        <Menus />
      </ScrollView>
      <View style={styles.camera}>
        <Camera />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fefae0',
  },
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fefae0',
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  camera: {
    position: 'absolute',
    bottom: 25,
    right: 140,
  },
});

export default Home;
