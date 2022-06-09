import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";

import ColorBox from "./components/ColorBox";

const App = () => {
  const colorBoxes = [
    { colorName: "Cyan", colorHex: "#2aa198" },
    { colorName: "Blue", colorHex: "#268bd2" },
    { colorName: "Magenta", colorHex: "#d33682" },
    { colorName: "Orange", colorHex: "#cb4b16" },
  ];
  const COLORS = [
    { colorName: "Base03", colorHex: "#002b36" },
    { colorName: "Base02", colorHex: "#073642" },
    { colorName: "Base01", colorHex: "#586e75" },
    { colorName: "Base00", colorHex: "#657b83" },
    { colorName: "Base0", colorHex: "#839496" },
    { colorName: "Base1", colorHex: "#93a1a1" },
    { colorName: "Base2", colorHex: "#eee8d5" },
    { colorName: "Base3", colorHex: "#fdf6e3" },
    { colorName: "Yellow", colorHex: "#b58900" },
    { colorName: "Orange", colorHex: "#cb4b16" },
    { colorName: "Red", colorHex: "#dc322f" },
    { colorName: "Magenta", colorHex: "#d33682" },
    { colorName: "Violet", colorHex: "#6c71c4" },
    { colorName: "Blue", colorHex: "#268bd2" },
    { colorName: "Cyan", colorHex: "#2aa198" },
    { colorName: "Green", colorHex: "#859900" },
  ];
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={[styles.container]}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <FlatList
          data={COLORS}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} colorHex={item.colorHex} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomShow: {
    marginBottom: 240,
  },
  textWhite: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewSizeColorBox: {
    paddingVertical: 16,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
  container: {
    alignContent: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
