export const listWithTopic = [
    {
        topic: "Arrays & Hashing",
        topicId: "1",
        problems: [
            {
                title: "Pascal Traingle",
                url: "https://leetcode.com/problems/pascals-triangle/"
            },
            {
                title: "Pascal Traingle 2",
                url: "https://leetcode.com/problems/pascals-triangle-ii/"
            },
            {
                title: "Find Triangular Sum of an Array",
                url: "https://leetcode.com/problems/find-triangular-sum-of-an-array/"
            }
        ]
    },
    {
        topic: "Linked List",
        topicId: "2",
        problems: [
            {
                title: "Pascal Traingle",
                url: "https://leetcode.com/problems/pascals-triangle/"
            },
            {
                title: "Pascal Traingle 2",
                url: "https://leetcode.com/problems/pascals-triangle-ii/"
            },
            {
                title: "Find Triangular Sum of an Array",
                url: "https://leetcode.com/problems/find-triangular-sum-of-an-array/"
            }
        ]
    },
    {
        topic: "Binary Trees",
        topicId: "3",
        problems: [
            {
                title: "Pascal Traingle",
                url: "https://leetcode.com/problems/pascals-triangle/"
            },
            {
                title: "Pascal Traingle 2",
                url: "https://leetcode.com/problems/pascals-triangle-ii/"
            },
            {
                title: "Find Triangular Sum of an Array",
                url: "https://leetcode.com/problems/find-triangular-sum-of-an-array/"
            }
        ]
    },
    {
        topic: "Dynamic Programming",
        topicId: "4",
        problems: [
            {
                title: "Pascal Traingle",
                url: "https://leetcode.com/problems/pascals-triangle/"
            },
            {
                title: "Pascal Traingle 2",
                url: "https://leetcode.com/problems/pascals-triangle-ii/"
            },
            {
                title: "Find Triangular Sum of an Array",
                url: "https://leetcode.com/problems/find-triangular-sum-of-an-array/"
            }
        ]
    }
];


