const jsonUrl = "modules.json"; 
// atau guna raw github URL

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("module-list");

    data.forEach(m => {
      const div = document.createElement("div");
      div.className = "module";

      div.innerHTML = `
        <img src="${m.image_url}" alt="${m.name}">
        <div class="info">
          <h2>${m.name}</h2>
          <p>${m.description}</p>
          <p>
            Version: ${m.version} |
            SDK ≥ ${m.min_sdk} |
            Size: ${m.size_module}
          </p>
          <span class="badge">${m.action_type.toUpperCase()}</span><br>

          <button class="${m.action_type}"
            onclick="downloadModule('${m.url_file}', '${m.action_type}')">
            ${m.action_type === "direct" ? "Download" : "Select & Download"}
          </button>
        </div>
      `;

      list.appendChild(div);
    });
  });

function downloadModule(url, type) {
  if (type === "select") {
    alert("Module ini perlu pilihan action dalam aplikasi.");
  }
  window.open(url, "_blank");
}
