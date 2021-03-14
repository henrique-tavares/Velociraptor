import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import DinoPlay from "../../assets/Play.png";
import Background from "../../assets/BackgroundHome.png";

export default function Landing() {

  const navigation = useNavigation();

  return (
    <View style={ styles.container }>
      <ImageBackground source={ Background } style={ styles.littleGrass }>
        <View style={ styles.dinoPlayContainer }>
          <TouchableOpacity
            onPress={ () => navigation.reset({ index: 0, routes: [ { name: "Download" } ] }) }
          >
            <Image source={ DinoPlay } style={ styles.dinoPlay } />
          </TouchableOpacity>

          <Text style={ styles.dinoPlayLabel }>Aperte para iniciar</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dinoPlayContainer: {
    marginBottom: "50%",
    alignItems: "center"
  },
  dinoPlay: {
    resizeMode: "contain"
  },
  dinoPlayLabel: {
    marginTop: "10%",
    color: "#B17F2A",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 26,
  },
  littleGrass: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center"
  }
});