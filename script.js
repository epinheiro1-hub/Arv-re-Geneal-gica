/* =====================================================
   DADOS DA FAMÍLIA
   ===================================================== */

const alderio = {
    id: 'alderio',
    name: 'Alderio Barros Mourão',
    img: 'imagens/alderio.jpg',
    years: '',
    description: 'Patriarca da família Som da Pedra. Fundador do ramo principal.'
};

const laura = {
    id: 'laura-pinheiro',
    name: 'Laura Pinheiro',
    img: 'imagens/laura.jpg',
    years: '',
    description: 'Matriarca da primeira geração, mãe da Sirônica, Simar e Ribamar.'
};

const ildair = {
    id: 'ildair',
    name: 'Ildair',
    img: 'imagens/ildair.jpg',
    years: '',
    description: 'Casada com Alderio, mãe de Erica Tatiane e Jonde Alderio.'
};

/* -------------------------------------------------------
   GERAÇÃO 2 — casais filhos de Alderio
   Cada item: { spouse1, spouse2, children[] }
   ------------------------------------------------------- */

const gen2Laura = [
    {
        spouse1: {
            id: 'sironica',
            name: 'Sirônica',
            img: 'imagens/sironica.jpg',
            description: 'Filha de Alderio e Laura Pinheiro.'
        },
        spouse2: {
            id: 'albertinho',
            name: 'Albertinho',
            img: 'imagens/albertinho.jpg',
            description: 'Ex-marido de Sirônica e pai de Lucas Alderio, Luiz Davi, Alberto e Laura.'
        },
        children: [
            { id: 'lucas',       name: 'Lucas',   img: 'imagens/lucas.jpg',       description: 'Filho de Sirônica e Albertinho.' },
            {
                id: 'luiz',
                name: 'Luiz',
                img: 'imagens/luiz.jpg',
                description: 'Filho de Sirônica e Albertinho. Casado com Laura.',
                spouse: {
                    id: 'laura-luiz',
                    name: 'Laura',
                    img: 'imagens/laura_filha.jpg',
                    description: 'Esposa de Luiz. Ainda sem filhos.'
                },
                noChildrenYet: true
            },
            { id: 'alberto',     name: 'Alberto', img: 'imagens/alberto.jpg',     description: 'Filho de Sirônica e Albertinho.' },
            { id: 'laura-filha', name: 'Laura',   img: 'imagens/laura_filha.jpg', description: 'Filha de Sirônica e Albertinho.' }
        ]
    },
    {
        spouse1: {
            id: 'simar',
            name: 'Simar',
            img: 'imagens/simar.jpg',
            description: 'Filha de Alderio e Laura Pinheiro, Mãe de Eduardo e Erick.'
        },
        spouse2: {
            id: 'jumber',
            name: 'Jumber',
            img: 'imagens/jumber.jpg',
            description: 'Marido de Simar e pai de Eduardo e Erick.'
        },
        children: [
            {
                id: 'eduardo',
                name: 'Eduardo',
                img: 'imagens/eduardo.jpg',
                highlight: true,
                description: 'Filho de Simar e Jumber e pai de Alfonso Miguel. Representante do ramo Som da Pedra.',
                spouse: {
                    id: 'daylla',
                    name: 'Daylla',
                    img: 'imagens/daylla.jpg',
                    description: 'Esposa de Eduardo e mãe de Alfonso Miguel.'
                },
                children: [
                    { id: 'alfonso-miguel', name: 'Alfonso Miguel', img: 'imagens/alfonso.jpg', description: 'Filho de Eduardo e Daylla. Geração 4.' }
                ]
            },
            { id: 'erick', name: 'Erick', img: 'imagens/erick.jpg', description: 'Filho de Simar e Jumber.' }
        ]
    },
    {
        spouse1: {
            id: 'ribamar',
            name: 'Ribamar',
            img: 'imagens/ribamar.jpg',
            description: 'Filho de Alderio e Laura Pinheiro.Pai de Ribamar Filho e Ana Gabriela.'
        },
        spouse2: {
            id: 'raquel',
            name: 'Raquel',
            img: 'imagens/raquel.jpg',
            description: 'Ex esposa de Ribamar. Mãe de Ribamar Filho e Ana Gabriela.'
        },
        children: [
            { id: 'ribamar-filho', name: 'Ribamar Filho', img: 'imagens/ribamar_filho.jpg', description: 'Filho de Ribamar e Raquel.' },
            { id: 'ana-gabriela',  name: 'Ana Gabriela',  img: 'imagens/ana.jpg',            description: 'Filha de Ribamar e Raquel.' }
        ]
    }
];

