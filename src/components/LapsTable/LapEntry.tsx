import {LapEntryProps} from "../../types/table.ts";
import {formatTime} from "../../utils/formatTime.ts";

export const LapEntry = ({lapNumber, lapTime}: LapEntryProps) => {
    return (
        <tr>
            <td>Lap {lapNumber}</td>
            <td>{formatTime(lapTime)}</td>
        </tr>
    );
};