const params = new URLSearchParams(location.search);
const moduleId = params.get("id");

fetch("modules.json")
  .then(r => r.json())
  .then(data => {
    const m = data.find(x => x.id === moduleId);
    if (!m) return;

    document.getElementById("module-detail").innerHTML = `
      <img class="cover" src="${m.image_url}">
      <h1>${m.name}</h1>

      <p class="desc">${m.description}</p>

      <ul class="info">
        <li><b>Version:</b> ${m.version}</li>
        <li><b>Author:</b> ${m.author}</li>
        <li><b>Minimum SDK:</b> ${m.min_sdk}</li>
        <li><b>Type:</b> ${m.action_type.toUpperCase()}</li>
        <li><b>Size:</b> ${m.size_module}</li>
      </ul>

      <a href="${m.url_file}" download class="download-btn">
        ⬇ Download Module
      </a>
    `;
  });