const gen2Ildair = [
    {
        spouse1: {
            id: 'erica',
            name: 'Erica',
            img: 'imagens/erica.jpg',
            description: 'Filha de Alderio e Ildair.Mãe de Nicole, Debora e Liz Pérola.'
        },
        spouse2: {
            id: 'ademir',
            name: 'Ademir',
            img: 'imagens/ademir.jpg',
            description: 'Marido de Erica.Pai de Nicole, Debora e Liz Pérola.'
        },
        children: [
            { id: 'nicole',     name: 'Nicole',     img: 'imagens/nicole.jpg', description: 'Filha de Erica e Ademir.' },
            { id: 'debora',     name: 'Debora',     img: 'imagens/debora.jpg', description: 'Filha de Erica e Ademir.' },
            { id: 'liz-perola', name: 'Liz Pérola', img: 'imagens/liz.jpg',   description: 'Filha de Erica e Ademir.' }
        ]
    },
    {
        spouse1: {
            id: 'jonde',
            name: 'Jonde',
            img: 'imagens/jonde.jpg',
            description: 'Filho de Alderio e Ildair.'
        },
        spouse2: {
            id: 'iracelia',
            name: 'Iracélia',
            img: 'imagens/iracelia.jpg',
            description: 'Esposa de Jonde.Mãe de Iria e Joshua.'
        },
        children: [
            { id: 'iria',   name: 'Iria',   img: 'imagens/iria.jpg',   description: 'Filha de Jonde e Iracélia.' },
            { id: 'joshua', name: 'Joshua', img: 'imagens/joshua.jpg', description: 'Filho de Jonde e Iracélia.' }
        ]
    }
];

/* =====================================================
   MODAL
   ===================================================== */

