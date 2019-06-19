https://medium.com/@rangleio/the-future-of-javascript-in-the-front-end-world-2544c1814e2
https://www.infoq.com/news/2018/07/eich-crockford-js-future/
https://brendaneich.com/2011/01/harmony-of-my-dreams/

Love it or hate it, JavaScript has been growing into the most popular, dominant language on the planet.
Over the last decade, the adoption of JS has only been growing, showing no signs of slowing down.

According to https://insights.stackoverflow.com/survey/2019#technology-programming-languages to StackOverflow’s annual survey, 69.8% of respondents and 71.5% of professional developers are using JavaScript today.

From an underdog the language and the eco-system became a monster that's eating the world of web, mobile and server development.

Small companies and corportations start to enjoy the benefits of one-size-fits-them-all technology that's able to deliver results on front and back-end. It's more effective for companies to use the same technology that all developers speak and understand.

For those that are far from the web, it might be reasonable for them to try and gain (even basic) experience with this technology.

A lot of developers hate Javascript due to lack of design and tooling, but the situation has changed a lot - TC39 tryes to improve language specification and enhance it features, while browsers and nodejs are rushing to implement the specification.

> Thoughts on language design  
> As a language designer, no matter what you do, you will always make some people happy and some people sad. Therefore, the main challenge for designing future JavaScript features is not to make everyone happy, but to keep the language as consistent as possible.

Typescript (and similar) supersets of JS provide better scalability and tooling + safety on top of Javascript.

To summarize, you defenetely cannot ignore JS eco-system. At invoice-simple JS is used extensively - that allows us to easily read on modify code on either platform.

If you don't know JS then what???

During the next few minutes I will try to cover the recent happening on JS world and see how change the way we develop.

Cannot talk about future withou history.

> Marc Andreessen, the founder of the company, believed that HTML needed a "glue language" that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup.

Javascript was originally designed to work in browsers (although there was JScript since 1995) to enhance web page browsing experience, so let's start with front-end frameworks and try to see the trends.

1. Front-end headless framework

- jQuery
- Backbone
- Angular (declarive)
- React

Today we're observing the golden era if what is called "VDOM frameworks", with (p)React and Vue leading the trend.

For those who don't know, Virtual DOM is a data structure that is smartly used by frameworks to render UI every time the app's state changes. My doing only the minimal amount of expensive UI updates, we can achieve a performant "reactive" behavior.

That allows us to describe UI as a set of states, and framework effectively transforms each state to rendered output of HTML or Native elements.

The trends was popularized by React as reactivity enables "declarative" style of UI programming. The approach was so successful that it was implemented on other platforms as well - Flutter by Google, React for Windows by Microsoft, Swift UI by Apple.

The need arises from a natural limitation of VDOM-based solutions. Every app needs framework's runtime in order to run. While on mobile the size of the runtime is not a big deal, for web application it is a problem. Framework developers are challenged by keeping the runtime footprint small in order not to increase bundle size. That's what also limits framework's author from natively supporting advanced features like animation or state management.

That's why we are starting to see a new trend of "Headless Frameworks" or "Disappearing" (https://peteroshaughnessy.com/posts/disappearing-frameworks/) - those are frameworks that have minimal runtime footprint, framework removes itself from the app during compilation (bundling) stage. The only code that's left is highly optimized imperative direct manipulation of DOM elements.

We’re used to sending big JavaScript bundles over to our users, and expecting their browsers to parse and execute the scripts. Svelte doesn’t work like that. Instead, it compiles your application into small, standalone, vanilla JavaScript modules. In other words, by the time it gets to your users, it will have disappeared!

That allows to improve the performance even more, comparing to VDOM-based frameworks, as there's no reconcilation at all. It also reduces bundle size and allows support more advanced features as part of the framework.

https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/

To summary the UI web frameworks review, I think that we'll see more attempts to remove frameworks and redundand code away from clients. That will allow to improve both user experience and developer experiences by moving more responsibility and tooling in to frameworks and keeping the initial bundle sized small.

- Svelte (declarative headless framework)
- Angular Elements https://angular.io/guide/elements
- Stencil JS https://stenciljs.com/
- Web Components https://developer.mozilla.org/en-US/docs/Web/Web_Components

Now that we've covered one topic from browserland, let's see what happens on the backend side. Well, actually the next big feature is relevant both for clients and for server - let's talk about modularity.

# The state of modularity in JS is quite new and was introduced only

Starting with NodeJS 12 (released Apr 23, 2019) you enable a feature flag `--experimental-modules`. The feature flag enables the long-awaited (https://github.com/rwaldron/tc39-notes/blob/def2ee0c04bc91612576237314a4f3b1fe2edaef/meetings/2013-11/nov-21.md#45-modules) implementation of ECMAScript module specification.

Strarting from October 2019 you'd the ff will be switched on be default and you can start using ECMAScript modules out-of-the box.

https://caniuse.com/#feat=es6-module

Keeping in mind that most modern web browsers already support ECMAScript modules, this is a huge step forward more compact and universal JS implemenations.

The feature was rolled out gradually according to a plan (https://github.com/nodejs/modules/blob/master/doc/plan-for-new-modules-implementation.md), we are currently at phase 2 and enabling the ff is phase 3.

What does that mean for developers? Now you can code that we write:

1. Requires less "transpilation" - i.e. modifying code from one standard to another
2. Smaller and more elegant
3. Use static module structure - that helps with static checking, optimized access of imports, dead code elimination and more
4. Is easily reusable on server side and in browsers

https://exploringjs.com/impatient-js/ch_modules.html#javascript-source-code-formats

# Language features

- BigInt
- i18n
- stdlib
- dynamic import
- iterables

http://2ality.com/2019/01/future-js.html

5. Plug-in types
   http://2ality.com/2019/01/future-js.html
