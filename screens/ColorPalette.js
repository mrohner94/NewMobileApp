import React from "react";
import { FlatList, Text, StyleSheet, Platform, StatusBar } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.colorHex} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
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
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: "#FFF",
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ColorPalette;