function openInfoModal(person) {
    const modal = document.getElementById('infoModal');
    if (!modal) return;
    modal.querySelector('.info-title').textContent       = person.name;
    modal.querySelector('.info-years').textContent       = person.years || '';
    modal.querySelector('.info-description').textContent = person.description || 'Nenhuma informação adicional disponível.';
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

/* =====================================================
   HELPERS
   ===================================================== */

function makePersonEl(person, small = false) {
    const wrap = document.createElement('div');
    wrap.className = 'pessoa' + (small ? ' pequena' : '') + (person.highlight ? ' destaque' : '');
    wrap.style.cursor = 'pointer';

    const img = document.createElement('img');
    img.src = person.img;
    img.alt = person.name;
    wrap.appendChild(img);

    const badge = document.createElement('button');
    badge.className = 'info-badge';
    badge.type = 'button';
    badge.textContent = 'ℹ';
    badge.title = `Ver informações de ${person.name}`;
    badge.addEventListener('click', e => { e.stopPropagation(); openInfoModal(person); });
    wrap.appendChild(badge);

    const h3 = document.createElement('h3');
    h3.textContent = person.name;
    wrap.appendChild(h3);

    if (person.years) {
        const sp = document.createElement('span');
        sp.textContent = person.years;
        wrap.appendChild(sp);
    }

    wrap.addEventListener('click', () => openInfoModal(person));
    return wrap;
}

/* Casal lado a lado com linha de conexão */
function makeCoupleBanner(p1, p2, separated = false) {
    const row = document.createElement('div');
    row.className = 'couple-banner';

    row.appendChild(makePersonEl(p1));

    const mid = document.createElement('div');
    mid.className = 'couple-mid';

    const line = document.createElement('div');
    line.className = 'connector-line' + (separated ? ' separated' : '');
    mid.appendChild(line);

    if (separated) {
        const label = document.createElement('span');
        label.className = 'sep-label';
        label.textContent = 'separados';
        mid.appendChild(label);
    }

    row.appendChild(mid);
    row.appendChild(makePersonEl(p2));

    return row;
}

/* Linha de filhos com traços */
function makeChildrenRow(children, small = true) {
    const wrap = document.createElement('div');
    wrap.className = 'children-section';

    const bar = document.createElement('div');
    bar.className = 'children-bar';
    wrap.appendChild(bar);

    const row = document.createElement('div');
    row.className = 'children-row';

    children.forEach(child => {
        const col = document.createElement('div');
        col.className = 'child-col';

        const tick = document.createElement('div');
        tick.className = 'child-tick';
        col.appendChild(tick);

        /* Se o filho tem conjuge, mostrar como mini-casal inline */
        if (child.spouse) {
            const miniCouple = document.createElement('div');
            miniCouple.className = 'mini-couple';

            miniCouple.appendChild(makePersonEl(child, small));

            const midLine = document.createElement('div');
            midLine.className = 'mini-connector';
            miniCouple.appendChild(midLine);

            miniCouple.appendChild(makePersonEl(child.spouse, small));
            col.appendChild(miniCouple);

            /* Sem filhos ainda */
            if (child.noChildrenYet) {
                const noKids = document.createElement('p');
                noKids.className = 'no-children-label';
                noKids.textContent = 'Sem filhos ainda';
                col.appendChild(noKids);
            }
        } else {
            col.appendChild(makePersonEl(child, small));
        }

        /* Filhos do filho = Geracao 4 */
        if (child.children && child.children.length) {
            const gen4wrap = document.createElement('div');
            gen4wrap.className = 'gen3-section';

            const gen4label = document.createElement('p');
            gen4label.className = 'gen3-label';
            gen4label.textContent = 'Geracao 4';
            gen4wrap.appendChild(gen4label);

            gen4wrap.appendChild(makeChildrenRow(child.children, true));
            col.appendChild(gen4wrap);
        }

        row.appendChild(col);
    });

    wrap.appendChild(row);
    return wrap;
}

/* Bloco de casal da Gen2 + seus filhos (Gen3) */
function makeGen2FamilyBlock(coupleData) {
    const block = document.createElement('div');
    block.className = 'gen2-family-block';

    /* Casal */
    block.appendChild(makeCoupleBanner(coupleData.spouse1, coupleData.spouse2, false));

    /* Filhos (Geração 3) */
    if (coupleData.children && coupleData.children.length) {
        const gen3wrap = document.createElement('div');
        gen3wrap.className = 'gen3-section';

        const gen3label = document.createElement('p');
        gen3label.className = 'gen3-label';
        gen3label.textContent = 'Geração 3';
        gen3wrap.appendChild(gen3label);

        gen3wrap.appendChild(makeChildrenRow(coupleData.children, true));
        block.appendChild(gen3wrap);
    }

    return block;
}

/* =====================================================
   RENDER PRINCIPAL
   ===================================================== */

function renderTree() {
    const root = document.getElementById('arvore');
    if (!root) return;
    root.innerHTML = '';

    /* ---------- GERAÇÃO 1 ---------- */
    const gen1 = document.createElement('section');
    gen1.className = 'geracao';

    const g1title = document.createElement('h2');
    g1title.textContent = 'Geração 1 — Patriarca';
    gen1.appendChild(g1title);

    const patriarchBlock = document.createElement('div');
    patriarchBlock.className = 'patriarch-block';

    const union1 = document.createElement('div');
    union1.className = 'union-block';
    const u1label = document.createElement('p');
    u1label.className = 'union-label';
    u1label.textContent = '1º Casamento';
    union1.appendChild(u1label);
    union1.appendChild(makeCoupleBanner(alderio, laura, true));

    const divider = document.createElement('div');
    divider.className = 'union-divider';
    divider.textContent = '✦';

    const union2 = document.createElement('div');
    union2.className = 'union-block';
    const u2label = document.createElement('p');
    u2label.className = 'union-label';
    u2label.textContent = '2º Casamento';
    union2.appendChild(u2label);
    union2.appendChild(makeCoupleBanner(alderio, ildair, true));

    patriarchBlock.appendChild(union1);
    patriarchBlock.appendChild(divider);
    patriarchBlock.appendChild(union2);
    gen1.appendChild(patriarchBlock);
    root.appendChild(gen1);

    /* ---------- GERAÇÃO 2 — ramo Laura ---------- */
    const gen2a = document.createElement('section');
    gen2a.className = 'geracao';

    const g2atitle = document.createElement('h2');
    g2atitle.textContent = 'Geração 2 — Filhos de Alderio & Laura Pinheiro';
    gen2a.appendChild(g2atitle);

    const g2aRow = document.createElement('div');
    g2aRow.className = 'gen2-row';
    gen2Laura.forEach(couple => g2aRow.appendChild(makeGen2FamilyBlock(couple)));
    gen2a.appendChild(g2aRow);
    root.appendChild(gen2a);

    /* ---------- GERAÇÃO 2 — ramo Ildair ---------- */
    const gen2b = document.createElement('section');
    gen2b.className = 'geracao';

    const g2btitle = document.createElement('h2');
    g2btitle.textContent = 'Geração 2 — Filhos de Alderio & Ildair';
    gen2b.appendChild(g2btitle);

    const g2bRow = document.createElement('div');
    g2bRow.className = 'gen2-row';
    gen2Ildair.forEach(couple => g2bRow.appendChild(makeGen2FamilyBlock(couple)));
    gen2b.appendChild(g2bRow);
    root.appendChild(gen2b);
}

/* =====================================================
   INIT
   ===================================================== */

window.addEventListener('DOMContentLoaded', () => {
    renderTree();
    const modal = document.getElementById('infoModal');
    modal.querySelector('.close-button').addEventListener('click', closeInfoModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeInfoModal(); });
});