import {LapEntry} from "./LapEntry.tsx";

type LapsTableProps = {
    laps: number[];
}

export const LapsTable = ({laps}: LapsTableProps) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Lp</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            {laps.map((lap,index) => <LapEntry key={index} lapTime={lap} lapNumber={index+1}/>)}
            </tbody>
        </table>
    );
};