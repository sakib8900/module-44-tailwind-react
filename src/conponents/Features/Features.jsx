import PropTypes from "prop-types";
import {AiFillAlipayCircle} from "react-icons/ai"

const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2"><AiFillAlipayCircle className="text-green-500"></AiFillAlipayCircle> {feature}</p>
        </div>
    );
};

Features.propTypes ={
    feature: PropTypes.string.isRequired
}

export default Features;