---
title: Scratchpad
---

## Various notes and ramblings that need to be sorted into proper places

> There is a growing mountain of research. But there is increased evidence that we are being bogged down today as specialization extends. The investigator is staggered by the findings and conclusions of thousands of other workers—conclusions which he cannot find time to grasp, much less to remember, as they appear. Yet specialization becomes increasingly necessary for progress, and the effort to bridge between disciplines is correspondingly superficial. [^1]

> Professionally our methods of transmitting and reviewing the results of research are generations old and by now are totally inadequate for their purpose. If the aggregate time spent in writing scholarly works and in reading them could be evaluated, the ratio between these amounts of time might well be startling. [^1]

> Mendel's concept of the laws of genetics was lost to the world for a generation because his publication did not reach the few who were capable of grasping and extending it [^1]

Even in the current world we live in, where we are constantly in the midst of communication (social media), I imagine this is still an issue.

[^1]: V. Bush, “As We May Think,” The Atlantic, Jul-1945. Available: <https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/>.





> I believe that the best way to get better programs is to teach programmers how to think better. Thinking is not the ability to manipulate language; it’s the ability to manipulate concepts. Computer science should be about concepts, not languages. But how does one teach concepts without getting distracted by the language in which those concepts are expressed? My answer is to use the same language as every other branch of science and engineering—namely, mathematics [^2]

> The obsession with language is a strong obstacle to any attempt at unifying different parts of computer science. When one thinks only in terms of language, linguistic differences obscure fundamental similarities. [^2]

Program 1:#include <stdio.h>main() { int f = 1, i = 2;for (i = 1; i <= 7; ++i) f = i * f;printf ("%d", f) ;}
Program 2:#include <stdio.h>main() { int f = 1, i ;for (i = 7; 1 < i; --i) f = i * f;printf ("%d", f) ;}
Program 3:#include <stdio.h>int fact(int i){ return (i == 1) ? 1 : i * fact(i-1); }main() { printf ("%d", fact(7)); }

>Consider the three C programs of Figure 1 that compute 7!. When askedwhich of them differs the most from the other two, computer scientists usu-ally answer Program 3.  The reason they give is that Programs 1 and 2use iteration while 3 uses recursion, or perhaps that 1 and 2 are imperativewhile 3 is functional. However, iteration and recursion are different ways ofexpressing computations; they do not necessarily express different computa-tions. In terms of their computations, it is Program 2 that differs most fromthe other two. The significant steps in computing 7! are the multiplications.Programs 1 and 3 perform the same sequence of multiplications, which isdifferent from the sequence performed by Program 2. All three produce thesame result only because multiplication is commutative. (To see this, try replacing “*” with “-” in the programs and running them.)

[^2]: https://www.microsoft.com/en-us/research/uploads/prod/2016/12/Computation-and-State-Machines.pdf





For comprehensible input, the most important thing is context. Many people consider context to be the number of known words in the passage (which provide context to the unknown words). While that's true, there are plenty of things that can act as context (which is helpful for those who don't know a lot of words). For example,

* Knowing what's being talked about beforehand
* Vivid visuals