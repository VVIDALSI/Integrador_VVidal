import stlSearchBar from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div className={stlSearchBar.containerSearchBar}>
         <input type='search' />
         <button onClick={()=>props.onSearch("Estoy recibiendo un Id")}>Agregar</button>
      </div>
   );
}
