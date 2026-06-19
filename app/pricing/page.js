import Link from "next/link";
import { plans } from "../../lib/plans";

export default function Pricing(){
  return <div className="shell"><header className="top"><Link href="/">← Dashboard</Link><div>Pricing</div></header><main className="dashboard"><section className="hero"><h1>Simple MCAT CARS practice pricing.</h1><p>Stripe is not connected yet, but this page is structured for subscriptions.</p></section><section className="planGrid"><div className="planCard"><h2>{plans.free.name}</h2><div className="price">$0</div><p className="muted">For testing the platform.</p><ul>{plans.free.features.map(f=><li key={f}>{f}</li>)}</ul><Link className="secondary" href="/signup">Start Free</Link></div><div className="planCard featured"><span className="badge premiumBadge">Recommended</span><h2>{plans.premium.name}</h2><div className="price">{plans.premium.price}</div><p className="muted">For serious CARS practice.</p><ul>{plans.premium.features.map(f=><li key={f}>{f}</li>)}</ul><button className="primary">Stripe checkout placeholder</button><p className="muted">Next step: add Stripe Checkout route and webhook.</p></div></section></main></div>
}
