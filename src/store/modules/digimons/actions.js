import { ADD_DIGIMONS } from "./actionsTypes";

export const addDigimon = (digimon)=>({
    type: ADD_DIGIMONS,
    digimon,
});