"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { allQuestions } from "../../data/passages";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";
const typeCounts=allQuestions.reduce((a,q)=>({...a,[q.type]:(a[q.type]||0)+1}),{});
export default function Analytics(){
 const[attempts,setAttempts]=useState([]);
 useEffect(()=>{async function load(){if(!supabaseConfigured)return;const {data:{user}}=await supabase.auth.getUser();if(!user)return;const {data}=await supabase.from("attempts").select("*").order("created_at",{ascending:false});setAttempts(data||[])}load()},[]);
 const avg=attempts.length?attempts.reduce((s,a)=>s+Number(a.accuracy),0)/attempts.length:0;
 return <div className="shell"><header className="top"><Link href="/">← Dashboard</Link><small>Analytics</small></header><main className="dashboard"><section className="hero"><h1>Analytics</h1><p>{attempts.length?`Average accuracy across saved attempts: ${Math.round(avg)}%`:"Finish a logged-in exam to populate saved analytics."}</p></section><section className="cards"><div className="card"><b>{attempts.length}</b><p>Saved attempts</p></div><div className="card"><b>{Math.round(avg)}%</b><p>Average accuracy</p></div><div className="card"><b>{allQuestions.length}</b><p>Current questions</p></div><div className="card"><b>{Object.keys(typeCounts).length}</b><p>Question types</p></div></section><table className="statsTable"><thead><tr><th>Question Type</th><th>Questions Available</th><th>Study Recommendation</th></tr></thead><tbody>{Object.entries(typeCounts).map(([type,count])=><tr key={type}><td>{type}</td><td>{count}</td><td>{type==="Main Idea"?"Identify thesis and author attitude.":type==="Inference"?"Stay close to supported claims.":"Ask why the author included the detail."}</td></tr>)}</tbody></table></main></div>
}
