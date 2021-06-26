import React, { useContext, useState } from 'react';
import { UserContext } from '../App'
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [account, setAccount] = useState(true)
    const [admin, setAdmin] = useState({
        email: '',
        password: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser.email);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
            if (!isFormValid) {
                alert("Put at Least six characters and a number!");
            }
        }
        if (isFormValid) {
            const newUserInfo = { ...admin };
            newUserInfo[e.target.name] = e.target.value;
            setAdmin(newUserInfo);
        }
    }

    const onSubmit = (data) => {
        let isEmailValid = true;
        let isPasswordValid = true;
        isEmailValid = /\S+@\S+\.\S+/.test(data.email);
        isPasswordValid = /\d{1}/.test(data.password);
        if (!isEmailValid) {
            alert("Enter a valid email.")
        }
        if (!isPasswordValid) {
            alert("Enter a valid password.")
        }
        if (isEmailValid && isPasswordValid) {
            const newUserInfo = { ...admin };
            newUserInfo["email"] = data.email;
            newUserInfo['password'] = data.password;
            setAdmin(newUserInfo);
        }
        
        if (admin.email && admin.password) {
            firebase.auth().createUserWithEmailAndPassword(admin.email, admin.password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    // console.log(user)
                    const userInfo = {...admin}
                    setLoggedInUser(userInfo);
                    history.replace(from)
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    alert(errorMessage)
                });
        }
    }

    const handleSignIn = (e) => {
        if (admin.email && admin.password) {
            firebase.auth().signInWithEmailAndPassword(admin?.email, admin?.password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    const userInfo = {...admin}
                    setLoggedInUser(userInfo);
                    history.replace(from)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage, errorCode)
                });
        }
        e.preventDefault();
    }
    const handleChange = () => {
        setAccount(!account)
    }

    return (
        <div>
            {account ?
                <form onSubmit={handleSignIn}>
                    <input onBlur={handleBlur} className="" type="email" name="email" required placeholder="Email" />
                    <br />
                    <input onBlur={handleBlur} className="" type="password" name="password" required placeholder="Password" />
                    <br />
                    <br />
                    <input className="" type="submit" value="Login" />
                    <div className="">
                        <h6>Don't have an account?</h6>
                        <p className='cursor-pointer hover:text-pink-600' onClick={handleChange}>Create an account</p>
                    </div>
                </form>
                :
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Email" required {...register("email")} />

                    <input type='password' placeholder="Password" required {...register("password")} />

                    <input type="submit" />
                    <div>
                        <h1>Already have an account?</h1>
                        <p className='cursor-pointer hover:text-pink-600' onClick={handleChange}>Go To Login Page</p>
                    </div>
                </form>}

        </div>
    );
};

export default Login;