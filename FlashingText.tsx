import { useEffect, useRef } from "react";
import {
  Alert,
  Animated,
  Button,
  StyleProp,
  StyleSheetProperties,
  Text,
  TextStyle,
  View,
} from "react-native";
import { useFlashAnimation } from "./useFlashAnimation";

interface FlashTextProps {
  flashSpeedInMs: number;
  text: string;
  styles?: StyleProp<TextStyle>;
}

export const FlashText = ({ flashSpeedInMs, text, styles }: FlashTextProps) => {
  const [fadeAnimOpacityVal, startFlashFn, stopFlashFn] =
    useFlashAnimation(flashSpeedInMs);

  // useEffect(() => {
  //   startFlashFn();
  // }, []);

  return (
    <View>
      <Animated.Text style={[{ opacity: fadeAnimOpacityVal }, styles]}>
        {text}
      </Animated.Text>
      <Button title="start flash" onPress={() => startFlashFn()} />
      <Button title="stop flash" onPress={() => stopFlashFn()} />
    </View>
  );
};
