document.addEventListener("DOMContentLoaded", function() {
    // Select all grid items
    var gridItems = document.querySelectorAll('.grid-item');

    // Loop through each grid item and attach click event listener
    gridItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Extract file path from data attribute
            var filePath = item.dataset.filePath;
            // Call downloadFile function with file path
            downloadFile(filePath);
        });
    });
});

function downloadFile(filePath) {
    // Check if the file path is a Google Drive link
    if (filePath.includes("drive.google.com")) {
        // Extract the file ID from the Google Drive link
        var fileId = filePath.match(/[-\w]{25,}/);
        // Construct the direct download link using the file ID
        var directDownloadLink = "https://drive.google.com/uc?export=download&id=" + fileId;
        // Create an anchor element
        var anchor = document.createElement("a");
        // Set the href attribute to the direct download link
        anchor.href = directDownloadLink;
        // Set the download attribute to trigger a download with a meaningful file name
        anchor.download = "file.zip"; // Change "file.zip" to the desired file name
        // Click the anchor element to start the download
        anchor.click();
    }
}
