import Link from "next/link";
export default function Analytics(){
 return <div className="shell"><header className="top"><Link href="/">← Dashboard</Link><small>Analytics preview</small></header><main className="dashboard"><section className="hero"><h1>Analytics</h1><p>This is the placeholder for saved score history once Supabase is added.</p></section><table className="statsTable"><thead><tr><th>Question Type</th><th>Accuracy</th><th>Recommendation</th></tr></thead><tbody><tr><td>Main Idea</td><td>—</td><td>Review passage thesis and author attitude.</td></tr><tr><td>Function</td><td>—</td><td>Ask why the author included a detail.</td></tr><tr><td>Inference</td><td>—</td><td>Stay close to what the passage supports.</td></tr></tbody></table></main></div>
}
