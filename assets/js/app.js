const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];
$('#companyGrid').innerHTML=DATA.companies.map(c=>`<div class="company"><img src="${c.logo}" alt="Logo ${c.name}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="company-fallback" hidden>${c.name}</span></div>`).join('');
$('#caseGrid').innerHTML=DATA.cases.map((c,i)=>`<article class="case-card"><div class="case-summary"><div class="case-kicker">${c.category}</div><h3>${c.title}</h3><div class="case-client">${c.client}</div><p>${c.summary}</p><button class="case-toggle" data-i="${i}">Ver caso completo →</button></div><div class="case-detail" id="case-${i}"><div class="detail-block"><h4>Desafío</h4><p>${c.challenge}</p></div><div class="detail-block"><h4>Mi aporte</h4><p>${c.contribution}</p></div><div class="detail-block"><h4>Herramientas</h4><p>${c.tools}</p></div><div class="detail-result"><strong>Resultado:</strong> ${c.result}</div></div></article>`).join('');
$$('.case-toggle').forEach(b=>b.onclick=()=>{const d=$('#case-'+b.dataset.i);const o=d.classList.toggle('open');b.textContent=o?'Ocultar detalle ↑':'Ver caso completo →'});
$('#methodFlow').innerHTML=DATA.method.map(m=>`<article class="method-step"><div class="method-node">${m.n}</div><h3>${m.title}</h3><p>${m.desc}</p></article>`).join('');
$('#timeline').innerHTML=DATA.timeline.map(t=>`<article class="timeline-item"><div class="period">${t.period}</div><h3>${t.company}</h3><p>${t.role}</p></article>`).join('');
const [feature,...rest]=DATA.resources;$('#libraryGrid').innerHTML=`<article class="resource-feature"><div><div class="resource-type">${feature.type}</div><h3>${feature.title}</h3><p>${feature.desc}</p></div><a class="text-link" href="${feature.href}">Leer recurso →</a></article><div class="resource-list">${rest.map(r=>`<article class="resource-row"><div><div class="resource-type">${r.type}</div><h3>${r.title}</h3><p>${r.desc}</p></div><span class="text-link">Próximamente</span></article>`).join('')}</div>`;

$('#certificationList').innerHTML=DATA.certifications.map(c=>`
<a class="certification-row" href="${c.url}" target="_blank" rel="noopener">
  <div>
    <div class="certification-title">${c.title}</div>
    <div class="certification-meta">${c.issuer} · ${c.credential}</div>
  </div>
  <span class="certification-action">Ver credencial ↗</span>
</a>`).join('');

const pages=[];for(let i=0;i<DATA.recommendations.length;i+=3)pages.push(DATA.recommendations.slice(i,i+3));$('#recommendationTrack').innerHTML=pages.map(p=>`<div class="recommendation-page">${p.map(r=>`<article class="recommendation"><blockquote>“${r.quote}”</blockquote><footer><div class="name">${r.name}</div><div class="role">${r.role}</div></footer></article>`).join('')}</div>`).join('');let page=0;$('#recDots').innerHTML=pages.map((_,i)=>`<span class="dot ${i===0?'active':''}"></span>`).join('');function upd(){$('#recommendationTrack').style.transform=`translateX(-${page*100}%)`;$$('.dot').forEach((d,i)=>d.classList.toggle('active',i===page))}$('#prevRec').onclick=()=>{page=(page-1+pages.length)%pages.length;upd()};$('#nextRec').onclick=()=>{page=(page+1)%pages.length;upd()};$('#navToggle').onclick=()=>$('#navLinks').classList.toggle('open');$$('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));