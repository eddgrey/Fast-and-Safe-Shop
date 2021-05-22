import { useRef } from 'react'
import { Link } from 'react-router-dom';
import Bienvenida from './Bienvenida';
import FormField from "./FormField";

const Login = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    // const [error, setError] = useState(false)

    const handleSumbit = (e) => {
        e.preventDefault()
        if (emailRef.current.value === "" || passwordRef.current.value === "") {
            console.log("Error");
            // setError(true)
        }
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <section className="w-screen min-h-screen flex flex-row bg-blueGray-800">
            <form onSubmit={handleSumbit} className="flex flex-col items-center px-20 py-16 w-3/5 text-blueGray-100 justify-between">
                <p className=" text-3xl mb-10">Iniciar sesión</p>
                <div className="w-3/4">
                    <FormField id="email" label="Correo electrónico: " type="email" size="large" refInput={emailRef}/>
    
                    <FormField id="password" label="Contraseña: " type="password" size="large" refInput={passwordRef}/>
                </div>
                <button className="button theme">Continuar</button>
                <Link to="/nuevo-password">
                    <p className="text-sm">¿Olvidó su contraseña?</p>
                </Link>
            </form>
            <Bienvenida message="Iniciar sesión para continuar"/>
        </section>
    )
}

export default Login