export const problemsList = [
    {
        title: 'Pascal Traingle',
        problemStatement: `

## LeetCode Problem 688: Knight Probability in Chessboard 

<br />

### Problem Description

![image](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

On an \`n x n\` chessboard, a knight moves according to the rules of chess. The knight can move to any of the square on the standard chessboard where it then makes exactly one of the following eight possible moves:

1. \`(x + 1, y + 2)\`
2. \`(x + 1, y - 2)\`
3. \`(x - 1, y + 2)\`
4. \`(x - 1, y - 2)\`
5. \`(x + 2, y + 1)\`
6. \`(x + 2, y - 1)\`
7. \`(x - 2, y + 1)\`
8. \`(x - 2, y - 1)\`


Each move is considered to be independent and is selected uniformly at random from the available legal moves.

The knight continues moving until it has made exactly \`K\` moves or has moved outside of the chessboard. Return the probability that the knight remains on the board after exactly \`K\` moves.

<details>
<summary><b>Input/Output Test Case 1</b></summary>

- **Input:** nums = [2,7,11,15], target = 9
- **Output:** [0,1]

</details>

### Example

#### Example 1:

Input: \`n = 3, k = 2, row = 0, column = 0\`  
Output: \`0.0625\`  
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.

#### Example 2:

Input: \`n = 1, k = 0, row = 0, column = 0\`  
Output: \`1.0\`  
Explanation: Since the knight is already on the board, no moves are needed.

### Constraints

- \`n == 1\` or \`n == 2\`
- \`0 <= k <= 25\`
- \`0 <= row, column <= n - 1\`

### Note

The final answer must be within \`10^-5\` of the correct answer.

### Follow-up

Can you use a solution with O(K) memory?
    
    `
    },
    {
        title: 'Pascal Traingle 2',
        problemStatement: `

# Dillinger
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.



For production environments...


## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

Second Tab:

(optional) Third:

#### Building for source

For production release:


Generating pre-built zip archives for distribution:


## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.


This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out  with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):


> Note:  is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.


## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

    `
    },
    {
        title: 'Find Triangular Sum of an Array',
        problemStatement: `

## LeetCode Problem 688: Knight Probability in Chessboard 

<br />

### Problem Description

![image](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

On an \`n x n\` chessboard, a knight moves according to the rules of chess. The knight can move to any of the square on the standard chessboard where it then makes exactly one of the following eight possible moves:

1. \`(x + 1, y + 2)\`
2. \`(x + 1, y - 2)\`
3. \`(x - 1, y + 2)\`
4. \`(x - 1, y - 2)\`
5. \`(x + 2, y + 1)\`
6. \`(x + 2, y - 1)\`
7. \`(x - 2, y + 1)\`
8. \`(x - 2, y - 1)\`


Each move is considered to be independent and is selected uniformly at random from the available legal moves.

The knight continues moving until it has made exactly \`K\` moves or has moved outside of the chessboard. Return the probability that the knight remains on the board after exactly \`K\` moves.

<details>
<summary><b>Input/Output Test Case 1</b></summary>

- **Input:** nums = [2,7,11,15], target = 9
- **Output:** [0,1]

</details>

### Example

#### Example 1:

Input: \`n = 3, k = 2, row = 0, column = 0\`  
Output: \`0.0625\`  
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.

#### Example 2:

Input: \`n = 1, k = 0, row = 0, column = 0\`  
Output: \`1.0\`  
Explanation: Since the knight is already on the board, no moves are needed.

### Constraints

- \`n == 1\` or \`n == 2\`
- \`0 <= k <= 25\`
- \`0 <= row, column <= n - 1\`

### Note

The final answer must be within \`10^-5\` of the correct answer.

### Follow-up

Can you use a solution with O(K) memory?
    
    `
    },
    {
        title: 'Longest Palindromic Substring',
        problemStatement: `

## LeetCode Problem 688: Knight Probability in Chessboard 

<br />

### Problem Description

![image](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

On an \`n x n\` chessboard, a knight moves according to the rules of chess. The knight can move to any of the square on the standard chessboard where it then makes exactly one of the following eight possible moves:

1. \`(x + 1, y + 2)\`
2. \`(x + 1, y - 2)\`
3. \`(x - 1, y + 2)\`
4. \`(x - 1, y - 2)\`
5. \`(x + 2, y + 1)\`
6. \`(x + 2, y - 1)\`
7. \`(x - 2, y + 1)\`
8. \`(x - 2, y - 1)\`


Each move is considered to be independent and is selected uniformly at random from the available legal moves.

The knight continues moving until it has made exactly \`K\` moves or has moved outside of the chessboard. Return the probability that the knight remains on the board after exactly \`K\` moves.

<details>
<summary><b>Input/Output Test Case 1</b></summary>

- **Input:** nums = [2,7,11,15], target = 9
- **Output:** [0,1]

</details>

### Example

#### Example 1:

Input: \`n = 3, k = 2, row = 0, column = 0\`  
Output: \`0.0625\`  
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.

#### Example 2:

Input: \`n = 1, k = 0, row = 0, column = 0\`  
Output: \`1.0\`  
Explanation: Since the knight is already on the board, no moves are needed.

### Constraints

- \`n == 1\` or \`n == 2\`
- \`0 <= k <= 25\`
- \`0 <= row, column <= n - 1\`

### Note

The final answer must be within \`10^-5\` of the correct answer.

### Follow-up

Can you use a solution with O(K) memory?
    
    `
    },
    {
        title: 'Container With Most Water',
        problemStatement: `

## LeetCode Problem 688: Knight Probability in Chessboard 

<br />

### Problem Description

![image](https://assets.leetcode.com/uploads/2018/10/12/knight.png)

On an \`n x n\` chessboard, a knight moves according to the rules of chess. The knight can move to any of the square on the standard chessboard where it then makes exactly one of the following eight possible moves:

1. \`(x + 1, y + 2)\`
2. \`(x + 1, y - 2)\`
3. \`(x - 1, y + 2)\`
4. \`(x - 1, y - 2)\`
5. \`(x + 2, y + 1)\`
6. \`(x + 2, y - 1)\`
7. \`(x - 2, y + 1)\`
8. \`(x - 2, y - 1)\`


Each move is considered to be independent and is selected uniformly at random from the available legal moves.

The knight continues moving until it has made exactly \`K\` moves or has moved outside of the chessboard. Return the probability that the knight remains on the board after exactly \`K\` moves.

<details>
<summary><b>Input/Output Test Case 1</b></summary>

- **Input:** nums = [2,7,11,15], target = 9
- **Output:** [0,1]

</details>

### Example

#### Example 1:

Input: \`n = 3, k = 2, row = 0, column = 0\`  
Output: \`0.0625\`  
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.

#### Example 2:

Input: \`n = 1, k = 0, row = 0, column = 0\`  
Output: \`1.0\`  
Explanation: Since the knight is already on the board, no moves are needed.

### Constraints

- \`n == 1\` or \`n == 2\`
- \`0 <= k <= 25\`
- \`0 <= row, column <= n - 1\`

### Note

The final answer must be within \`10^-5\` of the correct answer.

### Follow-up

Can you use a solution with O(K) memory?
    
    `
    }
]