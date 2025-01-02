// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Goal Planner 2025',
  description: 'Plan and track your goals efficiently!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-content">
            <h1>Goal Planner 2025</h1>
            <button className="contribute-btn">Contribute</button>
          </div>
        </header>
        <main className="main-content">{children}</main>
        <footer className="footer">
          <p>© 2025 Goal Planner. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/onkargalande" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/onkar-galande/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
