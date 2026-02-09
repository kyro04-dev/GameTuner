fetch("modules.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("module-list");

    data.forEach(m => {
      const card = document.createElement("div");
      card.className = "module-card";
      card.onclick = () => {
        location.href = `module.html?id=${m.id}`;
      };

      card.innerHTML = `
        <img class="card-image" src="${m.image_url}">
        <div class="card-content">
          <h2>${m.name}</h2>
          <p class="meta">
            v${m.version} • SDK ≥ ${m.min_sdk}
          </p>
          <span class="badge">${m.action_type.toUpperCase()}</span>
        </div>
      `;

      list.appendChild(card);
    });
  });
