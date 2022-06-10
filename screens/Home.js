import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import PalettePreview from "../components/PalettePreview";

const SOLARIZED = [
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

const RAINBOW = [
  { colorName: "Red", colorHex: "#FF0000" },
  { colorName: "Orange", colorHex: "#FF7F00" },
  { colorName: "Yellow", colorHex: "#FFFF00" },
  { colorName: "Green", colorHex: "#00FF00" },
  { colorName: "Violet", colorHex: "#8B00FF" },
];

const FRONTEND_MASTERS = [
  { colorName: "Red", colorHex: "#c02d28" },
  { colorName: "Black", colorHex: "#3e3e3e" },
  { colorName: "Grey", colorHex: "#8a8a8a" },
  { colorName: "White", colorHex: "#ffffff" },
  { colorName: "Orange", colorHex: "#e66225" },
];

const COLOR_PALETTES = [
  { paletteName: "Solarized", colors: SOLARIZED },
  { paletteName: "Frontend Masters", colors: FRONTEND_MASTERS },
  { paletteName: "Rainbow", colors: RAINBOW },
];

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate("ColorPalette", {
              paletteName: item.paletteName,
              colors: item.colors,
            });
          }}
          palette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "#FFF",
  },
});

export default Home;
