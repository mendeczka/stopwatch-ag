export interface ButtonProps {
    onClick: () => void;
    label: string;
    type: 'primary' | 'secondary' | 'danger' | 'default';
}