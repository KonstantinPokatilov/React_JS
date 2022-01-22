
export const Button = ({ title, onButtonClick }) => {
    return <button onClick={() => onButtonClick('Piter')}>{title}</button>
}