import { useState,  useEffect } from 'react'

export function useCurrentTime() {
  const [today, setToday] = useState(new Date());
    useEffect(() => {
      setInterval(() => {
        setToday(new Date());
      }, 1000);
    }, []);

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    
    return {
      hours,
      minutes,
      seconds
    }
}