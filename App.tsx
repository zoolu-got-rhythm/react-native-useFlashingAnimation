import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlashTextWithVibration } from "./FlashingTextVibrate";

export default function App() {
  const [shouldFlashText, setShouldFlashText] = useState<boolean>(false);

  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          height: 500,
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "#eee",
            marginHorizontal: 15,
          }}
        >
          {"useFlashAnimation hook and <FlashTextWithVibration /> component demo"}
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

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 10,
            backgroundColor: "#aaa",
          }}
        >
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
});
