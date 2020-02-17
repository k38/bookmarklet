javascript: (() => {
    window["list"] = () => {
        return $$(".article__preview").map(
            item => [
                $$("h2", item)[0].textContent,
                $$(".c__body", item)[0].textContent,
                item.parentElement.href
            ].join("\t"))
            .join("\n");
    };
    console.log("call 'copy(list())'");
})()