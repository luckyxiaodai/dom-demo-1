window.dom = {
    find(selector) {
        return document.querySelectorAll(selector)
    },
    style(node, object) {
        for (let key in object) {
            node.style[key] = object[key]
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}