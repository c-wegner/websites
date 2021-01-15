import React, {useState, useEffect} from 'react';

const buildThresholdList=(steps=1)=>{
  let thresholds = []
  for(let i=1; i<=steps; i++){
    let ratio = i/steps;
    thresholds.push(ratio)
  }
  thresholds.push(0)
  return thresholds
}

export function useObserver(ref, steps=100, rootMargin = '-10px') {
  // State and setter for storing whether element is visible
  const [ratio, setRatio] = useState(0);
  const [visible, setVisible] = useState(false)

  const options = {
    root: null,
    rootMargin: rootMargin,
    threshold: buildThresholdList(steps)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setRatio(entry.intersectionRatio);
        if(entry.isIntersecting){
          setVisible(true)
        }else{
          setVisible(false)
        }
      },
      options

    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return [ratio, visible];
}