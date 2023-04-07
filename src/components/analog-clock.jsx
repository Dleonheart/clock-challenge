
import { remap } from "../utils/remap";

const rotationTransformString = (degrees) => `rotate(${degrees}deg)`; 

export function AnalogClock({ hours = 0, minutes = 0, seconds = 0}) {

  const rotationSeconds = remap(seconds, 0, 60, 0, 360);
  const rotationMinutes = remap(minutes, 0, 60, 0, 360);
  const rotationHours = remap(hours % 12, 0, 12, 0, 360);
  
  return (
    <div className="analog-clock">
      <div className="hour-bar clock-bar" style={{transform: rotationTransformString(rotationHours)}}></div>
      <div className="minutes-bar clock-bar" style={{transform: rotationTransformString(rotationMinutes)}}></div>
      <div className="seconds-bar clock-bar" style={{transform: rotationTransformString(rotationSeconds)}}></div>
    </div>
  );
}
  