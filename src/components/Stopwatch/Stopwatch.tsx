import {TimeDisplay} from "../TimeDisplay/TimeDisplay.tsx";
import {Button} from "../Button/Button.tsx";
import {LapsTable} from "../LapsTable/LapsTable.tsx";
import {Summary} from "../Summary/Summary.tsx";
import {useEffect, useState} from "react";

export const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [laps, setLaps] = useState<number[]>([]);
    const [showSummary, setShowSummary] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTotalTime((prev) => prev + 100);
                setLapTime((prev) => prev + 100);
            }, 100)

            return () => clearInterval(interval)
        }
    }, [isRunning]);


    const handleStart = () => {
        setIsRunning(true);
        setShowSummary(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setShowSummary(true);
    };
    const handleReset = () => {
        setTotalTime(0);
        setLapTime(0);
        setLaps([]);
    };
    const handleLap = () => {
        setLaps([...laps, lapTime]);
        setLapTime(0);
    };

    if(showSummary) {
        return <Summary totalTime={totalTime} laps={laps}/>
    }

    return (
        <div>
            <TimeDisplay label="Full time" time={totalTime}/>
            <TimeDisplay label="Lap time" time={lapTime}/>
            <Button label="Start" type='primary' onClick={handleStart}/>
            <Button label="Stop" type='secondary' onClick={handleStop}/>
            <Button label="Reset" type='danger' onClick={handleReset}/>
            <Button label="Lap" type='default' onClick={handleLap}/>
            {lapTime ? <LapsTable laps={laps}/> : null}
        </div>
    );
};