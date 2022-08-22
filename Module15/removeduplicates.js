function deleteDuplicates(head) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let temp = head;
    while(temp != null && temp.next != null) {
        // loop till we dont reach the tail or surpass it
        let nextNode = temp.next;
        while(nextNode != null && temp.val == nextNode.val) {
            // the loop removes the duplicate
            temp.next = nextNode.next;
            nextNode.next = null;
            nextNode = temp.next;
        }
        // when the next node's val is no more equal to temp, we have remvoed all dupliates for temp
        // move forward
        temp = temp.next;
    }
    return head;
}