document.addEventListener("DOMContentLoaded", () => {
  const edats = document.querySelectorAll('.edat');
  
  // Obrir/tancar individualment (ja ho tens)
  edats.forEach(edat => {
    edat.addEventListener('click', () => {
      edat.classList.toggle('open');
    });
  });

  // --- NOVETAT: BOTÓ DESPLEGAR TOT ---
  const toggleButton = document.getElementById('toggle-all');
  let totDesplegat = false;

  toggleButton.addEventListener('click', () => {
    totDesplegat = !totDesplegat;

    edats.forEach(edat => {
      if (totDesplegat) {
        edat.classList.add('open');
      } else {
        edat.classList.remove('open');
      }
    });

    toggleButton.textContent = totDesplegat ? "Tanca" : "Desplega";
  });
});
