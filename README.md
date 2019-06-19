https://medium.com/@rangleio/the-future-of-javascript-in-the-front-end-world-2544c1814e2
https://www.infoq.com/news/2018/07/eich-crockford-js-future/
https://brendaneich.com/2011/01/harmony-of-my-dreams/

> Joke

Love it or hate it, JavaScript has been growing into the most popular, dominant language on the planet.
Over the last decade, the adoption of JS has only been growing, showing no signs of slowing down.

According to https://insights.stackoverflow.com/survey/2019#technology-programming-languages to StackOverflow’s annual survey, 69.8% of respondents and 71.5% of professional developers are using JavaScript today.

From an underdog the language and the eco-system became a monster that's eating the world of web, mobile and server development.

Small companies and corportations start to enjoy the benefits of one-size-fits-them-all technology that's able to deliver results on front and back-end. It's more effective for companies to use the same technology that all developers speak and understand.

As mentioned, at invoice-simple JS is used extensively (in addition to other technologies) - that allows us to easily read on modify code on either platform.

For those that who are not familiar with JS at all, it might be reasonable for them to try and gain (even basic) experience with this technology.

A lot of developers dislike Javascript due to varioas reason like lack of built-in typing support, poor tooling or asynchronous nature.

While still not perfect, the situation improved a lot at the recent years with introduction of Typescript (and similar) supersets of JS that provide better scalability, tooling and compile-time safety.

TC39 commette improves language specification, while browsers and nodejs are rushing to implement them - that improves developer's experience and allows to run more compact and readable code.

To summarize, you defenetely cannot ignore JS eco-system anymore.

Javascript was originally designed to work in browsers (although there was JScript since 1995) to enhance web page browsing experience, so let's start with front-end frameworks and try to see the trends.

> Marc Andreessen, the founder of the company, believed that HTML needed a "glue language" that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup.

## Front-end frameworks

