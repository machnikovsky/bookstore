import shape from '../assets/shapes/shape-bottom-left.png'
import scott from '../assets/other/scott.png'

const BottomShape = () => {
    return (
            <div className="bottom-shape-container">
                <img className="bottom-shape" src={shape} alt="bottom-shape" />
                <img className="scott" src={scott} alt="scott" />
            </div>
    );
}

export default BottomShape;