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
- We can size a spar to the wing's loads and choose a construction method, then **physically build
  the wing** — keeping it light, since every gram costs endurance.

## Constraints
- Drone: 1–2 m wingspan, battery-electric propulsion → endurance ≈ minimising power required.
- Operating regime: low Reynolds number (~150k–400k), where many textbook airfoils misbehave.
- Learner: new to aerodynamics; comfortable with basic physics/math.
- Teaching style: balanced — interleave concepts with hands-on tool practice.

## Out of scope (for now)
- Solar / combustion propulsion.
- Control surfaces, autopilot, stability & control (beyond what endurance demands).
- Propeller design (treated as a given efficiency for now).

_(Structural/spar design, materials, and manufacturing were out of scope originally; brought
into scope 2026-06-27 with Phase 5 — see [[learning-records/0005-mission-expanded-to-structures]].)_
