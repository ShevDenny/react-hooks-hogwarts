

function PigDetails({data}){

    return (
        <div>
        <p>{data.specialty}</p>
        <p>{data.weight}</p>
        <p>{data.greased ? "Is greased" : "Not greased"}</p>
        <p>{data["highest medal achieved"]}</p>
    </div>
    )
}



export default PigDetails