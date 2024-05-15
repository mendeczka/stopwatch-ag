import {SummaryProps} from "../../types/summary.ts";
import {formatTime} from "../../utils/formatTime.ts";

export const Summary = ({laps, totalTime}: SummaryProps) => {
    const averageLap = laps.reduce((acc, lap) => acc + lap, 0) / laps.length || 0;
    const fastestLap = Math.min(...laps);
    const slowestLap = Math.max(...laps);


    return (
        <div>
            <h2>Podsumowanie</h2>
            <p>Total time: {formatTime(totalTime)}</p>
            <p>Average lap time: {formatTime(averageLap)}</p>
            <p>Fastest lap: {formatTime(fastestLap)}</p>
            <p>Slowest lap: {formatTime(slowestLap)}</p>
            <p>Total number of laps: {laps.length}</p>

        </div>
    );
};