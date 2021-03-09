import React from 'react';
import { Image, Text, View } from 'react-native';

import DinoReload from '../../assets/Reload.png';
import GraminhaEsquerda from '../../assets/GraminhaEsquerda.png';
import GraminhaDireita from '../../assets/GraminhaDireita.png';

export default function Details() {
  return (
    <View>
      <Image source={DinoReload}/>
      <View>
        <Image source={GraminhaEsquerda}/>
        <View>
          <Text>
            A velocidade da sua internet é
          </Text>
          <Text>
            20
          </Text>
          <Text>
            Mbps
          </Text>
        </View> 
        <Image source={GraminhaDireita}/>
      </View>
      <View>
        <View>
        <Text>
            Upload
          </Text>
          <Text>
            16
          </Text>
          <Text>
            Mbps
          </Text>
        </View>
        <View>
          <Text>
            Latência
          </Text>
          <Text>
            0
          </Text>
          <Text>
            ms
          </Text>
        </View>
      </View>
    </View>
  );
}