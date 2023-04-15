import Prisma from './script';


const login = () => {

    const [val, set] = useState('');

    const [psw, setpasw] = useState('');

    return(
        <div className='login'>
        
            <input 
                type="email" 
                name="email" 
                className='login__email' 
                placeholder='Enter Email'
                value={val}
                onChange={e => {set(e.currentTarget.value); }} 
                />


            <input 
                type="password"
                name="passw" 
                className='login__passw' 
                placeholder='Enter Password' 
                value = {psw}
                onChange={e => {setpasw(e.currentTarget.value); }}
                />

            <input type="submit" className='submit' value="Login" Onclick={async () =>

            await Prisma.user.findUnique({
                where : {
                    email:{val},
                    password:{psw}
                }
            })

            }/>

        </div>
    )

}