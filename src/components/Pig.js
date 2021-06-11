import PigDetails from "./PigDetails"
import { useState} from "react"


function Pig({name, image, data}) {
    console.log(data)
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(!isClicked)
    }



    return (
        <div className="ui four wide column" onClick={handleClick}>
            <h1>{name}</h1>
            <img src={image}/>
            {isClicked ? <PigDetails data={data} /> : null }
        </div>
    )
}


export default Pig