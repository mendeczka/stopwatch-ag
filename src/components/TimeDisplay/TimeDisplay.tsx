import {TimeDisplayProps} from "../../types/time.ts";
import {formatTime} from "../../utils/formatTime.ts";
import "./TimeDisplay.css"

export const TimeDisplay = ({label, time}: TimeDisplayProps) => {

    const isLapTime = label.toLowerCase().includes('okrążenia');
    const timeClass = isLapTime ? 'time-display-lap' : 'time-display-time';

    return (
        <div className='time-display'>
            <h2>{label}</h2>
            <div className={timeClass}>{formatTime(time)}</div>
        </div>
    );
};