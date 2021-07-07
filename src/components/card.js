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
{/* <div className="texts"> */}
<p>Served with french toast + cakes</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, soluta.</p>
{/* </div> */}
</div>

<div className="ratings">

<div className="stars">
<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>☆</span>
</div>
<div className="signage">
&#10014;
</div>
</div>

</div>
        </div>
    );
}
export default Card;