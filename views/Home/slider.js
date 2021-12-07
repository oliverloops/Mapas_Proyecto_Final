import React from "react";
import { Text, View, FlatList } from "react-native";
//styles
import { slider } from "./styles";

const Slider = () => {
  //Renderable data
  const cards = [
    { place_id: 1, place: "Mazamitla", distance: 2173 },
    { place_id: 2, place: "Tapalpa", distance: 2121 },
    { place_id: 3, place: "Tuxtla", distance: 3654 },
    { place_id: 4, place: "San Miguel de Allende", distance: 56 },
    { place_id: 5, place: "Orizaba", distance: 2846 },
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
          />
        )}
      />
    </View>
  );
};

const Card = ({ id, place, distance }) => {
  return (
    <View key={id} style={slider.card}>
      <Text>{place}</Text>
      <Text>A {distance} kilometros de distancia</Text>
    </View>
  );
};

export default Slider;
