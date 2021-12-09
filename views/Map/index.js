import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/AntDesign";
//UI comps
import SearchBar from "../../components/SearchBar";

const AnimatedSlider = Animated.createAnimatedComponent(ScrollView);

const Map = () => {
  const [coordinates, setCoordinates] = React.useState({
    lat: 21.019,
    lon: -101.2574,
  });

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SearchBar />
      <MapContent lat={coordinates.lat} lon={coordinates.lon} />
      <MapUIElements setCoordinates={setCoordinates} />
    </View>
  );
};

const MapContent = ({ lat, lon }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 21.019,
        longitude: -101.2574,
      }}
      region={{
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.025,
        longitudeDelta: 0.035,
      }}
    >
      <Marker
        coordinate={{ latitude: parseFloat(lat), longitude: parseFloat(lon) }}
      ></Marker>
      <Marker coordinate={{ latitude: lat, longitude: lon }} />
    </MapView>
  );
};

const MapUIElements = ({ setCoordinates }) => {
  const [cards, setCards] = React.useState([
    { coordinates: { lat: 21.019, lon: -101.2574 } },
  ]);
  const [offsetStart, setOffsetStart] = useState(0);
  const [index, setIndex] = useState(0);
  const x = new Animated.Value(0);

  const updatePosition = () => {
    console.log(index);
    setCoordinates(cards[index].coordinates);
  };

  const updateState = (event) => {
    let position = event.nativeEvent.contentOffset.x;
    let i = Math.floor((position - offsetStart) / 200);

    if (index !== i) {
      updatePosition();
      setIndex(i);
    }
  };

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { x },
        },
      },
    ],
    {
      listener: (event) => updateState(event),
      useNativeDriver: true,
    }
  );

  const _updateRangePositions = (offsetStart) => {
    setOffsetStart(offsetStart);
  };

  //Renderable data
  const getPlaces = () => {
    fetch("http://localhost:8000/places")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.map((elem) => elem));
      });
  };

  React.useEffect(() => {
    getPlaces();
  }, []);

  return (
    <>
      {cards.length > 0 ? (
        <AnimatedSlider
          style={styles.cardContainer}
          onScroll={onScroll}
          scrollEventThrottle={16}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.index}
        >
          {cards.map((item) => (
            <CardsList
              x={x}
              index={index}
              item={item}
              setCoordinates={setCoordinates}
              updateRangePositions={_updateRangePositions}
            />
          ))}
        </AnimatedSlider>
      ) : (
        <></>
      )}
    </>
  );
};

const CardsList = ({ item, x, index, updateRangePositions }) => {
  //heart state handler
  const [save, setSave] = React.useState("hearto");

  const saveToList = () => {
    if (Object.is(save, "hearto")) {
      setSave("heart");
    } else {
      setSave("hearto");
    }
  };

  const { width } = Dimensions.get("window");
  const CARD_WIDTH = width * 0.6;

  const contentInset = () => {
    const insetHorizontal = (width - CARD_WIDTH) / 2;
    return {
      right: insetHorizontal,
      left: insetHorizontal,
    };
  };

  const offsetForItem = (index) => {
    return 200 * index - contentInset().left;
  };

  const offsetCenter = offsetForItem(index);
  const offsetStart = offsetCenter - CARD_WIDTH / 2;
  const offsetEnd = offsetCenter + CARD_WIDTH / 2;

  React.useEffect(() => {
    index === 0 && updateRangePositions(offsetStart);
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [
            {
              scale: x.interpolate({
                inputRange: [offsetStart, offsetCenter, offsetEnd],
                outputRange: [0.9, 1.0, 0.9],
                extrapolate: "clamp",
              }),
            },
          ],
        },
      ]}
      key={item.place_id}
    >
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>{item.place}</Text>
          <Text style={{ fontSize: 13 }}>{item.price}</Text>
        </View>
        <TouchableOpacity onPress={saveToList}>
          <Icon name={save} size={24} color={"rgb(247, 54, 88)"} />
        </TouchableOpacity>
      </View>
    </Animated.View>
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
    paddingLeft: 15,
    transform: [{ translateY: 550 }],
  },
  card: {
    width: 230,
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 94,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
});

export default Map;
