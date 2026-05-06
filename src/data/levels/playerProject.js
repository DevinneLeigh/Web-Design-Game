export const playerProject = [
    {
        id: "project1",
        defaultUnlocked: false,
        title: "1st Boss",

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
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "jumbotron",
                    nickName: "jumbotron container",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "Welcome to My Website",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "Learn web design by completing challenges\\.",
                            contentNickName: "Learn web design by completing challenges.",
                        },
                    ],
                },
            ],

            requiredCSS: [{
                    selector: ".jumbotron",

                    properties: [{
                        property: "padding",
                        value: "10",
                        unit: "px",
                        operator: ">=",
                            
                    },{
                        property: "background-color"
                    },{
                        property: "text-align",
                        value: "center",
                    }]
                }],
        },
        
    },
    {
        id: "project2",
        defaultUnlocked: false,
        title: "2nd Boss",

        instructions: ``,
        hint: "",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "",
                    nickName: "",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "",
                            contentNickName: "",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
        
    },
    {
        id: "project3",
        defaultUnlocked: false,
        title: "3rd Boss",

        instructions: ``,
        hint: "",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "",
                    nickName: "",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "",
                            contentNickName: "",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
        
    },
    {
        id: "project4",
        defaultUnlocked: false,
        title: "4th Boss",

        instructions: ``,
        hint: "",

        starterCode: {
            html: `<div></div>`,
            css: ``,
        },

        completion: {
            requiredHTML: [
                {
                    validTags: ["div"],
                    class: "",
                    nickName: "",

                    childElements: [
                        {
                            validTags: ["h1"],
                            order: 1,

                            content: "",
                        },
                        {
                            validTags: ["p"],
                            order: 2,

                            content: "",
                            contentNickName: "",
                        },
                    ],
                },
            ],

            requiredCSS: [],
        },
        
    },

];
