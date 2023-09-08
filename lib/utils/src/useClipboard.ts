import { useCallback, useState } from 'react';

export const useClipboard = (text) => {
  const [isCopied, setIsCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }, [text]);
  return { isCopied, copy };
};
