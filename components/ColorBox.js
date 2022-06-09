import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };
  return (
    <View style={[boxColor, styles.viewSizeColorBox]}>
      <Text style={styles.textWhite}>
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
});

export default ColorBox;
