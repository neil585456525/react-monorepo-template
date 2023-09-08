import { FC, ReactNode } from 'react';

interface MyButtonProps {
  children: ReactNode;
  isLoading: boolean;
}

export const MyButton: FC<MyButtonProps> = (props) => {
  return <button>{props.isLoading ? 'Loading' : props.children}</button>;
};
