import React from "react";
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
//Global Tab bar config
const tabBarNavigationConfig = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    if (route.name === "Inicio") {
      return <Icon name={"home"} size={25} color={color} />;
    } else if (route.name === "Explorar") {
      return <Icon name={"map"} size={25} color={color} />;
    } else if (route.name === "Favoritos") {
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
        initialRouteName="Inicio"
      >
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Explorar" component={Map} />
        <Tab.Screen name="Favoritos" component={Wishlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
