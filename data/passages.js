export const examPassages = [
  {
    id:"p1", title:"Passage 1: Art, Music, and Moral Development", category:"Humanities", difficulty:"Medium", isPremium:false,
    paragraphs:[
      "Nineteenth-century playwright and philosopher Friedrich Schiller contends that artistic experiences generally expedite the development of moral maturity. It does so by enabling the recognition that satisfaction is not necessarily a zero sum game, in which a gain for another is a loss for oneself.",
      "Schiller’s argument applies to all the arts, but others have noted that music has particular value for developing good ethical habits. Improvisation in an ensemble requires attentive listening to other musicians and efforts to tailor one’s own performance.",
      "Music can also promote social harmony through participatory performance. This type of music encourages group participation, and it is made with the goal of including as many people as possible, regardless of musical training.",
      "Music education can also expose young people to instruments and styles from around the globe. If they develop an appreciation of what various groups have to offer, they may come to appreciate its originators."
    ],
    questions:[
      {id:1, passageId:"p1", type:"Main Idea", stem:"The passage as a whole is primarily concerned with:", answer:"B", choices:{A:"criticizing music as a substitute for moral education.", B:"explaining how artistic experiences, especially music, can support ethical development.", C:"arguing that nineteenth-century philosophy is superior to contemporary aesthetics.", D:"showing that musical performance is valuable only when technically complex."}, explanation:"The passage begins with Schiller’s claim about art and moral maturity, then focuses on ways music may develop empathy, cooperation, and social harmony."},
      {id:2, passageId:"p1", type:"Function", stem:"The author’s discussion of participatory performance most directly supports the idea that music can:", answer:"C", choices:{A:"replace formal moral instruction.", B:"be valuable only when performed by trained musicians.", C:"create awareness of shared social participation.", D:"avoid conflict by eliminating contrasting musical ideas."}, explanation:"Participatory performance is described as making people aware that they are joining others in a common enterprise."},
      {id:3, passageId:"p1", type:"Inference", stem:"Which claim would most weaken the author’s argument about music education?", answer:"A", choices:{A:"Students exposed to unfamiliar musical traditions often become more dismissive of the groups that created them.", B:"Some musical traditions have changed as they interacted with other traditions.", C:"Young people sometimes prefer familiar music to unfamiliar music.", D:"Some performances require years of technical training."}, explanation:"The author argues that exposure may create appreciation of other groups. If exposure instead increases dismissiveness, that weakens the argument."}
    ]
  },
  {
    id:"p2", title:"Passage 2: Memory and Historical Imagination", category:"Social Sciences", difficulty:"Medium", isPremium:false,
    paragraphs:[
      "Historians often distinguish memory from history by arguing that memory is personal, selective, and emotionally charged, whereas history aspires to public evidence and disciplined interpretation. Yet the boundary between the two is less firm than it first appears.",
      "Collective memory can shape the questions historians ask. A society that remembers a war as a heroic struggle may preserve certain letters, monuments, and ceremonies while neglecting evidence of dissent.",
      "This does not mean that history is merely memory in academic clothing. Historical method matters because it allows scholars to test inherited stories against neglected evidence.",
      "The task of history, then, is not to escape memory completely, but to examine memory critically. At its best, history transforms memory from a closed inheritance into an open question."
    ],
    questions:[
      {id:4, passageId:"p2", type:"Main Idea", stem:"The author’s central claim is that history:", answer:"D", choices:{A:"should fully replace collective memory.", B:"is less reliable than personal recollection.", C:"must ignore emotional narratives to remain objective.", D:"is shaped by memory but can critically examine it."}, explanation:"The author argues that history cannot completely escape memory, but historical method allows inherited memories to be tested and reinterpreted."},
      {id:5, passageId:"p2", type:"Author Attitude", stem:"The author’s attitude toward collective memory is best described as:", answer:"B", choices:{A:"wholly dismissive.", B:"cautiously analytical.", C:"uncritically celebratory.", D:"indifferent."}, explanation:"The author sees collective memory as influential and meaningful, but also as something historians must examine critically."},
      {id:6, passageId:"p2", type:"Function", stem:"The discussion of archives in paragraph 2 serves to show that:", answer:"A", choices:{A:"historical evidence can be shaped by what societies choose to remember.", B:"historians should rely only on monuments and ceremonies.", C:"personal letters are never useful to historians.", D:"archives eliminate the influence of collective memory."}, explanation:"The author uses archives to show that evidence available to historians may already reflect earlier choices about what a society valued or remembered."}
    ]
  },
  {
    id:"p3", title:"Passage 3: Technology and Attention", category:"Social Sciences", difficulty:"Hard", isPremium:true,
    paragraphs:[
      "Critics of digital technology often claim that modern devices have destroyed attention. This claim contains some truth, but it also relies on a nostalgic picture of the past.",
      "The printed book, now treated as a symbol of deep focus, was once accused of encouraging isolation and mental laziness. Radio and television also became convenient explanations for cultural decline.",
      "What is distinctive about digital devices is not simply that they distract, but that they personalize distraction. A phone does not merely interrupt; it learns which interruptions will be difficult for a particular person to resist.",
      "The question, therefore, is not whether technology should be rejected. It is how institutions, designers, and users might create environments in which attention is protected rather than endlessly auctioned."
    ],
    questions:[
      {id:7, passageId:"p3", type:"Main Idea", stem:"The passage primarily argues that digital technology:", answer:"C", choices:{A:"is uniquely harmful and should be abandoned.", B:"has no effect on attention that earlier technologies did not also have.", C:"continues a long history of attention-shaping tools but personalizes distraction in new ways.", D:"is less distracting than books, radio, and television."}, explanation:"The author avoids simple rejection and argues that digital devices belong to a broader history while introducing personalized distraction."},
      {id:8, passageId:"p3", type:"Inference", stem:"The author would most likely agree that nostalgia can be misleading because it:", answer:"D", choices:{A:"proves that digital technology has no negative effects.", B:"shows that earlier societies had no distractions.", C:"makes new technologies impossible to study.", D:"can cause people to idealize older technologies as naturally superior."}, explanation:"The passage says earlier technologies were also criticized, suggesting that older tools are often idealized after the fact."},
      {id:9, passageId:"p3", type:"Application", stem:"Which policy would best fit the author’s recommendation in the final paragraph?", answer:"B", choices:{A:"Banning all digital devices from public life.", B:"Designing apps that reduce manipulative notifications and protect focus.", C:"Replacing smartphones with television.", D:"Encouraging users to ignore all institutional design choices."}, explanation:"The final paragraph asks how institutions, designers, and users can create environments where attention is protected."}
    ]
  }
];

export const allQuestions = examPassages.flatMap((p) =>
  p.questions.map((q) => ({
    ...q,
    passageTitle:p.title,
    passageCategory:p.category,
    passageDifficulty:p.difficulty,
    isPremium:p.isPremium,
    paragraphs:p.paragraphs
  }))
);
