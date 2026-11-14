// City reference points for the user-approved research catalogue.
// These points and envelopes are not surveyed basin or administrative boundaries.
const portals={
 cambodia:['Mekong River Commission','https://ffw.mrcmekong.org/stations.php'],
 laos:['Mekong River Commission','https://monitoring.mrcmekong.org/'],
 thailand:['ThaiWater · HII','https://www.thaiwater.net/'],
 indonesia:['Indonesia water resources · PU','https://sda.pu.go.id/'],
 philippines:['PAGASA FloodCaster','https://floodcaster.pagasa.dost.gov.ph/'],
 malaysia:['Public InfoBanjir · JPS','https://publicinfobanjir.water.gov.my/'],
 myanmar:['Myanmar DMH · river forecasts','https://www.moezala.gov.mm/index.php/my/node/134657']
};
// id, country, display city, basin, latitude, longitude, flood type, research focus, optional reference
const entries=[
 ['stung-treng','cambodia','Stung Treng','Mekong · tributary confluence',13.525,105.969,'River & confluence flooding','Compare tributary inflow with the Mekong main stem. City rainfall alone does not describe upstream inflow.'],
 ['kampong-cham','cambodia','Kampong Cham','Mekong River',11.9934,105.4635,'River & floodplain flooding','Study floodplain exposure and river-stage changes along the Mekong. Match the local gauge before applying warning thresholds.'],
 ['phnom-penh','cambodia','Phnom Penh','Mekong · Tonle Sap · Bassac',11.5564,104.9282,'River high water & urban flooding','Investigate the confluence and urban drainage separately. One point cannot describe all three waterways.'],
 ['battambang','cambodia','Battambang','Sangker / Sangkae River',13.0957,103.2022,'River overflow & urban ponding','Study monsoon rainfall in the Sangker catchment and overflow through the city. Local station availability needs verification.','https://doc.nwrdmc-mowram.gov.kh/doc/1733668689_initial_environmental_examination.pdf'],
 ['luang-prabang','laos','Luang Prabang','Mekong · Nam Khan confluence',19.8833,102.1333,'River & tributary flooding','Compare main-stem stage with Nam Khan inflow. Upstream water management is not captured by the rainfall proxy.'],
 ['thakhek','laos','Thakhek','Mekong River',17.3947,104.806,'Riverbank & lowland flooding','Study low-lying areas beside the Mekong. Use the matching MRC station rather than rainfall in another city.'],
 ['savannakhet','laos','Savannakhet','Mekong River',16.55,104.75,'Floodplain & urban flooding','Separate Mekong high water from local drainage problems. Both upstream flow and local storms need investigation.'],
 ['pakse','laos','Pakse','Mekong · Sedone confluence',15.1202,105.799,'River & confluence flooding','Examine how Sedone inflow interacts with Mekong stage near the confluence.'],
 ['bangkok','thailand','Bangkok','Lower Chao Phraya · urban canals',13.7563,100.5018,'Urban, river & tidal flooding','Separate rainfall-driven ponding from river high water and tidal backwater. Drainage and tides are not connected.'],
 ['chiang-mai','thailand','Chiang Mai','Ping River',18.7883,98.9853,'River overflow & upstream runoff','Study rainfall upstream of the city and Ping River overflow. A city-centre sample is not a basin average.','https://www.rid.go.th/th/rid_news/28483'],
 ['chiang-rai','thailand','Chiang Rai','Kok River',19.9105,99.8406,'River-valley & urban flooding','Study mountain catchment runoff entering the Kok valley. Terrain and upstream rainfall require finer analysis.','https://www.thaiwater.net/uploads/contents/current/2025/WIPHA2025/summary.html'],
 ['ubon','thailand','Ubon Ratchathani','Mun River',15.2287,104.8564,'River & prolonged lowland flooding','Track catchment inflow and Mun River stage. Prolonged flooding can persist after local rain has stopped.'],
 ['hat-yai','thailand','Hat Yai','U-Taphao water system',7.0084,100.4747,'Rapid runoff & urban flooding','Study intense short-duration rainfall, canal capacity and upstream runoff. Use local high-frequency observations for validation.','https://www.thaiwater.net/uploads/contents/current/2025/hatyai_nov2025/summary.html'],
 ['bandung-selatan','indonesia','Bandung Selatan · Baleendah','Upper Citarum · Bandung Basin',-7.0033,107.6325,'Basin ponding & river overflow','Focus on Baleendah and the southern basin rather than assigning one flood condition to all of Bandung.','https://sda.pu.go.id/post/detail/upaya_penanggulangan_bencana_banjir_kabupaten_bandung'],
 ['semarang','indonesia','Semarang','Garang River · coastal drainage',-6.9667,110.4167,'River, urban & tidal flooding','Separate river overflow, rain-driven ponding and coastal tidal flooding. Tide and drainage observations remain missing.','https://sda.pu.go.id/balai/bbwspemalijuana/pages/posts/pengangkatan-sedimen-di-kanal-banjir-barat-semarang'],
 ['medan','indonesia','Medan','Deli River',3.5952,98.6722,'River overflow & urban flooding','Compare rainfall across the Deli catchment with river-stage observations and urban drainage.','https://sda.pu.go.id/balai/bbwssumatera2/bbws-sumatera-ii-medan-gerak-cepat-lakukan-penanganan-darurat-banjir-di-sungai-deli'],
 ['banjarmasin','indonesia','Banjarmasin','Martapura · Barito water system',-3.3186,114.5944,'Lowland river & tidal flooding','Investigate low-gradient waterways and tidal backwater. Elevation alone does not explain drainage capacity.','https://www.banjarmasinkota.go.id/2021/12/himbauan-untuk-warga-yang-berada-di_8.html'],
 ['makassar','indonesia','Makassar','Tallo · review Jeneberang influence',-5.1477,119.4327,'River & urban drainage flooding','Start with the Tallo system. Check actual catchment boundaries before attributing any district flooding to Jeneberang.','https://sda.pu.go.id/balai/bbwspompenganjeneberang/bahas-pengendalian-banjir-bbws-pompengan-jeneberang-menghadiri-audiensi-dengan-walikota-makassar'],
 ['tuguegarao','philippines','Tuguegarao','Cagayan · Pinacanauan',17.6132,121.727,'Typhoon rainfall & confluence flooding','Study main-stem and tributary inflow together. Local rainfall does not capture the whole Cagayan catchment.'],
 ['naga','philippines','Naga','Bicol river system',13.6218,123.1948,'Lowland river flooding & ponding','Study high river levels and slow drainage across low-lying areas. Match river forecasts to the correct urban catchment.'],
 ['iloilo','philippines','Iloilo · Jaro','Jaro · Tigum · Aganan',10.728,122.558,'River overflow & urban flooding','Focus on Jaro and its upstream tributaries. Do not substitute a nearby Jalaur basin forecast for this catchment.','https://www.dpwh.gov.ph/dpwh/sites/default/files/Region%20VI.pdf'],
 ['cagayan-de-oro','philippines','Cagayan de Oro','Cagayan de Oro River',8.4542,124.6319,'Rapid river flooding','Study upstream intense rain and rapid river response. This is a different river from the Cagayan in northern Luzon.'],
 ['butuan','philippines','Butuan','Lower Agusan River',8.9475,125.5406,'River high water & lowland flooding','Investigate lower-basin stage and floodplain conditions. Upstream catchment rainfall is more informative than a city point alone.'],
 ['temerloh','malaysia','Temerloh','Pahang · Semantan',3.4495,102.4176,'Confluence & floodplain flooding','Compare Pahang and Semantan inflow and match available gauges to each river.','https://publicinfobanjir.water.gov.my/waterleveldata/Pahang'],
 ['kuala-lumpur','malaysia','Kuala Lumpur','Klang · Gombak',3.139,101.6869,'Short-duration rain & urban flooding','Study rapid urban runoff and river confluence conditions. Drainage infrastructure and operational controls are not modelled.','https://www.water.gov.my/index.php/pages/view/832'],
 ['kota-tinggi','malaysia','Kota Tinggi','Johor River',1.7381,103.8999,'Monsoon river & lowland flooding','Study prolonged rainfall and river-stage changes. Check gauge datum and warning thresholds before comparing water levels.','https://infobanjirjpsjohor.water.gov.my/WaterLevel'],
 ['kuching','malaysia','Kuching','Sarawak River',1.5533,110.3592,'Monsoon river & lowland flooding','Include East Malaysia in the research catalogue. Study river high water, low-lying neighbourhoods and drainage conditions.','https://did.sarawak.gov.my/web/subpage/news_view/906'],
 ['bago','myanmar','Bago','Bago River',17.3367,96.4797,'River overflow & urban flooding','Match the Bago station and its official warning level. Public bulletins need continuity and publication-time checks.'],
 ['mandalay','myanmar','Mandalay','Ayeyarwady riverside',21.9588,96.0891,'Main-stem high water & lowland flooding','Study riverside exposure and upstream inflow. Low local rainfall does not rule out a high Ayeyarwady stage.'],
 ['monywa','myanmar','Monywa','Chindwin River',22.1215,95.1536,'Main-stem river overflow','Track Chindwin upstream inflow and match the local gauge. Do not reuse Ayeyarwady station thresholds.'],
 ['pathein','myanmar','Pathein','Ngawun River · delta waterways',16.7792,94.7321,'Delta river flooding & drainage','Investigate lowland river conditions, drainage and possible tidal influence. Station access and continuity need verification.']
];
export const EXPANDED_REGIONS=entries.map(([id,country,name,basin,lat,lon,kind,focus,reference])=>({id,country,name,basin,center:[lat,lon],zoom:11,kind,focus,phase:2,hydrology:{name:reference?'Official local research reference':portals[country][0],url:reference||portals[country][1],status:'Research reference identified; matched gauge, warning threshold and automated water-level feed not connected.'}}));
export const VIETNAM_CITY_JUMPS=[
 ['mekong','Can Tho',10.045,105.747],['mekong','My Tho',10.36,106.36],['mekong','Cao Lanh',10.46,105.63],['mekong','Ca Mau',9.176,105.152],
 ['hcmc','Ho Chi Minh City',10.776,106.7],['hue','Hue',16.4637,107.5909],['hoian','Hoi An',15.8801,108.338],
 ['north','Lao Cai',22.485,103.971],['north','Sa Pa',22.336,103.844],['north','Ha Giang',22.823,104.983]
];
