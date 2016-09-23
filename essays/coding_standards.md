---

layout: essay
type: essay
title: Simplicity Favors Regularity
date: 2016-09-15
labels:
  - Coding Standards
  - ESLint
  - JavaScript
  - Software Engineering
---
In software engineering, collaboration plays a huge role. It is impossible for one engineer to write all the code for an entire project from start to finish. Since we will be working with others, we must write in a way that is easy for others to read and understand. If we all wrote code as if no one else would have to read it, we would waste a lot of time just trying to understand what the other programmer wrote. In order to maximize the team’s productivity, we must have a set of guidelines to follow.
## Coding Standards
Coding standards guidelines for a specific programming language that will dictate the layout and style of the code. Some may naturally write code in different styles and this could make it harder to see the bigger picture. Not only will following coding standards help the team, it will help yourself. When you write your code organized and well-documented, you will have an easier time debugging and analyzing it for any problems later. 
In my experience working with other students, I have dreaded having to share code with other students. We naturally formed our own styles from not being taught a specific format. So even working separately and comparing our code afterward would take a few minutes to understand what is going on in less than fifteen lines of code. At this time, we were still early on in our undergraduate education and we had no idea there was such a thing as coding standards. We just thought some people chose 
```
function something(){
}
```
while others chose 
```
function something()
{
}
```
and some chose neither and had inconsistencies all over the place! However, something as minute as where to put the opening curly brace is something that must be decided for the team. Slight changes like these will slow down the collaboration process.

<img src="../images/eslint1.png">
## Training


ESLint is a java utility for recognizing patterns that don't adhere to coding standards. Integrating ESLint into IntelliJ is great training for writing standardized code. ESLint will have your code looking neat and understandable as well as catch some errors before you compile. You will no longer have to stare at your code for ten minutes to find where you forgot that semicolon, ESLint will let you know before you're even done writing. Having ESLint integrated into IntelliJ will train you to write code better, it will become natural to write code that conforms to the standard. 

<img src="../images/meme1.jpg">
