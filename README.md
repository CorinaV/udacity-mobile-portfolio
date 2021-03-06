## Website Performance Optimization Udacity project

This is a project from Udacity Frontend Development Course focusing on optimizing the critical rendering path and make the page render as quickly as possible [Critical Rendering Path course](https://www.udacity.com/course/ud884).


### How to get started

1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

2. Check out the repository
```
$ git clone https://github.com/CorinaV/frontend-nanodegree-mobile-portfolio
$ python -m SimpleHTTPServer 8080
```
In a new terminal window start ngrok:
```
$ ngrok http 8080
```
3. Open a browser and visit localhost:8080 or open the ngrok link provided in the terminal


### Optimizations made to index.html
* added `media = print` to css.print to skip this as a critical resource
* inlined css at the bottom for fast loading
* moved javascript scripts at the bottom of html and added `async`
* inserted google fonts with javascript
* resized images

### Optimizations made to pizza.html and main.js
* inlined css in pizza.html at the bottom
* added `backface-visibility: hidden` to class 'mover'
* refactored `changePizzaSizes` function and changed `querySelectorAll` with `getElementsByClassName`
* refactored `updatePositions` function:
  * recalculated all possible phases before updating the position
  * took outside of loop the calculation because it needs to be calculated only once
* replaced `querySelector` with `getElementById` everywhere
* calculated dynamically number of sliding pizzas based on width and height
* installed [gulp](http://gulpjs.com/) and minified css and js

## How to minify ccs and js using gulp
 * in the project root folder

 ```
$ nmp install
$ gulp mincss
$ gulp minjs
```

* The minified files are saved in the `dist` folder



### See more Optimization Tips and Tricks suggested by Udacity team
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api").
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
