# Wing & Airfoil Design — Long-Endurance Drone

A self-paced course on wing and airfoil design for a 1–2 m battery-electric, long-endurance drone,
built as an interactive `/teach` workspace. Lessons are self-contained HTML with interactive
simulations; all knowledge is grounded in vetted, high-trust sources.

**▶ Live site:** https://chrisfraser.github.io/wing-design/

## Layout

| Path | What it is |
|------|------------|
| `index.html` | Course landing page (GitHub Pages entry point) |
| `lessons/` | Self-contained HTML lessons with interactive widgets |
| `reference/` | Living reference docs (glossary, cheat-sheets) |
| `assets/` | Shared stylesheet + quiz widget reused across lessons |
| `MISSION.md` | Why this course exists — the design goal |
| `RESOURCES.md` | Curated, high-trust knowledge & community sources |
| `learning-records/` | What's been learned, to calibrate future lessons |
| `NOTES.md` | Teaching notes and the lesson roadmap |

## North star

Endurance for a propeller aircraft is maximised at **max C<sub>L</sub><sup>1.5</sup>/C<sub>D</sub>**
(minimum power), in the low-Reynolds regime (~150k–400k). Every design decision is judged against it.
