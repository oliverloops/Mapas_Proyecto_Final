import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/AntDesign";
//UI comps
import SearchBar from "../../components/SearchBar";
//static assets
import mazamitla from "../../public/mazamitla.webp";
import tapalpa from "../../public/tapalpa.jpeg";
import tuxtla from "../../public/tuxtla.jpg";
import sanMiguel from "../../public/san_miguel.jpg";
import orizaba from "../../public/orizaba.jpg";

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
        latitude: 21.019,
        longitude: -101.2574,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
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
  const [cards, setCards] = React.useState([]);

  const getPlaces = () => {
    fetch("http://localhost:8000/places")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.map((elem) => elem));
      });
  };

  // React.useEffect(() => {
  //   getPlaces();
  // }, []);

  //Renderable data
  const data = [
    {
      place_id: 1,
      image: mazamitla,
      place: "Guanajuato",
      description: "Un lugar mágico",
    },
    {
      place_id: 2,
      image: tapalpa,
      place: "Tapalpa",
      description: "Un lugar mágico",
    },
    {
      place_id: 3,
      image: tuxtla,
      place: "Tuxtla",
      description: "Un lugar mágico",
    },
    {
      place_id: 4,
      image: sanMiguel,
      place: "San Miguel",
      description: "Un lugar mágico",
    },
    {
      place_id: 5,
      image: orizaba,
      place: "Tuxtla",
      description: "Un lugar mágico",
    },
  ];

  return (
    <>
      {/* {data.length > 0 ? (
        <ScrollView style={styles.cardContainer} horizontal>
          {data.map((item) => (
            <CardsList item={item} />
          ))}
        </ScrollView>
      ) : (
        <></>
      )} */}
      <FlatList
        style={styles.cardContainer}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        snapToInterval={160}
        decelerationRate="fast"
        snapToAlignment="start"
        renderItem={({ item }) => <CardsList item={item} />}
      />
    </>
  );
};

const CardsList = ({ item }) => {
  //heart state handler
  const [save, setSave] = React.useState("hearto");

  const saveToList = () => {
    if (Object.is(save, "hearto")) {
      setSave("heart");
    } else {
      setSave("hearto");
    }
  };

  return (
    <View style={styles.card} key={item.place_id}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.info}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>{item.place}</Text>
          <Text style={{ fontSize: 12 }}>{item.description}</Text>
        </View>
        <TouchableOpacity onPress={saveToList}>
          <Icon name={save} size={26} color={"rgb(247, 54, 88)"} />
        </TouchableOpacity>
      </View>
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
  image: {
    width: "100%",
    height: 92,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

export default Map;
