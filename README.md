# Eaten Frog website

**Site:** https://eatenfrog.github.io

A static site published with GitHub Pages. No framework: plain HTML and CSS.

- `index.html`: the studio home page
- `games/`: the list of games, each with its game page, privacy policy and stores
- `fruit-rain/`: the Fruit Rain game page and its privacy policy
- `assets/logo.svg`: the frog and the "EATEN FROG" wordmark
- `assets/favicon.svg`: the tab icon
- `assets/fonts/`: Fredoka and Inter, served from this site (SIL Open Font License)

To add a game: make a folder like `fruit-rain/` with the game page and `privacy/`, then copy the `<article class="game">` block in `games/index.html`.

Publishing: Settings > Pages > Branch `main`, folder `/ (root)`.
