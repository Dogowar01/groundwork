# Groundwork

A true-to-scale garden site planner. Everything is drawn in honest metres — place a plant
and it renders as a circle at its **real mature spread**, so crowding, gaps and spacing
mistakes are visible years before they happen in the ground.

**Live:** https://dogowar01.github.io/groundwork/

## How it works

1. **Hit map and search your address** — a live aerial loads underneath the plan
   (LIST orthophoto in Tasmania, © State of Tasmania CC-BY; Esri World Imagery elsewhere).
   Scale comes from the map projection, so **no calibration is needed**, and your
   latitude feeds the sun engine automatically. Tiles are cached for offline revisits.
   Prefer full offline? `Ctrl+V` a screenshot instead and calibrate it:
2. **Calibrate** (pasted images only) — click the two ends of anything whose length you
   know and enter the true length. Sloping ground is handled: `plan = length × cos(slope)`.
3. **Plant** — a searchable catalogue of ~60 species suited to cool-temperate Tasmania
   (natives, exotics, fruit, hedging, perennials), each with its real mature spread.
   A ghost circle previews the footprint before you commit.
4. **Draw** — trace your boundary, house, paths, lawn, beds and water as polygons with
   live areas (order turf and mulch straight off the plan). Segment lengths show while
   you trace; drag handles to adjust; `Shift` snaps to 0.5 m.
5. **Measure** anywhere — distances reported on plan and, with a slope set, along the ground.
   Mark the fall itself with **slope arrows** (uphill → downhill, labelled in degrees).
6. **Sun & shade** — real solar geometry for your latitude casts shadow footprints from
   house roofs (the aerial shows the roof outline — trace it, give it a height), fences,
   and every tree at its mature height. Winter/equinox/summer, any time of day — or flip
   to **day sun-hours** for a whole-day shade map: the dark wash shows hours lost to
   shade across the block. Plant placement becomes a decision about light, not a guess.

Plants render as organic hand-drawn canopies (a faint dashed ring marks the honest
mature-spread footprint). Click a plant to select it — edit its name, size, height and
notes in the popover, or remove it with Delete / ×.

Undo/redo, PNG export with an architect's title block, a **plant schedule** (.csv) you
can hand a nursery, and **plan backup/restore** (.json). Everything autosaves locally.
Single-file PWA — no accounts, no server. The design never leaves the browser; the only
network use is the optional live map (tile and address-search requests).

A **Signal9 Apps** instrument.
