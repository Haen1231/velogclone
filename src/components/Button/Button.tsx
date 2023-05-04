export interface ButtonProos {
    clickHandler: () => void;
    label: string;
    size: "sm" | "md" | "lg";
    backgroundColor: string;
    color: string;
}

const Button: React.FC<ButtonProos> = ({
                                           label, backgroundColor = "red", size = "md", color, clickHandler,
                                       }: ButtonProos) => {
    let scale = 1;
    if (size === "sm") {
        scale = 0.75;
    }
    if (size === "lg") {
        scale = 1.5;
    }
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale}rem`,
        border: "none",
        color
    };
    return (
        <button onClick={clickHandler} style={style}>
            {label}
        </button>
    );


}
export default Button;