import {ButtonProps} from "../../types/btn.ts";
import "./Button.css";

export const Button = ({label, type, onClick}: ButtonProps) => {

    const getClass = () => {
        switch (type) {
            case "primary":
                return "btn btn-primary";
            case "secondary":
                return "btn btn-secondary";
            case "danger":
                return "btn btn-danger";
            default:
                return "btn";
        }
    }

    return (
        <button className={getClass()} onClick={onClick}>
            {label}
        </button>
    );
};