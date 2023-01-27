function Die({value, held, id, setHeld}) {
    return (
        <div className={`die ${held ? "held" : ""}`} onClick={setHeld}>
           <h2>{value}</h2> 
        </div>
    )
}

export default Die;