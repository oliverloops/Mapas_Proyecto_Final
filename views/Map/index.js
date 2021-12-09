import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
//UI comps
import SearchBar from "../../components/SearchBar";

const Map = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SearchBar />
      <MapContent />
      <MapUIElements />
    </View>
  );
};

const MapContent = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
        <View style={{ width: 50, backgroundColor: "tomato" }}>
          <Text style={{ textAlign: "center" }}>X</Text>
        </View>
      </Marker>

      <Marker coordinate={{ latitude: 37.78, longitude: -122.4324 }} />
    </MapView>
  );
};

const MapUIElements = () => {
  //Renderable data
  const cards = [
    {
      place_id: 1,
      place: "Mazamitla",
      description: "text",
    },
    {
      place_id: 2,
      place: "Tapalpa",
      description: "text",
    },
    {
      place_id: 3,
      place: "Tuxtla",
      description: "text",
    },
    {
      place_id: 4,
      place: "Tuxtla",
      description: "text",
    },
    {
      place_id: 5,
      place: "Tuxtla",
      description: "text",
    },
  ];

  return (
    <FlatList
      style={styles.cardContainer}
      horizontal
      data={cards}
      showsHorizontalScrollIndicator={false}
      snapToInterval={220}
      decelerationRate="fast"
      snapToAlignment="start"
      renderItem={({ item }) => (
        <View style={styles.card} key={item.place_id}>
          <Text>Título</Text>
          <Text>Descripción</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContainer: {
    paddingRight: 20,
    paddingLeft: 10,
    transform: [{ translateY: 550 }],
  },
  card: {
    width: 200,
    height: 150,
    backgroundColor: "#fff",
    marginLeft: 15,
    borderRadius: 12,
  },
});

export default Map;
