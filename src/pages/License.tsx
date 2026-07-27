import { ArrowLeft, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const license = `MIT License

Copyright (c) 2025 Karthik Lal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export default function License() {
  return (
    <div className="license-page">
      <nav className="license-nav">
        <div className="shell">
          <Link to="/" className="brand" aria-label="RustPing home">
            <span className="brand-mark"><Radio size={17} /></span>
            <span>RUST<span>PING</span></span>
          </Link>
          <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to home</Link>
        </div>
      </nav>
      <main>
        <header className="license-hero">
          <div className="shell">
            <span className="kicker">LEGAL / OPEN SOFTWARE</span>
            <h1>Simple terms.<br />Open possibilities.</h1>
          </div>
        </header>
        <div className="shell license-content">
          <aside className="license-aside">
            <strong>MIT LICENSE</strong>
            Use. Copy. Modify.<br />
            Merge. Publish.<br />
            Distribute. Sublicense.<br />
            Sell.
          </aside>
          <article className="license-text">
            <h2>License terms</h2>
            <pre>{license}</pre>
          </article>
        </div>
      </main>
    </div>
  );
}
