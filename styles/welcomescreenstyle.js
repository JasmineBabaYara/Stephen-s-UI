import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcomecontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },

  welcomeimage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  blurviewcontainer: {
    borderRadius: 59,
    overflow: "hidden",
    //width: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    top: "55%",
    left: 20,
    right: 20,
  },

  blurview: {
    alignItems: "center",
    height: 320,
  },

  welcometext: {
    display: "flex",
  },

  welcomeintro: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    //width:190,
    marginTop: 40,
  },

  welcomesecondintro: {
    color: "#fff",
    marginTop: 30,
    fontSize: 15,
    alignSelf: "center",
  },

  login: {
    backgroundColor: "#ff8c00",
    width: "80%",
    padding: 17,
    borderRadius: 10,
    marginTop: 36,
  },

  logintext: {
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
  },

  option: {
    textAlign: "center",
    fontSize: 17,
    flexDirection: "row",
    marginTop: 20,
    letterSpacing: 1,
  },

  optiontext1: {
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
  },

  optiontext2: {
    textAlign: "center",
    fontSize: 17,
    color: "#ff8c00",
  },
  lineargradient: {
    height: "15%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