![JS UI Frameworks](https://pbs.twimg.com/media/Cf4PtbLWcAEVx3B?format=jpg&name=medium "JS UI Frameworks")

### jQuery

I think it's reasonable to say that Javascript popularization has started when jQuery gained populatity. It was a tool that exposed the potential of using JS not just for simpliest animations.

### Backbone / AngularJS

Another major hop was introduction of Angular / BackboneJS - those were more solid, application-oriented frameworks that put strict boundaries on how appliucation shoudl be structured and written, introduce abstractions and allow better scalability and maintanance.

### Declarative and reactive - VDOM based

Today we're observing the golden era if what is called "VDOM frameworks", with (p)React and Vue leading the trend.

---

For those who don't know, Virtual DOM is a data structure that is smartly used by frameworks to represent UI and prevent unneccessary updates to the actal DOM. By doing only the minimal amount of expensive UI updates, we can achieve a performant "reactive" behavior. Every time "state" changes the framework updates the virtual DOM, calculates what minimal change is required for the rendered output and applies it.

That allows us to describe UI as a set of states, and frameworks effectively transform each state to HTML for web or Native elements for mobile.

The trend was popularized by React as reactivity enables "declarative" style of programming. The approach was so successful that it was implemented on other tech stacks as well - Flutter by Google, the recently announced Swift UI by Apple.

---

There's a natural limitation of VDOM-based solutions. Every app needs framework's runtime in order to run. While on mobile the size of the runtime is not a big deal, for web application it is a problem. Framework developers are challenged by keeping the runtime footprint small in order not to increase bundle size. That's what also limits framework's author from natively supporting advanced features like animation or state management.

In addition, even though VDOM is pretty fast, it still requires some computation to calculate the changes for each update.

---

That's why we are starting to see a new trend of "Headless Frameworks" or "Disappearing" (https://peteroshaughnessy.com/posts/disappearing-frameworks/) - those are frameworks that have minimal runtime footprint, framework removes itself from the app during compilation (bundling) stage. The only code that's left is highly optimized imperative code that directly manipulates the DOM.

One particular example is a framework called Svelte.

---

We’re used to send big JavaScript bundles over to our users, and expecting their browsers to parse and execute the scripts. Svelte doesn’t work like that. Instead, it compiles your application into small, standalone, vanilla JavaScript modules. In other words, by the time it gets to your users, it will have disappeared!

That allows to improve the performance even more, comparing to VDOM-based frameworks, as there's no reconcilation at all. It also reduces bundle size and allows more advanced features to be embedded as part of the framework.

Let's do a quick demo to showcase a dissappearing framework, we'll use Svelte and React as an example:

I have created a small project that renders the "Hello World" phrase into DOM. There's a very simple express HTTP server that serves files from "dist" directory.

Run `cd react-svelte-demo && ./start-server.sh`

I use Rollup to bundle the project. There're 2 output bundles - one for the React app and the second one for Svelte.

Let's build the project and see how much code is generated in order to produce "Hello World":

> Run `yarn dev`, open browser at http://localhost:3333.

As we can see the output is very similar, however if we look at the bundle size for each framework (filter by mjs):

- `svelte.bundle.js` is only 2.9 KB
- `react.bundle.js` is only 118 KB

Such a drastic difference in bundle sizes is achieved by the fact that Svelte barely has any runtime. In addition, Svelte has automatically produced a CSS file - that feature requires additional tooling in React world.

> Open non-minified bundles and show the contents.

In order to render React we have to download the `react` and `react-dom` libraries. - that's more than 110 KB of gziped code.

Of course, the real frameworks comparison involves much more considerations like eco-system maturity, 3rd party libraries support, team's expertise, performance.

The idea was to show, at glance, what is a dissapearing framework though.

To summarize the UI web frameworks review, I think that we'll see more attempts to remove frameworks and redundand code away from clients. That will allow to improve both user experience and developer experiences by moving more responsibility and tooling in to frameworks and keeping the initial bundle sized small.

https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/

- Svelte (declarative headless framework)
- Angular Elements https://angular.io/guide/elements
- Stencil JS https://stenciljs.com/
- Web Components https://developer.mozilla.org/en-US/docs/Web/Web_Components

## Modularity

Another prob big feature I would like to talk about is modularity of JS. Actually, only recently we've reached a state when JS has reached a concensus about how modules should be written and used.

What does that mean for us?

1. Code requires less "transpilation" - i.e. modifying code from one standard to another
2. Smaller and more elegant code
3. Use static module structure - that helps with static checking, optimized access of imports, dead code elimination and more
4. Is easily reusable on server side and in browsers

https://exploringjs.com/impatient-js/ch_modules.html#javascript-source-code-formats

It seemed like modularity is not a new feature, but actually it's only recently when one can use modern JS modules and syntax w/o any 3rd party tools support.

### NodeJS

Starting with NodeJS 12 (released Apr 23, 2019) you enable a feature flag `--experimental-modules`. The feature flag enables the long-awaited (https://github.com/rwaldron/tc39-notes/blob/def2ee0c04bc91612576237314a4f3b1fe2edaef/meetings/2013-11/nov-21.md#45-modules) implementation of ECMAScript module specification.

Starting from October 2019 you'd the ff will be switched on be default and you can start using ECMAScript modules out-of-the box.

Let's see a small demo of most important concepts of using new ECMAScript modules, I won't cover all of the nuances, but let's try to see the basics

https://nodejs.org/api/esm.html

#### Explicit filename with extensions

Generally, we can just use the new syntax as is, without intermediate state. One important difference to note is that we have to explicitly provide filename and extensions when we want to natively import files.

We are using relative specifiers like `./module.js` or `../config.mjs`. They refer to a path relative to the location of the importing file.

Note that filename extention must be `.mjs` or there should be a `package.json` file that defines `{ type: "module" }`

> Run `good-example-01.mjs`

If we try to remove `type` from `package.json` of `moduleB`, we'll get an error.

> Modify `moduleB/package.json`
> Run `good-example-01.mjs`

If we try to import `directory`, we'll get an error:

> Run `bad-example-01.mjs`

#### Loading from package

We are still able to load modules from `node_modules` as usual, the only requirement is that the required modules

- Bare specifiers like `some-package`. They refer to an entry point of a package by the package name and resolved on `node_modules` directories.

- Deep import specifiers like `some-package/lib/shuffle.mjs`. They refer to a path within a package prefixed by the package name.

> Run `good-example-02.mjs`

### Browsers

Nice thing is that we're able to use modules in the similar way in modern browsers. Keep in mind that instead of reading from file system, the modules are server from HTTP server.

> Launch `modularity-demo/browser/server.mjs`, show the network tab

### Caveats

It's exciting to see that this ES-modules are available natively, but we should be aware of several issues about using them in production systems:

1. Browsers support - https://caniuse.com/#feat=es6-module
2. It is still more effecient to bundle to prevent flooding of HTTP requests (although it's much easier to dynamicaly load content)
3. With adoption of Typescript both NodeJS and Browser will require an extra step to produce vanilla JS code

# Language features

- BigInt
- i18n
- stdlib
- dynamic import
- iterables

http://2ality.com/2019/01/future-js.html

5. Plug-in types
   http://2ality.com/2019/01/future-js.html
