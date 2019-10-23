
function buy(auction_id) {
    document.getElementById("auction-"+auction_id).childNodes.forEach((node)=>{
        /**
         * In practical terms, this traverses all child nodes of the div class
         * "auction-1". Those nodes are h3, img and button. It is checking to 
         * see which one is an image.
         */
        if(node instanceof HTMLImageElement) {
            node.src = "http://www.debialleway.ca/hosted/websites/1709/images/20190207094129106_crop_image_2019038005083.jpg";
        }
    });
}