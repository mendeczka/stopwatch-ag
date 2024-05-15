type LapEntryProps = {
    lapNumber: number;
    lapTime: number;
}


export const LapEntry = ({lapNumber, lapTime}: LapEntryProps) => {
    return (
        <tr>
            <td>Okrążenie {lapNumber}</td>
            <td>{lapTime}</td>
        </tr>
    );
};