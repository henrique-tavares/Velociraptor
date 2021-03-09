import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native';

import DinoPlay from '../../assets/Play.png';
import Graminha from '../../assets/Graminha.png';

export default function Landing() {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Download")}>
        <Image source={DinoPlay}/>
      </TouchableOpacity>

      <Text>Aperte para iniciar</Text>

      <Image source={Graminha}/>
    </SafeAreaView>
  );
}