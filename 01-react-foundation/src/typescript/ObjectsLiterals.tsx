interface Person {
    fistname: string;
    lastname: string;
    age: number;
    address: Address,
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}
export const ObjectsLiterals = () => {

    const person:Person = {
        fistname: 'Marcelo',
        lastname: 'Carabajal',
        isAlive: undefined,
        age: 33,
        address: {
            country: 'Argentina',
            houseNo: 2000
        }
    }

  return (
    <>
        <pre>
        { JSON.stringify( person, null, 2) } 
        </pre>
    </>
  )
}
