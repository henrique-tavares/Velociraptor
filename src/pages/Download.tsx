import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, ImageBackground, BackHandler } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DinoReload from '../../assets/Reload.png';
import Background from '../../assets/BackgroundOthers.png';

export default function Download() {
  const [details, setDetails] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.backgroundImage}>
        <View style={styles.dinoReloadContainer}> 
          <TouchableOpacity
            onPress={() => setDetails(false)}
          >
            <Image source={DinoReload} style={styles.dinoReload}/>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>A velocidade da sua internet é:</Text>
          <Text style={styles.infoSpeed}>20</Text>
          <Text style={styles.infoSpeedLabel}>Mbps</Text>
        </View>
        
        {(!details)
        ?
          <TouchableOpacity
            style={styles.knowMoreContainer}
            onPress={() => setDetails(true)}
          >
            <Feather name="plus-circle" size={40} color="#B17F2A" />
            <Text style={styles.knowMoreText}>Saiba mais</Text>
          </TouchableOpacity>
        :
          <View style={styles.DetailsContainer}>
            <View style={styles.DetailsItem}>
              <Text style={styles.DetailsLabel}>Upload</Text>
              <View style={styles.DetailsInfo}>
                <Text style={styles.DetailsNumber}>16</Text>
                <Text style={styles.DetailsUnit}>Mbps</Text>
              </View>
            </View>
            
            <View style={styles.DetailsItem}>
              <Text style={styles.DetailsLabel}>Latência</Text>
              <View style={styles.DetailsInfo}>
                <Text style={styles.DetailsNumber}>08</Text>
                <Text style={styles.DetailsUnit}>ms</Text>
              </View>
            </View>
          </View>
        }
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: '5%'
  },
  dinoReloadContainer: {
    alignItems: 'center',
  },
  dinoReload: {
    resizeMode: 'contain'
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    maxWidth: '50%',
    color: "#B17F2A",
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10
  },
  infoSpeed: {
    color: "#B17F2A",
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 80,
  },
  infoSpeedLabel: {
    color: "#B17F2A",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 20,
    marginTop: -10
  },
  knowMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  knowMoreText: {
    color: "#B17F2A",
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 20,
    marginLeft: '1%'
  },
  DetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  DetailsItem: {
    alignItems: 'center'
  },
  DetailsInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  DetailsLabel: {
    color: "#B17F2A",
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 20,
    marginBottom: 10
  },
  DetailsNumber: {
    color: "#B17F2A",
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 32,
    lineHeight: 32,
    marginRight: 5
  },
  DetailsUnit: {
    color: "#B17F2A",
    fontFamily: 'Ubuntu_300Light',
    fontSize: 20,
    lineHeight: 32
  }
});