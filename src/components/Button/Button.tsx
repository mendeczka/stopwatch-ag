type ButtonProps = {
    label: string;
    onClick?: () => void;
};
export const Button = ({label}: ButtonProps) => {
    return (
        <button>
            {label}
        </button>
    );
};