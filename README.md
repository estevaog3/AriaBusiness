# Aria Business
This is a responsive landing page for a (fictional) business company. Check it out: https://estevaog3.github.io/AriaBusiness/.

<p align="center">
  <img src="AriaBusiness.gif" alt="GIF Demo"/>
</p>

## Built with

- HTML
- CSS
- Javascript
- JQuery, a little bit

## Development setup

1. Clone the repo, and navigate to it
```
git clone https://github.com/EstevaoCostaG3/AriaBusiness.git && cd AriaBusiness
```

2. Install NPM dependencies
```
npm install
```

3. Init the webpack development server. The AriaBusiness site will be opened in your browser. Now, you can change any code and the server will live-reload it.
```
npm run server
```

4. Watch for changes on the local file system. Since the webpack development server builds the code in memory, this is needed to build the aplication locally on each code modification.
```
npm run watch
```

## What I learned along the way

- How to think about CSS and HTML in terms of the BEM methodology
- How to make a mobile-first responsive website
- How to use SASS to better organize a bunch of CSS code
- How to use [webpack](https://webpack.js.org/) to bundle some files
- How to make a responsive carousel using [Slick](https://github.com/kenwheeler/slick)
- How to use [Font Awesome](https://fontawesome.com/) icons
- A couple of HTML, CSS and Javascript techniques, e.g.:
  - How to make HTML forms with validation
  - How to use some advanced CSS selectors, like `>`, `~`, and `+`, and how to combine CSS pseudo-classes, such as, `:not(:last-child)`
  - How to immediately-invoked a decleared function in JavaScript, to isolate it's variables and don't pollute the global scope.

## Acknowledgment

This landing page is based on a template. At the time of writing, the template is available on this URL: https://enviroponics.org/.
