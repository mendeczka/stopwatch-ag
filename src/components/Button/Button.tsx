import {ButtonProps} from "../../types/btn.ts";

export const Button = ({label, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};