# Mission: Wing & Airfoil Design for a Long-Endurance Drone

## Why
We are building a fixed-wing, battery-electric drone (1–2 m wingspan) and want it to stay
airborne as long as possible. We want to *understand* — not just copy — how wings and airfoils
work so we can design a near-optimal wing for maximum endurance, then validate it with computer
tools (XFOIL / XFLR5, escalating to CFD where needed).

## Success looks like
- We can explain, in correct physics, why one wing flies longer than another.
- We can read an airfoil polar and pick a foil suited to our drone's low-Reynolds regime.
- We can run XFOIL/XFLR5 to compare candidate airfoils and a whole-wing design on our own.
- We arrive at a concrete wing design (airfoil + planform + aspect ratio + wing loading)
  justified by numbers, not vibes.
- We know when XFOIL is enough and when to escalate to full CFD (OpenFOAM/SU2).

## Constraints
- Drone: 1–2 m wingspan, battery-electric propulsion → endurance ≈ minimising power required.
- Operating regime: low Reynolds number (~150k–400k), where many textbook airfoils misbehave.
- Learner: new to aerodynamics; comfortable with basic physics/math.
- Teaching style: balanced — interleave concepts with hands-on tool practice.

## Out of scope (for now)
- Solar / combustion propulsion.
- Structural/spar design, materials, and manufacturing.
- Control surfaces, autopilot, stability & control (beyond what endurance demands).
- Propeller design (treated as a given efficiency for now).
