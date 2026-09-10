# First Principles — Reason from atoms, not analogies.

A field guide to first principles thinking for software engineers and engineering teams. The site breaks the method down into a practical workflow instead of leaving it as an abstract philosophy concept:

- **The core idea** — why reasoning from fundamentals beats reasoning by analogy, framed through "the cook vs. the chef."
- **The four-step method** — frame the goal, decompose to atoms, challenge each piece, rebuild from the floor.
- **Four supporting lenses** — Socratic Questioning, the Five Whys, the Feynman Technique, and Inversion.
- **Seven engineering scenarios** where teams default to analogy instead of first principles (monolith vs. microservices, "we need a cache," build vs. buy, picking a database, debugging flaky tests, API design, "we need to migrate to Kubernetes").
- **Putting it into practice** — a First-Principles RFC template, how to run a first-principles session, seed questions for reviews, cultural prerequisites, and a prompt bank by context.
- **When *not* to use it** — the failure modes and limits of the method, plus a closing note on balancing it with YAGNI and pragmatism.

It's a single static page (`index.html`), styled as a dark, terminal-inspired interface (see `DESIGN.md` for the full design token reference).

## Live site

https://e383e91c.first-principles-thinking-method.pages.dev/

## Stack

Deployed on Cloudflare Pages. `_worker.js` is a pass-through Cloudflare Pages Function that forwards every request to the static assets.
