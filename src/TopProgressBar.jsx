import React, {
    useImperativeHandle,
    forwardRef,
    useEffect,
    useRef,
    useState,
  } from 'react';
  
  const TopProgressBar = forwardRef(({ color = '#2563eb', height = '4px', speed = 300 }, ref) => {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    const intervalRef = useRef(null);
  
    // CSS styles
    const barStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      height: height,
      backgroundColor: color,
      width: `${progress}%`,
      transition: 'width 0.2s ease',
      zIndex: 9999,
      opacity: visible ? 1 : 0,
    };
  
    // Auto-incrementing logic
    const startAutoProgress = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + Math.random() * 5;
          return prev;
        });
      }, speed);
    };
  
    const stopAutoProgress = () => {
      clearInterval(intervalRef.current);
    };
  
    useImperativeHandle(ref, () => ({
      start: () => {
        setVisible(true);
        setProgress(5);
        startAutoProgress();
      },
      complete: () => {
        stopAutoProgress();
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          setProgress(0);
        }, 400);
      },
      set: (value) => {
        stopAutoProgress();
        setVisible(true);
        setProgress(Math.max(0, Math.min(value, 100)));
        if (value >= 100) {
          setTimeout(() => {
            setVisible(false);
            setProgress(0);
          }, 400);
        }
      },
      step: (stepValue) => {
        setVisible(true);
        setProgress((prev) => {
          const next = Math.min(prev + stepValue, 100);
          if (next >= 100) {
            stopAutoProgress();
            setTimeout(() => {
              setVisible(false);
              setProgress(0);
            }, 400);
          }
          return next;
        });
      },
    }));
  
    useEffect(() => {
      return () => stopAutoProgress();
    }, []);
  
    return <div style={barStyle} />;
  });
  
  export default TopProgressBar;
  