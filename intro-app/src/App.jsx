import movies from "./data/movies.json";
import ListaApp from "./components/ListaApp";
import MensajeApp from "./components/MensajeApp";
import "./css/index.css";
import CardApp from "./components/CardApp";

const App = () => {
  //JavaScript
  //props

  return (
    <>
      <h1>Hola chicos</h1>
      <MensajeApp message={"Esto es un valor de propiedad"} />
      <MensajeApp message={"Hola mundillo!!"} />

      <p>
        Lorem ipsum sit amet consectetur adipisicing elit. Assumenda molestiae
        quisquam in aliquid facilis numquam laboriosam quia fugiat repudiandae,
        ad nemo. Rem reiciendis natus voluptates soluta impedit beatae magnam
        placeat.
      </p>
      {/* <ListaApp data={movies} /> */}
      <div className="container">
        {movies.map((movie) => (
          <CardApp key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;

{
  /* <div className="container">
        <div className="row">
          <div className="col">
            <h1>Estoy usando Bootstrap</h1>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
          </div>
        </div>
      </div> */
}
