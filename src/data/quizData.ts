export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const quizQuestions: Question[] = [
  // Motion Graphics Questions
  {
    id: 1,
    question: "The Adobe After Effects was developed in the year",
    options: ["1990", "1991", "1992", "1993"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  {
    id: 2,
    question: "In order to install Adobe After Effects on Windows OS, the minimum RAM should be",
    options: ["16 GB", "32 GB", "64 GB", "128 GB"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 3,
    question: "What does Ctrl + A command do?",
    options: ["Select All", "Delete All", "Deselect All", "Rename All"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 4,
    question: "What does Ctrl + Alt + Shift + K command do?",
    options: ["Open Project", "Open a most recent project", "Open project settings dialog box", "Find in Project Panel"],
    correctAnswer: 2,
    category: "Motion Graphics"
  },
  {
    id: 5,
    question: "What does the V key button do?",
    options: ["Activate Selection tool", "Activate Hand tool", "Activate Zoom In tool", "Activate Rotation tool"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 6,
    question: "What does the Ctrl + 6 command do?",
    options: ["Open or close preview panel", "Open or close audio panel", "Open or close character panel", "Open or close paint panel"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 7,
    question: "A _____ uses a transparent or luminance masking layer to mask another layer.",
    options: ["Blending Modes", "Track Matte", "Adjustment Layers", "Pre-composing"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 8,
    question: "By dividing our project into smaller sections, we can use _____ to organize it",
    options: ["Blending Modes", "Track Matte", "Adjustment Layers", "Pre-composing"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  {
    id: 9,
    question: "An animated text and light composition consist of multiple layers showing _____, and vector graphics.",
    options: ["Video or audio clips", "Vector graphics", "Still images", "All of the above"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  {
    id: 10,
    question: "As for text layers with per-character 3D properties, the switch uses this icon if the Layer is a ____layer with 3D sublayers.",
    options: ["Adjustment", "Solo", "3D", "None"],
    correctAnswer: 2,
    category: "Motion Graphics"
  },
  {
    id: 11,
    question: "After Effects",
    options: ["Create motion graphics", "Post production final", "Review after release", "None of the above"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 12,
    question: "CTI stands for",
    options: ["Current time indicator", "Control track indicator", "Control time interface", "None of the above"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 13,
    question: "Motion Sketch?",
    options: ["Record Key frames in real time", "Delete all the actions", "Modify a picture part", "None of the above"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 14,
    question: "File extension for adobe after effects projects?",
    options: ["Aep", "Pgd", "Psd", "dop"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 15,
    question: "How rotate picture",
    options: ['Pressing "R" on key board', 'Pressing "O" on key board', 'Pressing "M" on key board', 'Pressing "N" on key board'],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 16,
    question: "Functions of Blending mode",
    options: ["Blend or overlap two images", "Set parameters for visual effects", "Open a new frame", "Overlapping two frames"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 17,
    question: "Which of the following file formats in NOT a piece of film",
    options: ["Avi", "Mov", "Mpeg", "3gp"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  {
    id: 18,
    question: "FPS stands for",
    options: ["Fragment pose per second", "Frame per second", "Film postproduction stage", "None of the above"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 19,
    question: "Key frames",
    options: ["In between frames", "Starting and ending frames", "Transition frames", "Merging frames"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 20,
    question: "Alpha Composition",
    options: ["Combining an image with graphics", "Removing raw images", "Enhancing the resolution", "None of the above"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 21,
    question: "What features of After Effects can be used to speed up, slow down, stop or reverse a video?",
    options: ["Time Remap", "Time Stretch", "Time Displacement", "Posterize Time"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 22,
    question: "What is the use of the keyboard shortcut - F9?",
    options: ["Easy is - in", "Easy ease", "Linear", "Keyframe velocity"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 23,
    question: 'To display the "TRANSFORM" options marked with the white arrow, we do?',
    options: ["Click on Transform", "Click on the small Audio bank arrow", "Click on the small white arrow of TRANSFORM", "All of the above"],
    correctAnswer: 2,
    category: "Motion Graphics"
  },
  {
    id: 24,
    question: "Which mask functions can blur the edges of a shape layer for masking?",
    options: ["Mask Path", "Mask Feather", "Mask Opacity", "Mask Expansion"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 25,
    question: "Which video format is appropriately and commonly used for YouTube platform?",
    options: ["NTSC & PAL", "HDV & HDTV", "CINEON HALF & FULL", "FILM 2K & 4K"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 26,
    question: "The J and K hotkeys -",
    options: ["crops the layers at the front or back", "shift the layers to start or end at current time", "jump to the start or end of the layer", "jump to the next or previous keyframe"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  {
    id: 27,
    question: "Under the panel setting of Keylight 1.2, which function can be used to get rid of the green screen completely?",
    options: ["Screen Gain", "Screen Color", "Foreground Color Correction", "Screen Matte"],
    correctAnswer: 1,
    category: "Motion Graphics"
  },
  {
    id: 28,
    question: "During the operation of After Effects, if you encounter a scene with many layers or complex calculations, which key can you press to pause the calculation first, and then restart it after the operation is completed?",
    options: ["Caps lock", "esc", "tab", "fn"],
    correctAnswer: 0,
    category: "Motion Graphics"
  },
  {
    id: 29,
    question: "Which light shape has no shadow effect?",
    options: ["Parallel", "Spot", "Point", "Ambient"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  {
    id: 30,
    question: "How many loop repetitions can be used to make animations with continuous image files in Photoshop Sequence?",
    options: ["99", "999", "9999", "99999"],
    correctAnswer: 2,
    category: "Motion Graphics"
  },
  {
    id: 31,
    question: "Whether it is a curve or a mask of any shape, whichever curve is used to define the shape of the mask.",
    options: ["Mechanics curves", "Transparent curves", "Bezier curves", "Shape curve"],
    correctAnswer: 2,
    category: "Motion Graphics"
  },
  {
    id: 32,
    question: "How many masks can each layer of After Effects hold?",
    options: ["1", "5", "10", "unlimited"],
    correctAnswer: 3,
    category: "Motion Graphics"
  },
  // Presentation Software Questions
  {
    id: 33,
    question: "Slide and title masters contain ___________ that reserve spaces for text and footers such as date, time and slide number.",
    options: ["reservations", "documents", "spaces", "placeholders"],
    correctAnswer: 3,
    category: "Presentation Software"
  },
  {
    id: 34,
    question: "A ________ displays a list of commands and usually appears in the toolbar at the top of the screen.",
    options: ["view", "kit", "menu", "list"],
    correctAnswer: 2,
    category: "Presentation Software"
  },
  {
    id: 35,
    question: "Changing the appearance of your slide _________ can alter the slides color, shade, pattern, or texture.",
    options: ["design", "watermark", "foreground", "background"],
    correctAnswer: 0,
    category: "Presentation Software"
  },
  {
    id: 36,
    question: "Adding _________ to objects on your slides not only controls the flow of information, but adds interest to your presentation.",
    options: ["background", "animation", "transition", "popups"],
    correctAnswer: 1,
    category: "Presentation Software"
  },
  {
    id: 37,
    question: "The ________ master controls the format and placement of the titles and text you type on slides, as well as, background items and graphics you want to appear on every slide.",
    options: ["copyright", "slide", "design", "layout"],
    correctAnswer: 2,
    category: "Presentation Software"
  },
  {
    id: 38,
    question: "Notes that include the slide as well as key comments and points you may want to emphasis while you present your slide show are know as:",
    options: ["student notes", "speaker handouts", "cheat sheet", "speaker notes"],
    correctAnswer: 3,
    category: "Presentation Software"
  },
  {
    id: 39,
    question: "______________ is the special effect used to introduce each slide in a slide presentation.",
    options: ["Animation", "Transition", "Mapping", "Bulleting"],
    correctAnswer: 1,
    category: "Presentation Software"
  },
  {
    id: 40,
    question: "Designed to create a particular look, a __________ contains color schemes, slide and title masters with custom formatting and fonts styles.",
    options: ["template", "presentation", "slide", "background"],
    correctAnswer: 0,
    category: "Presentation Software"
  },
  {
    id: 41,
    question: "The slide ________ controls text characteristics, background color and special effects, such as shadowing and bullet style.",
    options: ["presentation", "master", "show", "sorter"],
    correctAnswer: 1,
    category: "Presentation Software"
  },
  {
    id: 42,
    question: "In slide ______ view, you see the entire presentation displayed in miniature. This view is used to arrange the slides in your presentation, as well as, to add animations, transitions and timing.",
    options: ["sorter", "arranger", "shaper", "creator"],
    correctAnswer: 0,
    category: "Presentation Software"
  }
];
