import {writeFile,mkdir,readFile,rename} from 'node:fs/promises';
import {REGIONS} from '../dist/regions.js';
import {parseNASA,parseWeather} from '../dist/model.js';
const dir=new URL('../dist/data/',import.meta.url);await mkdir(dir,{recursive:true});
const now=new Date(),end=new Date(now.getTime()-86400000),start=new Date(now.getTime()-15*86400000);
const fmt=d=>d.toISOString().slice(0,10).replaceAll('-','');
let previous={regions:{}};try{previous=JSON.parse(await readFile(new URL('manifest.json',dir)));}catch{}
const manifest={fetchedAt:now.toISOString(),regions:{}};
async function get(url){const r=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!r.ok)throw Error(`${r.status} from ${new URL(url).host}`);return r.json();}
for(const region of REGIONS){
 const [lat,lon]=region.center;
 const nasa=`https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOTCORR&community=AG&longitude=${lon}&latitude=${lat}&start=${fmt(start)}&end=${fmt(end)}&format=JSON&time-standard=UTC`;
 const weather=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=precipitation,soil_moisture_0_to_1cm&forecast_days=3&past_days=1&timezone=UTC&timeformat=unixtime`;
 const record={};
 for(const [type,url] of [['nasa',nasa],['weather',weather]]){try{const raw=await get(url);if(type==='nasa'&&parseNASA(raw).past===null)throw Error('Missing complete NASA days');if(type==='weather'&&parseWeather(raw).future===null)throw Error('Missing complete forecast');await writeFile(new URL(`${region.id}-${type}.json`,dir),JSON.stringify(raw));record[type]={url,file:`data/${region.id}-${type}.json`,fetchedAt:new Date().toISOString()};console.log(region.id,type,'OK');}catch(e){record[type]=previous.regions?.[region.id]?.[type]?.file?{...previous.regions[region.id][type],lastAttemptAt:new Date().toISOString(),lastAttemptError:e.message}:{url,error:e.message};console.log(region.id,type,e.message);}}
 manifest.regions[region.id]=record;
}
await writeFile(new URL('manifest.next.json',dir),JSON.stringify(manifest,null,2));
await rename(new URL('manifest.next.json',dir),new URL('manifest.json',dir));
