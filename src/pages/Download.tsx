import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


import DinoReload from '../../assets/Reload.png';
import GraminhaEsquerda from '../../assets/GraminhaEsquerda.png';
import GraminhaDireita from '../../assets/GraminhaDireita.png';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Download() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Image source={DinoReload}/>
      </TouchableOpacity>

      {/* <View>
        <Image source={GraminhaEsquerda}/>

        <View>
          <Text>A velocidade da sua internet é</Text>
          <Text>20</Text>
          <Text>mbps</Text>
        </View> 

        <Image source={GraminhaDireita}/>
      </View> */}

      <BorderlessButton>
        <Feather name="plus-circle" size={40} color="#B17F2A" />
        <Text>Saiba mais</Text>
      </BorderlessButton>
    </SafeAreaView>
  );
}