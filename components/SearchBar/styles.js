import { StyleSheet, Platform } from "react-native";

const main = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    height: 42,
    borderRadius: 50,
    position: "absolute",
    zIndex: 99,
    transform: [{ translateY: 60 }],
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textInput: {
    fontSize: 13,
    paddingLeft: 10,
  },
});

export { main };
