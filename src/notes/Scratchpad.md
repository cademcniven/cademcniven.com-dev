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





It's difficult to create an automata that mimics living things, because it would need the ability to make decisions. The naive solution would be to allow it to choose from a list of things to do, with weighted options. The problem is that decision making isn't a calculation, and you can't really just throw a % on different behaviors and achieve something akin to sentience.




When trying to teach a new idea, if at all possible, don't introduce new terminology. People are not good at processing complex ideas, and adding new made-up vocabulary makes it even more difficult, because it forces the learner to put mental energy into understanding semantics rather than focusing on the actual topic.




<address>	Defines contact information for the author/owner of a document/article
<bdi>	Isolates a part of text that might be formatted in a different direction from other text outside it
<cite>	Defines the title of a work
<dfn>	Specifies a term that is going to be defined within the content
<kbd>	Defines keyboard input
<meter>	Defines a scalar measurement within a known range (a gauge)
<progress>	Represents the progress of a task
<samp>	Defines sample output from a computer program
<map>	Defines a client-side image map
<details>	Defines additional details that the user can view or hide


const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });
  
  
  disabled buttons:
  https://axesslab.com/disabled-buttons-suck/
  https://css-tricks.com/making-disabled-buttons-more-inclusive/
  https://stories.justinewin.com/disabled-buttons-dont-have-to-suck-10da0bb6d37e
  
  inaccessible default html:
  https://daverupert.com/2020/02/html-the-inaccessible-parts/
  
  accessible fields and errors:
  <div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input 
    type="password"
    id="password"
    name="password"
    aria-describedby="desc_pw"
  >
  <p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
</div>

on site fix <time> tags to have valid datetime

firefox has better accessibility dev tools, particularly the accessibility tree

role="presentation" can be used to make an element not appear in the accessibility tree. it is *only* needed on elements that come between composite widget roles, for example:

<ul role="tree">
  <div class="item-wrapper" role="presentation">
    <li role="treeitem">
      Item 1
      <div role="group">
        <ul class="sub-items" role="presentation">
          <li role="treeitem">Sub-Item 1</li>
          <li role="treeitem">Sub-Item 2</li>
        </ul>
      </div>
    </li>
    <li role="treeitem">Item 2</li>
    <li role="treeitem">Item 3</li>
  </div>
</ul>

role="presentation" is identical to role="none" but has more support

role="presentation" is not aria-hidden="true"
Applying aria-hidden to an element will remove that element and all its descendants from the accessibility tree entirely, while role="presentation/none" will only remove the element's default role. Both role="presentation/none" and aria-hidden="true" will have the same effect on an <img> tag, but not on an element with content or children.

Using aria-owns to point to the id of another element entirely separated in the DOM will establish a programmatic parent/child relationship between the two nodes in the accessibility tree.

^ source https://sarahmhigley.com/writing/roles-and-relationships/

accessibility book:
https://abookapart.com/products/accessibility-for-everyone

<button aria-label="Close">
  <span aria-hidden="true">×</span>
</button>



var makeActive = function(elem){
    elem.classList.toggle("is-active");
}


You can have all the right technologies in place, use the latest and greatest tools, and even have extraordinarily talented individuals on board, but if everyone involved isn’t actually cooperating and communicating with one another then you’re not going to create great work. It’s as simple as that. 
-- https://atomicdesign.bradfrost.com/chapter-4/

managing state with CSS classes alone is, mostly, inadequate for conveying state to all users. Being a language for presentational purposes, giving an input a class of .has-error to change the border color to a shade of red, has no semantic value to it.
-- https://css-tricks.com/user-facing-state/

aria-pressed indicates whether or not a button has been pressed