# React No Build Step

This project aims to expand on an article (React, JSX, import of ES modules (including dynamic in a browser without Webpack)[https://medium.com/disdj/react-jsx-es-module-imports-dynamic-too-in-browser-without-webpack-9cf39520f20f].
I expand on the original article by adding support for declaring exports for 
dependencies as the original only handled the single default export. I also 
added support for svg/png/jpg to be included from within a component. 

Lastly I've included a few libraries that I am accustomed to using as well 
but note that if the libraries are not used they will not degrade site performance. 

## Quick Start
Any static server can be used basically. A python one is provided in this project.

Note that if at any point you modify `sw.js` or the `exportsMap` you will need to
close all tabs that currently have the site open. This is so that the updated
service-worker will be reloaded.

## Motivations
I want to build simple react based UIs without having to take on node and hundreds 
of dependencies from npm (~800 at time of writing). Since the target for such a
setup will be small and locally served the decrease of performance is acceptable.

## Downsides
When you do need to use a thirdparty library it can be difficult to figure out how to get
a proper version that will be supported by this setup. UMD libraries should be supported
but 

Performance is going to suffer. Dont know by how much but it will. I am anticipating most 
uses of this will be for local applications which means the bandwidth concerns wont be
as bad as if i was hosting. Additionally I do not have mobile to support in my use case.
But since the application will be basically a stock react app there is nothing stopping 
us from eventually adopting the node/npm toolchain later in the application life if 
necessary. I am going to try my hardest to make sure that the js/jsx written is the same.
