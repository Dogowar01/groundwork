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
4. **Measure** anywhere — distances reported on plan and, with a slope set, along the ground.

Undo/redo, PNG export with an architect's title block, and everything autosaves locally.
Single-file, offline-first PWA — no accounts, no server, your plan never leaves the browser.

A **Signal9 Apps** instrument.
