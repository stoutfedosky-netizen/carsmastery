"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";
export default function Signup(){
 const[email,setEmail]=useState(""),[password,setPassword]=useState(""),[error,setError]=useState(""),[msg,setMsg]=useState("");
 async function submit(e){e.preventDefault();setError("");setMsg("");if(!supabaseConfigured){setError("Supabase is not configured yet.");return}const {error}=await supabase.auth.signUp({email,password});if(error)setError(error.message);else setMsg("Account created. Check email if confirmation is enabled, then log in.");}
 return <main className="authWrap"><form className="authCard" onSubmit={submit}><h1>Create account</h1><p className="muted">Start saving CARS attempts.</p>{error&&<div className="error">{error}</div>}{msg&&<div className="success">{msg}</div>}<label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/><label>Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" minLength={6} required/><button className="primary">Sign up</button><p><Link href="/login">Already have an account? Log in.</Link></p></form></main>
}
