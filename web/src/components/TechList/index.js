import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTech } from "../../store/modules/techs/actions";

// import { Container } from './styles';

function TechLis() {
  const [newTech, setNewTech] = useState("");

  const dispatch = useDispatch();
  const techs = useSelector((state) => state.techs);

  function handleAddTech() {
    dispatch(addTech(newTech));

    setNewTech("");
  }

  return (
    <form onSubmit={handleAddTech} data-testid="tech-form">
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}

        <label htmlFor="tech">Tech</label>
        <input
          id="tech"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />
      </ul>
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}

export default TechLis;
