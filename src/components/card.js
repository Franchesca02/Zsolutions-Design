import React from 'react';
import Icon from '../images/salad d.jpg';



function Card() {
    return (
        <div className="card">
            <div className="item">
<div className="icon">
<img src={Icon} alt="card icon" />
<div className="card-item">
    <h6>Rose Muffens</h6>
    <h6>12$</h6>
</div>
<div className="texts">
<p>Served with french fries + drink</p>
<p>Choice of: coke, fanta, sprite, Upgrade to large fries, And whooper patty, Add tender crisp patty and more.</p>
</div>
</div>

<div className="ratings">

<div className="stars">
<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span className="last">☆</span>
</div>
<div className="signage">
&#43;
</div>
</div>

</div>
        </div>
    );
}
export default Card;