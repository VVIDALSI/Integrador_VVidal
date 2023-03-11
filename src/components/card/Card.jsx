import stl from "./Card.module.css";

export default function Card({ name, species, image, gender, onClose }) {
   return (
      <div className={stl.container}>

         <div className={stl.buttonContainer}>
            <button className={stl.button} onClick={onClose}>X</button>
         </div>

         <div className={stl.imageContainer}>
            <img src={image} alt="Not found" />
            <h2 className={stl.name}>{name}</h2>
         </div>

         <div className={stl.propsContainer}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         <hr />
      </div>
   );
}
