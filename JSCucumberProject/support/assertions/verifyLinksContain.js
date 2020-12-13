import assert from "assert";

// Ensure that the link text includes the keyword
export default (links, keyword) => {
    links.forEach(link => {
        const linkText = link.getText().toLowerCase();
        
        if(linkText){
            assert(
                linkText.includes(keyword),
                `Link ${linkText} does not include ${keyword}`
            );
        }
    });
}
