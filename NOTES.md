# Working Notes

## Learner profile
- New to aerodynamics; comfortable with basic physics/math.
- Style: **balanced** — interleave concept + hands-on tool practice.
- Building a real drone → keep every lesson tied to a design decision they'll actually make.
- "We"/"our" — appears to be a team/project, not a solo hobbyist.

## Drone parameters (as of session 1)
- Wingspan: 1–2 m.
- Propulsion: battery-electric.
- → Endurance objective = minimise power required = maximise **CL^1.5/CD**.
- → Operating Reynolds ~150k–400k (low-Re regime). This is the throughline.

## Teaching plan (rough arc — revise freely)
1. ✅ Lift, drag, L/D — what "optimal" means. (lesson 0001)
2. ✅ How lift is really generated + lift curve (debunk myths). (lesson 0002)
3. ✅ Drag breakdown: parasitic + induced; AR as the endurance lever. (lesson 0003)
   — NB: this absorbed the old item-4 (endurance twist, done in L1) and pulled aspect ratio forward.
4. ◀ NEXT — Reynolds number & the low-Re regime: why our drone is special (laminar separation bubbles).
5. Airfoil selection + databases (UIUC, airfoiltools) — reading real low-Re polars.
6. Hands-on XFOIL: run a polar on a real foil; validate against UIUC data.
7. Planform & wing loading: turn the AR insight into a real chord/span/area, pick design CL & speed.
8. Hands-on XFLR5: whole-wing analysis of our candidate.
9. When/how to escalate to CFD (OpenFOAM/SU2) + low-Re transition caveat.

### Phase 5 — Structures & the Build (added 2026-06-27; mission expanded, see LR-0005)
- B1 The Wing as a Beam — spar & loads (M_root=nWb/3π; A=M/(σh); high-AR/thin-foil structural cost).
- B2 Materials & Construction — specific stiffness, foam-core vs built-up vs moulded, weight→endurance.
- B3 Build the Wing — hot-wire/spar/vacuum-bag/balance steps + tools checklist (uses .checklist-widget).
- Codes: Phase 5 = B1–B3, files 0012–0014. Course now F1→B3 = 14 lessons.

## Style decisions
- **Design system adopted from the hydrophone course (2026-06-27).** User explicitly liked its look/feel.
  - Shared `assets/styles.css` (sky/aero palette, same component classes as hydrophone) + `assets/widgets.js` (auto-wires `.quiz`).
  - Old `assets/lesson.css` + `assets/quiz.js` retired/deleted once all lessons ported.
  - `.nojekyll` added.
- **Lesson template** (match every lesson): topbar · kicker/title/sub/meta · `.callout mission` · numbered `<h2><span class="num">` · `.formula` (dark) · interactive in a `.calc` with a **canvas on `var(--night)` dark bg** (grid `rgba(143,185,198,.1)`, curve `#4ea3da`, accent `#ffd479`, success `#3fbf63`) · 3 quizzes, each **4 equal-length options** with per-option `data-feedback` · `.recap` · `.sourcebox` · `.ask-teacher` · `.crosslinks` (glossary #anchors + builds on/toward) · cited `<h2 id="refs">` References · `.lesson-nav` · `.pagefoot`.
- Glossary terms carry `id` anchors; lessons deep-link to them.
- **Lesson code scheme**: Phase 1 Foundations = F1–F3 (done), Phase 2 Airfoils/Low-Re = F4–F6, Phase 3 Tools = T1–T3, Phase 4 Design/CFD = D1–D2. Numeric filenames keep incrementing (0004, 0005…).
- Keep CL^1.5/CD as the recurring "north star" callback across lessons.
