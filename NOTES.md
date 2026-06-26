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
2. How lift is really generated + lift coefficient & angle of attack (debunk myths).
3. Drag breakdown: parasitic + induced; reading the drag polar.
4. The endurance twist: CL^1.5/CD vs CL/CD; pick the design CL.
5. Reynolds number & the low-Re regime — why our drone is special (laminar separation bubbles).
6. Airfoil selection + databases (UIUC, airfoiltools).
7. Hands-on XFOIL: run a polar on a real foil.
8. Aspect ratio, induced drag, wing loading → planform.
9. Hands-on XFLR5: whole-wing analysis.
10. When/how to escalate to CFD (OpenFOAM/SU2) + low-Re transition caveat.

## Style decisions
- Shared stylesheet: assets/lesson.css (Tufte-ish serif, sidenotes).
- Quiz widget: assets/quiz.js — equal-length answers, instant feedback.
- Keep CL^1.5/CD as a recurring "north star" callback across lessons.
