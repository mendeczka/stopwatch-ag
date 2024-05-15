import {LapEntryProps} from "../../types/table.ts";

export const LapEntry = ({lapNumber, lapTime}: LapEntryProps) => {
    return (
        <tr>
            <td>Okrążenie {lapNumber}</td>
            <td>{lapTime}</td>
        </tr>
    );
};