import { useState } from "react";
import { Button, StyleSheet, Text, View, Platform } from "react-native";
import { FlashTextWithVibration } from "./FlashText";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function App() {
  const [shouldFlashText, setShouldFlashText] = useState<boolean>(false);

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.demoContainer}>
        <Text style={styles.title}>
          {
            "useFlashAnimation hook and \n  <FlashTextWithVibration /> component demo"
          }
        </Text>

        <FlashTextWithVibration
          flash={shouldFlashText}
          flashSpeedInMs={500}
          text={"Flashing Text"}
          styles={{
            color: "lime",
            fontSize: 35,
            textAlign: "center",
          }}
        />

        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Button
              title="start flash"
              onPress={() => setShouldFlashText(true)}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Button
              title="stop flash"
              onPress={() => setShouldFlashText(false)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },

  demoContainer: {
    height: 500,
    justifyContent: "space-evenly",
    ...(Platform.OS === "android" || Platform.OS === "ios"
      ? { width: screenWidth } // Apply full width on mobile
      : {}), // Do nothing for web
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#aaa",
  },

  title: {
    fontSize: 21,
    textAlign: "center",
    color: "#eee",
    marginHorizontal: 15,
  },
});
