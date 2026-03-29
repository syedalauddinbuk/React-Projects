import { createContext } from "react";


type CityContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export const cityContext = createContext<CityContextType | null>(null);