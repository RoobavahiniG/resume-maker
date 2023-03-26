// Initialize jsPDF
const doc = new jsPDF();

function previewPhoto() {
  const preview = document.querySelector('#photo-preview');
  const file = document.querySelector('#photo').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.style.backgroundImage = `url(${reader.result})`;
    preview.querySelector('img').src = reader.result;
    preview.querySelector('img').style.display = 'none';
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function generateResume(event) {
  event.preventDefault();

  // Get form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const github = document.querySelector('#github').value;
  const linkedin = document.querySelector('#linkedin').value;
  const photo = document.querySelector('#photo-preview img').src;

  // Create resume content
  const content = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Github: ${github}</p>
    <p>LinkedIn: ${linkedin}</p>
    <img src="${photo}">
  `;

  // Preview the resume
  const preview = document.querySelector('#resume-preview');
  preview.innerHTML = content;

  // Enable the download button
  const downloadButton = document.querySelector('#download-pdf');
  downloadButton.disabled = false;
  downloadButton.addEventListener