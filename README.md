Stackin (responsive UI concept)
========================

An idea I've had when I tried to come up with some responsive, simple, appealing and compact way to show parsed textual information. The story behind it is [here on my blog](http://scriptogr.am/qutebits/post/q07-stackin-design).

##### Live Demo:

Current HN Top 100 stories - <a target="blank" href="http://jsfiddle.net/hp499ejL/">http://jsfiddle.net/hp499ejL/</a>

##### Screenshot:

![Alt text](https://raw.github.com/QuteBits/onScriptogram/master/img/07-01.jpg "Stackin Look")

### Concept:

Basiacally it's just CSS formatting of stacked divs:

* text stretches it's div - so there is very little space wasted, which makes the design very compact,
* make padding big enough to be comfortable using it on movile devices (with no zoom/double-tap needed),
* make margin big enough so that you won't mistakingly click on a wrong div (important for mobile),
* depict up to two numerical values for each div - using order of the divs and/or their color. Paint divs (background-color) according to some assigned numerical value (in the case of this example, background color represents total count of comments assigned to the story. The color is rgb(cappedScore,50,50) where cappedScore is 255 if the score is bigger than 255).

### Hacker News Example

This repository contains an example of this idea on current top 100 <a href="https://news.ycombinator.com/">Hacker News</a> posts fed through their API. Just download this stuff and open index.html in your browser.

### Contact:
<a href="https://twitter.com/qutebits">@qutebits</a> or qute.bits (gmail)
