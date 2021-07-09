import React, { useState, useEffect } from 'react';
    
function Card() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    
    useEffect(() => {
     const getData = async () => {
await fetch("https://asm-dev-api.herokuapp.com/api/v1/food")
          .then(res => res.json())
          .then(
            (result) => {
 setIsLoaded(true);
           setItems(result.data);
          //  console.log(result)
            // console.log(items, "yyyyyy")
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
      }
      getData();
      // eslint-disable-next-line
        }, [])
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {

    return (
      <div className="card-holder">
        
       {items === undefined ? "Loading" :
      items.meals && items.meals.map(item => (
        <div className="card" key={item.id}>
            <div className="item">
                <div className="icon">
                    <img src={item.strMealThumb} alt="card icon" />
                    <div className="card-item">
                        <h6>{item.title}</h6>
                        <h6>{item.Price}</h6>
                    </div>
                    <div className="texts">
                        <p>Served with french fries + drink</p>
                        <p>Choice of: coke, fanta, sprite, Upgrafe to large fries And whopper patty, Add Tender crisp patty and more...</p>
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
      ))} 
      
      </div>  
    );
}}
export default Card;