import {TimeDisplayProps} from "../../types/time.ts";

export const TimeDisplay = ({label, time}: TimeDisplayProps) => {
    return (
        <div>
            <h2>{label}</h2>
            <div>{time}</div>
        </div>
    );
};