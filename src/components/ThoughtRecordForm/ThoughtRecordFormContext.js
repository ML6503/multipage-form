import React, { createContext, useContext, useState } from "react";

export const ThoughtRecordFormContext = createContext();
export const useThoughtRecordForm = () => useContext(ThoughtRecordFormContext);

export function ThoughtRecordFormProvider({ children }) {
  //store state for the whole form
  const [situation, setSituation] = useState("");
  const [emotions, setEmotions] = useState([]);
  const [ratedEmotions, setRatedEmotions] = useState([]);
  const [sensations, setSensations] = useState("");
  const [unhelpfulThoughts, setUnhelpfulThoughts] = useState("");
  const [realisticThoughts, setRealisticThoughts] = useState("");
  const [defusionTechnique, setDefusionTechnique] = useState("");
  const [reratedEmotions, setReratedEmotions] = useState(emotions);

  return (
    <ThoughtRecordFormContext.Provider
      value={{
        situation,
        setSituation,
        emotions,
        setEmotions,
        ratedEmotions,
        setRatedEmotions,
        sensations,
        setSensations,
        unhelpfulThoughts,
        setUnhelpfulThoughts,
        realisticThoughts,
        setRealisticThoughts,
        defusionTechnique,
        setDefusionTechnique,
        reratedEmotions,
        setReratedEmotions
      }}
    >
      {children}
    </ThoughtRecordFormContext.Provider>
  );
}
