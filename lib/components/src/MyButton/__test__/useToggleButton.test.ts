import { renderHook, act } from '@testing-library/react';
import { useToggleButton } from '../hook';
import { describe, it, expect } from 'vitest';

describe('useToggleButton', () => {
  it('should return correct text when pressed', () => {
    const { result } = renderHook(() =>
      useToggleButton({ pressedText: 'pressed', unpressedText: 'unpressed' })
    );

    expect(result.current.text).toBe('unpressed');

    act(() => result.current.toggle());

    expect(result.current.text).toBe('pressed');
  });
});
