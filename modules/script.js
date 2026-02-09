fetch("modules.json")
  .then(r => r.json())
  .then(data => {
    const list = document.getElementById("module-list");

    data.forEach(m => {
      const item = document.createElement("div");
      item.className = "module-card";
      item.onclick = () => {
        location.href = `module.html?id=${m.id}`;
      };

      item.innerHTML = `
        <img src="${m.image_url}">
        <div>
          <h2>${m.name}</h2>
          <span class="badge">${m.action_type.toUpperCase()}</span>
          <p>Version ${m.version} • SDK ≥ ${m.min_sdk}</p>
        </div>
      `;

      list.appendChild(item);
    });
  });
