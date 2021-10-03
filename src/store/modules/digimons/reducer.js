import { ADD_DIGIMONS } from "./actionsTypes"

const digimonsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DIGIMONS:
            const { digimon } = action;
            return [...state, digimon];
    
        default:
            return state;
    }
}

export default digimonsReducer