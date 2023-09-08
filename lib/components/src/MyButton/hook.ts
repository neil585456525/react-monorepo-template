import { useCallback, useState } from 'react';

interface UseToggleButtonConfig {
  pressedText: string;
  unpressedText: string;
}

export const useToggleButton = (config: UseToggleButtonConfig) => {
  const { pressedText, unpressedText } = config;

  const [isPressed, setIsPressed] = useState(false);
  const toggle = useCallback(() => setIsPressed((prev) => !prev), []);

  const text = isPressed ? pressedText : unpressedText;

  return { isPressed, toggle, text };
};
