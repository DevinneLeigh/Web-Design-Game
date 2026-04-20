export const world2 = [
  {
    id: "w2-l1",
    title: "Colors",
    description: "Learn how to apply colors to text and elements using CSS. You’ll explore named colors, hexadecimal values, and how color affects visual design. This level builds your understanding of styling basics and how to make content more engaging and visually cohesive.",
    concept: "css-colors",

    instructions: `
        <h2>Colors in CSS</h2>

        <p> Add 3 new CSS classes to match the style text colors. <p>

        <p>Requirements:<p>

        <p>1. Create a class named ".gray" and set its color to gray<p>
        <p>2. Create a class named ".slateblue" and set its color to slateblue<p>
        <p>3. Create a class named ".violet" and set its color to violet<p>

        <p>Each class should use the "color" property.<p>

        <p>Example format:<p>
        <p>.classname {<p>
        <p>color: value;<p>
        <p>}<p>
    `,
    hint: "Your goal: make the class name match the color of the text name.",

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
    description: "Learn how to change the font family, size, and style of text using CSS. This level introduces you to font properties like font-family, font-size, font-weight, and font-style. You’ll learn how to apply different fonts to your webpage and understand the impact of typography on design and readability.",
    concept: "css-fonts-formatting",

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
    description: "Learn how to add background colors, images, and gradients to elements on your webpage using CSS. This level covers properties like background-color, background-image, background-size, and background-position. You’ll explore how to create visually appealing backgrounds that enhance the overall design of your site.",
    concept: "css-backgrounds",

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
    description: "Learn how to control spacing and add white space around elements on your webpage using CSS. This level teaches you the difference between padding (space inside an element) and margin (space outside an element), and how to use these properties to improve the layout and readability of your content.",
    concept: "css-padding-margin",

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
    description: "Learn how to add borders and rounded corners to elements on your webpage using CSS. This level covers properties like border-width, border-style, border-color, and border-radius. You’ll explore how to create visually appealing borders and soften the edges of elements with rounded corners to enhance the overall design of your site.",
    concept: "css-borders-rounded-corners",

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
    description: "Learn how to create smooth transitions between colors using CSS gradients. This level introduces you to linear and radial gradients, and how to customize them with different color stops and angles. Gradients can add depth and visual interest to your designs, making them a powerful tool for enhancing the aesthetics of your webpage.",
    concept: "css-Gradients",

    instructions: `
        <h2>Gradients</h2>
        <p>Gradients are used in visual design as a way to seamlessly transition into two or more colors.</p>
        <p><b>Linear gradients</b> show a color change that can go up, down, left, or right depending on the angle you choose.</p>
        <p><b>Top to Bottom Linear Gradient</b></p>
        <p>   #gradient {<br>
	                background: linear-gradient(to bottom, white, black)<br>
              }</p>
        <div id="linear-top"></div>
        <p><b>Left to Right Linear Gradient</b></p>
        <p>   #gradient {<br>
	                background: linear-gradient(to right, white, black)<br>
              }</p>
        <div id="linear-left"></div>
        <p><b>Radial gradients</b> show a color change in a circular progression, starting with a central point.</p>
        <p>   #gradient {<br>
	                background: radial-gradient( white, black)<br>
              }</p>
        <div id="radial"></div>
        <h2>Task</h2>
        <p>Use the given code to create some gradients!</p>
        <p>1. Create a linear gradient that transitions from red at the top to yellow at the bottom.</p>
        <p>2. Create a linear gradient that transitions from blue on the left to green on the right.</p>
        <p>3. Create a radial gradient that transitions from white in the center to purple at the edges.</p>
    `,
    hint: "",

    starterCode: {
      html: `<p><b>Linear Gradient top to bottom</b></p>
  <div id="gradient1"></div>

<p><b>Linear Gradient left to right</b></p>
  <div id="gradient2"></div>

<p><b>Radial Gradient</b></p>
  <div id="gradient3"></div>`,
      css: `#gradient1 {
  height: 5em;
  width: 18em;
  border: solid #000000;
  background: ;
}
#gradient2 {
  height: 5em;
  width: 18em;
  border: solid #000000;
  background: ;
}
#gradient3 {
  height: 5em;
  width: 18em;
  border: solid #000000;
  background: ;
}`
    },

    completion: {
      requiredHTML: ["gradient1", "gradient2", "gradient3"],

      requiredCSS: ["linear-gradient", "radial-gradient"]
    }
  },
  {
    id: "w2-l7",
    title: "Text and Box Shadow",
    description: "Learn how to add depth and dimension to your webpage using CSS shadows. This level covers text-shadow for adding shadows to text, and box-shadow for creating shadows around elements. You’ll explore how to customize the color, size, and position of shadows to enhance the visual appeal of your design.",
    concept: "css-shadows",

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
    description: "Learn how to create flexible and responsive layouts using CSS Flexbox. You’ll control alignment, spacing, and distribution of elements within a container. Flexbox makes it easier to design complex layouts that adapt to different screen sizes.",
    concept: "css-flexbox",

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
    description: "Learn how to create complex and responsive grid-based layouts using CSS Grid. This level introduces you to the grid container and grid item properties, allowing you to define rows, columns, and areas for precise control over your webpage's structure. CSS Grid is a powerful tool for building modern web designs that adapt seamlessly to different screen sizes.",
    concept: "css-grid",

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
    description: "Learn how to create animations using CSS. This level covers keyframe animations, allowing you to define the stages of an animation and control its timing and behavior. You’ll explore how to animate properties like position, color, and size to bring your designs to life and create engaging user experiences.",
    concept: "css-animation",

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