import {TimeDisplayProps} from "../../types/time.ts";
import {formatTime} from "../../utils/formatTime.ts";

export const TimeDisplay = ({label, time}: TimeDisplayProps) => {

    return (
        <div>
            <h2>{label}</h2>
            {/*<div>{minutes} : {seconds} : {miliseconds}</div>*/}
            <div>{formatTime(time)}</div>
        </div>
    );
};