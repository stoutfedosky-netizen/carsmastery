import Link from "next/link";
import { allQuestions } from "../../data/passages";
const typeCounts = allQuestions.reduce((acc, q) => ({...acc, [q.type]:(acc[q.type]||0)+1}), {});
export default function Analytics(){
  return (
    <div className="shell">
      <header className="top"><Link href="/">← Dashboard</Link><small>Analytics preview</small></header>
      <main className="dashboard">
        <section className="hero"><h1>Analytics Preview</h1><p>This page is ready for Supabase saved attempts in V3.</p></section>
        <table className="statsTable"><thead><tr><th>Question Type</th><th>Questions Available</th><th>Study Recommendation</th></tr></thead>
        <tbody>{Object.entries(typeCounts).map(([type,count])=><tr key={type}><td>{type}</td><td>{count}</td><td>{type==="Main Idea"?"Identify thesis, author attitude, and paragraph roles.":type==="Inference"?"Stay close to supported claims; avoid extreme leaps.":"Ask why the author included the detail."}</td></tr>)}</tbody></table>
      </main>
    </div>
  )
}
