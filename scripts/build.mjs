import {mkdir,copyFile,readFile} from 'node:fs/promises';
const files=['index.html','estudio.html','styles.css','app.js','studio.js','events.json'];
await mkdir('dist',{recursive:true});
const events=JSON.parse(await readFile('events.json','utf8'));
for(const e of events){if(!e.id||!e.title||!/^https:\/\//.test(e.source))throw Error('Evento inválido');}
for(const file of files)await copyFile(file,'dist/'+file);
console.log('Sitio preparado. '+events.length+' eventos verificados estructuralmente.');
