module.exports = function(oldNode, newNodes) {
  var parent = oldNode.parentNode

  if('array' !== typeof newNodes)
    newNodes = [newNodes]

  newNodes.forEach(function(node) {
    parent.insertBefore(node, oldNode)
  })

  parent.removeChild(oldNode)
}