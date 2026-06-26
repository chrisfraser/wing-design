# Wing & Airfoil Design Resources

High-trust only. URLs verified June 2026. Drawn from these, not from guesswork.

## Knowledge

### How lift actually works (no pop-sci myths)
- [NASA Glenn — Bernoulli and Newton / Incorrect Lift Theory](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/) — NASA Glenn. Debunks equal-transit-time; lift = flow turning. **Start here.**
- [Babinsky, "How do wings work?" (PDF)](https://www3.eng.cam.ac.uk/outreach/Project-resources/Senior-glider/howwingswork.pdf) — Cambridge, Physics Education 2003. Correct streamline-curvature explanation in 5 pages.
- [McLean, "Understanding Aerodynamics: Arguing from the Real Physics"](https://onlinelibrary.wiley.com/doi/book/10.1002/9781118454190) — Boeing Technical Fellow. Book-length rigor on why the simple stories are wrong.

### Lift, drag, L/D, performance
- [Marchman, "Aerodynamics and Aircraft Performance" (open textbook)](https://pressbooks.lib.vt.edu/aerodynamics/) — Virginia Tech. **Free, our spine resource** for performance.
- [Anderson, "Fundamentals of Aerodynamics"](https://www.mheducation.com/highered/product/fundamentals-aerodynamics-anderson.html) — Univ. Maryland. Standard textbook: drag polar, L/D derivations.
- [Drela, "Flight Vehicle Aerodynamics"](https://mitpress.mit.edu/9780262526449/flight-vehicle-aerodynamics/) — MIT. The most authoritative single book on this whole list.
- [Tennekes, "The Simple Science of Flight"](https://mitpress.mit.edu/9780262513135/the-simple-science-of-flight/) — MIT Press. Intuitive scaling of why slow + light + high-AR wins endurance.

### Endurance theory (why CL^1.5/CD governs prop endurance)
- [Marchman Ch.6 — Range and Endurance](https://pressbooks.lib.vt.edu/aerodynamics/chapter/chapter-6-range-and-endurance/) — Virginia Tech. **Best free derivation:** prop endurance maxed at max CL^1.5/CD.
- [Anderson, "Aircraft Performance and Design"](https://www.mheducation.com/highered/product/aircraft-performance-design-anderson.html) — Breguet endurance/range for prop vs jet.

### Reynolds number & low-Re aerodynamics (OUR regime, Re ~150k–400k)
- [Selig, "Low Reynolds Number Airfoil Design" (PDF)](https://m-selig.ae.illinois.edu/pubs/Selig-2003-VKI-LRN-Airfoil-Design-Lecture-Series.pdf) — UIUC. **The best primary reference on our exact regime.**
- [UIUC Applied Aerodynamics Group](https://m-selig.ae.illinois.edu/) — UIUC. 25 years of low-Re wind-tunnel data + tools.
- ["Summary of Low-Speed Airfoil Data" V1 (PDF)](https://m-selig.ae.illinois.edu/uiuc_lsat/Low-Speed-Airfoil-Data-V1.pdf) — UIUC. Measured low-Re polars — ground-truth to check XFOIL against.

### Airfoil families & selection
- [UIUC Airfoil Coordinate Database](https://m-selig.ae.illinois.edu/ads/coord_database.html) — UIUC. ~1,650 airfoil geometries to feed XFOIL/XFLR5.
- [Airfoil Tools](http://airfoiltools.com/) — community. Search/compare/plot foils + Reynolds-swept polars in-browser. (Open in a browser; blocks scripts.)
- [Guglielmo & Selig — S1223 high-lift low-Re airfoil (PDF)](https://m-selig.ae.illinois.edu/pubs/GuglielmoSelig-1997-JofAC-S1223.pdf) — UIUC. A go-to high-lift foil for slow, high-endurance UAVs.
- [Abbott & von Doenhoff, "Theory of Wing Sections"](https://store.doverpublications.com/products/9780486605869) — NACA. Classic reference for NACA airfoil theory + data.

### Planform, aspect ratio, induced drag
- [NASA Glenn — Induced Drag](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/induced-drag-coefficient/) — CDi = CL²/(π·AR·e); why high AR cuts induced drag.
- [MIT 16.100 Aerodynamics — Lecture Notes](https://ocw.mit.edu/courses/16-100-aerodynamics-fall-2005/pages/lecture-notes/) — MIT OCW. Lifting-line, elliptic loading, span efficiency.

## Tools

- [XFOIL (download + docs)](https://web.mit.edu/drela/Public/web/xfoil/) — Drela/Youngren, MIT. **The** 2D viscous airfoil tool for low-Re polars.
- [XFOIL User Primer](https://web.mit.edu/aeroutil_v1.0/xfoil_doc.txt) — official command reference.
- [XFLR5 (download)](https://sourceforge.net/projects/xflr5/) — Deperrois. GUI wrapping XFOIL + lifting-line/VLM for whole wings & planes.
- [Willner, "A Tutorial for XFLR5" (PDF)](http://www.v0id.at/downloads/XFLR5-tut-v1.pdf) — most-cited beginner walkthrough.
- [ROSflight XFLR5 manual](https://docs.rosflight.org/latest/user-guide/tutorials/user-manual-xflr5/) — clean modern UAV-oriented tutorial.
- [SU2](https://su2code.github.io/) — Stanford. Open-source RANS/Euler CFD + adjoint shape optimization.
- [OpenFOAM](https://www.openfoam.com/) — general-purpose finite-volume CFD. **Caution:** low-Re needs a transition model (γ-Reθ) or it over-predicts drag.

## Wisdom (Communities)

- [RCGroups — Aerodynamics](https://www.rcgroups.com/aerodynamics-181/) — large RC community; Drela's AGxx airfoil threads are archived here. **Most relevant to us.**
- [RC Soaring Digest](https://www.rcsoaringdigest.com/) — curated articles bridging glider/low-Re theory and practice.
- [CFD Online Forums](https://www.cfd-online.com/Forums/) — best for OpenFOAM/SU2/meshing/turbulence-model questions.
- [r/RCPlanes](https://www.reddit.com/r/RCPlanes/) / [r/UAV](https://www.reddit.com/r/UAV/) — hands-on build & airfoil-selection advice.

## Gaps
- No single superior *free* standalone derivation of CL^1.5/CD beyond Marchman Ch.6 — supplement with Anderson.
- airfoiltools.com blocks automated access — must be used interactively in a browser.
- Low-Re CFD (OpenFOAM/SU2) results are untrustworthy without transition modeling — flagged for the CFD lessons.
