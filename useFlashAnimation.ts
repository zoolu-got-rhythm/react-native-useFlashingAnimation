import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const useFlashAnimation = (
  flashSpeedInMs: number,
  onFlashStarted?: (flashDurationInMs: number) => void
): [Animated.Value, () => void, () => void] => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Start opacity at 0

  function fadeIn() {
    Animated.timing(fadeAnim, {
      toValue: 1, // End opacity at 1
      duration: flashSpeedInMs, // Duration in milliseconds
      useNativeDriver: false, 
    }).start();
  }

  function fadeOut() {
    Animated.timing(fadeAnim, {
      toValue: 0, // End opacity at 0
      duration: flashSpeedInMs, // Duration in milliseconds
      useNativeDriver: false,
    }).start();
  }

  const toggleFadeAnimationRef = useRef<boolean>(true);

  function toggle() {
    if (toggleFadeAnimationRef.current) {
      onFlashStarted && onFlashStarted(flashSpeedInMs);
      fadeIn();
    } else {
      fadeOut();
    }
    toggleFadeAnimationRef.current = !toggleFadeAnimationRef.current;
  }

  const isAnimatingRef = useRef<boolean>(false);
  const timerIdRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      // clean up
      window.clearInterval(timerIdRef.current);
      // fadeAnim.setValue(1);
    };
  }, []);

  return [
    fadeAnim,
    // start
    () => {
      if (!isAnimatingRef.current) {
        toggle();
        timerIdRef.current = window.setInterval(() => {
          toggle();
        }, flashSpeedInMs);
      }
      isAnimatingRef.current = true;
    },

    // stop
    () => {
      if (isAnimatingRef.current) {
        window.clearInterval(timerIdRef.current);
        fadeAnim.setValue(1);
        isAnimatingRef.current = false;
      }
    },
  ];
};
