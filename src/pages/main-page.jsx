import { useContext } from 'react';
import { CurrentTimeContext } from '../data/time-context';
import { DigitalClock } from '../components/digital-clock';
import { AnalogClock } from '../components/analog-clock';
import { useCurrentTime } from '../data/use-current-time';
import { StackLayout } from '../components/layout';

export function MainPage() {  
  const { hours, minutes, seconds } = useContext(CurrentTimeContext);

  return (
    <StackLayout gap={5} justifyItems='center'>
      <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
      <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
    </StackLayout>
  )
}
