export const playerProject = [
    {
        id: "project1",
        title: "Add a Heading",
        concept: "html-headings",
        unlocked: true,

        instructions: `
    <h2>Instructions</h2>

    <p>
      Create a <strong>jumbotron hero section</strong> that highlights a main message on the page.
    </p>

    <p><strong>Follow these steps:</strong></p>

    <ol>
      <li>
        In the HTML editor, create a container element with the class
        <code>jumbotron</code>.
      </li>

      <li>
        Inside this container, add an <code>h1</code> heading with the text
        <strong>"Welcome to My Website"</strong>.
      </li>

      <li>
        Below the heading, add a paragraph <code>(p)</code> with the text
        <strong>"Learn web design by completing challenges."</strong>.
      </li>
    </ol>

    <p><strong>Now style the section using CSS:</strong></p>

    <ul>
      <li>Select the <code>.jumbotron</code> class.</li>
      <li>Add <code>padding</code> so there is space inside the container.</li>
      <li>Give the section a <code>background-color</code> so it stands out.</li>
      <li>Use <code>text-align</code> to center the content.</li>
      <li>Increase the font size of the heading.</li>
    </ul>

    <p>
      When finished, the page should display a large centered hero section with
      a heading and supporting text.
    </p>

    `,
        hint: "Use <h1>...</h1> inside the body.",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            // code validator will collect all elements with a valid tag, and filter out any that don't meet the requirements
            // validTags: [strings...]) elements allowed to meet requirements eg. ["h1","h2","h3"] or ["img"]
            // nickName: string) a descriptive name meant to clarify requiremnts to user, if heading tag would work "heading" could help
            // class: string) the tag needs to have all classes separated by a space "classA ClassB"
            // childElements: another tag object) required elements found under object with their own requirements
            // order: int) you need to find an element that meets the order 2 requirements after an order order 1 element
            // count: int) there must be at least x number of valid elements on the page

            // content: string) text needed to be found within an element
            // contentStrictness: string) "loose" will make capitalization of text content not matter
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "jumbotron",
                    nickName: "jumbotron container",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            contentStrictness: "loose",
                            content: "Welcome to My Website",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            contentStrictness: "loose",
                            content:
                                "Learn web design by completing challenges.",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
    },

    {
        id: "project-2",
        title: "Add a Button",
        concept: "html-buttons",
        unlocked: false,

        instructions: `
        world 1 - level 2
    `,
        hint: "Use <h1>...</h1> inside the body.",

        starterCode: {
            html: `<h1>My Page</h1>`,
            css: ``,
        },

        completion: {
            requiredHTML: ["h1"],

            requiredCSS: [],
        },
    },
];
