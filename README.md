# EtchSketch!

[Click For Live Demo](https://garvsl.github.io/etchsketch/)

## Introduction

The EtchSketch, which is named after one of my childhood favorite drawing games. This game is on a github hosted website and on it you can easily switch between colors, grid sizes, and other features, which allow you to create and draw beautiful art. 

## My troubles

A trouble I came to when making this project was how to make a grid. This problem transformed into how do I make so many squares, which then resulted in the biggest problem, how to make them symmetrical. 

Eventually, I read back the algorithm I previously created and realized that I had thought about it in the wrong way. Initially my thought was to have the little squares in the grid be freeform squares, so they would grow with the container size.

However, this was not the right way. With the way I created the squares and the grid, the result of a freeform method was that only half of the grid became symmetrical. Fortunately, I realized that maybe sometimes hardcoding is needed, and that is what I did. I made each of the squares a certain height and width, and created the perfect grid. Although I did have to pull up some math skills in order to make sure that the squares were exactly equivalent.

