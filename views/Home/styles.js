import { StyleSheet } from "react-native";

const margins = {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 20,
};

const main = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: [{ translateY: 320 }],
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    width: "50%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "teal",
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

const content = StyleSheet.create({
  layout: {
    flex: 1,
    ...margins,
  },

  heading: {
    fontSize: 24,
    marginRight: "30%",
    marginTop: 10,
  },
});

export { main, content };
