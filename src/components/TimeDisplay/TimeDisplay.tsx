type TimeDisplayProps = {
    label: string;
}

export const TimeDisplay = ({label}: TimeDisplayProps) => {
    return (
        <div>
            <h2>TimeDisplay Component {label}</h2>
        </div>
    );
};