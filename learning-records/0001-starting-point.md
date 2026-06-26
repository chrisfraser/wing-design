# Starting point: new to aero, building a 1–2 m battery-electric endurance drone

Established in session 1 (intake). The learner is **new to aerodynamics** but comfortable with
basic physics/math, and learns best with a **balanced** mix of concept + hands-on tools.

Key fixed parameters that steer all future sessions:
- **1–2 m wingspan, battery-electric** → endurance objective is to maximise **CL^1.5/CD**
  (minimise power required), not simply max L/D.
- **Low-Reynolds regime (~150k–400k)** → standard high-Re airfoil intuition will mislead;
  laminar separation bubbles and low-Re-specific airfoils (Selig/Eppler) matter.

Implication: every lesson should connect to a concrete wing-design decision and keep returning
to the low-Re + CL^1.5/CD throughline. Tools target: XFOIL → XFLR5 → (later) OpenFOAM/SU2.
No prior tool experience assumed.
