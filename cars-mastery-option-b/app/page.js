import Link from "next/link";
export default function Dashboard(){
 return <div className="shell"><header className="top"><div>CARS Mastery</div><small>MCAT-style practice + modern analytics</small></header>
 <main className="dashboard"><section className="hero"><h1>Train CARS like the real exam.</h1><p>A Bootcamp/Jack Westin-inspired practice portal with MCAT-style timing, highlighting, flagging, explanations, and analytics.</p><div className="actions"><Link className="primary" href="/exam">Start Timed Passage</Link><Link className="secondary" href="/analytics">View Analytics</Link></div></section>
 <section className="cards"><div className="card"><b>1</b><p>Passage set ready</p></div><div className="card"><b>3</b><p>Question types tracked</p></div><div className="card"><b>90:00</b><p>Exam-style timer</p></div><div className="card"><b>V1</b><p>Vercel-ready build</p></div></section>
 <section className="card"><h2>Next production upgrades</h2><p>Supabase login, saved results, admin passage editor, full-length exams, daily CARS streaks, and Stripe subscriptions.</p></section></main></div>
}
