javascript: (() => {
    window.list = () => {
        const h2 = document.querySelectorAll(".c-tutorial-item h2");
        const items = [];
        for( i=0; i<h2.length; i++ ){ items.push(h2[i].textContent.trim()) }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()