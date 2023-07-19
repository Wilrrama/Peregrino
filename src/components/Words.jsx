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
            <p>{word.nome}</p>
            <p>{word.data}</p>
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
