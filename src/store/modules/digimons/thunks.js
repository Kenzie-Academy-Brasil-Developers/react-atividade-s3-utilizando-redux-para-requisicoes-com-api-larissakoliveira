import axios from 'axios';
import { addDigimon } from './actions';

const addDigimonsThunk = (digimon, setError, setIsLoading) => (dispatch) => {
 setIsLoading(true);
 axios
 .get('https://digimon-api.vercel.app/api/digimon/')
 .then((response)=>{
     console.log(response.data[0])
     const filteredDigimon = response.data[0].filter((item)=>item.name.toLowerCase().includes(digimon.toLowerCase()) ||
     item.level.toLowerCase().includes(digimon.toLowerCase())
     );
     dispatch(addDigimon(filteredDigimon.name));
     setIsLoading(false);
 })
 .catch((e)=>{
     setError(true);
     setIsLoading(false);
 });
    //Aqui faça uma requisição com o axios e em seguida, no .then()
 //utilize a função dispatch() passando addDigimon(response.data[0].name)
};

export default addDigimonsThunk  