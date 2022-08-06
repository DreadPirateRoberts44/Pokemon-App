import React, { useState } from "react";

const PokemonThumbnail = ({
  id,
  name,
  image,
  types,
  nickname,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const style = `thumb-container ${types[0].type.name}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img className="pokemon" src={image} alt={name} />
      <div className="detail-wrapper">
        <h3 className="pokemonName">{name.toUpperCase()}</h3>
        <small>
          {types.map((type) => (
            <img
              src={
                "https://www.serebii.net/pokedex-bw/type/" +
                type.type.name +
                ".gif"
              }
              alt={type.type.name}
            />
          ))}
        </small>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
