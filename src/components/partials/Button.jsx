import { ArrowRight } from "akar-icons";

const Button = ({text = "Get in Touch", bgColor}) => {
    const style = bgColor ? { backgroundColor: bgColor } : {};

    return (
        <button className="btn" style={style}>
            {text}
            <ArrowRight strokeWidth={2} size={24} />
        </button>
    );
}   

export default Button;