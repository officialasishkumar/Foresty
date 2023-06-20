import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { client } from "../client";

const LoginBtn = () => {
    const navigate = useNavigate();
    function login(res) {
        const data = jwt_decode(res.credential);
        localStorage.setItem("user", JSON.stringify(data));
        const { name, picture, sub, email } = data;
        const doc = {
            _type: "user",
            _id: sub,
            userName: name,
            image: picture,
            email,
        };
        client.createIfNotExists(doc).then(() => {
            console.log("success");
            window.location.reload();
        });
    }
    return (
        <GoogleLogin
            type="standard"
            size="large"
            text="signinwith"
            shape="rectangular"
            theme="filled_blue"
            // state_cookie_domain="/"
            onSuccess={credentialResponse => {
                login(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default LoginBtn;
