import React, { createContext, useRef } from 'react';
import TopProgressBar from './TopProgressBar';

export const TopBarContext = createContext(null);

const TopProgressBarProvider = ({
  children,
  color,
  height,
  speed,
}) => {
  const barRef = useRef();

  const api = {
    start: () => barRef.current?.start(),
    set: (value) => barRef.current?.set(value),
    step: (byValue) => barRef.current?.step(byValue),
    complete: () => barRef.current?.complete(),
  };

  return (
    <TopBarContext.Provider value={api}>
      <TopProgressBar ref={barRef} color={color} height={height} speed={speed} />
      {children}
    </TopBarContext.Provider>
  );
};

export default TopProgressBarProvider;
