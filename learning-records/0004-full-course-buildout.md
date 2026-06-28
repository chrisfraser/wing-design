# Course expanded to a full 11-lesson arc (F1–D2)

Built out all proposed lessons in one push (2026-06-27), taking the course from 3 foundations to the
complete arc: Phase 1 Foundations (F1–F3), Phase 2 Airfoils & the Low-Re Regime (F4 Reynolds, F5 NACA
anatomy, F6 reading real airfoil data), Phase 3 Tools (T1 XFOIL, T2 planform/wing-loading, T3 XFLR5),
Phase 4 Synthesis & CFD (D1 capstone design dashboard, D2 when to reach for CFD).

Grounding: a research pass pulled cited low-Re data (airfoiltools/UIUC/Selig/Lissaman) — E387/SD7037/
S1223 section polars at Re 100k & 200k, critical Re ≈ 70k, Hörner span-efficiency-vs-taper, NACA 4-digit
equations, XFOIL Ncrit guidance. Numbers in F4/F6/T3/D1 trace to that brief; XFOIL values flagged as
optimistic vs wind tunnel throughout. The D1 capstone interactive was designed via a "design-it-twice"
exploration (live-calculator + constraint-solver + trade-space map) and synthesized into one dashboard.

Key teachable result surfaced by the real data: for endurance the foil that wins isn't the one with the
best L/D — E387 has the best (L/D)max (84) but S1223 wins the endurance figure of merit CL^1.5/CD (98)
via very high camber/lift, at the cost of higher Cd_min and a high design CL. Reinforces the F1 north star.

Implication for future sessions: the learner now has the whole conceptual + tool arc and a concrete
design dashboard. Natural next steps are hands-on (actually run XFOIL/XFLR5 on a chosen foil and report
back) or revisiting any lesson's interactive. No learner-demonstrated mastery yet — these are authored,
not yet practised.
