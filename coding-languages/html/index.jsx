
/*

    ? HTML

        * HTMl is a markup language
        * Goal of HTML is to take some text and mark it up, that indicates to the browser what structure it should be
        * We creatge elements by writing tags. Most but not all elements consist of an opening and closing tag
        

        ? HTML 5
            * HTML 5 is the latest evolution of the standard that defines HTML
            * It is a new version of the language HTML, with new elements, attributes, and behaviours, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications



        ? HTML Boilerplate
            * Standardized markup that needs to be in every HTML document you create
            * <!DOCTYPE html> - Basically states we want to use the latest features of html
            * <html></html> - The root tag or element of the entire page
            * <head></head> - Contains all meta data
            * <title> - Is what will be the tible of our document, changes what we see in our tabs
        
        ? Attributes
            * Each element can have attributes, such as names, id, hrefs etc.

        ? Headings
            * You can only have 1 main heading at most (h1) usually at the top of the page
            * But you can have multiple subheadings

        ? Lists
            * Unordered lists or numbered lists
            * <ol> - Ordered list
            * <ul> - Unordered list
            * <li> - List item

        ? Anchor element
            * The <a> - Pretty common used element that is used to include hyperlinks
            * Each anchor tag contains an href attribute

        ? Images
            * <img> - Element used to imbed images
            * Contains an src and alt attribute
            * Best practices to have alt attributes for screen readers
            * Does not have an opening and closing tag
            
        ? Inline vs Block Elements
            * Inline elements fit in alongside other elements  
                * <span> Inline element that can be used with other elements
            * Block elements take up a whole block or level of space
                * <div> - The content division element
                * Divs are generic containers to group contents together

        ? HTML entities
            * Start with an ampersand and end with a semicolon
            * Used to display reserved characters, that normally would be invalid'
            * Also used in place of difficult to type characters
            * The browser interprets them and renders the correct character instead
            
        ? Semantic Markup
            * Semantic - relating to meaning
            * Semantic markup - meaningful markup
            * example tags
                    * <main> - Dominant content of the body element
                    * <section> - Represents a standalone section 
                    * <header> - An introductory content that will opten include nav content
                    * <nav> - Anything on the page that represent navigation links
                    * <footer> - A closing content that will opten include nav content as well
                    * <article>
                    * <summary>
                    * <details>
*/


const main = () => {

    return (
        <main>
            <nav>
                <header></header>
            </nav>

        </main>
    )
}