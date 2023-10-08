import { Link } from "react-router-dom";

export default function RegisterPage(){
        return(
            <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-4xl text-center mb-4">REGISTER</h1>
                <form className="max-w-md mx-auto ">
                    <label htmlFor="">Name</label>
                    <input type="name" placeholder="your name here"/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="your@gmail.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="text center py-2 ml-20 text-gray-500">Already a member?  
                    <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
            </div>


        )

}