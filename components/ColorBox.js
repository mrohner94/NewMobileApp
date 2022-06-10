import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };
  const textColor = {
    color:
      parseInt(colorHex.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View style={[boxColor, styles.viewSizeColorBox]}>
      <Text style={[styles.textWhite, textColor]}>
        {colorName}: {colorHex}
      </Text>
    </View>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorBox;
