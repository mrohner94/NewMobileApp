import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: "pink",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  AndroidSafeArea: {
    flex: 2,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
