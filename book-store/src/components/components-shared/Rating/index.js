function Rating ({ rating }) {

    return (
        <div className="rating">
            <div className="rating__body">
                <div className="rating__body_active" style={{width: `${((+rating + +rating)*10)}%`,}}>
                </div>
                <div className="rating__body_items">
                    <input type="radio" className="rating__body_items__item" value="1" name="rating"/>
                    <input type="radio" className="rating__body_items__item" value="2" name="rating"/>
                    <input type="radio" className="rating__body_items__item" value="3" name="rating"/>
                    <input type="radio" className="rating__body_items__item" value="4" name="rating"/>
                    <input type="radio" className="rating__body_items__item" value="5" name="rating"/>
                </div>
            </div>
        </div>
    )
}

export default Rating