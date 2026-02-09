const id = new URLSearchParams(location.search).get("id");

fetch("modules.json")
  .then(res => res.json())
  .then(data => {
    const m = data.find(x => x.id === id);
    if (!m) return;

    document.getElementById("module-detail").innerHTML = `
      <h1 class="detail-title">${m.name}</h1>

      <img class="cover" src="${m.image_url}">

      <ul class="info">
        <li><b>Version:</b> ${m.version}</li>
        <li><b>Author:</b> ${m.author}</li>
        <li><b>Minimum SDK:</b> ${m.min_sdk}</li>
        <li><b>Type:</b> ${m.action_type.toUpperCase()}</li>
        <li><b>Size:</b> ${m.size_module}</li>
      </ul>

      <p class="desc">${m.description}</p>

      <a class="download-btn" href="${m.url_file}" download>
        ⬇ Download Module
      </a>
    `;
  });
