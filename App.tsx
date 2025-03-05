import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { FlashText } from "./FlashingText";

export default function App() {
  return (
    <View style={{ ...styles.container }}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <FlashText
        flashSpeedInMs={500}
        text={"Open up App.tsx to start working on your app!"}
        styles={{
          color: "green",
        }}
      />
      {/* <FlashText flashSpeedInMs={500} text={"fast flash"} />
      <FlashText flashSpeedInMs={2000} text={"slow flash"} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
