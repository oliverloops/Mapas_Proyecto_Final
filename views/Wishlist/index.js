import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
//styles
import { main } from "./styles";

const Wishlist = () => {
  const tabBarheight = useBottomTabBarHeight();
  const [list, setList] = React.useState([]);

  const getWishlist = () => {
    fetch("http://localhost:8000/wishlist", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data.map((elem) => elem));
      });
  };

  React.useEffect(() => {
    getWishlist();
  }, []);

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
          <ScrollView>
            {list.length > 0 ? (
              list.map((item) => (
                <ListBlock
                  id={item.id}
                  title={item.place}
                  image={{ uri: item.place_img }}
                />
              ))
            ) : (
              <Text
                style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}
              >
                Aún no ha guardado lugares.
              </Text>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const ListBlock = ({ id, title, image }) => {
  return (
    <View>
      <TouchableOpacity key={id} style={main.block}>
        <Image source={image} style={main.image} />
        <Text style={main.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wishlist;
