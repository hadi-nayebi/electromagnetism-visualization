// JavaScript for Electromagnetism Visualization created by ChatGPT
// Draws electric and magnetic field lines based on observer speed and toggles

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speedValue');
const showElectric = document.getElementById('showElectric');
const showMagnetic = document.getElementById('showMagnetic');

// Draw the electric (radial) and magnetic (circular) fields
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const speed = parseFloat(speedSlider.value);
  // Update displayed speed
  speedValue.textContent = speed.toFixed(2);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Electric field: radial lines emanating from the charge
  if (showElectric.checked) {
    const intensity = 1 - speed; // electric intensity decreases with speed
    const numLines = 16;
    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;
      const length = 130 * (0.5 + intensity); // adjust length by intensity
      const x2 = centerX + Math.cos(angle) * length;
      const y2 = centerY + Math.sin(angle) * length;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(0, 0, 255, ${intensity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Magnetic field: concentric circles around the charge
  if (showMagnetic.checked) {
    const intensity = speed; // magnetic intensity increases with speed
    const numCircles = 5;
    for (let i = 1; i <= numCircles; i++) {
      const radius = (i * 25) * (0.5 + intensity);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 0, 0, ${intensity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}

// Event listeners to update drawing when controls change
speedSlider.addEventListener('input', draw);
showElectric.addEventListener('change', draw);
showMagnetic.addEventListener('change', draw);

// Initial draw
draw();
