
export const BasicFunctions = () => {

    const addTwoNumbers = (a:number, b:number):number => {
        return a + b;
    }
    return(
        <>
            <h3>Functions</h3>
            <span>El resultado de sumar : { addTwoNumbers(2, 3) } </span>
        </>
    )
}
