import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
//styles
import { main } from "./styles";

const SearchBar = () => {
  return (
    <View style={main.container}>
      <TouchableOpacity style={main.box}>
        <Icon name={"search"} size={15} color={"rgb(247, 54, 88)"} />
        <Text style={main.textInput}>¿A donde quiere ir?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
