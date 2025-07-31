import { useContext } from 'react';
import { TopBarContext } from './TopProgressBarProvider';

export const useTopBar = () => {
  const context = useContext(TopBarContext);
  if (!context) {
    throw new Error('useTopBar must be used within a TopProgressBarProvider');
  }
  return context;
};
