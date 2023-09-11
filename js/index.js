document.addEventListener("DOMContentLoaded", function () {
  const previewButton = document.querySelector(".preview-resume");
  const pdfPreview = document.querySelector(".pdf-preview");
  const closePreviewButton = document.querySelector(".close-preview");

  // Show the resume preview when the "Preview Resume" button is clicked
  previewButton.addEventListener("click", function () {
    pdfPreview.style.display = "block";
    previewButton.style.display = "none";
  });

  // Close the resume preview when the "Close Preview" button is clicked
  closePreviewButton.addEventListener("click", function () {
    pdfPreview.style.display = "none";
    previewButton.style.display = "block";
  });
});
