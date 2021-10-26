import "./styles.css";

function Desenvolvedores({ name, age, country }) {
  return (
    <div className="desenvolvedores">
      <p>
        <span>Dev: </span> {name}
      </p>
      <p>
        <span>Idade:</span> {age}
      </p>
      <p>
        <span>País:</span> {country}
      </p>
    </div>
  );
}

export default Desenvolvedores;
