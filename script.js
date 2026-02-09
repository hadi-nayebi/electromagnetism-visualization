/* JavaScript for Electromagnetism Visualization created by ChatGPT
 * Draws electric and magnetic field lines based on observer speed and toggles.
 * Added display of electric and magnetic field intensities.
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speedValue');
const showElectric = document.getElementById('showElectric');
const showMagnetic = document.getElementById('showMagnetic');
const electricValue = document.getElementById('electricValue');
const magneticValue = document.getElementById('magneticValue');

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const speed = parseFloat(speedSlider.value);
  speedValue.textContent = speed.toFixed(2);

  // compute electric and magnetic intensities based on speed
  const electricIntensity = 1 - speed;
  const magneticIntensity = speed;
  electricValue.textContent = electricIntensity.toFixed(2);
  magneticValue.textContent = magneticIntensity.toFixed(2);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Electric field: radial lines emanating from the charge
  if (showElectric.checked) {
    const intensity = electricIntensity;
    const numLines = 16;
    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;
      const length = 130 * (0.5 + intensity); // adjust length by intensity
      const x2 = centerX + Math.cos(angle) * length;
      const y2 = centerY + Math.sin(angle) * length;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(0, 0, 255, ${intensity})`; // blue for electric field
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Magnetic field: concentric circles around the charge
  if (showMagnetic.checked) {
    const intensity = magneticIntensity;
    const numCircles = 5;
    for (let i = 1; i <= numCircles; i++) {
      const radius = (i * 25) * (0.5 + intensity);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 0, 0, ${intensity})`; // red for magnetic field
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}

speedSlider.addEventListener('input', draw);
showElectric.addEventListener('change', draw);
showMagnetic.addEventListener('change', draw);

// initial draw
draw();
