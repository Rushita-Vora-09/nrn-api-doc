// window.onload = function() {
//   //<editor-fold desc="Changeable Configuration Block">

//   // the following lines will be replaced by docker/configurator, when it runs in a docker-container
//   window.ui = SwaggerUIBundle({
//     url: "swagger.yaml",
//     dom_id: '#swagger-ui',
//     deepLinking: true,
//     presets: [
//       SwaggerUIBundle.presets.apis,
//       SwaggerUIStandalonePreset
//     ],
//     plugins: [
//       SwaggerUIBundle.plugins.DownloadUrl
//     ],
//     layout: "StandaloneLayout"
//   });

//   //</editor-fold>
// };


function loadSwagger(url) {
  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "StandaloneLayout"
  });
}

window.onload = function () {
  const selector = document.getElementById("api-selector");
  selector.addEventListener("change", () => {
    const selectedUrl = selector.value;
    loadSwagger(selectedUrl);
  });

  // Load default
  loadSwagger("apis/casecreate-api.yaml");
};
