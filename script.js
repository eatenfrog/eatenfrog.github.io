document.getElementById('year').textContent = new Date().getFullYear();

const grid = document.getElementById('games-grid');
grid.innerHTML = GAMES.map(g => `
  <article class="card">
    <img src="${g.image}" alt="${g.title}">
    <div class="body">
      <span class="tag">${g.status}</span>
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
      <a href="${g.url}">Detay</a>
    </div>
  </article>`).join('');
