import { useEffect } from "react";
import { Animated, StyleProp, TextStyle, Vibration } from "react-native";
import { useFlashingAnimation } from "./useFlashingAnimation";

interface FlashTextProps {
  flashSpeedInMs: number;
  text: string;
  flash: boolean;
  styles?: StyleProp<TextStyle>;
  onFlashStarted?: (flashDurationInMs: number) => void;
}

export const FlashText = ({
  flashSpeedInMs,
  text,
  styles,
  flash = false,
  onFlashStarted,
}: FlashTextProps) => {
  const [fadeAnimOpacityVal, startFlashFn, stopFlashFn] = useFlashingAnimation(
    flashSpeedInMs,
    onFlashStarted
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

export const FlashTextWithVibration = (props: FlashTextProps) => {
  const vibratePhone = (durationInMs: number) => {
    Vibration.vibrate(durationInMs);
  };

  return <FlashText {...props} onFlashStarted={vibratePhone} />;
};
