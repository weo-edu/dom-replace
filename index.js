module.exports = function(oldNode, newNodes) {
  var parent = oldNode.parentNode

  if(! Array.isArray(newNodes))
    newNodes = [newNodes]

  newNodes.forEach(function(node) {
    // Check if its a document fragment
    node.nodeType === 11
      ? [].slice.call(node.childNodes).forEach(insert)
      : insert(node)
  })

  function insert(node) {
    parent.insertBefore(node, oldNode)
  }

  parent.removeChild(oldNode)
}