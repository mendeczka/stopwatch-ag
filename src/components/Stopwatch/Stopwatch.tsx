import {TimeDisplay} from "../TimeDisplay/TimeDisplay.tsx";
import {Button} from "../Button/Button.tsx";
import {LapsTable} from "../LapsTable/LapsTable.tsx";
import {Summary} from "../Summary/Summary.tsx";

export const Stopwatch = () => {
    return (
        <div>
            <h3>rest of the components</h3>
            <TimeDisplay label="Main"/>
            <TimeDisplay label="Laps"/>
            <Button label="Start"/>
            <Button label="Stop"/>
            <Button label="Reset"/>
            <Button label="Lap"/>
            <LapsTable/>
            <Summary/>
        </div>
    );
};