"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";

export default function Account(){
  const [user,setUser]=useState(null);
  useEffect(()=>{async function load(){if(!supabaseConfigured)return;const {data:{user}}=await supabase.auth.getUser();setUser(user)}load()},[]);
  return <div className="shell"><header className="top"><Link href="/">← Dashboard</Link><div>Account</div></header><main className="dashboard"><section className="hero"><h1>Account</h1><p>Your subscription and profile settings will live here.</p></section><section className="card"><h2>Status</h2><p><strong>Email:</strong> {user?.email || "Not logged in"}</p><p><strong>Plan:</strong> Free / Premium placeholder</p><p className="muted">Next step: connect profiles table and Stripe customer ID.</p><div className="actions"><Link className="primary" href="/pricing">Manage Plan</Link><Link className="secondary" href="/login">Log in</Link></div></section></main></div>
}
