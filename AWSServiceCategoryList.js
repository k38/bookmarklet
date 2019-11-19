//@ts-check
// https://docs.aws.amazon.com/en_us/index.html
javascript: (() => {
    window["list"] = () => {
        const elems = document.querySelectorAll(".awsui-cards-card-container");
        const items = [];
        for( let i=0; i<elems.length; i++ ){
            const item = elems[i];
            const header = item.querySelector("h4").textContent;
            // const elems2 = document.querySelectorAll("h4");
            // item.querySelector("h4");

            const services = item.querySelectorAll(".split-list");
            for ( let j=0 ; j<services.length ; j++ ){
                const service = services[j];
                const row = [
                    header,
                    service.textContent
                ];
                items.push(row.join("\t"));
            }
        }
        return items.join("\n");
    };
    console.log("call 'copy(list())'");
})()