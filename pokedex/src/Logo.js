const Logo = ({ appName, clicked }) => {
  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <img
        onClick={clicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
      ></img>
    </header>
  );
};

export default Logo;
