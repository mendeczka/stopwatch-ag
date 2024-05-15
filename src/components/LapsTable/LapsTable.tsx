import {LapEntry} from "./LapEntry.tsx";

export const LapsTable = () => {
    return (
        <table>
            <thead>
            <tr>
                <th>Lp</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
                <LapEntry />
            </tbody>
        </table>
    );
};