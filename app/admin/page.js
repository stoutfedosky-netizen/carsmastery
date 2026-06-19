"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { examPassages } from "../../data/passages";

export default function Admin(){
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("Humanities");
  const [difficulty,setDifficulty]=useState("Medium");
  const [paragraphs,setParagraphs]=useState("");
  const [stem,setStem]=useState("");
  const [answer,setAnswer]=useState("A");
  const [choiceA,setChoiceA]=useState("");
  const [choiceB,setChoiceB]=useState("");
  const [choiceC,setChoiceC]=useState("");
  const [choiceD,setChoiceD]=useState("");
  const [explanation,setExplanation]=useState("");

  const generated = useMemo(()=>({
    id: "new-passage",
    title: title || "Untitled Passage",
    category,
    difficulty,
    isPremium: false,
    paragraphs: paragraphs.split("\n").filter(Boolean),
    questions: [{
      id: 999,
      passageId: "new-passage",
      type: "Main Idea",
      stem,
      answer,
      choices: { A: choiceA, B: choiceB, C: choiceC, D: choiceD },
      explanation
    }]
  }), [title,category,difficulty,paragraphs,stem,answer,choiceA,choiceB,choiceC,choiceD,explanation]);

  function copyJson(){
    navigator.clipboard.writeText(JSON.stringify(generated,null,2));
    alert("Passage JSON copied.");
  }

  return <div className="shell"><header className="top"><Link href="/">← Dashboard</Link><div>Admin Content Manager</div></header><main className="dashboard"><section className="hero"><h1>Admin Content Manager</h1><p>V4 structure: create passage JSON now; later this will save directly to Supabase.</p></section><section className="twoCol"><div className="card adminForm"><h2>Add Passage Draft</h2><label>Title</label><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Passage title"/><label>Category</label><select value={category} onChange={e=>setCategory(e.target.value)}><option>Humanities</option><option>Social Sciences</option><option>Philosophy</option><option>Art History</option></select><label>Difficulty</label><select value={difficulty} onChange={e=>setDifficulty(e.target.value)}><option>Easy</option><option>Medium</option><option>Hard</option></select><label>Paragraphs, one per line</label><textarea value={paragraphs} onChange={e=>setParagraphs(e.target.value)} placeholder="Paste each paragraph on a separate line"/><h3>Question 1</h3><label>Stem</label><textarea value={stem} onChange={e=>setStem(e.target.value)}/><label>Choice A</label><input value={choiceA} onChange={e=>setChoiceA(e.target.value)}/><label>Choice B</label><input value={choiceB} onChange={e=>setChoiceB(e.target.value)}/><label>Choice C</label><input value={choiceC} onChange={e=>setChoiceC(e.target.value)}/><label>Choice D</label><input value={choiceD} onChange={e=>setChoiceD(e.target.value)}/><label>Correct Answer</label><select value={answer} onChange={e=>setAnswer(e.target.value)}><option>A</option><option>B</option><option>C</option><option>D</option></select><label>Explanation</label><textarea value={explanation} onChange={e=>setExplanation(e.target.value)}/><button className="primary" onClick={copyJson}>Copy Passage JSON</button></div><div className="card"><h2>Generated JSON</h2><pre className="jsonBox">{JSON.stringify(generated,null,2)}</pre></div></section><section className="card"><h2>Existing Seed Content</h2><table className="statsTable"><thead><tr><th>Title</th><th>Category</th><th>Difficulty</th><th>Premium</th></tr></thead><tbody>{examPassages.map(p=><tr key={p.id}><td>{p.title}</td><td>{p.category}</td><td>{p.difficulty}</td><td>{p.isPremium?"Yes":"No"}</td></tr>)}</tbody></table></section></main></div>
}
