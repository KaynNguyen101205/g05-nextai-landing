import { Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Proof', href: '#proof' },
  { label: 'Support', href: '#support' },
];

export default function TopNavBar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top">
          <span className="navbar__logo" aria-hidden="true">
            <Sparkles size={18} />
          </span>
          <span className="navbar__name">NextAI</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button type="button" className="btn btn--ghost">
            Sign In
          </button>
          <button type="button" className="btn btn--primary">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
