const ClickCounter = ({numClicks, onClick}) => {
    return (
         <button onClick={onClick} className="counter-button"> {numClicks} marta bosildi </button>
    )
}

export default ClickCounter;