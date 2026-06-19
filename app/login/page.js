"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";
export default function Login(){
 const[email,setEmail]=useState(""),[password,setPassword]=useState(""),[error,setError]=useState("");
 async function submit(e){e.preventDefault();setError("");if(!supabaseConfigured){setError("Supabase is not configured yet.");return}const {error}=await supabase.auth.signInWithPassword({email,password});if(error)setError(error.message);else window.location.href="/";}
 return <main className="authWrap"><form className="authCard" onSubmit={submit}><h1>Log in</h1><p className="muted">Access saved attempts and premium tools.</p>{error&&<div className="error">{error}</div>}<label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/><label>Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required/><button className="primary">Log in</button><p><Link href="/signup">Need an account? Sign up.</Link></p></form></main>
}
