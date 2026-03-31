export const world2 = [
  {
    id: "w2-l1",
    title: "Colors",
    description: "Learn how to use colors in CSS to style your webpage.",
    concept: "css-colors",

    instructions: `
        <h2>Colors in CSS</h2>
    `,
    hint: "",

    starterCode: {
      html: `<div class="flex">
    <div>
        <h2>Predefined Colors</h2>
        <h3 class="tomato">Tomato</h3>
        <h3 class="orange">Orange</h3>
        <h3 class="dodgerblue">DodgerBlue</h3>
        <h3 class="mediumseagreen">MediumSeaGreen</h3>
        <h3 class="gray">Gray</h3>
        <h3 class="slateblue">SlateBlue</h3>
        <h3 class="violet">Violet</h3>
        <h3 class="lightgray">LightGray</h3>
    </div>
    <div>
        <h2>Hex Vale Colors</h2>
        <h3 class="hex-red">#FF0000</h3>
        <h3 class="hex-green">#00FF00</h3>
        <h3 class="hex-blue">#0000FF</h3>
        <h3 class="hex-yellow">#FFFF00</h3>
        <h3 class="hex-cyan">#00FFFF</h3>
        <h3 class="hex-magenta">#FF00FF</h3>
        <h3 class="hex-black">#000000</h3>
        <h3 class="hex-white">#FFFFFF</h3>
    <div>
</div>`,
      css: `.flex {
  display: flex;
  justify-content: space-around;
}
.tomato {
  color: tomato;
}
.orange {
  color: orange;
}
.dodgerblue {
  color: dodgerblue;
}
.mediumseagreen {
  color: mediumseagreen;
}
.gray {
  color: gray;
}
.slateblue {
  color: slateblue;
}
.violet {
  color: violet;
}
.lightgray {
  color: lightgray;
}
.hex-red {
  color: #ff0000;
}
.hex-green {
  color: #00ff00;
}
.hex-blue {
  color: #0000ff;
}
.hex-yellow {
  color: #ffff00;
}
.hex-cyan {
  color: #00ffff;
}
.hex-magenta {
  color: #ff00ff;
} 
.hex-black {
  color: #000000;
}
.hex-white {
  color: #ffffff;
}
  `
    },
    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w2-l2",
    title: "Fonts and Formatting",
    description: "Learn how to use different fonts and format text using CSS.",
    concept: "css-fonts-formatting",
    unlocked: false,

    instructions: `
        <h2>Fonts</h2>
        <p></p>
        <h2>Text Formatting</h2>
        <p></p>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w2-l3",
    title: "Backgrounds",
    description: "Learn how to add backgrounds to your webpage using CSS.",
    concept: "css-backgrounds",
    unlocked: false,

    instructions: `
        <h2>Backgrounds</h2>
        <p>See if you can add a background color to the textbox.</p>
    `,
    hint: "Use background-color.",

    starterCode: {
      html: `<div class ="box">Hello World!</div>`,
      css: `.box {font-size: 32px}`
    },

    completion: {
      requiredHTML: ["box"],

      requiredCSS: ["background-color"]
    }
  },
  {
    id: "w2-l4",
    title: "Padding and Margin",
    description: "Learn how to use padding and margin in CSS to create space around elements on your webpage.",
    concept: "css-padding-margin",
    unlocked: false,

    instructions: `
        <h2>Padding and Margin</h2>
        <p>Now, let's try adding some padding and margin around the box to create space.</p>
    `,
    hint: "Padding creates space inside the element, while margin creates space outside the element.",

    starterCode: {
      html: `<div class ="box">Hello World!</div>`,
      css: `.box {background-color: Lightblue; font-size: 32px;}`
    },

    completion: {
      requiredHTML: ["box"],

      requiredCSS: ["padding", "margin"]
    }
  },
  {
    id: "w2-l5",
    title: "Borders and Rounded Corners",
    description: "Learn how to add borders and rounded corners to elements on your webpage using CSS.",
    concept: "css-borders-rounded-corners",
    unlocked: false,

    instructions: `
        <h2>Borders</h2>
        <p>Try adding a border to the box.</p>
        <h2>Rounded Corners</h2>
        <p>Now, make the corners rounded.</p>
    `,
    hint: "Use border and border-radius.",

    starterCode: {
      html: `<div class="box">Hello World!</div>`,
      css: `.box {
  background-color: lightblue;
  padding: 20px;`
    },

    completion: {
      requiredHTML: ["box"],

      requiredCSS: ["border", "border-radius"]
    }
  },
  {
    id: "w2-l6",
    title: "Gradients",
    description: "Learn how to create gradient backgrounds and effects using CSS.",
    concept: "css-Gradients",
    unlocked: false,

    instructions: `
        <h2>Gradients</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w2-l7",
    title: "Text and Box Shadow",
    description: "Learn how to add shadows to text and boxes on your webpage using CSS.",
    concept: "css-shadows",
    unlocked: false,

    instructions: `
        <h2>Text Shadow</h2>
        <p></p>
        <h2>Box Shadow</h2>
    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w2-l8",
    title: "Flexbox Layout",
    concept: "css-flexbox",
    unlocked: false,

    instructions: `
        <h2>Flexbox</h2>

    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w2-l9",
    title: "Grid Layout",
    description: "Learn how to create grid layouts for your webpage using CSS Grid.",
    concept: "css-grid",
    unlocked: false,

    instructions: `
        <h2>Grid Layout</h2>

    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  {
    id: "w2-l10",
    title: "Animation",
    description: "Learn how to create animations on your webpage using CSS.",
    concept: "css-animation",
    unlocked: false,

    instructions: `
        <h2>Animation</h2>

    `,
    hint: "",

    starterCode: {
      html: ``,
      css: ``
    },

    completion: {
      requiredHTML: [],

      requiredCSS: []
    }
  },
  
]