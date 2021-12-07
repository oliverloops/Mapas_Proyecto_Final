import React from "react";
import { Text, View, FlatList } from "react-native";

const Slider = () => {
  //Renderable data
  const cards = [
    { place_id: 1, place: "Mazamitla", distance: 2173 },
    { place_id: 2, place: "Tapalpa", distance: 2121 },
  ];

  return (
    <View>
      <FlatList
        horizontal
        data={cards}
        showsHorizontalScrollIndicator={false}
        snapToInterval={200}
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
    <View key={id}>
      <Text>{place}</Text>
      <Text>A {distance} kilometros de distancia</Text>
    </View>
  );
};

export default Slider;
