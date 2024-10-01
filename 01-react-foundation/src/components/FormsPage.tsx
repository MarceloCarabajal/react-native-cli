import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'marce@gmail.com',
            password: '1234',
        },
    });

    const onSubmit = ( myForm: FormInputs ) => {
        console.log({ myForm });
    }
  
    watch('email');
    
    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <h3>Formularios</h3>

                <div style={{display:'flex', flexDirection:'column'}}>
                    <input type="email" placeholder="Email" { ...register('email', {required: true })} />
                    <input type="password" placeholder="Password" { ...register('password')} />

                    <button type="submit">Ingresar</button>
                </div>
            </form>
            <pre>
                { JSON.stringify( formState, null, 2)}
            </pre>
        </>
    )
    }
