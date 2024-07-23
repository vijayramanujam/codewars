function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {


    let tot = 0;
    let currentNode = head

    while (currentNode) {

        tot++
        currentNode = currentNode.next
    }

    return tot;
}

function count(head, data) {

    let tot = 0;
    let currentNode = head

    while (currentNode) {

        if (currentNode.data === data) {
            tot++;
        }
        currentNode = currentNode.next
    }

    return tot;
}