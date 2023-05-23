import {auth, googleProvider} from "../firebase"
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {useState} from "react";

const Auth = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const sighIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.error(err);
        }
    }
    const signInwithGoogle = async () =>{
        try{
        await signInWithPopup(auth, googleProvider);
        }catch(err){
            console.error(err);
        }
    }
    const logout = async () =>{
        try{
        await signOut(auth);
        }catch(err){
            console.error(err);
        }
    }

  return (
    <div>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' />
        <button type='submit' onClick={sighIn}>Sigh in</button>
        <button type="submit" onClick={signInwithGoogle}> Sign in with Google</button>
        <button type="submit" onClick={logout}>log out</button>
    </div>
  )
}

export default Auth;