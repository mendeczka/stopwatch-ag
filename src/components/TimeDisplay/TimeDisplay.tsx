import {TimeDisplayProps} from "../../types/time.ts";

export const TimeDisplay = ({label, time}: TimeDisplayProps) => {

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time% 60000) / 1000);
    const miliseconds = Math.floor(time % 1000) / 100;

    return (
        <div>
            <h2>{label}</h2>
            <div>{minutes} : {seconds} : {miliseconds}</div>
        </div>
    );
};