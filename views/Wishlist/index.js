import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
//styles
import { main } from "./styles";
//static assets
import mazamitla from "../../public/mazamitla.webp";

const Wishlist = () => {
  const tabBarheight = useBottomTabBarHeight();

  //places list data
  const places = [
    { id: 1, place: "Título del Lugar" },
    { id: 2, place: "Título del Lugar" },
    { id: 3, place: "Título del Lugar" },
    { id: 4, place: "Título del Lugar" },
  ];

  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={{ paddingBottom: tabBarheight }}
      showsVerticalScrollIndicator={true}
      bounces={true}
    >
      <SafeAreaView style={main.content}>
        <Text style={main.heading}>Lugares Favoritos</Text>
        <View>
          <FlatList
            data={places}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ListBlock id={item.id} />}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const ListBlock = ({ id }) => {
  return (
    <View>
      <TouchableOpacity key={id} style={main.block}>
        <Image source={mazamitla} style={main.image} />
        <Text style={main.text}>Título del Lugar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wishlist;
