import './assets/css/login.css';

const Login = ()=>{

    
    return (
        <>
            <div className="my_login_background">
                <div className='w-screen h-lvh flex flex-col items-center justify-center'>
                    <div className="my_login_form mr-96 w-96">
                        <div className="mb-4">
                            <label>Sign In</label>
                        </div>
                            <form>
                                <div className="pl-2">
                                    <input type="text" placeholder="Username"  className="w-full" />
                                </div>
                                <div className="mt-4 pl-2">
                                    <input type="text" placeholder="Password" className="w-full" />
                                </div>
                                <div className="mt-8 mb-2 pl-2">
                                    <button type="submit">Sign In</button>
                                </div>
                            </form>
                    </div>
                    
                
                </div>
            </div>
        </>
    )
}

export default Login;