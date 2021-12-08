import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
//UI comps
import SearchBar from "../../components/SearchBar";

const Map = () => {
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
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <SearchBar />

        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <View style={{ width: 50, backgroundColor: "tomato" }}>
            <Text style={{ textAlign: "center" }}>X</Text>
          </View>
        </Marker>

        <View style={styles.card}>
          <Text>Título</Text>
          <Text>Descripción</Text>
        </View>
        {/* <FlatList
            style={[{ paddingRight: 20, paddingLeft: 20 }]}
            horizontal
            data={cards}
            showsHorizontalScrollIndicator={false}
            snapToInterval={200}
            decelerationRate="fast"
            snapToAlignment="start"
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text>Título</Text>
                <Text>Descripción</Text>
              </View>
            )}
          /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    width: 200,
    height: 150,
    backgroundColor: "#fff",
    transform: [{ translateY: 500 }],
  },
});

export default Map;
