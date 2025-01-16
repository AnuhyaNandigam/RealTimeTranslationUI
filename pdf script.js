document.getElementById("pdfForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const pdfFile = document.getElementById("pdfFile").files[0];
    const formData = new FormData();
    formData.append("pdf_file", pdfFile);

    document.getElementById("loading").style.display = "block";
    document.getElementById("summaryContainer").style.display = "none";

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("summaryOutput").value = data.summary;
        document.getElementById("summaryContainer").style.display = "block";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("loading").style.display = "none";
    });
});
