import React from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
//styles
import { slider } from "./styles";
//static assets
import mazamitla from "../../public/mazamitla.webp";
import tapalpa from "../../public/tapalpa.jpeg";
import tuxtla from "../../public/tuxtla.jpg";
import sanMiguel from "../../public/san_miguel.jpg";
import orizaba from "../../public/orizaba.jpg";

const Slider = () => {
  //Renderable data
  const cards = [
    {
      place_id: 1,
      place: "Mazamitla",
      image: mazamitla,
      distance: 2173,
    },
    {
      place_id: 2,
      place: "Tapalpa",
      image: tapalpa,
      distance: 2121,
    },
    {
      place_id: 3,
      place: "Tuxtla",
      image: tuxtla,
      distance: 3654,
    },
    {
      place_id: 4,
      place: "San Miguel",
      image: sanMiguel,
      distance: 56,
    },
    {
      place_id: 5,
      place: "Orizaba",
      image: orizaba,
      distance: 2846,
    },
  ];

  return (
    <View>
      <FlatList
        style={{ paddingTop: 20, paddingRight: 20, paddingLeft: 20 }}
        horizontal
        data={cards}
        showsHorizontalScrollIndicator={false}
        snapToInterval={160}
        decelerationRate="fast"
        snapToAlignment="start"
        renderItem={({ item }) => (
          <Card
            id={item.place_id}
            place={item.place}
            distance={item.distance}
            imgUrl={item.image}
          />
        )}
      />
    </View>
  );
};

const Card = ({ id, place, distance, imgUrl }) => {
  //Random background colors
  const bgColors = [
    "#2ec4b6",
    "#ef476f",
    "#fb8500",
    "#ff9f1c",
    "#118ab2",
    "#b185db",
    "#43aa8b",
    "#3c6997",
    "#577590",
  ];

  return (
    <TouchableOpacity
      key={id}
      style={[
        slider.card,
        { backgroundColor: bgColors[Math.floor(Math.random() * 9)] },
      ]}
    >
      <Image style={slider.cardImage} source={imgUrl} />
      <View style={slider.cardInfo}>
        <Text style={slider.place}>{place}</Text>
        <Text style={slider.distance}>
          A {distance} kilometros de distancia
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Slider;
