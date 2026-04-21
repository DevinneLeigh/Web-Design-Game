export const levelProgression = {
    unlocks: [

        //world 1
        {
            requires: ["html-01"],
            unlocks: ["html-02"]
        },
        {
            requires: ["html-02"],
            unlocks: ["html-03"]
        },
        {
            requires: ["html-03"],
            unlocks: ["css-01"]
        },
        {
            requires: ["css-01"],
            unlocks: ["css-02"]
        },
        {
            requires: ["css-02"],
            unlocks: ["project1"]
        },

        //world 2
        {
            requires: ["project1"],
            unlocks: ["html-04"]
        },
        {
            requires: ["html-04"],
            unlocks: ["html-05"]
        },
        {
            requires: ["html-05"],
            unlocks: ["html-06"]
        },
        {
            requires: ["html-06"],
            unlocks: ["css-03"]
        },
        {
            requires: ["css-03"],
            unlocks: ["css-04"]
        },
        {
            requires: ["css-04"],
            unlocks: ["project2"]
        },

        //world 3
        {
            requires: ["project2"],
            unlocks: ["html-07"]
        },
        {
            requires: ["html-07"],
            unlocks: ["html-08"]
        },
        {
            requires: ["html-08"],
            unlocks: ["html-09"]
        },
        {
            requires: ["html-09"],
            unlocks: ["css-05"]
        },
        {
            requires: ["css-05"],
            unlocks: ["css-06"]
        },
        {
            requires: ["css-06"],
            unlocks: ["project3"]
        },

        //world 4
        {
            requires: ["project3"],
            unlocks: ["html-10"]
        },
        {
            requires: ["html-10"],
            unlocks: ["css-07"]
        },
        {
            requires: ["css-07"],
            unlocks: ["css-08"]
        },
        {
            requires: ["css-08"],
            unlocks: ["css-09"]
        },
        {
            requires: ["css-09"],
            unlocks: ["css-10"]
        },
        {
            requires: ["css-10"],
            unlocks: ["project4"]
        },
    ]
}