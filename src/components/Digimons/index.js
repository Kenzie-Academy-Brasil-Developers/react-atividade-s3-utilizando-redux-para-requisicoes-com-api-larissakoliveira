import { useSelector } from "react-redux";

const Digimons = () => {
    const { digimons } = useSelector((state) => state );
    console.log(digimons)
    return (
        <div>
            <ul>
                {digimons.map((digimon, index)=>
                     <li key={index}>{digimon}</li>
                )}
            </ul>
        </div>
    )
}

export default Digimons 