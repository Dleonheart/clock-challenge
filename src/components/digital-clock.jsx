import { formatNumber } from "../utils/format-number";
import { InlineLayout } from "./layout";

export function DigitalClock({ hours = 0, minutes = 0, seconds = 0}) {
  const displayHours = formatNumber(hours);
  const displayMinutes = formatNumber(minutes);
  const displaySeconds = formatNumber(seconds);
  return (
    <div className='digital-clock'>
      <InlineLayout gap={0.5} justifyItems="center">
        <div className="time-cell">
          {displayHours}  
        </div>
        <div className="time-separator">:</div>
        <div className="time-cell">
          {displayMinutes}  
        </div>
        <div className="time-separator">:</div>
        <div className="time-cell">
          {displaySeconds}  
        </div>
      </InlineLayout>
    </div>
  );
}
