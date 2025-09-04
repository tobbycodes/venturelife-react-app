import {Link} from "react-router-dom"
export default function Vans(){
    return(
        <div>
            <h2>Explore Our Vans Option</h2>
            <div className="vans-links-container">
                <Link className="link-option"to="/simple">Simple</Link>
                <Link className="link-option" to="luxury">Luxury</Link>
                <Link className="link-option" to="rugged">Rugged</Link>
                <Link className="clear-option" to="/vans">Clear filters</Link>
            </div>
            <div className="Van-container">

                <div className="van-option-container">
                    <img src="./assets/images/van1-img.png" alt="" />
                    <div className="van-option">
                        <h4>Modest Explorer</h4>
                        <p>$60<span>/day</span></p>
                     </div>
                      <Link to="/simple">Simple</Link>
                </div>
             
                
                <div className="van-option-container">
                    <img src="./assets/images/van1-img.png" alt="" />
                    <div className="van-option">
                        <h4>Modest Explorer</h4>
                        <p>$60<span>/day</span></p>
                     </div>
                     <Link to="/simple">Simple</Link>
                </div>
                
                
                <div className="van-option-container">
                    <img src="./assets/images/van1-img.png" alt="" />
                    <div className="van-option">
                        <h4>Modest Explorer</h4>
                        <p>$60<span>/day</span></p>
                    </div>
                    <Link to="/simple">Simple</Link>
                </div>


                <div className="van-option-container">
                    <img src="./assets/images/van1-img.png" alt="" />
                    <div className="van-option">
                        <h4>Modest Explorer</h4>
                        <p>$60<span>/day</span></p>
                    </div>
                    <Link to="/simple">Simple</Link>
                </div>

                <div className="van-option-container">
                    <img src="./assets/images/van1-img.png" alt="" />
                    <div className="van-option">
                        <h4>Modest Explorer</h4>
                        <p>$60<span>/day</span></p>
                    </div>
                    <Link to="/simple">Simple</Link>
                </div>

                <div className="van-option-container">
                    <img src="./assets/images/van1-img.png" alt="" />
                    <div className="van-option">
                        <h4>Modest Explorer</h4>
                        <p>$60<span>/day</span></p>
                    </div>
                    <Link to="/simple">Simple</Link>
                </div>
            </div>
        </div>
        
    )
}



/****Getting VANS DATA FROM API  ******/

// import React from "react"

// /**
//  * {
//     * id: "1", 
//     * name: "Modest Explorer", 
//     * price: 60, 
//     * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
//     * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
//     * type: "simple"
//  * }
//  */


// export default function Vans() {
//     const [vans, setVans] = React.useState([])
//     React.useEffect(() => {
//         fetch("/api/vans")
//             .then(res => res.json())
//             .then(data => setVans(data.vans))
//     }, [])

//     const vanElements = vans.map(van => (
//         <div key={van.id} className="van-tile">
//             <img src={van.imageUrl} />
//             <div className="van-info">
//                 <h3>{van.name}</h3>
//                 <p>${van.price}<span>/day</span></p>
//             </div>
//             <i className={`van-type ${van.type} selected`}>{van.type}</i>
//         </div>
//     ))

//     return (
//         <div className="van-list-container">
//             <h1>Explore our van options</h1>
//             <div className="van-list">
//                 {vanElements}
//             </div>
//         </div>
//     )
// }