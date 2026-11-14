# ASEAN Flood Watch

An independent student research website for Southeast Asia, derived from the Vietnam Flood Watch interface. It lives in its own project directory and source repository; it does not modify or deploy the Vietnam project.

## Research scope

First group: Vietnam (Hue / Perfume River, Hoi An / Thu Bon, Can Tho / Mekong Delta), Cambodia (Kratie / Mekong), Laos (Vientiane / Mekong), Thailand (Ayutthaya / Chao Phraya), Philippines (Marikina / Pasig–Marikina), Indonesia (Jakarta / Ciliwung).

Candidate areas: Kuala Krai, Hpa-An, Kallang, Bandar Seri Begawan and Dili. Their baseline data is visible but a screening index is not enabled until flood-type suitability is reviewed. Selection is a research plan, not a flood-danger ranking.

## Run and validate

No installation or build step is required. Node.js 20+ is sufficient.

```sh
npm start
npm test
npm run refresh-data
```

Preview: http://127.0.0.1:4174. Static files are in `dist/`. Refreshing requires internet access. Snapshots contain original JSON responses, exact request URLs and retrieval timestamps in `dist/data/manifest.json`. Browser refresh is manual and session-local; it does not update the published snapshots. All displayed times use UTC for cross-country comparison.

## Data and limitations

- NASA POWER Daily Point API: `PRECTOTCORR`, latest three consecutive available UTC daily estimates; the response identifies the underlying source. This is not IMERG.
- Open-Meteo: forecast hourly precipitation, modelled 0–1 cm soil moisture, reference-point elevation. The next 24 complete hourly rainfall intervals form the future-rain indicator.
- The five educational factor weights remain 35% future rain, 25% past rain, 20% soil, 10% elevation, 10% river rise. Missing river observations produce a bounded score interval, not an estimated probability. Weights and thresholds are not calibrated across countries.
- New auxiliary displays: next-three-hour rainfall and peak hourly rainfall within the next 24 hours, derived from the same forecast without additional index weight. Gap to official river warning level is explicitly unavailable until a matched gauge and its threshold are connected.
- Country-specific official water portals are research references only. Their station data has not been ingested. The Myanmar PDF is historical (1 August 2025).
- OpenFreeMap / OpenStreetMap provides detailed cartographic context. Approximate study envelopes are not administrative boundaries, basin polygons or flood extents. Bundled world outlines are the offline fallback.
- Hue and Hoi An retain illustrative facility and storm overlays and OSRM road geometry. No road safety or official evacuation recommendation is provided.
- IMERG, SMAP, NASADEM, GloFAS, geoBoundaries and ADINet are linked as future research sources, not falsely presented as current inputs.

Every source and original request is linked in the website footer. Third-party renderer licenses are retained in `dist/vendor/`.

## Separate deployment

Private website: https://asean-flood-watch.helios-li6767.chatgpt.site

`.openai/hosting.json` belongs only to the ASEAN Site. A separate public GitHub repository can be connected in the next publishing step; the Vietnam remote and Pages workflow are deliberately not inherited.

NASA and ASEAN do not endorse this independent project. It is not an official warning, flood probability or safe-route service.
