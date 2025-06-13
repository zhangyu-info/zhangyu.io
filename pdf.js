
const url = 'sample.pdf';
const viewer = document.getElementById('pdf-viewer');

pdfjsLib.GlobalWorkerOptions.workerSrc = 
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

pdfjsLib.getDocument(url).promise.then(pdf => {
  for (let i = 1; i <= pdf.numPages; i++) {
    pdf.getPage(i).then(page => {
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page';
      viewer.appendChild(canvas);
      page.render({
        canvasContext: canvas.getContext('2d'),
        viewport
      });
    });
  }
});
