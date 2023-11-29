import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hook/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} =useContext(AuthContext);
     const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    // const handleGoogleSignIn=()=>{
    //     googleSignIn()
    //     .then(result=>{
    //       console.log(result.user)
        
    //       navigate('/');
    //     })
    //     .catch(error=>{
    //       console.error(error.message)
    //     })
    //   }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        // navigate('/')
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="p-8">
             <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;