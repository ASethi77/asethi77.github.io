---
title: Stop trying to be special
date: 2024-04-26
tags: ['Software']
canonical_url: false
description: "For fuck's sake C++ people, pick a thing"
published: true
---

Guys. Please pick a fucking build system.

I'm talking to you Google, who has inextricably forced fucking Java-based
buildsystems into the world of C++.
And you Meson, who has decided every option sucks (which they do) and
is fighting to move the world away from CMake in the same way a diver
may flap his scuba fins to push back against a tidal wave.

And I'm especially talking to you, Espressif, who emerged with the ESP8266
RTOS SDK and decided the best thing to do in the face of multiple competing
standards was to pick literally all of them.

CMake, *and* make, *and* ninja, *and* Python? And CMake runs twice so it
breaks every IDE in existence? Oh, and your makefiles and python scripts
are buggy so your tools don't invoke each other correctly? Sometimes
getting all this bullshit to work together makes me want to smash my laptop
screen and eat the glass.

Whether you like it or not, the C++ development world is converging on two
things:

1. The usage of CMake, such that I can get a reproducible build from running
   a configure step, then a build step; OR
2. The generation of a compile_commands.json with your tooling if you
   don't do #1.

If your project's toolchain doesn't achieve either of these things,
then you don't have a toolchain. You have a pile of garbage and I'd
encourage you to torch it. You need a specific compiler? Fine. You need
to generate Visual Studio projects instead of using Ninja? Fine.
But stop enacting your grand vision to replace all of the world's
modern development tooling with a terminal and your broken-ass scripts.

**Just let me load your shit into an IDE.**

## What to do when a project is special

I'm mostly familiar with generating compile_commands.json *with*
CMake to be as friendly as possible to all possible tools.
If, however, you're trying to wrangle a project that does use a
special snowflake of a build system, you're not entirely out of luck
with generating said file.

[Bear](https://github.com/rizsotto/Bear) is an excellent clang-based project
to generate compile_commands.json files by intercepting whatever build system
you have in place. So in the case of the ESP8266, I couldn't get
the CMakeLists.txt to play nicely with CLion since their SDK mostly
uses `make` or `python idf.py <some stuff>`, but at least I could
run `bear -- make` and get a file I could actually load into an IDE for
real autocompletion. Thank Jesus for you Mr. rizsotto.