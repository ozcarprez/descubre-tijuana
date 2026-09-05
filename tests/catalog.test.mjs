import test from 'node:test';import assert from 'node:assert/strict';import {filterEvents,occurs,localToday} from '../catalog.mjs';
const repeated={title:'Gráfica',category:'Talleres',date:'2026-09-05',endDate:'2026-09-13',sessions:[{date:'2026-09-05'},{date:'2026-09-12'}],priceValue:0,free:true};
test('Recurring events do not appear on non-session days',()=>{assert.equal(occurs(repeated,'2026-09-08'),false);assert.equal(occurs(repeated,'2026-09-12'),true);});
test('Search ignores Spanish accents and combines budget filters',()=>{assert.equal(filterEvents([repeated],{q:'grafica',budget:'100',today:'2026-09-06'}).length,1);assert.equal(filterEvents([{...repeated,priceValue:undefined}],{budget:'100',today:'2026-09-06'}).length,0);});
test('Past events excluded by default, available in archive',()=>{assert.equal(filterEvents([repeated],{today:'2026-09-14'}).length,0);assert.equal(filterEvents([repeated],{today:'2026-09-14',date:'all'}).length,1);});
test('Tijuana date is used around UTC midnight',()=>{assert.equal(localToday(new Date('2026-09-06T02:00:00Z')),'2026-09-05');});
test('Week includes today and six further days',()=>{assert.equal(filterEvents([{...repeated,date:'2026-09-12',endDate:null,sessions:null}],{date:'week',today:'2026-09-05'}).length,0);});
