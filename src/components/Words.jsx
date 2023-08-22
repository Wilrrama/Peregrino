import {
  StyledAta,
  StyledContainerButton,
  StyledWord,
  StyledWords,
} from "./StyledWords";

import { words } from "../data/words";
import { useState } from "react";

export const Words = () => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audioSrc) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(audioSrc);
    audio.play();
    setCurrentAudio(audio);
    audio.addEventListener("blur", function () {
      if (this.paused) {
        this.play();
      }
    });
  };

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }
  };
  return (
    <StyledWords>
      {words.map((word) => (
        <StyledWord key={word.id}>
          <StyledAta>
            <img src={word.img} alt="imagem da igreja" />
            <h5>{word.nome}</h5>
            <h6>{word.data}</h6>
            <p>{word.word}</p>
          </StyledAta>
          <StyledContainerButton>
            <button onClick={() => playAudio(word.audio)}>Ouvir</button>
            <button onClick={stopAudio}>Parar</button>
          </StyledContainerButton>
        </StyledWord>
      ))}
    </StyledWords>
  );
};
