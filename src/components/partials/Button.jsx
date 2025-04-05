import { ArrowRight } from "akar-icons";

const Button = ({text = "Get in Touch", bgColor = "text-color"}) => {
    return (
        <button className={`btn ${bgColor}`}>
            {text}
            <ArrowRight strokeWidth={2} size={24} />
        </button>
    );
}   

export default Button;