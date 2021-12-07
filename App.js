import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Screens
import Home from "./views/Home";
import Map from "./views/Map";
import Wishlist from "./views/Wishlist";

//Navigator
const Tab = createBottomTabNavigator();

const tabBarNavigationConfig = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    if (route.name === "Home") {
      return <Icon name={"home"} size={25} color={color} />;
    } else if (route.name === "Explore") {
      return <Icon name={"map"} size={25} color={color} />;
    } else if (route.name === "Wishlist") {
      return <Icon name={"heart"} size={25} color={color} />;
    }
  },
  tabBarActiveTintColor: "rgb(247, 54, 88)",
  tabBarInactiveTintColor: "rgb(198, 198, 198)",
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={tabBarNavigationConfig}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Map} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
