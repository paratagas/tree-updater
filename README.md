# Tree updater

### Function to recursively update a given node and its children inside a tree structure (incl. frozen objects)

---

### Tech stack

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Ava] - JavaScript toolkit for tests
* [Deep freeze] - Recursively Object.freeze() objects (for tests)

---

### Requirements

Tested successfully on [Node.js](https://nodejs.org/) v5.6+

---

### Installation

* Download and extract the [latest version of Tree updater](https://github.com/paratagas/tree-updater)
* Install the dependencies and devDependencies:
```sh
$ cd tree-updater
$ npm install
```
---

### Usage

```sh
$ import updateTree from './index';
$ const tree = {
    "1": {
      id: "1",
      value: "",
      children: ["2", "3"],
    },
    "2": {
      id: "2",
      value: "",
      children: ["4", "5"],
    },
    "3": {
      id: "3",
      value: "",
      children: ["6"],
    },
    "4": {
      id: "4",
      value: "",
      children: ["7"],
    },
    "5": {
      id: "5",
      value: "",
      children: [],
    },
    "6": {
      id: "6",
      value: "",
      children: [],
    },
    "7": {
      id: "7",
      value: "",
      children: [],
    }
};

$ const updatedTree = updateTree(tree, "2", { value: "Hello World" });

// updated tree will output to:
{
    "1": {
      id: "1",
      value: "",
      children: ["2", "3"],
    },
    "2": {
      id: "2",
      value: "Hello World",
      children: ["4", "5"],
    },
    "3": {
      id: "3",
      value: "",
      children: ["6"],
    },
    "4": {
      id: "4",
      value: "Hello World",
      children: ["7"],
    },
    "5": {
      id: "5",
      value: "Hello World",
      children: [],
    },
    "6": {
      id: "6",
      value: "",
      children: [],
    },
    "7": {
      id: "7",
      value: "Hello World",
      children: [],
    }
}
```

---

### Testing

```sh
$ npm test
```

---
### License

MIT

 [Node.js]: <https://nodejs.org/>
 [Ava]: <https://www.npmjs.com/package/ava>
 [Deep freeze]: <https://www.npmjs.com/package/deep-freeze>
