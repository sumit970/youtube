import React from "react";
import { useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
const Login = () => {
  const navigate=useNavigate();
  let user;
  const credentialResponse = (response) => {
    const googleresp = jwtdecode(response.credential);
    console.log(googleresp);
      const {email,picture,sub,name}=googleresp;
      user={
        name:name,
        email: email,
        picture: picture,
        _id:sub
      }
      localStorage.setItem('userdetail',JSON.stringify(user));
      if(googleresp!=null){

          navigate('/');
      }
  };
  return (
    <GoogleOAuthProvider
      className="w-full h-full flex flex-col justify-start "
      clientId="466762121241-2qcpgsdvk3f4t7k8i346408lerh438d4.apps.googleusercontent.com"
    >
      <div className="relative w-full h-full ">
        <video
          src="share.mp4"
          muted
          loop
          controls={false}
          type="video/mp4"
          autoPlay
          className="object-cover w-full h-full"
        />
        </div>
        
        <div className="absolute w-full left-0 right-0 top-0 bottom-0 h-full flex flex-col items-center justify-center ">

          <GoogleLogin
            onSuccess={credentialResponse}
            onError={() => {
              console.log("Login Failed");
            }}/>

        </div>

          

        
        

     
    </GoogleOAuthProvider>
  );
};

export default Login;
