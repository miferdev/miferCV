export function initCV() {
  const inputName = document.getElementById('inputName');
  const inputImg = document.getElementById('inputImg');
  const cvName = document.getElementById('cvName');
  const cvPhoto = document.getElementById('cvPhoto');
  const printBtn = document.getElementById('printBtn');

  // Actualización reactiva del nombre
  inputName?.addEventListener('input', (e) => {
    cvName.textContent = e.target.value || "Tu Nombre Aquí";
  });

  // Procesamiento de imagen local (FileReader)
  inputImg?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        cvPhoto.src = event.target.result;
        cvPhoto.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  // Disparador de impresión nativa
  printBtn?.addEventListener('click', () => {
    window.print();
  });
}