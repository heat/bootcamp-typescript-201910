Aplicativo CoffeeLov

## step-0

`yarn create react-app coffeelov --typescript`

types (http://definitelytyped.org/)

## step-1

`yarn add node-sass` e `yarn add bulma`

** Note: You must prefix imports from node_modules with ~ as displayed above.

```
div.hero.is-success.is-fullheight
    div.hero-head
        div.navbar > div.container
            div.navbar-brand
                div.navbar-item
                    img.image.coffee[alt=logo][src=https://i.imgur.com/rw7iRFF.png]
    div.hero-body
        div.container > div.columns
                div.column.is-8.is-offset-2
                    img.image.coffee[alt=caffe][src=https://coffee.alexflipnote.dev/random]
    div.hero-foot.has-background-white
        div.container.has-text-centered
            button.button
```

## step-1.patch

Resolver o problema do cached a imagem. Instalacão de uma biblioteca e seu tipo
`yarn add random @types/random`

```
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -1,7 +1,9 @@
 import React from 'react';
 import './App.scss';
+import rnd from 'random';
 
 const App: React.FC = () => {
+  const v = rnd.int(0, 10000);
   return (
     <section className="hero is-success is-fullheight">
       <div className="hero-head">
@@ -20,7 +22,7 @@ const App: React.FC = () => {
           <div className="columns">
             <div className="column is-8 is-offset-2">
 
-  <img src="https://coffee.alexflipnote.dev/random" alt="café" className="image coffee" ></img>
+  <img src={`https://coffee.alexflipnote.dev/random?v=${v}`} alt="café" className="image coffee" ></img>
```

## step-2

Usando um fancy button criado em javascript. Use dos hook para ilustrar

