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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Explore") {
              iconName = "map";
            } else if (route.name === "Wishlist") {
              iconName = "heart";
            }

            return <Icon name={iconName} size={28} />;
          },
          tabBarActiveTintColor: "rgb(247, 54, 88)",
          tabBarInactiveTintColor: "rgb(198, 198, 198)",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Map} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
