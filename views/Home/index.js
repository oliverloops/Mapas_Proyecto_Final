import React from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
//styles
import { content, main } from "./styles";
//UI comps
import Slider from "./slider";
//assets
import place from "../../public/geodesica.jpeg";

const Home = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
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
      </View>
    </>
  );
};

const RandomButton = () => {
  return (
    <Pressable style={main.button}>
      <Text style={main.buttonText}>Estoy libre</Text>
    </Pressable>
  );
};

export default Home;
