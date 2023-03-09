import stl from "./card.css"

// const h2Style ={
//    color: "blue",
//     margin: "15px"
// }

export default function Card({name, species, image, gender, onClose}) {
   return (
      <div className={`${stl.card} ${stl.hola}`}>
         <button onClick={onClose}>X</button>
         {/* <h2 style={h2Style}>{name}</h2> */}
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2 className={stl.hola}>{gender}</h2>
         <img  src={image} alt="Not found" />
         <hr />
      </div>
   );
}
