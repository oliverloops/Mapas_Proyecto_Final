import { StyleSheet } from "react-native";

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

export { styles };
