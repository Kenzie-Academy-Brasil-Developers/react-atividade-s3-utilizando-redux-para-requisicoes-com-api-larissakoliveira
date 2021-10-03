import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false);
        dispatch(addDigimonsThunk(input, setError, setIsLoading));
        setInput("");
    };

    return(
        <div>
            <h2>Procure pelo seu Digimon!</h2>
            <div>
                <input 
                value={input}
                placeholder='digite um digimon'
                onChange={(e)=>setInput(e.target.value)}
                />
                <div>{error && <span>Digimon não encontrado!</span>}</div>
                <div>{isLoading && <span>Carregando!</span>}</div>
                <button disabled={!input} onClick={handleSearch}>Pesquisar</button>
            </div>
        </div>
    )
}


export default Search