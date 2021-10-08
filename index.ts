// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class LinkedListNode {
  data;
  next;
  constructor(data, nextNode?) {
    this.data = data;
    this.next = nextNode;
  }
}

const first = new LinkedListNode(
  'a',
  new LinkedListNode('b', new LinkedListNode('c'))
);

function insertNodeAfterData(first, newvalue, insertAfter) {
  if (!first?.data) return;
  if (first.data === insertAfter) {
    first.next = new LinkedListNode(newvalue, first.next);
  } else {
    insertNodeAfterData(first.next, newvalue, insertAfter);
  }
}

insertNodeAfterData(first, 'f', 'b');
console.log(first);
