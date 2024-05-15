import { LapsTableProps } from "../../types/table.ts";
import {LapEntry} from "./LapEntry.tsx";
import "./LapsTable.css";


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
            {laps.map((lap,index) => (
                <LapEntry key={index} lapTime={lap} lapNumber={index+1}/>
            ))}
            </tbody>
        </table>
    );
};