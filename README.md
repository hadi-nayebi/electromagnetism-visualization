# Electromagnetism Visualization

This repository contains a simple interactive simulation that illustrates how electric and magnetic fields are different manifestations of a single electromagnetic field.

A stationary charge produces an **electric field** (displayed as blue radial lines). When the charge is observed moving relative to you, it also produces a **magnetic field** (displayed as red circular lines). By adjusting the observer speed, you can see how these components mix as you change your frame of reference.

## Usage

1. Clone or download this repository.
2. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari). No server is required.
3. Use the **Observer relative speed** slider to adjust your frame of reference. `0.0` means you are at rest relative to the charge, `1.0` is a relativistic speed (close to the speed of light).
4. Check or uncheck the **Show electric field** and **Show magnetic field** boxes to toggle the fields on or off.



5. Observe the **Electric intensity** and **Magnetic intensity** values displayed below the controls. These values update automatically as you adjust the observe speed and toggle the fields on or off.

The canvas will update automatically as you move the slider or change the checkboxes.



If you are viewing this repository on GitHub, you can click on `index.html` and choose **"View raw"** or open it in GitHub Pages to interact with the simulation.

## Background

According to Maxwell's equations and Einstein's theory of special relativity, electricity and magnetism are two aspects of a unified electromagnetic field. A charge at rest generates a pure electric field. When the charge moves, or when you change your frame of reference, part of that electric field appears as a magnetic field.

This visualization provides a qualitative demonstration of that idea: as you increase the observer speed, the electric (blue) lines shrink in length while concentric magnetic (red) rings become more prominent. The simulation is simplified and not a rigorous physical model, but it helps convey the relationship  The relative intensities of the electric and magnetic fields are displayed below the controls, illustrating how energy shifts between the two components as the observer speed changes.between the fields.

## Contributing

This project was created with assistance from ChatGPT as part of an educational exercise. Contributions are welcome! Feel free to open issues or pull requests to improve the simulation, add features, or correct any inaccuracies.

## License

The contents of this repository are released under the MIT License. See the `LICENSE` file for more information.
