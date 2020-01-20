//@ts-check
javascript: (() => {
    const selector = window.prompt("input selector");
    if ( selector ) {
        const nodeList = document.querySelectorAll(selector);
        const list = [];
        for ( const item of nodeList ) {
            list.push(item.textContent);
        }
        console.log(list.join("\n"));
    }
})()