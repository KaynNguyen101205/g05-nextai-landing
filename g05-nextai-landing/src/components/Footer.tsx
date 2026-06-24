import { Sparkles } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Models', 'Changelog'],
  },
  {
    title: 'Proof',
    links: ['Validation', 'Reconciliation', 'Billing logic', 'Reports'],
  },
  {
    title: 'Support',
    links: ['Documentation', 'Contact', 'Status', 'FAQ'],
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="navbar__brand" href="#top">
            <span className="navbar__logo" aria-hidden="true">
              <Sparkles size={18} />
            </span>
            <span className="navbar__name">NextAI</span>
          </a>
          <p className="footer__tagline">
            Pricing plans for the Odyssey model family, validated end-to-end in Oracle
            BRM by Group 05.
          </p>
        </div>

        <div className="footer__columns">
          {columns.map((column) => (
            <div key={column.title} className="footer__column">
              <h4 className="footer__col-title">{column.title}</h4>
              <ul className="footer__col-links">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bar">
        <span>© {new Date().getFullYear()} NextAI · Group 05 CTG / Oracle BRM Internship Showcase</span>
        <span>Built with Vite + React + TypeScript</span>
      </div>
    </footer>
  );
}
