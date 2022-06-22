import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  RefreshControl,
} from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColorPalettes = useCallback(async () => {
    const result = await fetch(
      "https://color-palette-api.kadikraman.now.sh/palettes"
    );
    if (result.ok) {
      const data = await result.json();
      setColorPalettes(data);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getColorPalettes();
    //visual just to show refresh UI
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  useEffect(() => {
    getColorPalettes();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
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
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ColorPaletteModal");
          }}
        >
          <Text style={styles.headerText}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "#FFF",
  },
  headerText: {
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: "bold",
    color: "teal",
  },
});

export default Home;
