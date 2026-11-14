# ASEAN Flood Watch

An independent student research website for Southeast Asia, derived from the Vietnam Flood Watch interface. It lives in its own project directory and source repository; it does not modify or deploy the Vietnam project.

## Live website

GitHub Pages deploys the contents of `dist/` automatically after every push to `main`:

https://heliosli6767.github.io/ASEAN-Flood-Watch/

## Research scope

The approved catalogue contains 46 study areas across 11 countries:

- Vietnam: the original five regions (Mekong Delta, Ho Chi Minh City, Hue, Hoi An, Northern Highlands), unchanged in name, outline, reference point and scenario configuration. All ten original city shortcuts are preserved. Shortcuts move the map; they do not claim independent city forecasts.
- Cambodia: Kratie, Stung Treng, Kampong Cham, Phnom Penh, Battambang.
- Laos: Vientiane, Luang Prabang, Thakhek, Savannakhet, Pakse.
- Thailand: Ayutthaya, Bangkok, Chiang Mai, Chiang Rai, Ubon Ratchathani, Hat Yai.
- Indonesia: Jakarta, Bandung Selatan / Baleendah, Semarang, Medan, Banjarmasin, Makassar.
- Philippines: Marikina, Tuguegarao, Naga, Iloilo / Jaro, Cagayan de Oro, Butuan.
- Malaysia: Kuala Krai, Temerloh, Kuala Lumpur, Kota Tinggi, Kuching.
- Myanmar: Hpa-An, Bago, Mandalay, Monywa, Pathein.
- Singapore: Kallang; Brunei: Bandar Seri Begawan; Timor-Leste: Dili / Comoro.

Ten existing/restored study regions retain the educational screening demonstration. The other 36 display a clearly labelled unvalidated trial of the same classroom index, with baseline data and specific research gaps. No operational risk index is claimed. All 46 have separate coordinates, API requests and provenance. Selection is a research catalogue, not a flood-danger ranking. Country buttons fit all of that country's study areas; individual area selections zoom in. Centre badges show the source-data index interval or the storm-scenario score, including on the ASEAN overview. Insufficient data remains a dash. Candidate trial values are also included in exports with explicit validation status.

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
- Country-specific official water portals are research references only. Their station data has not been ingested. Myanmar references now include an official web bulletin; these references are not ingested as current station observations.
- OpenFreeMap / OpenStreetMap provides detailed cartographic context. Vietnam retains its original study polygons. Every non-Vietnam area is displayed as a 12 km-radius geographic circle. These approximate study areas are not administrative boundaries, basin polygons or flood extents. Bundled world outlines are the offline fallback.
- Hue and Hoi An retain illustrative facility and storm overlays and OSRM road geometry. No road safety or official evacuation recommendation is provided.
- IMERG, SMAP, NASADEM, GloFAS, geoBoundaries and ADINet are linked as future research sources, not falsely presented as current inputs.

Every source and original request is linked in the website footer. Third-party renderer licenses are retained in `dist/vendor/`.

## Deployment

Private website: https://asean-flood-watch.helios-li6767.chatgpt.site

Public GitHub repository: https://github.com/heliosli6767/ASEAN-Flood-Watch

`.openai/hosting.json` belongs only to the private ASEAN Site. GitHub Pages publishes `dist/` independently through `.github/workflows/pages.yml`. The Vietnam repository and deployment remain separate.

NASA and ASEAN do not endorse this independent project. It is not an official warning, flood probability or safe-route service.
