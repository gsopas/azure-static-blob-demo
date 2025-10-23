const container = document.getElementById("images");

// Paste your SAS URL here later (looks like: https://<account>.blob.core.windows.net/<container>?<token>)
const blobUrls = [
  "https://swdemo23679.blob.core.windows.net/images/Heidy.jpeg?se=2025-10-30T02%3A46Z&sp=r&sv=2022-11-02&sr=b&sig=21HTDqpYe0wIzOcwXfRbl%2Bf5JqZGS3NR1dHd4Sq2dYM%3D"
];

blobUrls.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  container.appendChild(img);
});

