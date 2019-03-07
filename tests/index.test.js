import test from 'ava';
import freeze from 'deep-freeze';
import updateTree from '../index';

test("update child nodes", t => {
  const tree = freeze({
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
  });

  const expectedResult = {
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
  };

  t.deepEqual(updateTree(tree, "2", { value: "Hello World" }), expectedResult);
});
