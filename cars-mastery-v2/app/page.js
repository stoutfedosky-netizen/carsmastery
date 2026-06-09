import Link from "next/link";
import { examPassages, allQuestions } from "../data/passages";

export default function Dashboard(){
  return (
    <div className="shell">
      <header className="top"><div>CARS Mastery V2</div><small>Exam engine + review screen</small></header>
      <main className="dashboard">
        <section className="hero">
          <h1>Train CARS like the real exam.</h1>
          <p>Now with multiple passages, an end-section review screen, score report, and question-type analytics.</p>
          <div className="actions">
            <Link className="primary" href="/exam">Start V2 Exam</Link>
            <Link className="secondary" href="/analytics">View Analytics Preview</Link>
          </div>
        </section>
        <section className="cards">
          <div className="card"><b>{examPassages.length}</b><p>Passages loaded</p></div>
          <div className="card"><b>{allQuestions.length}</b><p>Questions loaded</p></div>
          <div className="card"><b>Review</b><p>End-section screen</p></div>
          <div className="card"><b>Types</b><p>Accuracy breakdown</p></div>
        </section>
        <section className="card"><h2>V3 target</h2><p>Next: Supabase login, saved score history, admin passage editor, and persistent analytics.</p></section>
      </main>
    </div>
  )
}
