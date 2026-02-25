<div align="center">

# 🚀 JavaScript Engineering Digest

> **A comprehensive, day-by-day journey through JavaScript — from fundamentals to async patterns, APIs, and interview readiness**

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Open Library API](https://img.shields.io/badge/API-Open_Library-2E7FFF?style=for-the-badge)](https://openlibrary.org/)

*A structured learning companion for mastering modern JavaScript*

[Overview](#-overview) •
[Curriculum](#-curriculum) •
[Project Structure](#-project-structure) •
[Quick Start](#-quick-start) •
[Features](#-features)

</div>

---

## ✨ Overview

**JavaScript Engineering Digest** is a curated learning repository that takes you through JavaScript from ground zero to production-ready concepts. Each file is self-contained, well-commented, and designed for hands-on practice — perfect for engineers building a solid JS foundation or preparing for interviews.

Whether you're learning from scratch or brushing up on async patterns and APIs, this repository serves as your structured reference guide.

---

## 📚 Curriculum

| Day | Topic | Key Concepts |
|:---:|-------|--------------|
| **1** | [Data Types & Variables](JavaScript/Day1-DataTypes%26Variable.js) | `number`, `string`, `boolean`, `object`, `array`, `null`, `undefined`, `BigInt` |
| **2** | [Numbers & Arithmetic](JavaScript/Day2-Numbers_Arithmetic.js) | Arithmetic operations, numeric literals |
| **3** | [Number Functions](JavaScript/Day3-NumberFunctions.js) | `parseInt`, `parseFloat`, `toFixed`, `isNaN`, numeric utilities |
| **4** | [String Methods](JavaScript/Day4-StringMethods.js) | `slice`, `split`, `replace`, `trim`, template literals |
| **5** | [Math Object](JavaScript/Day5-MathObjects.js) | `Math.random`, `Math.floor`, `Math.round`, `Math.abs` |
| **6** | [Operators & Control Flow](JavaScript/Day6-Operator_controlStatement.js) | Comparisons, conditionals, loops |
| **7** | [Arrays](JavaScript/Day7-Arrays.js) | Array creation, indexing, `push`, `pop`, iteration |
| **8** | [Functions](JavaScript/Day8-FunctionInJavascript.js) | Declarations, arrow functions, parameters, return values |
| **9** | [Objects](JavaScript/Day9-Object.js) | Object literals, properties, methods, destructuring |
| **10** | [var, let, const](JavaScript/Day10-varLetConst.js) | Scoping, block scope, immutability |
| **11** | [Hoisting](JavaScript/Day11-Hoisting.js) | Execution context, variable/function hoisting |
| **12** | [Callback Functions](JavaScript/Day12-CallbackFunctionInJS.js) | Higher-order functions, callbacks as arguments |
| **13** | [Array Callback Methods](JavaScript/Day13-ArrayCallbackMethodInJS.js) | `map`, `filter`, `reduce`, `forEach`, `find` |
| **14** | [this Keyword](JavaScript/Day14-thisKeyword.js) | Execution context, `call`, `apply`, `bind` |
| **15** | [Classes & Objects](JavaScript/Day15-ClassesObjects.js) | OOP, `class`, inheritance, `super`, constructors |
| **16** | [Async JavaScript](JavaScript/Day16-async_await_IIFE.js) | IIFE, callbacks, Promises, async/await, chaining |
| **17** | [Fetch API](JavaScript/Day17-FetchAPI.js) | HTTP requests, `fetch()`, JSON parsing, error handling |
| **18** | [Faker.js](JavaScript/Day18-Faker.js) | Mock data generation for testing & development |

### 🎯 Bonus Content

| File | Description |
|------|-------------|
| [JS Interview](JavaScript/JS%20INTERVIEW.js) | Interview problems: anagrams, 2nd smallest, palindrome, duplicates, etc. |
| [Practice - UI Dev Guide](JavaScript/Practice1-UI%20DEV%20GUIDE.js) | UI development patterns and best practices |
| [index.html + app.js](JavaScript/) | Live demo: Fetch Open Library API, display book data |

---

## 📁 Project Structure

```
JavaScript_EngineeringDigest/
├── JavaScript/
│   ├── Day1-DataTypes&Variable.js     # Primitives, objects, BigInt
│   ├── Day2-Numbers_Arithmetic.js     # Numeric operations
│   ├── Day3-NumberFunctions.js        # Number utilities
│   ├── Day4-StringMethods.js          # String manipulation
│   ├── Day5-MathObjects.js            # Math library
│   ├── Day6-Operator_controlStatement.js
│   ├── Day7-Arrays.js
│   ├── Day8-FunctionInJavascript.js
│   ├── Day9-Object.js
│   ├── Day10-varLetConst.js
│   ├── Day11-Hoisting.js
│   ├── Day12-CallbackFunctionInJS.js
│   ├── Day13-ArrayCallbackMethodInJS.js
│   ├── Day14-thisKeyword.js
│   ├── Day15-ClassesObjects.js
│   ├── Day16-async_await_IIFE.js      # IIFE, async intro
│   ├── Day16-1.CallbackHellPromisesAsyncAwait.js
│   ├── Day16-2.Promises.js
│   ├── Day16-3.PromisesChain.js
│   ├── Day17-FetchAPI.js
│   ├── Day18-Faker.js
│   ├── JS INTERVIEW.js                # Interview prep
│   ├── Practice1-UI DEV GUIDE.js
│   ├── index.html                     # Fetch API demo page
│   └── app.js                         # Open Library API integration
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14+) or any modern browser
- A code editor (VS Code recommended)

### Run Any Script

```bash
# From project root
node "JavaScript/Day1-DataTypes&Variable.js"
```

### Run the Fetch API Demo

1. Open `JavaScript/index.html` in a browser, or
2. Serve locally:
   ```bash
   npx serve JavaScript
   # or: python -m http.server 8000 (from JavaScript folder)
   ```
3. Click **Get Books** to fetch data from [Open Library API](https://openlibrary.org/people/mekBot/books/want-to-read.json).

---

## 🌟 Features

- 📖 **18-day curriculum** — From variables to Fetch API
- 💡 **Runnable examples** — Copy, run, experiment
- 🎯 **Interview prep** — Anagrams, sorting, array problems
- 🌐 **Real API integration** — Open Library demo with `fetch()`
- 📝 **Clear comments** — Emojis and section headers for easy scanning
- 🧪 **Self-contained files** — No heavy setup required

---

## 🙏 Acknowledgments

- Course references and inspiration from [Shraddha Khapra's JavaScript playlist](https://www.youtube.com/watch?v=d3jXofmQm44&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW)
- Interview question references: [Medium - JavaScript Automation Interview Questions](https://medium.com/@sasindran.anusha/javascript-automation-interview-questions-ultimate-guide-4f228d6b4327)
- API: [Open Library](https://openlibrary.org/)

---

<div align="center">

**⭐ If this repository helped you, consider giving it a star!**

Made with ☕ and JavaScript

</div>
