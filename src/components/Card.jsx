export const Card = ({card, onClick}) => {
    return(
        <div 
            className={`card ${card.isFlipped ? "flipped" : ""}`} 
            onClick={() => onClick(card)}>
            <div className="card-front">❔</div>
            <div className="card-back">
                {card.value} 
                 {/* The "value" is basically an attribute to the card variable from the parent class */}
            </div>
        </div>
    )
}