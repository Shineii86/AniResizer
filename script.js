document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.getElementById('drop-area');
  const fileInput = document.getElementById('file-input');
  const browseBtn = document.getElementById('browse-btn');
  const origPreview = document.getElementById('original-preview');
  const previewContainer = document.getElementById('preview-container');
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const qualitySlider = document.getElementById('quality');
  const qualityValue = document.getElementById('quality-value');
  const lockRatio = document.getElementById('lock-ratio');
  const compress = document.getElementById('compress');
  const resizeBtn = document.getElementById('resize-btn');
  const downloadBtn = document.getElementById('download-btn');
  const progressBar = document.getElementById('progress-bar');
  const progressFill = document.getElementById('progress-fill');
  const sizeInfo = document.getElementById('size-info');
  const origSizeLabel = document.getElementById('orig-size');
  const newSizeLabel = document.getElementById('new-size');

  let originalImage = null;
  let aspectRatio = 1;
  let originalSizeBytes = 0;

  browseBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', handleFiles);
  ['dragenter','dragover','dragleave','drop'].forEach(evt => {
    dropArea.addEventListener(evt, e => e.preventDefault());
  });
  ['dragenter','dragover'].forEach(evt => {
    dropArea.addEventListener(evt, () => dropArea.classList.add('hover'));
  });
  ['dragleave','drop'].forEach(evt => {
    dropArea.addEventListener(evt, () => dropArea.classList.remove('hover'));
  });
  dropArea.addEventListener('drop', e => {
    handleFiles(e.dataTransfer.files);
  });

  qualitySlider.addEventListener('input', () => {
    qualityValue.textContent = qualitySlider.value;
  });

  widthInput.addEventListener('input', () => {
    if (lockRatio.checked && originalImage) {
      heightInput.value = Math.round(widthInput.value / aspectRatio);
    }
  });
  heightInput.addEventListener('input', () => {
    if (lockRatio.checked && originalImage) {
      widthInput.value = Math.round(heightInput.value * aspectRatio);
    }
  });

  resizeBtn.addEventListener('click', () => resizeImage());
  downloadBtn.addEventListener('click', () => {
    alert('Download simulated; implement canvas export in production.');
  });

  function handleFiles(files) {
    if (!files.length) return;
    const file = files[0];
    if (!['image/jpeg','image/png','image/webp'].includes(file.type)) {
      return alert('Invalid format. Use JPG, PNG, or WebP.');
    }
    if (file.size > 30 * 1024 * 1024) {
      return alert('File too large. Max 30 MB.');
    }
    originalSizeBytes = file.size;
    origSizeLabel.textContent = formatBytes(file.size);

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        originalImage = img;
        aspectRatio = img.width / img.height;
        origPreview.src = img.src;
        previewContainer.hidden = false;
        widthInput.value = img.width;
        heightInput.value = img.height;
        resizeBtn.disabled = false;
        downloadBtn.disabled = true;
        anime({
          targets: origPreview,
          opacity: [0,1],
          scale: [0.9,1],
          duration: 800,
          easing: 'easeOutQuad'
        });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function resizeImage() {
    if (!originalImage) return;
    progressBar.hidden = false;
    let progress = 0;
    const timer = setInterval(() => {
      progress += 5;
      progressFill.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(timer);
        finalizeResize();
      }
    }, 50);
  }

  function finalizeResize() {
    const newW = parseInt(widthInput.value, 10);
    const newH = parseInt(heightInput.value, 10);
    const ratio = (newW*newH)/(originalImage.width*originalImage.height);
    const comp = compress.checked ? (qualitySlider.value/100)*0.7 : 1;
    const newSizeBytes = originalSizeBytes * ratio * comp;
    newSizeLabel.textContent = formatBytes(newSizeBytes);
    sizeInfo.hidden = false;
    downloadBtn.disabled = false;
    anime({
      targets: downloadBtn,
      scale: [0.95,1],
      backgroundColor: [
        {value: '#4caf50'}, {value: '#00e676'}
      ],
      duration: 800,
      easing: 'easeOutElastic(1,.8)'
    });
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1048576) return `${(bytes/1024).toFixed(1)} KB`;
    return `${(bytes/1048576).toFixed(1)} MB`;
  }
});
