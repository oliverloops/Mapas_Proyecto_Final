import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
//styles
import { content, main } from "./styles";
//UI comps
import SearchBar from "../../components/SearchBar";
import Slider from "./slider";
//assets
import place from "../../public/geodesica.jpeg";
import diving from "../../public/diving.jpg";
import kite from "../../public/kite_boarding.jpg";

const Home = () => {
  const tabBarheight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={{ paddingBottom: tabBarheight }}
      showsVerticalScrollIndicator={false}
      bounces={true}
    >
      <Content />
    </ScrollView>
  );
};

const Content = () => {
  return (
    <>
      <View style={main.layout}>
        <SearchBar />
        <Image style={{ height: 500 }} source={place} />
        <View style={main.titleContainer}>
          <Text style={main.title}>¿No sabe a donde ir?</Text>
          <Text style={main.title}>Perfecto.</Text>
          <RandomButton />
        </View>
      </View>
      <View style={content.layout}>
        <Text style={[content.heading, { width: "60%" }]}>
          Inspiración para su siguiente viaje
        </Text>
        <Slider />
      </View>
      <View style={content.layout}>
        <Text style={content.heading}>Descubre las mejores experiencias</Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={content.imgContainer}>
            <View style={content.box}>
              <Text style={content.imgText}>Experiencias para tu viaje</Text>
              <Pressable style={content.imgBtn}>
                <Text>Experiencias</Text>
              </Pressable>
            </View>
            <ImageBackground style={content.experienceImg} source={diving}>
              <LinearGradient
                style={{
                  flex: 1,
                }}
                colors={["transparent", "rgba(0, 0, 0, 0.45)"]}
              />
            </ImageBackground>
          </View>
          <View style={content.imgContainer}>
            <View style={content.box}>
              <Text style={content.imgText}>Actividades para tu viaje</Text>
              <Pressable style={content.imgBtn}>
                <Text>Actividades</Text>
              </Pressable>
            </View>
            <ImageBackground style={content.experienceImg} source={kite}>
              <LinearGradient
                style={{
                  flex: 1,
                  borderRadius: 12,
                }}
                colors={["transparent", "rgba(0, 0, 0, 0.45)"]}
              />
            </ImageBackground>
          </View>
        </View>
      </View>
    </>
  );
};

const RandomButton = () => {
  return (
    <Pressable style={main.button}>
      <Text style={main.buttonText}>Aventurarse</Text>
    </Pressable>
  );
};

export default Home;
