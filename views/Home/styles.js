import { StyleSheet } from "react-native";

const margins = {
  marginLeft: 20,
  marginRight: 20,
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
    flexDirection: "column",
  },
  heading: {
    fontSize: 24,
    marginRight: "30%",
    ...margins,
    marginTop: 40,
    marginBottom: 15,
  },
  imgContainer: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
  },
  box: {
    position: "absolute",
    zIndex: 99,
    paddingTop: 30,
    paddingLeft: 20,
    width: "60%",
  },
  imgText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
  },
  imgBtn: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: "65%",
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  experienceImg: {
    height: 450,
    width: "100%",
    borderRadius: 12,
  },
});

const slider = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginLeft: 20,
  },
  card: {
    height: 200,
    width: 160,
    borderRadius: 12,
    marginRight: 15,
  },
  cardImage: {
    height: 100,
    width: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardInfo: {
    padding: 12,
  },
  place: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  distance: {
    fontSize: 12,
    color: "#fff",
    marginTop: 10,
  },
});

export { main, content, slider };
