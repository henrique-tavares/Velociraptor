import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import DinoPlay from '../../assets/Play.png';
import Graminha from '../../assets/Graminha.png';

export default function Landing() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.dinoPlayContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Download")} 
          >
            <Image source={DinoPlay} style={styles.dinoPlay}/>
        </TouchableOpacity>
        
        <Text style={styles.dinoPlayLabel}>Aperte para iniciar</Text>
      </View>

      <View style={styles.littleGrassContainer}>
        <Image style={styles.littleGrass} source={Graminha}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dinoPlayContainer: {
    alignItems: 'center'
  },
  dinoPlay: {
    marginTop: -30,
    resizeMode: 'contain',
    // backgroundColor: '#aaa'
  },
  dinoPlayLabel: {
    marginTop: 10,
    color: "#B17F2A",
    fontFamily: 'Nunito_700Bold',
    fontSize: 26,
  },
  littleGrassContainer: {
    height: '40%',
    width: '100%'
  },
  littleGrass: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
  }
})