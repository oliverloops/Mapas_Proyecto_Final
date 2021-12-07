import { StyleSheet } from "react-native";

const margins = {
  marginLeft: 20,
  marginRight: 20,
};

const main = StyleSheet.create({
  layout: {
    flex: 1,
  },
  content: {
    transform: [{ translateY: 60 }],
    ...margins,
  },
  heading: {
    fontSize: 23,
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 20,
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 12,
  },
});

export { main };
