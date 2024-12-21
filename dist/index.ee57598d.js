async function loadGame() {
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("pygame");
    await pyodide.runPythonAsync(`
      import pygame
      # Aqu\xed va tu c\xf3digo de juego Pygame convertido a Pygame-web
  `);
}
loadGame();

//# sourceMappingURL=index.ee57598d.js.map
