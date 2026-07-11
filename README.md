# Groundwork

A true-to-scale garden site planner. Everything is drawn in honest metres — place a plant
and it renders as a circle at its **real mature spread**, so crowding, gaps and spacing
mistakes are visible years before they happen in the ground.

**Live:** https://dogowar01.github.io/groundwork/

## How it works

1. **Paste an aerial** of your block (`Ctrl+V` a screenshot — in Tasmania,
   [LISTmap](https://maps.thelist.tas.gov.au) shows your title boundary over aerial photography).
2. **Calibrate** — click the two ends of anything whose length you know (a fence, a wall,
   the map's scale bar) and enter the true length. Sloping ground is handled:
   `plan = length × cos(slope)`.
3. **Plant** — a searchable catalogue of ~60 species suited to cool-temperate Tasmania
   (natives, exotics, fruit, hedging, perennials), each with its real mature spread.
   A ghost circle previews the footprint before you commit.
4. **Draw** — trace your boundary, house, paths, lawn, beds and water as polygons with
   live areas (order turf and mulch straight off the plan). Segment lengths show while
   you trace; drag handles to adjust; `Shift` snaps to 0.5 m.
5. **Measure** anywhere — distances reported on plan and, with a slope set, along the ground.
   Mark the fall itself with **slope arrows** (uphill → downhill, labelled in degrees).
6. **Sun & shade** — real solar geometry for your latitude casts shadow footprints from
   house roofs (the aerial shows the roof outline — trace it, give it a height) and from
   every tree at its mature height. Winter/equinox/summer, any time of day. Plant
   placement becomes a decision about light, not a guess.

Plants render as organic hand-drawn canopies (a faint dashed ring marks the honest
mature-spread footprint). Click a plant to select it — Delete or the × removes it.

Undo/redo, PNG export with an architect's title block, and everything autosaves locally.
Single-file, offline-first PWA — no accounts, no server, your plan never leaves the browser.

A **Signal9 Apps** instrument.
