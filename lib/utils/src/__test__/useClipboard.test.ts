import { useClipboard } from '../useClipboard';
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

const writeText = vi.fn();

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe('useClipboard', () => {
  it('should copy text to clipboard', async () => {
    const tesText = 'test';
    const spy = vi.spyOn(navigator.clipboard, 'writeText');

    const { result } = renderHook(() => useClipboard(tesText));
    await act(async () => {
      result.current.copy();
    });
    expect(spy).toHaveBeenCalledWith(tesText);
    expect(result.current.isCopied).toBe(true);
  });
});
