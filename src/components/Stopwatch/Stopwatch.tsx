import {TimeDisplay} from "../TimeDisplay/TimeDisplay.tsx";
import {Button} from "../Button/Button.tsx";
import {LapsTable} from "../LapsTable/LapsTable.tsx";
import {Summary} from "../Summary/Summary.tsx";
import {useEffect, useState} from "react";

export const Stopwatch = () => {
        const [isRunning, setIsRunning] = useState(false);
        const [totalTime, setTotalTime] = useState(0);

        useEffect(() => {
                if(isRunning) {
                const interval = setInterval(() => {
                        setTotalTime((prev) => prev + 100);
                }, 100)

                return () => clearInterval(interval)
                }
        }, [isRunning]);


        const handleStart = () => {
                setIsRunning(true);
        };

        const handleStop = () => {
                setIsRunning(false);
        };
        const handleReset = () => {
                setTotalTime(0);
        };
        return (
        <div>
            <h3>rest of the components</h3>
            <TimeDisplay label="Main" time={totalTime}/>
            <TimeDisplay label="Laps" time={0} />
            <Button label="Start" onClick={handleStart}/>
            <Button label="Stop" onClick={handleStop}/>
            <Button label="Reset" onClick={handleReset}/>
            <Button label="Lap"/>
            <LapsTable/>
            <Summary/>
        </div>
    );
};