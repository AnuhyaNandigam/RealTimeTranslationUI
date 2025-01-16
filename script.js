document.getElementById("imageForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevents page reload on form submission
  const query = document.getElementById("query").value; // Get search query
  const imageDisplay = document.getElementById("imageDisplay");
  imageDisplay.innerHTML = ""; // Clear any previous images

  try {
    // Fetch images from Unsplash based on the query
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=pXBuV_LqKTVHkwCwsdW8T6r2XV__G9mgOfMePdeFbIc`);
    if (!response.ok) throw new Error("Failed to fetch images.");
    const data = await response.json();
    const images = data.results;

    // Display each image with a download option
    images.forEach((imgData) => {
      const img = document.createElement("img");
      img.src = imgData.urls.small;
      img.style.cursor = "pointer"; // Makes the image look clickable

      const downloadLink = document.createElement("a");
      downloadLink.href = imgData.urls.small;
      downloadLink.download = "image.jpg"; // Set filename for download

      // Append the image inside the anchor tag
      downloadLink.appendChild(img);

      // Append the anchor tag (with the image inside) to imageDisplay
      imageDisplay.appendChild(downloadLink);
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    imageDisplay.innerHTML = "<p>Sorry, an error occurred. Please try again.</p>";
  }
});
