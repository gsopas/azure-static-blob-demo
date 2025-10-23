const container = document.getElementById("images");

// Paste your SAS URL here later (looks like: https://<account>.blob.core.windows.net/<container>?<token>)
const blobUrls = [
  "YOUR_IMAGE_URL_1",
  "YOUR_IMAGE_URL_2"
];

blobUrls.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  container.appendChild(img);
});

