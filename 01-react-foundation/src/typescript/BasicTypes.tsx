
export const BasicTypes = () => {

  const name:string = "Marcelo";
  const age:number = 33;
  const isActive:boolean = true;

  const powers:string[] = ['React', 'React Native', 'Angular', 'Vue', 'Qwik'];

  powers.push('Next')

  return (
    <>
      <h3>Tipos básicos</h3>
      { name } { age } { isActive ? 'true': 'false' }
      { powers.join(', ') }
    </>
  )
}
