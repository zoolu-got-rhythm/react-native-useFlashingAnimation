import { useEffect, useRef } from "react";
import { Animated, StyleProp, TextStyle, Vibration } from "react-native";
import { useFlashAnimation } from "./useFlashAnimation";

interface FlashTextProps {
  flashSpeedInMs: number;
  text: string;
  flash: boolean;
  styles?: StyleProp<TextStyle>;
}

export const FlashTextVibrate = ({
  flashSpeedInMs,
  text,
  styles,
  flash = false,
}: FlashTextProps) => {
  const vibratePhone = (durationInMs: number) => {
    Vibration.vibrate(durationInMs);
  };

  const [fadeAnimOpacityVal, startFlashFn, stopFlashFn] = useFlashAnimation(
    flashSpeedInMs,
    vibratePhone
  );

  useEffect(() => {
    if (flash) {
      startFlashFn();
    } else {
      stopFlashFn();
    }
  }, [flash]);

  return (
    <Animated.Text style={[{ opacity: fadeAnimOpacityVal }, styles]}>
      {text}
    </Animated.Text>
  );
};
