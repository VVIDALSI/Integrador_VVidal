export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch("Estoy recibiendo un Id")}>Agregar</button>
      </div>
   );
}
