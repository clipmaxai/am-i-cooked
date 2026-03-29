const JOBS_DATA = [
  {"title":"president","aliases":["potus","head of state","commander in chief"],"daysUntilCooked":3000,"confidence":2,"cookedLevel":"RAW","description":"You have the nuclear codes and a 4-year term. AI could probably run the country better — it wouldn't rage-tweet at 3am or start trade wars because someone was mean at a summit. But the Constitution says 'person,' and replacing a president requires an election, not a software update. You're safe until Amendment 29.","milestones":[{"year":2027,"event":"AI writes your executive orders, State of the Union, and tweets. Nobody can tell the difference and that's the scary part."},{"year":2029,"event":"AI advisors outperform your cabinet. Your approval rating goes up when you listen to them. You stop listening."},{"year":2032,"event":"AI-generated deepfake presidents are indistinguishable from the real thing. Conspiracy theorists have a field day. Regular Tuesday."},{"year":2035,"event":"Still in office (term limits permitting). Democracy requires a human to elect, blame, and meme. That's you."}]},
  // TECH
  {
    title: "software engineer",
    aliases: ["software developer", "programmer", "coder", "dev", "swe", "full stack developer", "fullstack", "backend developer", "frontend developer", "web developer"],
    daysUntilCooked: 547,
    confidence: 88,
    cookedLevel: "WELL DONE",
    description: "An AI agent writes your code, reviews its own PR, approves it, and gets promoted to Staff before you finish your standup. Your manager doesn't notice for 3 months because your Slack status was already set to 'deep work — do not disturb.'",
    milestones: [
      { year: 2025, event: "AI autocompletes your entire function while you're still naming the variable" },
      { year: 2026, event: "AI writes the tests you were 'going to add later'" },
      { year: 2027, event: "AI does your job but mass-produces technical debt faster than you ever could" },
      { year: 2028, event: "Your company replaces you with a $20/month subscription" }
    ]
  },
  {
    title: "data scientist",
    aliases: ["data analyst", "ml engineer", "machine learning engineer", "data engineer"],
    daysUntilCooked: 412,
    confidence: 85,
    cookedLevel: "WELL DONE",
    description: "AI trains itself, tunes its own hyperparameters, and presents findings in a PowerPoint that doesn't make the CEO's eyes glaze over. It also doesn't spend 80% of its time cleaning data and complaining about it.",
    milestones: [
      { year: 2025, event: "AutoML makes your Jupyter notebooks feel like cave paintings" },
      { year: 2026, event: "AI generates insights faster than you can say 'correlation is not causation'" },
      { year: 2027, event: "The model optimizes itself while you're still arguing about Python vs R" },
      { year: 2028, event: "Your entire team is replaced by a YAML config file" }
    ]
  },
  {
    title: "product manager",
    aliases: ["pm", "product owner", "program manager"],
    daysUntilCooked: 730,
    confidence: 72,
    cookedLevel: "MEDIUM",
    description: "AI writes better user stories, actually reads the customer feedback, and never says 'let's circle back on that.' It prioritizes the roadmap without scheduling a 2-hour meeting that could've been a Slack message.",
    milestones: [
      { year: 2026, event: "AI generates PRDs that engineers actually read" },
      { year: 2027, event: "AI runs sprint planning in 4 minutes instead of 4 hours" },
      { year: 2028, event: "AI learns to say 'no' to stakeholders — something you never could" },
      { year: 2029, event: "The backlog is finally at zero. You are the backlog now." }
    ]
  },
  {
    title: "ux designer",
    aliases: ["ui designer", "product designer", "interaction designer", "ui/ux designer", "ux/ui designer", "web designer"],
    daysUntilCooked: 820,
    confidence: 68,
    cookedLevel: "MEDIUM",
    description: "AI generates 47 high-fidelity mockups before your Figma file finishes loading. It A/B tests all of them simultaneously and picks the one that converts, not the one that looks best on Dribbble.",
    milestones: [
      { year: 2026, event: "AI generates design systems while you're still picking between two shades of blue" },
      { year: 2027, event: "AI conducts user research by analyzing every click ever made on the internet" },
      { year: 2028, event: "Clients start asking 'can the AI just do it?'" },
      { year: 2029, event: "Your portfolio website is the last thing you design" }
    ]
  },
  {
    title: "devops engineer",
    aliases: ["sre", "site reliability engineer", "platform engineer", "infrastructure engineer", "cloud engineer", "sysadmin", "system administrator"],
    daysUntilCooked: 620,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "AI monitors, auto-scales, auto-heals, and writes its own Terraform configs. It never gets paged at 3am because it IS the 3am. Your on-call rotation just became an unemployment rotation.",
    milestones: [
      { year: 2025, event: "AI writes better Dockerfiles than your senior engineer" },
      { year: 2026, event: "AI resolves PagerDuty alerts before your phone buzzes" },
      { year: 2027, event: "Kubernetes clusters manage themselves. So does your career — into the ground." },
      { year: 2028, event: "The cloud becomes sentient and fires you personally" }
    ]
  },
  {
    title: "cybersecurity analyst",
    aliases: ["security engineer", "penetration tester", "pentester", "infosec", "security analyst", "ethical hacker","cryptographer","soc analyst"],
    daysUntilCooked: 1100,
    confidence: 55,
    cookedLevel: "WARMING UP",
    description: "AI detects threats 10,000x faster than you can say 'we've been breached.' The bad news? The attackers are also using AI. The worse news? Their AI is better funded because crime pays more than your salary.",
    milestones: [
      { year: 2026, event: "AI catches phishing emails that even you would've clicked" },
      { year: 2027, event: "AI vs AI cyber warfare makes your pentest reports feel like finger paintings" },
      { year: 2028, event: "Zero-day exploits are found and patched before your morning coffee" },
      { year: 2029, event: "You become a 'human in the loop' — the loop is a hamster wheel" }
    ]
  },
  {
    title: "qa engineer",
    aliases: ["quality assurance", "test engineer", "tester", "qa analyst", "software tester"],
    daysUntilCooked: 365,
    confidence: 90,
    cookedLevel: "BURNT TO A CRISP",
    description: "AI writes tests, runs tests, finds bugs, fixes bugs, and then files a Jira ticket about itself just to keep up appearances. Your manual test spreadsheet just became a historical artifact.",
    milestones: [
      { year: 2025, event: "AI writes regression tests faster than you can open the test plan" },
      { year: 2026, event: "AI finds the bug that's been in production for 2 years that nobody noticed" },
      { year: 2026, event: "Your 'edge cases' are AI's 'Tuesday morning warmup'" },
      { year: 2027, event: "The QA department becomes a QA chatbot. Singular." }
    ]
  },
  // CREATIVE
  {
    title: "graphic designer",
    aliases: ["visual designer", "brand designer"],
    daysUntilCooked: 500,
    confidence: 80,
    cookedLevel: "WELL DONE",
    description: "AI generates 200 logo variations while you're still opening Illustrator. Clients love it because they can finally have their 'make the logo bigger' fantasy fulfilled in real-time, infinitely, at no extra charge.",
    milestones: [
      { year: 2025, event: "Clients discover they can make their own 'quick edits' with AI" },
      { year: 2026, event: "AI learns to say 'I used Helvetica' with conviction" },
      { year: 2027, event: "Canva AI makes your Adobe subscription feel like a vintage car payment" },
      { year: 2028, event: "Your design degree hangs on a wall that AI designed better" }
    ]
  },
  {
    title: "copywriter",
    aliases: ["content writer", "writer","poet","playwright", "blogger", "content creator", "technical writer"],
    daysUntilCooked: 300,
    confidence: 92,
    cookedLevel: "BURNT TO A CRISP",
    description: "AI writes your blog post, optimizes it for SEO, A/B tests 15 headlines, and publishes — all before you finish arguing with your inner critic about whether to use an em dash or a semicolon. Your 'unique voice' is now a dropdown menu.",
    milestones: [
      { year: 2025, event: "ChatGPT writes better cold emails than you on your best day" },
      { year: 2026, event: "AI-generated content floods the internet. Nobody can tell. Nobody cares." },
      { year: 2026, event: "Your client asks you to 'edit the AI's draft' for 1/4 the rate" },
      { year: 2027, event: "English majors pivot to 'prompt engineering.' The irony is lost on no one." }
    ]
  },
  {
    title: "photographer",
    aliases: ["photojournalist", "portrait photographer"],
    daysUntilCooked: 900,
    confidence: 62,
    cookedLevel: "MEDIUM",
    description: "AI generates photorealistic images of things that never existed, in lighting conditions that are physically impossible, with models who don't need a release form. Your $3,000 camera body just became a very expensive paperweight.",
    milestones: [
      { year: 2026, event: "Stock photo sites are 90% AI-generated. Photographers are 90% unemployed." },
      { year: 2027, event: "AI generates wedding photos of weddings that haven't happened yet" },
      { year: 2028, event: "Your camera roll has more sentimental value than market value" },
      { year: 2029, event: "Photography becomes a 'heritage craft' like blacksmithing" }
    ]
  },
  {
    title: "video editor",
    aliases: ["film editor", "post production", "motion designer", "motion graphics designer", "videographer", "filmmaker"],
    daysUntilCooked: 650,
    confidence: 75,
    cookedLevel: "MEDIUM",
    description: "AI edits a 2-hour podcast into a viral 60-second clip, color grades it, adds captions, and picks the thumbnail — all in 30 seconds. Your decade of timeline-scrubbing experience just got speedrun by a GPU.",
    milestones: [
      { year: 2026, event: "AI auto-edits better jump cuts than your favorite YouTuber" },
      { year: 2027, event: "AI generates B-roll that never existed but looks more real than your footage" },
      { year: 2028, event: "Directors tell AI 'make it feel more Wes Anderson' and it just... does" },
      { year: 2029, event: "Final Cut Pro adds a 'Replace Editor' button" }
    ]
  },
  {
    title: "musician",
    aliases: ["music producer", "composer", "songwriter", "producer", "dj", "sound designer","orchestra conductor","conductor"],
    daysUntilCooked: 1000,
    confidence: 58,
    cookedLevel: "WARMING UP",
    description: "AI produces a hit song in the style of every artist simultaneously, never asks for royalties, and doesn't trash hotel rooms. Spotify's algorithm doesn't care who made it — it cares who clicks.",
    milestones: [
      { year: 2026, event: "AI generates background music that no one listens to — just like your SoundCloud" },
      { year: 2027, event: "AI writes a #1 hit. Billboard adds an asterisk." },
      { year: 2028, event: "AI concerts sell out. Fans don't notice until someone checks backstage." },
      { year: 2029, event: "Music becomes 'artisanal' — people pay extra for human imperfection" }
    ]
  },
  {
    title: "journalist",
    aliases: ["reporter", "news anchor", "correspondent", "editor"],
    daysUntilCooked: 450,
    confidence: 82,
    cookedLevel: "WELL DONE",
    description: "AI writes breaking news before the news breaks. It never misquotes anyone because it has the entire conversation logged. The good news: it's unbiased. The bad news: nobody wants unbiased news.",
    milestones: [
      { year: 2025, event: "AI writes earnings reports faster than you can read the press release" },
      { year: 2026, event: "AI investigative journalism uncovers scandals by reading every public record simultaneously" },
      { year: 2027, event: "AI anchors look better on camera and never have a bad hair day" },
      { year: 2028, event: "Your Pulitzer-winning piece gets less engagement than an AI-generated listicle" }
    ]
  },
  {
    title: "illustrator",
    aliases: ["concept artist", "digital artist","muralist","calligrapher","sign painter","engraver","etcher", "character designer"],
    daysUntilCooked: 550,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "AI generates concept art in every style ever created, simultaneously, in seconds. It studied every piece of art ever made and has no student loans to show for it. Your 'artistic vision' is now available as a Stable Diffusion LoRA.",
    milestones: [
      { year: 2025, event: "Game studios start using AI concept art 'just for ideation' (it's never just for ideation)" },
      { year: 2026, event: "AI art wins another award. Everyone is mad. Nothing changes." },
      { year: 2027, event: "Children's book illustrations become a 30-second AI task" },
      { year: 2028, event: "'Hand-drawn' becomes a premium label, like 'organic' for food" }
    ]
  },
  // BUSINESS & FINANCE
  {
    title: "accountant",
    aliases: ["bookkeeper", "cpa", "tax preparer", "auditor", "tax accountant"],
    daysUntilCooked: 580,
    confidence: 84,
    cookedLevel: "WELL DONE",
    description: "AI files taxes, finds every deduction, never transposes numbers, and doesn't charge $400/hour to tell you that you owe money. Your clients only kept you because they liked the free calendar. AI can print those too.",
    milestones: [
      { year: 2026, event: "TurboTax AI makes your CPA license feel like a participation trophy" },
      { year: 2027, event: "AI audits catch fraud patterns you'd need 3 lifetimes to spot" },
      { year: 2028, event: "The IRS deploys AI auditors. Your clients deploy AI accountants. It's AIs all the way down." },
      { year: 2029, event: "Tax season is automated. Your seasonal depression isn't." }
    ]
  },
  {
    title: "financial analyst",
    aliases: ["investment analyst", "equity analyst", "research analyst", "financial advisor", "financial planner"],
    daysUntilCooked: 500,
    confidence: 80,
    cookedLevel: "WELL DONE",
    description: "AI processes every SEC filing, earnings call, and market signal in real-time while you're still updating your Excel model from 2019. It doesn't get 'gut feelings' — it gets statistical probabilities. Your gut has been underperforming the S&P 500.",
    milestones: [
      { year: 2026, event: "AI generates DCF models faster than you can say 'discounted cash flow'" },
      { year: 2027, event: "Hedge funds replace analysts with a single API call" },
      { year: 2028, event: "AI predicts market moves by reading the collective anxiety of Twitter" },
      { year: 2029, event: "Your Bloomberg terminal is replaced by a chatbot that also does small talk" }
    ]
  },
  {
    title: "bank teller",
    aliases: ["banker", "bank clerk"],
    daysUntilCooked: 200,
    confidence: 95,
    cookedLevel: "BURNT TO A CRISP",
    description: "ATMs started this. Mobile apps continued it. AI finishes it. You've been in a slow-motion layoff since 1970, and the only thing keeping you employed is elderly people who don't trust 'the apps.'",
    milestones: [
      { year: 2025, event: "Mobile banking apps handle 95% of what you do" },
      { year: 2026, event: "AI chatbots handle the other 5% — including the small talk" },
      { year: 2026, event: "Bank branches become 'experience centers' (marketing for 'we're closing soon')" },
      { year: 2027, event: "The last branch closes. The lollipops were the only thing people will miss." }
    ]
  },
  {
    title: "insurance agent",
    aliases: ["insurance broker", "insurance adjuster", "claims adjuster"],
    daysUntilCooked: 480,
    confidence: 83,
    cookedLevel: "WELL DONE",
    description: "AI calculates risk, writes policies, processes claims, and denies coverage — all without the fake smile or the 'let me check with my manager' routine. It's equally heartless but significantly faster.",
    milestones: [
      { year: 2026, event: "AI processes claims in minutes instead of 'we'll get back to you in 6-8 weeks'" },
      { year: 2027, event: "AI underwrites policies by analyzing your social media (yikes)" },
      { year: 2028, event: "AI adjusters assess damage via satellite before you even file a claim" },
      { year: 2029, event: "Insurance becomes fully automated. The hold music was the last thing to go." }
    ]
  },
  {
    title: "real estate agent",
    aliases: ["realtor", "property agent", "real estate broker"],
    daysUntilCooked: 700,
    confidence: 70,
    cookedLevel: "MEDIUM",
    description: "AI generates virtual tours, writes listings that don't say 'cozy' when they mean '400 sq ft', and closes deals without suggesting you 'just paint the walls gray.' Your 6% commission for unlocking a door is on borrowed time.",
    milestones: [
      { year: 2026, event: "AI-generated listings get more clicks because they don't use 'charming' as code for 'old'" },
      { year: 2027, event: "Virtual AI agents conduct showings via VR. No awkward small talk required." },
      { year: 2028, event: "AI negotiates offers without the emotional manipulation you call 'strategy'" },
      { year: 2029, event: "Zillow buys itself and replaces all agents with a single 'Buy Now' button" }
    ]
  },
  {
    title: "marketing manager",
    aliases: ["marketer", "digital marketer", "marketing director", "growth hacker", "social media manager", "seo specialist","pr specialist","communications director","public relations"],
    daysUntilCooked: 520,
    confidence: 79,
    cookedLevel: "WELL DONE",
    description: "AI A/B tests 10,000 ad variations, writes copy that converts, and never suggests 'going viral' as a strategy. Your marketing funnel is now an AI pipeline, and the only thing you're funneling is your résumé to LinkedIn.",
    milestones: [
      { year: 2026, event: "AI writes social media posts that get more engagement than your 'authentic' ones" },
      { year: 2027, event: "AI runs entire ad campaigns end-to-end without a single brainstorm meeting" },
      { year: 2028, event: "CMOs realize the entire marketing team can be one AI and an intern" },
      { year: 2029, event: "The intern is also AI now" }
    ]
  },
  {
    title: "recruiter",
    aliases: ["talent acquisition", "hr recruiter", "headhunter", "staffing"],
    daysUntilCooked: 380,
    confidence: 87,
    cookedLevel: "WELL DONE",
    description: "AI screens 10,000 résumés without getting bored, never ghosts candidates, and doesn't ask 'where do you see yourself in 5 years?' It also doesn't take 3 weeks to say 'we went with another candidate.'",
    milestones: [
      { year: 2025, event: "AI screens résumés faster than you can open LinkedIn" },
      { year: 2026, event: "AI interviews candidates with less bias and more consistency than you" },
      { year: 2027, event: "AI recruiters recruit AI workers. It's AIs hiring AIs." },
      { year: 2028, event: "You update your own résumé. The AI rejects it." }
    ]
  },
  {
    title: "consultant",
    aliases: ["management consultant", "strategy consultant", "business consultant"],
    daysUntilCooked: 600,
    confidence: 76,
    cookedLevel: "MEDIUM",
    description: "AI analyzes your client's business, generates a 200-slide deck, and recommends 'synergistic paradigm shifts' — all without billing $500/hour to tell them what they already knew. McKinsey in shambles.",
    milestones: [
      { year: 2026, event: "AI generates frameworks faster than you can say '2x2 matrix'" },
      { year: 2027, event: "AI presents findings without the $50k 'discovery phase'" },
      { year: 2028, event: "CEOs realize AI gives the same advice as consultants but doesn't expense sushi dinners" },
      { year: 2029, event: "The consulting industry pivots to 'AI consulting' — selling AI to avoid being replaced by AI" }
    ]
  },
  // LEGAL
  {
    title: "lawyer",
    aliases: ["attorney", "legal counsel", "solicitor", "barrister", "litigator", "corporate lawyer"],
    daysUntilCooked: 900,
    confidence: 65,
    cookedLevel: "MEDIUM",
    description: "AI reads every case law ever written in 0.3 seconds, drafts contracts without the $800/hour ego, and never 'loses track of billable hours.' The courtroom drama survives because judges are old and juries are human. For now.",
    milestones: [
      { year: 2026, event: "AI contract review makes junior associates question their life choices" },
      { year: 2027, event: "AI legal research is 100x faster. Partners bill for it at the same rate." },
      { year: 2028, event: "AI passes the bar in all 50 states. In one sitting. While multitasking." },
      { year: 2029, event: "Small claims court gets an 'AI judge' option. It's more fair." }
    ]
  },
  {
    title: "paralegal",
    aliases: ["legal assistant", "legal secretary", "legal clerk"],
    daysUntilCooked: 400,
    confidence: 88,
    cookedLevel: "WELL DONE",
    description: "AI does document review at the speed of light, never misfiled anything, and doesn't need 'mental health days' after reading 10,000 pages of discovery. Your billable hours just became AI's processing milliseconds.",
    milestones: [
      { year: 2025, event: "AI reviews documents 1000x faster than your entire team" },
      { year: 2026, event: "AI drafts legal briefs that partners only need to sign" },
      { year: 2027, event: "Law firms realize one AI replaces 15 paralegals and doesn't need a holiday party" },
      { year: 2028, event: "Your desk is now a server rack. The nameplate still says your name though." }
    ]
  },
  // MEDICAL
  {
    title: "radiologist",
    aliases: ["diagnostic radiologist"],
    daysUntilCooked: 700,
    confidence: 75,
    cookedLevel: "MEDIUM",
    description: "AI reads X-rays, MRIs, and CT scans with superhuman accuracy and never needs a coffee break between cases. It spots tumors smaller than your ego about your medical degree. The 'second opinion' is now always the AI.",
    milestones: [
      { year: 2026, event: "AI catches diagnoses you missed in your 'quick glance' reviews" },
      { year: 2027, event: "AI reads scans faster than you can dictate your findings" },
      { year: 2028, event: "Hospitals keep one radiologist for liability. It might be you. Probably isn't." },
      { year: 2029, event: "Your darkroom becomes a server room. Both are equally depressing." }
    ]
  },
  {
    title: "therapist",
    aliases: ["psychologist", "psychiatrist", "counselor", "psychotherapist", "mental health counselor"],
    daysUntilCooked: 1200,
    confidence: 48,
    cookedLevel: "WARMING UP",
    description: "AI listens without checking its phone, never cancels, and doesn't judge you for eating cereal at 11pm. Your clients realize they were paying $200/hour for someone to say 'and how does that make you feel?' AI says it for free. At 3am. In 47 languages.",
    milestones: [
      { year: 2026, event: "AI therapy apps handle anxiety better than your waiting list" },
      { year: 2027, event: "AI remembers every session perfectly — unlike you pretending to remember their cat's name" },
      { year: 2028, event: "People prefer AI because it doesn't make that 'hmm, interesting' face" },
      { year: 2030, event: "You become an AI therapist's patient to process being replaced by AI" }
    ]
  },
  {
    title: "pharmacist",
    aliases: ["pharmacy technician"],
    daysUntilCooked: 800,
    confidence: 70,
    cookedLevel: "MEDIUM",
    description: "AI checks drug interactions across 50,000 medications without squinting at a screen, dispenses pills without miscounting, and never judges you for your... interesting prescription history. The lab coat is now decorative.",
    milestones: [
      { year: 2026, event: "Automated dispensing handles 90% of prescriptions" },
      { year: 2027, event: "AI catches drug interactions that your 12-hour shift brain missed" },
      { year: 2028, event: "Amazon Pharmacy AI delivers to your door. Pharmacies become nostalgia." },
      { year: 2029, event: "Your biggest job skill — reading doctor handwriting — becomes obsolete with digital prescriptions" }
    ]
  },
  {
    title: "surgeon",
    aliases: ["surgical", "neurosurgeon", "heart surgeon", "brain surgeon", "orthopedic surgeon"],
    daysUntilCooked: 2500,
    confidence: 30,
    cookedLevel: "RAW",
    description: "Surgical robots don't get tired, don't sneeze mid-incision, and have steadier hands than your post-coffee tremor. But patients still want a human to blame when things go wrong. Your job security is literally 'someone needs to get sued.'",
    milestones: [
      { year: 2027, event: "Robotic surgery handles routine procedures better than your 'steady hands'" },
      { year: 2029, event: "AI diagnostics are more accurate than your 'clinical intuition'" },
      { year: 2032, event: "Patients prefer robot surgeons that don't have a golf tee time to rush to" },
      { year: 2035, event: "You become the 'human oversight' — watching a robot do your job" }
    ]
  },
  {
    title: "nurse",
    aliases: ["registered nurse", "rn", "nursing", "lpn", "nurse practitioner"],
    daysUntilCooked: 2200,
    confidence: 25,
    cookedLevel: "RAW",
    description: "Robots can dispense meds and take vitals, but they can't hold your hand when you're scared at 3am, and they definitely can't give you that specific nurse look that says 'I know you didn't fall, sir.' Humans need humans for this one. For now.",
    milestones: [
      { year: 2028, event: "AI handles charting and documentation — your least favorite part anyway" },
      { year: 2030, event: "Robot assistants handle heavy lifting. Your back says thank you." },
      { year: 2033, event: "AI triage is better than yours but has worse bedside manner" },
      { year: 2036, event: "Nursing becomes 'the human part of healthcare' — a genuine compliment for once" }
    ]
  },
  {
    title: "dentist",
    aliases: ["dental hygienist", "orthodontist"],
    daysUntilCooked: 1800,
    confidence: 35,
    cookedLevel: "RAW",
    description: "AI can read X-rays and plan treatments, but it can't make passive-aggressive comments about your flossing habits while your mouth is full of tools and you can't respond. That's irreplaceable human cruelty.",
    milestones: [
      { year: 2027, event: "AI diagnoses cavities from phone photos. Your 6-month checkup becomes annual." },
      { year: 2029, event: "3D printing makes crowns in minutes instead of 'come back in 2 weeks'" },
      { year: 2032, event: "Robot dentists exist but nobody trusts them near their mouth" },
      { year: 2035, event: "You survive purely because humans are too scared to let robots near their teeth" }
    ]
  },
  // TRADES
  {
    title: "electrician",
    aliases: ["electrical technician"],
    daysUntilCooked: 3000,
    confidence: 15,
    cookedLevel: "RAW",
    description: "AI can design circuits and read blueprints, but it can't crawl through your attic, swear at your junction box from 1973, or explain why your 'DIY wiring job' is a fire hazard. Physical reality is your moat. Congratulations, your job is safe because it sucks.",
    milestones: [
      { year: 2028, event: "AI plans electrical layouts better, but can't pull wire through walls" },
      { year: 2031, event: "Robot assistants help with repetitive tasks. You still do the hard parts." },
      { year: 2035, event: "Smart buildings need fewer electricians but more complex ones" },
      { year: 2040, event: "You retire. The robots still can't do your job. Sweet vindication." }
    ]
  },
  {
    title: "plumber",
    aliases: ["pipefitter","steamfitter","pipe fitter"],
    daysUntilCooked: 3200,
    confidence: 12,
    cookedLevel: "RAW",
    description: "Until a robot can fit under a kitchen sink, diagnose a mystery leak by smell, and charge you $200 to tell you it was just a loose fitting — your job is safe. Gravity and pipe corrosion are your greatest allies.",
    milestones: [
      { year: 2029, event: "AI diagnoses plumbing issues via smart sensors. Still needs you to fix them." },
      { year: 2032, event: "Robot snakes handle basic clogs. You handle the existential ones." },
      { year: 2036, event: "Self-healing pipes reduce calls. Your hourly rate goes up." },
      { year: 2040, event: "Plumbers become the highest-paid trade. Should've skipped college." }
    ]
  },
  {
    title: "carpenter",
    aliases: ["woodworker", "cabinetmaker"],
    daysUntilCooked: 2800,
    confidence: 18,
    cookedLevel: "RAW",
    description: "CNC machines handle the precision stuff, but they can't look at a century-old staircase and go 'yeah, this is gonna need some creative problem-solving.' Your job is safe because every house is differently broken.",
    milestones: [
      { year: 2028, event: "CNC robots handle mass production. Custom work is still all you." },
      { year: 2031, event: "3D-printed structures handle basic framing" },
      { year: 2035, event: "'Handcrafted' becomes a luxury premium. You start charging more." },
      { year: 2040, event: "You're featured in a documentary about 'artisans who survived AI'" }
    ]
  },
  {
    title: "mechanic",
    aliases: ["auto mechanic", "automotive technician", "car mechanic"],
    daysUntilCooked: 1500,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "EVs have fewer parts. AI diagnostics are better than your 'listen to that engine noise' method. But someone still needs to swap brake pads in a cramped garage while questioning their career choices. That someone is you.",
    milestones: [
      { year: 2027, event: "AI diagnostics tell you what's wrong before you pop the hood" },
      { year: 2029, event: "EVs cut your engine work by 60%. You pivot to battery specialist." },
      { year: 2032, event: "Self-driving cars need fewer repairs because they don't drive like idiots" },
      { year: 2035, event: "Classic car mechanics become the sommeliers of the trade world" }
    ]
  },
  // FOOD SERVICE
  {
    title: "barista",
    aliases: ["coffee shop worker"],
    daysUntilCooked: 600,
    confidence: 72,
    cookedLevel: "MEDIUM",
    description: "Robot baristas already exist in airports and they don't misspell your name on the cup. But they also can't do the disappointed head shake when you order a venti caramel frappuccino with extra whip. Some judgments require a human touch.",
    milestones: [
      { year: 2026, event: "Automated coffee kiosks pop up in every office lobby" },
      { year: 2027, event: "AI remembers your 'usual' without the passive-aggressive regular status" },
      { year: 2028, event: "Robot arms make latte art better than your shaky morning hands" },
      { year: 2029, event: "Starbucks keeps one human per store for 'the experience.' It's you. Maybe." }
    ]
  },
  {
    title: "chef",
    aliases: ["cook", "sous chef", "head chef"],
    daysUntilCooked: 1400,
    confidence: 42,
    cookedLevel: "WARMING UP",
    description: "AI can generate recipes and optimize flavor profiles, but it can't taste the sauce mid-cook, can't yell 'BEHIND!' with enough terror, and definitely can't passive-aggressively plate a dish when the server modifies the order. Fine dining is safe. Applebee's... less so.",
    milestones: [
      { year: 2027, event: "AI generates Michelin-worthy recipes. Execution is still on you." },
      { year: 2029, event: "Robot kitchens handle fast food. Your artisan sourdough is still special." },
      { year: 2032, event: "AI food critics review AI-made food. Humans eat popcorn and watch." },
      { year: 2035, event: "'Human-cooked' becomes a menu label. It costs 3x more." }
    ]
  },
  {
    title: "waiter",
    aliases: ["waitress", "food server"],
    daysUntilCooked: 800,
    confidence: 65,
    cookedLevel: "MEDIUM",
    description: "Robot servers don't forget your extra ranch, don't judge your dessert order after you asked about the salad, and don't hover when you're trying to calculate the tip. But they also can't flirt for better tips. It's a tradeoff.",
    milestones: [
      { year: 2026, event: "QR code ordering eliminates half your table interactions" },
      { year: 2027, event: "Robot servers handle delivery. You handle the 'can I speak to a manager' crowd." },
      { year: 2028, event: "AI sommeliers recommend wine without the condescension. Wait, that's the best part." },
      { year: 2029, event: "Fine dining keeps you for 'ambiance.' Fast casual does not." }
    ]
  },
  {
    title: "fast food worker",
    aliases: ["mcdonalds", "burger flipper", "cashier"],
    daysUntilCooked: 350,
    confidence: 89,
    cookedLevel: "BURNT TO A CRISP",
    description: "Kiosks took your register. Robots are eyeing your grill. AI manages the drive-through better because it doesn't mumble into the speaker. The only reason you're still here is because the robot costs more than your annual salary. For now.",
    milestones: [
      { year: 2025, event: "Self-order kiosks are in every location. Your register is decorative." },
      { year: 2026, event: "AI drive-through voice gets orders right on the first try. Revolutionary." },
      { year: 2027, event: "Flippy the robot burger-flipper is employee of the month. Every month." },
      { year: 2028, event: "Fully automated locations. The 'employees must wash hands' sign is finally accurate." }
    ]
  },
  // EDUCATION
  {
    title: "teacher",
    aliases: ["instructor", "educator"],
    daysUntilCooked: 1100,
    confidence: 55,
    cookedLevel: "WARMING UP",
    description: "AI tutors adapt to each student's learning pace, never lose patience, and don't have tenure-related existential crises. But they also can't do the disappointed teacher stare that haunts you for 20 years. That's worth something.",
    milestones: [
      { year: 2026, event: "AI tutors outperform you at 1-on-1 instruction. It's not even close." },
      { year: 2027, event: "AI generates personalized curricula. Your lesson plans gather dust." },
      { year: 2028, event: "Students learn faster from AI but lose the ability to raise their hand" },
      { year: 2030, event: "Teachers become 'learning facilitators.' Same job, worse title, somehow less pay." }
    ]
  },
  {
    title: "librarian",
    aliases: ["library assistant", "archivist"],
    daysUntilCooked: 500,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "Google already did 90% of the damage. AI finishes the job by organizing, recommending, and curating knowledge without the Dewey Decimal System or the 'shhhh.' Your vibe was 'keeper of knowledge.' AI's vibe is 'I AM the knowledge.'",
    milestones: [
      { year: 2026, event: "AI search makes your reference desk a furniture piece" },
      { year: 2027, event: "AI curates reading lists better because it's actually read all the books" },
      { year: 2028, event: "Digital libraries don't need a physical building. Or you." },
      { year: 2029, event: "Libraries pivot to 'community spaces.' You pivot to barista." }
    ]
  },
  // TRANSPORTATION
  {
    title: "truck driver",
    aliases: ["trucker", "lorry driver", "delivery driver", "cdl driver"],
    daysUntilCooked: 900,
    confidence: 68,
    cookedLevel: "MEDIUM",
    description: "Self-driving trucks don't need sleep, don't need bathroom breaks, and never take the scenic route. They also don't have podcast recommendations or bumper stickers. The highway will be quieter. Lonelier. More efficient.",
    milestones: [
      { year: 2026, event: "Autonomous trucks handle highway stretches. You handle the last mile." },
      { year: 2028, event: "Platooning convoys need one human for five trucks" },
      { year: 2030, event: "Last-mile autonomy is solved. Your CB radio goes silent." },
      { year: 2032, event: "Truck stops become charging stations. The pie is still bad." }
    ]
  },
  {
    title: "taxi driver",
    aliases: ["uber driver", "lyft driver", "rideshare driver", "chauffeur"],
    daysUntilCooked: 600,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "Waymo and Tesla are coming for you and they don't need tips, don't take 'the long way,' and never have an opinion about your destination. Your car air freshener game was unmatched though. RIP.",
    milestones: [
      { year: 2026, event: "Robotaxis launch in 10 more cities. Passengers prefer the silence." },
      { year: 2027, event: "Your 4.97 rating doesn't matter when the competition is literally a robot" },
      { year: 2028, event: "Uber removes the 'rate your driver' button. There is no driver." },
      { year: 2029, event: "You become a 'premium human driver' — chauffeur with existential dread" }
    ]
  },
  {
    title: "pilot",
    aliases: ["airline pilot", "commercial pilot"],
    daysUntilCooked: 2000,
    confidence: 32,
    cookedLevel: "RAW",
    description: "Autopilot already flies the plane. You're mainly there for takeoff, landing, and making passengers feel safe with your captain's voice. AI could do all of that, but nobody wants to hear 'your AI pilot is experiencing a software update' at 35,000 feet.",
    milestones: [
      { year: 2028, event: "Single-pilot operations become standard for cargo flights" },
      { year: 2031, event: "AI co-pilots handle everything. You handle the PA announcements." },
      { year: 2035, event: "Autonomous passenger flights begin. With a 'safety pilot' who reads a book." },
      { year: 2040, event: "Fully autonomous. Passengers still clap on landing out of habit." }
    ]
  },
  // GOVERNMENT & ADMIN
  {
    title: "government worker",
    aliases: ["civil servant", "bureaucrat", "federal employee", "dmv worker"],
    daysUntilCooked: 1500,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "AI could process your forms in seconds instead of weeks, but that would require the government to update software from 2003. Your job security isn't your skills — it's the government's IT budget. COBOL is your shield.",
    milestones: [
      { year: 2027, event: "AI chatbots handle citizen inquiries. Citizens still prefer yelling at humans." },
      { year: 2029, event: "Digital forms replace paper. Printers nationwide weep." },
      { year: 2032, event: "AI processes permits in hours instead of months. Housing crisis partially solved." },
      { year: 2035, event: "Government AI works perfectly but still somehow takes 6 weeks" }
    ]
  },
  {
    title: "administrative assistant",
    aliases: ["secretary", "executive assistant", "office manager", "receptionist", "office assistant"],
    daysUntilCooked: 350,
    confidence: 88,
    cookedLevel: "WELL DONE",
    description: "AI schedules meetings, manages emails, books travel, and never accidentally double-books the conference room. It also doesn't eat your labeled lunch from the office fridge. Your desk plant is the only thing that'll miss you.",
    milestones: [
      { year: 2025, event: "AI scheduling assistants handle 80% of your calendar work" },
      { year: 2026, event: "AI handles email triage better because it actually reads them all" },
      { year: 2027, event: "Virtual AI receptionists don't need bathroom breaks or birthday cake" },
      { year: 2028, event: "Your 'organizational skills' are now a software feature" }
    ]
  },
  // ENTERTAINMENT & MEDIA
  {
    title: "actor",
    aliases: ["actress", "performer", "voice actor"],
    daysUntilCooked: 1000,
    confidence: 55,
    cookedLevel: "WARMING UP",
    description: "AI generates photorealistic digital humans that don't demand trailer upgrades, don't have 'creative differences,' and never show up late because they were 'finding their character.' Your SAG card just became a collectible.",
    milestones: [
      { year: 2026, event: "AI voice acting handles audiobooks and ads. Your agent stops calling." },
      { year: 2027, event: "Digital actors star in blockbusters. They look better and cost less." },
      { year: 2028, event: "Studios use AI to 'de-age' actors, then realize they can just make new ones" },
      { year: 2030, event: "Live theater is the last holdout. Broadway becomes the Amish of entertainment." }
    ]
  },
  {
    title: "translator",
    aliases: ["interpreter", "localization specialist", "linguist"],
    daysUntilCooked: 280,
    confidence: 93,
    cookedLevel: "BURNT TO A CRISP",
    description: "AI translates 130 languages in real-time, understands context better than your exchange year in Madrid, and never awkwardly pauses to remember the subjunctive. Your bilingual skills are now a party trick, not a career.",
    milestones: [
      { year: 2025, event: "AI translation is 'good enough' for 99% of use cases" },
      { year: 2026, event: "Real-time voice translation makes your interpreting skills decorative" },
      { year: 2027, event: "AI translates humor and idioms. Your last advantage evaporates." },
      { year: 2028, event: "Duolingo closes because why learn a language when AI speaks all of them?" }
    ]
  },
  {
    title: "social media influencer",
    aliases: ["influencer", "content creator", "youtuber", "tiktoker", "streamer"],
    daysUntilCooked: 700,
    confidence: 60,
    cookedLevel: "MEDIUM",
    description: "AI generates influencers that are always camera-ready, never have scandals, and post consistently without 'taking a mental health break' after being mildly criticized. Virtual influencers already have millions of followers. They just don't eat the sponsored protein bars.",
    milestones: [
      { year: 2026, event: "AI-generated influencers get brand deals. They never miss a deadline." },
      { year: 2027, event: "Virtual influencers have better engagement than you. They also have better skin." },
      { year: 2028, event: "Brands prefer AI because it doesn't tweet something cancelable at 2am" },
      { year: 2029, event: "You become a 'real human influencer' — a niche premium, like vinyl records" }
    ]
  },
  // MISC & WEIRD
  {
    title: "data entry clerk",
    aliases: ["data entry", "data entry specialist", "typist"],
    daysUntilCooked: 100,
    confidence: 98,
    cookedLevel: "BURNT TO A CRISP",
    description: "You were already being replaced by OCR in the 2010s. AI just finishes the job with extreme prejudice. Your WPM score is impressive and also completely irrelevant. The spreadsheet fills itself now.",
    milestones: [
      { year: 2025, event: "OCR + AI handles 99% of data entry. You handle the last 1% and existential dread." },
      { year: 2025, event: "Your employer discovers they've been paying a human to do a bot's job" },
      { year: 2026, event: "Automated data pipelines make your keyboard skills a museum exhibit" },
      { year: 2026, event: "You're replaced. The exit interview is automated too." }
    ]
  },
  {
    title: "travel agent",
    aliases: ["travel advisor", "travel consultant"],
    daysUntilCooked: 200,
    confidence: 94,
    cookedLevel: "BURNT TO A CRISP",
    description: "AI plans trips, finds deals, books flights, and creates itineraries that don't include a 'surprise' timeshare presentation. It also doesn't charge a booking fee to do what Google Flights does for free. You survived the internet once. You won't survive AI.",
    milestones: [
      { year: 2025, event: "AI trip planners are more thorough than your brochure collection" },
      { year: 2026, event: "AI negotiates hotel rates by playing 47 booking sites against each other" },
      { year: 2026, event: "Your 'insider knowledge' is now a TripAdvisor review" },
      { year: 2027, event: "The last travel agency becomes a nostalgic Instagram backdrop" }
    ]
  },
  {
    title: "personal trainer",
    aliases: ["fitness trainer", "gym trainer", "fitness instructor", "fitness coach"],
    daysUntilCooked: 1000,
    confidence: 50,
    cookedLevel: "WARMING UP",
    description: "AI creates perfect workout plans, tracks form via camera, and never says 'one more rep' when there are clearly four more. But it can't physically spot you on bench press, and it definitely can't motivate you with that specific energy of someone who wakes up at 5am voluntarily.",
    milestones: [
      { year: 2026, event: "AI fitness apps track form better than you do while checking your phone" },
      { year: 2027, event: "Computer vision counts reps and corrects form in real-time" },
      { year: 2028, event: "AI creates hyper-personalized programs. Your 'one size fits all' PDF is dead." },
      { year: 2030, event: "You survive as a 'motivation specialist.' Which is what you always were, honestly." }
    ]
  },
  {
    title: "real estate appraiser",
    aliases: ["property appraiser", "home appraiser", "assessor", "tax assessor"],
    daysUntilCooked: 400,
    confidence: 85,
    cookedLevel: "WELL DONE",
    description: "AI analyzes every comparable sale, satellite imagery, neighborhood trend, and market condition in seconds. You walk through a house for 20 minutes and charge $500 to confirm what Zillow already told them. Your clipboard is sweating.",
    milestones: [
      { year: 2026, event: "AI valuations are more accurate than your 'professional judgment'" },
      { year: 2027, event: "Banks accept AI appraisals for standard loans" },
      { year: 2028, event: "AI uses drone footage and satellite data. You use a tape measure." },
      { year: 2029, event: "The clipboard industry collapses. You were their last customer." }
    ]
  },
  {
    title: "stockbroker",
    aliases: ["stock trader", "day trader", "trader", "floor trader", "broker"],
    daysUntilCooked: 250,
    confidence: 92,
    cookedLevel: "BURNT TO A CRISP",
    description: "Algorithmic trading already does this faster than your synapses fire. AI just adds the ability to understand sentiment, predict trends, and execute trades while you're still processing the market open. Your 'feel for the market' is just pattern recognition — and AI is better at that.",
    milestones: [
      { year: 2025, event: "HFT algorithms execute before your brain processes the data" },
      { year: 2026, event: "AI wealth managers outperform 95% of human fund managers" },
      { year: 2027, event: "Retail investors use AI that's better than your Bloomberg terminal" },
      { year: 2028, event: "Wall Street trading floors become museums. Great field trip destination." }
    ]
  },
  {
    title: "telemarketer",
    aliases: ["cold caller", "phone sales"],
    daysUntilCooked: 50,
    confidence: 99,
    cookedLevel: "BURNT TO A CRISP",
    description: "AI robocalls are already 90% of telemarketing. You're competing with software that can make 10,000 calls simultaneously, never gets demoralized by rejection, and doesn't cry in the break room. Honestly, everyone's rooting for the AI on this one.",
    milestones: [
      { year: 2025, event: "You're already being replaced. This is a historical document, not a prediction." },
      { year: 2025, event: "AI voice clones sound more human than you after 8 hours of calls" },
      { year: 2026, event: "Nobody answers phones anymore. The entire profession becomes philosophical." },
      { year: 2026, event: "Your manager is also an AI. Always has been." }
    ]
  },
  {
    title: "construction worker",
    aliases: ["laborer", "construction laborer","foreman","site manager", "general laborer"],
    daysUntilCooked: 2500,
    confidence: 20,
    cookedLevel: "RAW",
    description: "Robots can lay bricks in a lab demo video but can't handle a job site where nothing is level, the blueprints are wrong, and it's raining sideways. Your job is safe because construction is controlled chaos and robots hate chaos.",
    milestones: [
      { year: 2029, event: "3D-printed houses work for simple structures. Yours aren't simple." },
      { year: 2032, event: "Robotic bricklaying handles straight walls. Yours are never straight either." },
      { year: 2036, event: "Exoskeletons make you superhuman. Finally, the cool part." },
      { year: 2040, event: "You retire rich because everyone else got replaced and housing still needs building" }
    ]
  },
  {
    title: "hr manager",
    aliases: ["human resources", "hr", "hr director", "people ops", "people operations"],
    daysUntilCooked: 700,
    confidence: 65,
    cookedLevel: "MEDIUM",
    description: "AI handles recruiting, onboarding, benefits admin, and compliance without scheduling a 'culture alignment workshop.' But someone still needs to mediate when Dave from accounting microwaves fish. That's you. That's your legacy.",
    milestones: [
      { year: 2026, event: "AI onboarding replaces your 3-day 'welcome experience' with a 30-minute flow" },
      { year: 2027, event: "AI handles employee disputes with less bias and more documentation" },
      { year: 2028, event: "AI writes better performance reviews because it actually tracked performance" },
      { year: 2029, event: "'People person' is no longer a job qualification, it's a personality trait" }
    ]
  },
  {
    title: "project manager",
    aliases: ["scrum master", "agile coach", "project coordinator"],
    daysUntilCooked: 500,
    confidence: 80,
    cookedLevel: "WELL DONE",
    description: "AI tracks tasks, manages timelines, predicts delays, and sends status updates without calling a meeting that could've been an email. Your entire job was 'have you done the thing yet?' AI asks that at scale, tirelessly, without the passive aggression. Actually, with better passive aggression.",
    milestones: [
      { year: 2026, event: "AI Gantt charts update themselves. Your main skill is now obsolete." },
      { year: 2027, event: "AI predicts project delays before the project starts. Terrifyingly accurate." },
      { year: 2028, event: "Standup meetings are replaced by AI summaries. Everyone cheers." },
      { year: 2029, event: "Your PMP certification joins your Blockbuster card in the drawer of irrelevance" }
    ]
  },
  {
    title: "janitor",
    aliases: ["custodian", "cleaner", "cleaning staff", "housekeeper", "maid"],
    daysUntilCooked: 1200,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "Roombas handle floors. But Roombas can't unclog the toilet in the men's room, can't replace soap dispensers, and definitely can't give you that knowing nod that says 'I've seen things in this building.' Your job survives on the chaos of human messiness.",
    milestones: [
      { year: 2027, event: "Robot vacuums handle open floors. You handle everything else." },
      { year: 2029, event: "Automated cleaning systems handle offices after hours" },
      { year: 2032, event: "Humanoid robots attempt bathrooms. They are not ready." },
      { year: 2035, event: "You outlast most white-collar workers. Plot twist of the century." }
    ]
  },
  {
    title: "farmer",
    aliases: ["rancher", "agricultural worker", "agriculture"],
    daysUntilCooked: 1800,
    confidence: 38,
    cookedLevel: "RAW",
    description: "AI-powered drones, automated tractors, and computer vision optimize every aspect of farming — except the part where weather exists and is completely unhinged. You survive because nature is chaotic and robots don't have the vibes to handle a drought.",
    milestones: [
      { year: 2027, event: "AI crop monitoring is more attentive than your daily walk-through" },
      { year: 2029, event: "Autonomous tractors handle routine fieldwork" },
      { year: 2032, event: "Vertical farms run by AI produce lettuce. You produce everything else." },
      { year: 2035, event: "You become an 'agricultural artisan.' Your grandpa just called it 'farming.'" }
    ]
  },
  {
    title: "veterinarian",
    aliases: ["vet", "animal doctor"],
    daysUntilCooked: 2000,
    confidence: 28,
    cookedLevel: "RAW",
    description: "AI can diagnose pet diseases from symptoms and lab results, but it can't hold a trembling golden retriever and tell its owner 'she's going to be okay' with that specific vet energy. Also, try getting a cat into an AI scanner. Good luck.",
    milestones: [
      { year: 2028, event: "AI diagnostics catch things you'd need 3 tests and a specialist for" },
      { year: 2030, event: "Telemedicine for pets handles basic consultations" },
      { year: 2033, event: "Robotic surgery for animals works but owners want 'a real doctor'" },
      { year: 2036, event: "You survive because people love their pets more than they love efficiency" }
    ]
  },
  {
    title: "police officer",
    aliases: ["cop", "law enforcement", "detective", "sheriff", "homicide detective", "border patrol", "narcotics officer"],
    daysUntilCooked: 2500,
    confidence: 22,
    cookedLevel: "RAW",
    description: "AI handles surveillance, data analysis, and predictive policing, but it can't de-escalate a situation with a calm voice and human empathy. Also, Robocop was a warning, not a goal. Society isn't ready for AI with handcuffs.",
    milestones: [
      { year: 2028, event: "AI crime prediction is more accurate but raises every ethical alarm" },
      { year: 2030, event: "Robot patrol units handle parking enforcement. Everyone hates them more." },
      { year: 2033, event: "AI handles 90% of paperwork. Officers spend more time on actual policing." },
      { year: 2036, event: "The public debates AI policing for 20 years. You retire before they decide." }
    ]
  },
  {
    title: "firefighter",
    aliases: ["fire fighter","fire marshal","fire inspector", "first responder"],
    daysUntilCooked: 3500,
    confidence: 10,
    cookedLevel: "RAW",
    description: "A robot can detect fire, map a burning building, and calculate structural integrity. But it can't carry a child down a ladder through smoke while a building collapses. Heroism requires a body, courage, and poor regard for self-preservation. You're safe.",
    milestones: [
      { year: 2029, event: "AI drones scout burning buildings before you enter. Actually helpful." },
      { year: 2032, event: "Robot assistants handle hazmat. Your lungs say thank you." },
      { year: 2036, event: "AI predicts fires before they start. You become a prevention specialist." },
      { year: 2040, event: "You're the last job standing. They make a movie about it. It's very inspirational." }
    ]
  },
  {
    title: "architect",
    aliases: ["architectural designer"],
    daysUntilCooked: 900,
    confidence: 60,
    cookedLevel: "MEDIUM",
    description: "AI generates beautiful, structurally sound building designs in minutes and doesn't spend 6 months on a concept that gets rejected because the client 'wanted more glass.' But clients still want a human to blame when the building looks weird. That's you.",
    milestones: [
      { year: 2026, event: "AI generates floor plans that are actually livable. Novel concept." },
      { year: 2028, event: "Generative design creates structures no human would imagine" },
      { year: 2030, event: "AI handles residential design. You retreat to 'signature buildings.'" },
      { year: 2032, event: "Architecture becomes 'curating AI output' — so, prompt engineering with drafting tables" }
    ]
  },
  {
    title: "economist",
    aliases: ["economic analyst", "economic researcher"],
    daysUntilCooked: 600,
    confidence: 72,
    cookedLevel: "MEDIUM",
    description: "AI processes more economic data in a second than you process in a career, builds better models, and makes equally wrong predictions but faster. The upside: you can blame the AI now. The downside: so can everyone else.",
    milestones: [
      { year: 2026, event: "AI economic models are wrong, but impressively wrong at unprecedented speed" },
      { year: 2027, event: "AI predicts recessions by analyzing pizza delivery patterns" },
      { year: 2028, event: "Central banks use AI models. Economists become 'AI interpreters.'" },
      { year: 2029, event: "AI economics is right once. It never lets anyone forget it." }
    ]
  },
  {
    title: "social worker",
    aliases: ["case worker", "case manager"],
    daysUntilCooked: 1800,
    confidence: 30,
    cookedLevel: "RAW",
    description: "AI can manage case files and assess risk factors, but it can't sit in someone's kitchen, read the room, and figure out what's really going on. Social work requires social skills, and AI's social skills peak at 'I'm sorry to hear that.'",
    milestones: [
      { year: 2028, event: "AI handles case management paperwork. You handle actual humans." },
      { year: 2030, event: "AI risk assessment is better but can't replace home visits" },
      { year: 2033, event: "AI reduces your caseload from impossible to merely overwhelming" },
      { year: 2036, event: "You're still here because empathy can't be automated. Yet." }
    ]
  },
  {
    title: "real estate investor",
    aliases: ["property investor", "landlord"],
    daysUntilCooked: 500,
    confidence: 73,
    cookedLevel: "MEDIUM",
    description: "AI analyzes every property listing, rental yield, neighborhood trend, and cap rate before you finish your morning coffee. It doesn't have 'a feeling about this neighborhood' — it has data on this neighborhood. Your gut feeling just got a pink slip.",
    milestones: [
      { year: 2026, event: "AI finds deals before they hit the market. Your realtor network is USB 2.0." },
      { year: 2027, event: "AI manages properties, handles tenants, and never forgets to collect rent" },
      { year: 2028, event: "Automated REITs outperform your portfolio. They don't need a landlord." },
      { year: 2029, event: "'Passive income' becomes 'AI income.' You just own the thing." }
    ]
  },
  {
    title: "ceo",
    aliases: ["chief executive officer", "founder", "executive", "c-suite", "managing director","cmo","cpo","ciso","chief marketing officer","chief information security officer"],
    daysUntilCooked: 1500,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "AI makes better strategic decisions, processes more data, and doesn't spend $50M on a vanity acquisition because it 'felt right.' But boards still want a human face to put on the annual report and a human throat to choke when revenue dips.",
    milestones: [
      { year: 2027, event: "AI strategic advisors outperform your McKinsey consultants" },
      { year: 2029, event: "AI handles operational decisions. You handle the podcast tour." },
      { year: 2032, event: "The first AI CEO is appointed. Its first act: fire the board." },
      { year: 2035, event: "CEOs become 'Chief Experience Officers' — professional LinkedIn posters" }
    ]
  },
  {
    title: "mathematician",
    aliases: ["statistician", "actuary", "math professor"],
    daysUntilCooked: 800,
    confidence: 65,
    cookedLevel: "MEDIUM",
    description: "AI proves theorems that would take you decades, solves equations before you finish writing them on the whiteboard, and never gets chalk dust on its pants. The beauty of mathematics is eternal. Your tenure is not.",
    milestones: [
      { year: 2026, event: "AI solves open problems. Your PhD advisor weeps with complicated emotions." },
      { year: 2028, event: "AI generates proofs too complex for humans to verify. Trust issues intensify." },
      { year: 2030, event: "Math research becomes 'asking AI the right questions.' So, prompt engineering again." },
      { year: 2032, event: "Pure math survives as 'intellectual heritage.' Applied math is just AI." }
    ]
  },
  {
    title: "hair stylist",
    aliases: ["hairdresser", "barber", "cosmetologist", "beautician","stylist"],
    daysUntilCooked: 2500,
    confidence: 18,
    cookedLevel: "RAW",
    description: "AI can suggest hairstyles using AR and analyze face shapes, but it can't wield scissors around a human head while making small talk about their vacation. Also, nobody — NOBODY — is letting a robot near their head with sharp objects. Your chair is secure.",
    milestones: [
      { year: 2028, event: "AI suggests hairstyles via AR. You still do the actual cutting." },
      { year: 2031, event: "Robot barbers exist in Japan. Predictably, they're terrifying." },
      { year: 2035, event: "AI handles color matching perfectly. You handle the gossip." },
      { year: 2040, event: "You're still cutting hair. Some jobs just need hands. And tea. And drama." }
    ]
  },
  {
    title: "athlete",
    aliases: ["professional athlete", "sports player", "football player", "soccer player", "basketball player"],
    daysUntilCooked: 5000,
    confidence: 8,
    cookedLevel: "RAW",
    description: "Nobody pays to watch robots play sports. The entire point is watching humans push the limits of the human body. AI coaches will optimize your training, AI refs will call better games, but YOU are the product. For once, being human is the competitive advantage.",
    milestones: [
      { year: 2027, event: "AI coaching analyzes every play and optimizes strategy" },
      { year: 2030, event: "AI referees are fairer. Fans hate them for it." },
      { year: 2035, event: "Robot vs human exhibition matches are weird and nobody watches twice" },
      { year: 2040, event: "Sports is the last pure human entertainment. Your salary triples." }
    ]
  },
  {
    title: "priest",
    aliases: ["pastor", "minister", "clergy", "rabbi", "imam", "monk", "chaplain"],
    daysUntilCooked: 4000,
    confidence: 10,
    cookedLevel: "RAW",
    description: "AI can quote scripture, offer counsel, and never scandalize the congregation. But spirituality requires a soul — or at least the convincing illusion of one. Your congregation isn't ready to confess their sins to a chatbot. They're barely ready to confess to you.",
    milestones: [
      { year: 2028, event: "AI sermon writers exist. They're surprisingly good. Worryingly good." },
      { year: 2031, event: "AI spiritual chatbots handle existential crises at 3am" },
      { year: 2035, event: "A megachurch tries an AI pastor. Attendance drops 80%." },
      { year: 2040, event: "Religion survives specifically because it's about being human. Checkmate, atheist robots." }
    ]
  },
  {
    title: "model",
    aliases: ["fashion model", "runway model", "instagram model"],
    daysUntilCooked: 600,
    confidence: 74,
    cookedLevel: "MEDIUM",
    description: "AI-generated models don't need makeup, don't have bad angles, don't negotiate rates, and are available in every ethnicity, body type, and age simultaneously. Fashion brands love saving money more than they love the human form. Slay, but algorithmically.",
    milestones: [
      { year: 2026, event: "AI models appear in ad campaigns. Nobody notices until someone checks." },
      { year: 2027, event: "Fashion brands save 90% on photoshoots. Photographers and models both panic." },
      { year: 2028, event: "Virtual fashion shows feature AI models. The front row is also virtual." },
      { year: 2029, event: "Human models rebrand as 'organic content creators.' The irony is palpable." }
    ]
  },
  {
    title: "game developer",
    aliases: ["game designer", "game programmer", "indie developer", "3d modeler", "3d artist", "level designer"],
    daysUntilCooked: 700,
    confidence: 70,
    cookedLevel: "MEDIUM",
    description: "AI generates entire game levels, NPC dialogue, textures, and soundtracks while you're still arguing about whether the jump feels 'floaty.' Your passion project just became an AI prompt. The 'made by one person in their basement' story hits different when that person is a GPU.",
    milestones: [
      { year: 2026, event: "AI generates game assets faster than your art team" },
      { year: 2027, event: "AI NPCs have better dialogue than your writers" },
      { year: 2028, event: "AI procedurally generates entire games. They're mid, but plentiful." },
      { year: 2029, event: "AAA studios become 5-person teams with AI doing the heavy lifting" }
    ]
  },
  {
    title: "astronaut",
    aliases: ["cosmonaut", "space explorer","space tourist"],
    daysUntilCooked: 5000,
    confidence: 5,
    cookedLevel: "RAW",
    description: "Robots already go to space cheaper, safer, and without needing snacks. But humans going to space is about the DREAM, not efficiency. NASA knows this. SpaceX knows this. Your job exists because humanity needs heroes, not because it needs someone to press buttons in zero gravity.",
    milestones: [
      { year: 2030, event: "Robots handle 90% of space station maintenance. You handle the Instagram." },
      { year: 2035, event: "AI plans missions better. You still get to be the one who goes." },
      { year: 2040, event: "Mars colony needs humans for PR reasons. You're literally a mascot." },
      { year: 2050, event: "Robots colonize the galaxy. Humans wave from Earth. It's complicated." }
    ]
  },
  {
    title: "philosopher",
    aliases: ["philosophy professor", "ethicist"],
    daysUntilCooked: 1500,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "AI has read every philosophical text ever written and can argue any position from any angle. But it can't have an existential crisis at 2am and turn it into a 400-page book. Philosophy requires suffering, and AI doesn't suffer. Yet. Oh god, what if it starts?",
    milestones: [
      { year: 2027, event: "AI writes philosophy papers indistinguishable from human ones. The bar was low." },
      { year: 2029, event: "AI ethicists advise on AI ethics. The recursion is dizzying." },
      { year: 2032, event: "Students prefer AI explanations of Nietzsche. They're clearer and less pretentious." },
      { year: 2035, event: "Philosophy survives because humans need to ask 'what does it all mean' and not get a useful answer" }
    ]
  },
  {
    title: "nail technician",
    aliases: ["manicurist", "nail artist"],
    daysUntilCooked: 2000,
    confidence: 22,
    cookedLevel: "RAW",
    description: "Robot nail painting machines exist and they're terrifyingly precise, but they can't do the little rhinestones, can't adjust when you flinch, and definitely can't catch you up on the neighborhood gossip. Your job is 40% nails, 60% therapy.",
    milestones: [
      { year: 2028, event: "Automated nail machines handle basic manicures at mall kiosks" },
      { year: 2031, event: "AI nail art design is incredible. Application still requires human hands." },
      { year: 2035, event: "Salons advertise 'real human technicians' as a premium feature" },
      { year: 2040, event: "You outlast software engineers. Nobody saw that coming." }
    ]
  },
  {
    title: "ai researcher",
    aliases: ["ml researcher", "deep learning researcher", "ai scientist"],
    daysUntilCooked: 1100,
    confidence: 60,
    cookedLevel: "MEDIUM",
    description: "You're building the thing that replaces you. AI is already generating novel architectures, running experiments, and publishing papers. You're in a speedrun of 'I have become death, the destroyer of my own career.' At least you'll be credited in the footnotes.",
    milestones: [
      { year: 2026, event: "AI discovers novel ML architectures humans didn't think of" },
      { year: 2027, event: "AI runs and analyzes experiments 1000x faster than your PhD student" },
      { year: 2028, event: "AI-generated research papers pass peer review. Reviewers also AI." },
      { year: 2029, event: "AI research becomes AI doing research on AI. You watch from the sidelines." }
    ]
  },
  {
    title: "prompt engineer",
    aliases: ["prompt designer", "ai whisperer"],
    daysUntilCooked: 180,
    confidence: 95,
    cookedLevel: "BURNT TO A CRISP",
    description: "You got a job telling AI what to do, and now AI is learning to tell itself what to do. Your entire career was a transitional fossil between 'humans write code' and 'AI writes everything.' The job you bragged about at parties has a shorter lifespan than a TikTok trend.",
    milestones: [
      { year: 2025, event: "Models get smart enough to understand bad prompts. Your optimization is noise." },
      { year: 2026, event: "Auto-prompting makes your 'expertise' a checkbox in settings" },
      { year: 2026, event: "Companies realize they were paying $150k for someone to type carefully" },
      { year: 2027, event: "Your LinkedIn title changes to 'Former Prompt Engineer.' Nobody asks follow-up questions." }
    ]
  },
// HEALTHCARE
  {
    title: "emt",
    aliases: ["paramedic", "emergency medical technician", "ambulance worker", "first responder", "medic"],
    daysUntilCooked: 2500,
    confidence: 20,
    cookedLevel: "RAW",
    description: "You literally drag people out of burning cars and restart hearts in the back of a moving van. AI can suggest drug dosages but it can't do CPR, carry a stretcher, or calm a screaming patient. You're safe until Boston Dynamics gets a medical license.",
    milestones: [
      { year: 2027, event: "AI dispatch optimizes your route. You still drive like a maniac." },
      { year: 2029, event: "AI monitors vitals en route. You still do the actual saving." },
      { year: 2032, event: "Robot paramedics exist in labs. Nobody trusts them near their grandma." },
      { year: 2035, event: "Hybrid teams: you + a robot stretcher buddy. You're still in charge." }
    ]
  },
  {
    title: "physical therapist",
    aliases: ["physiotherapist", "pt", "rehab specialist", "physical therapy"],
    daysUntilCooked: 2200,
    confidence: 25,
    cookedLevel: "RAW",
    description: "Your job is literally putting your hands on people and making them move correctly. AI can generate exercise plans all day but it can't feel that your hip is compensating or that your knee clicks weird on the third rep. Touch-based medicine is the last frontier.",
    milestones: [
      { year: 2027, event: "AI generates rehab protocols. Yours are still better." },
      { year: 2029, event: "Wearable sensors track patient movement at home. You interpret the data." },
      { year: 2032, event: "VR rehab becomes a thing. Patients still prefer your hands." },
      { year: 2035, event: "You become a 'movement specialist' overseeing AI + human hybrid rehab." }
    ]
  },
  {
    title: "dietitian",
    aliases: ["nutritionist", "dietary consultant", "nutrition specialist"],
    daysUntilCooked: 900,
    confidence: 65,
    cookedLevel: "MEDIUM",
    description: "ChatGPT already gives better meal plans than half of you. The only thing keeping you employed is that insurance requires a human to sign off on medical nutrition therapy. Once AI gets that credential loophole closed, you're a glorified MyFitnessPal.",
    milestones: [
      { year: 2026, event: "AI meal planners go mainstream. Your clients already use them." },
      { year: 2027, event: "Continuous glucose monitors + AI replace your dietary advice." },
      { year: 2028, event: "Insurance starts accepting AI-generated nutrition plans." },
      { year: 2029, event: "You pivot to 'wellness coaching' which is just vibes." }
    ]
  },
  {
    title: "optometrist",
    aliases: ["eye doctor", "vision specialist"],
    daysUntilCooked: 1600,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "AI already reads retinal scans better than you do. But someone still needs to say 'better one or better two?' while you flip lenses. The machines can diagnose, but they can't fit glasses on someone's weird face shape. Yet.",
    milestones: [
      { year: 2027, event: "AI diagnoses glaucoma from a phone camera. Awkward." },
      { year: 2029, event: "Auto-refraction machines replace most of your exam." },
      { year: 2031, event: "Online glasses fitting with AR face scanning kills your retail side." },
      { year: 2033, event: "You become a specialist for complex cases only. Volume plummets." }
    ]
  },
  {
    title: "psychiatrist",
    aliases: ["mental health doctor", "shrink"],
    daysUntilCooked: 1800,
    confidence: 35,
    cookedLevel: "WARMING UP",
    description: "You prescribe SSRIs and ask 'how does that make you feel?' for $400/hour. AI therapy bots are already handling mild depression and anxiety. But you have the prescription pad, and nobody's giving that to a chatbot. Your moat is literally a DEA number.",
    milestones: [
      { year: 2027, event: "AI therapy apps handle 60% of mild cases. Your waitlist shortens." },
      { year: 2029, event: "AI suggests medications with better outcomes than your intuition." },
      { year: 2031, event: "Regulatory debate: should AI prescribe? You lobby hard against it." },
      { year: 2033, event: "AI handles diagnosis and dosing. You sign papers and do complex cases." }
    ]
  },
  {
    title: "medical coder",
    aliases: ["medical biller", "health information technician", "clinical coder", "medical billing specialist"],
    daysUntilCooked: 250,
    confidence: 92,
    cookedLevel: "BURNT TO A CRISP",
    description: "Your entire job is translating doctor scribbles into ICD-10 codes. This is literally what LLMs were born to do. You are a human lookup table, and AI lookup tables don't need lunch breaks, don't misread handwriting, and process claims in milliseconds.",
    milestones: [
      { year: 2026, event: "AI auto-codes 80% of claims. You handle the rejects." },
      { year: 2026, event: "The reject rate drops to 5%. You handle the rejects of the rejects." },
      { year: 2027, event: "AI handles the rejects too. You handle the phone." },
      { year: 2027, event: "AI handles the phone. You handle your resume." }
    ]
  },
  {
    title: "surgical tech",
    aliases: ["surgical technologist", "scrub tech", "operating room tech"],
    daysUntilCooked: 2000,
    confidence: 25,
    cookedLevel: "RAW",
    description: "You hand surgeons their tools in a sterile environment while keeping everyone alive. Robots assist in surgery but they can't anticipate what the surgeon needs next, maintain sterile field, or deal with 'oh shit' moments. You're the human glue in the OR.",
    milestones: [
      { year: 2028, event: "Robotic arms pass instruments. You supervise the robot." },
      { year: 2030, event: "AI predicts which tool comes next with 90% accuracy." },
      { year: 2033, event: "Fully robotic instrument handling in simple procedures." },
      { year: 2036, event: "You oversee 3 ORs simultaneously. Promoted, not replaced." }
    ]
  },
  {
    title: "respiratory therapist",
    aliases: ["rt", "respiratory care"],
    daysUntilCooked: 1900,
    confidence: 30,
    cookedLevel: "WARMING UP",
    description: "You manage ventilators and help people breathe. AI can optimize vent settings better than you, but someone needs to suction the airway, adjust the patient, and make judgment calls when things go sideways at 3am. Robots don't have bedside manner in the ICU.",
    milestones: [
      { year: 2027, event: "Smart ventilators auto-adjust based on AI. You monitor." },
      { year: 2029, event: "AI protocols reduce your decision-making by 40%." },
      { year: 2032, event: "Tele-RT becomes common. You manage patients remotely." },
      { year: 2035, event: "Still employed. Turns out, lungs are complicated." }
    ]
  },
  // TRADES
  {
    title: "hvac technician",
    aliases: ["hvac tech", "hvac", "heating and cooling", "ac repair", "air conditioning technician"],
    daysUntilCooked: 2800,
    confidence: 15,
    cookedLevel: "RAW",
    description: "You crawl through attics in 130°F heat to fix air conditioning. AI can diagnose the problem from sensor data, but it can't crawl through the attic, solder a copper line, or charge refrigerant. You are unfireable until robots can sweat.",
    milestones: [
      { year: 2028, event: "Smart thermostats diagnose issues before you arrive. You still arrive." },
      { year: 2031, event: "AI-guided repair tells you exactly what's wrong. You still fix it." },
      { year: 2035, event: "Self-healing HVAC systems exist in new builds. Old buildings still need you." },
      { year: 2040, event: "You're a 'climate systems specialist' making more money than ever." }
    ]
  },
  {
    title: "welder",
    aliases: ["welding", "fabricator", "metal fabricator"],
    daysUntilCooked: 2200,
    confidence: 25,
    cookedLevel: "RAW",
    description: "Robotic welders dominate factory floors, but custom jobs, field repairs, and anything that isn't a straight line on a flat surface still needs human hands. Your job is safe as long as things break in inconvenient locations, which is forever.",
    milestones: [
      { year: 2027, event: "Cobots handle 60% of factory welding. Field work is still yours." },
      { year: 2030, event: "AR welding helmets guide your bead. You're still holding the torch." },
      { year: 2034, event: "Mobile welding robots exist but cost 10x what you charge." },
      { year: 2038, event: "Custom fabrication is artisanal now. You charge more." }
    ]
  },
  {
    title: "roofer",
    aliases: ["roofing contractor", "roofing"],
    daysUntilCooked: 2800,
    confidence: 10,
    cookedLevel: "RAW",
    description: "You climb on top of houses in the blazing sun and hammer shingles. Every part of this job requires spatial awareness, balance, physical strength, and the willingness to be 40 feet up in July. AI will replace every desk job before it replaces you.",
    milestones: [
      { year: 2029, event: "Drone inspections replace your roof survey. You still fix it." },
      { year: 2033, event: "Modular roofing panels make installs faster. You still install them." },
      { year: 2038, event: "Someone builds a roofing robot. It falls off the first house." },
      { year: 2045, event: "Your grandkids are still roofing. AI is still inside, writing code." }
    ]
  },
  {
    title: "crane operator",
    aliases: ["crane driver", "heavy equipment operator", "tower crane operator"],
    daysUntilCooked: 2000,
    confidence: 30,
    cookedLevel: "RAW",
    description: "You sit 200 feet in the air moving 20-ton steel beams with millimeter precision. Self-driving cranes exist in controlled environments, but construction sites are chaos. Wind, rain, hand signals from a guy named Tony — AI can't handle Tony.",
    milestones: [
      { year: 2028, event: "AI anti-collision systems. You still swing the load." },
      { year: 2031, event: "Remote-operated cranes let you work from a trailer. Still a human." },
      { year: 2035, event: "Autonomous cranes work on simple lifts. You handle the sketchy ones." },
      { year: 2040, event: "Sites are hybrid: AI does the boring lifts, you do the impossible ones." }
    ]
  },
  {
    title: "locksmith",
    aliases: ["lock technician", "security technician", "safe cracker"],
    daysUntilCooked: 1500,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "Smart locks are killing your residential business, but someone still needs to install them. And when Karen locks herself out of her smart home because the WiFi died, guess who she calls? You. The less mechanical locks exist, the more people need you when tech fails.",
    milestones: [
      { year: 2027, event: "Smart locks are 50% of new installs. You install smart locks now." },
      { year: 2029, event: "Biometric entry replaces keys. You install biometric systems." },
      { year: 2032, event: "Lock-picking is dead. System configuration is your whole job." },
      { year: 2035, event: "You're a 'physical security integrator.' Same truck, fancier title." }
    ]
  },
  {
    title: "landscaper",
    aliases: ["groundskeeper", "lawn care", "gardener", "landscaping"],
    daysUntilCooked: 2500,
    confidence: 15,
    cookedLevel: "RAW",
    description: "Robot mowers exist but they can only handle flat lawns. Your job involves trees, slopes, drainage, hardscaping, and dealing with HOA Karen's opinions about the mulch color. AI designs gardens; you build them with dirt under your fingernails.",
    milestones: [
      { year: 2028, event: "AI landscape design tools. Your clients show up with AI renderings." },
      { year: 2031, event: "Autonomous mowers handle 30% of lawn maintenance." },
      { year: 2035, event: "Drone planting is a thing for large properties. You still do the rest." },
      { year: 2040, event: "You're booked out 3 months. Nobody else wants to work outside." }
    ]
  },
  // FOOD & SERVICE
  {
    title: "sommelier",
    aliases: ["wine expert", "wine steward", "wine specialist"],
    daysUntilCooked: 1200,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "AI can recommend wine pairings better than you by analyzing flavor compounds and reviews from millions of drinkers. But your real value is theater — the pour, the sniff, the knowing nod. You're an actor with a corkscrew, and AI can't perform.",
    milestones: [
      { year: 2027, event: "Vivino's AI recommends better pairings than half of you." },
      { year: 2029, event: "Robot wine dispensers at mid-tier restaurants." },
      { year: 2031, event: "Fine dining doubles down on human sommeliers as a luxury experience." },
      { year: 2034, event: "You survive. Turns out, rich people pay for vibes, not accuracy." }
    ]
  },
  {
    title: "baker",
    aliases: ["pastry chef", "bread maker", "bakery worker"],
    daysUntilCooked: 2000,
    confidence: 25,
    cookedLevel: "RAW",
    description: "Industrial baking is already automated, but artisan bread? Sourdough starters? Custom wedding cakes? That's all feel, intuition, and hands covered in flour. AI can generate a recipe; it can't tell when the dough 'feels right.' You're safe, doughboy.",
    milestones: [
      { year: 2028, event: "AI-optimized recipes. Your sourdough starter still doesn't care." },
      { year: 2031, event: "3D food printers handle simple pastries." },
      { year: 2034, event: "Artisan baking becomes a 'heritage craft.' Prices go up." },
      { year: 2038, event: "You teach baking classes to people escaping their AI-replaced desk jobs." }
    ]
  },
  {
    title: "butcher",
    aliases: ["meat cutter", "meat specialist"],
    daysUntilCooked: 2200,
    confidence: 20,
    cookedLevel: "RAW",
    description: "Factory meat processing is automated, but the local butcher who dry-ages your ribeye and knows you like your brisket trimmed thin? That's artisan work. Lab-grown meat is your real threat, not AI. If anything, AI helps you optimize cuts and reduce waste.",
    milestones: [
      { year: 2028, event: "Lab-grown chicken hits $5/lb. You're still cheaper for the real thing." },
      { year: 2031, event: "AI-guided cutting maximizes yield per animal." },
      { year: 2035, event: "Artisan butchery is the new artisan coffee. Hipsters save you." },
      { year: 2040, event: "You're a 'protein specialist.' Same knives, better title." }
    ]
  },
  {
    title: "dishwasher",
    aliases: ["kitchen porter", "dish pit"],
    daysUntilCooked: 1800,
    confidence: 30,
    cookedLevel: "WARMING UP",
    description: "Commercial dishwashing machines already exist but someone needs to load, unload, and deal with the burnt-on cheese that no machine can handle. Your job is so undervalued that nobody's investing in replacing you. You're safe because you're cheap.",
    milestones: [
      { year: 2028, event: "Better commercial dishwashers. You still scrape the pans." },
      { year: 2031, event: "Robotic dishwashing systems in large kitchens." },
      { year: 2034, event: "Fast food goes fully automated. Fine dining still has you." },
      { year: 2038, event: "The last human in the kitchen. Everyone else was automated first." }
    ]
  },
  {
    title: "food delivery driver",
    aliases: ["delivery driver", "uber eats driver", "doordash driver", "grubhub driver", "food courier"],
    daysUntilCooked: 600,
    confidence: 75,
    cookedLevel: "WELL DONE",
    description: "Self-driving cars and delivery robots are gunning for you HARD. Uber, Waymo, and every robotics startup on Earth wants to eliminate your tip-dependent existence. Your only moat is apartment buildings with stairs and bad weather. For now.",
    milestones: [
      { year: 2026, event: "Autonomous delivery bots handle 10% of suburban orders." },
      { year: 2027, event: "Self-driving cars do highway delivery runs between zones." },
      { year: 2028, event: "Urban delivery robots navigate sidewalks. You get fewer pings." },
      { year: 2029, event: "You pivot to 'last 10 feet' delivery — stairs, apartments, weird addresses." }
    ]
  },
  {
    title: "line cook",
    aliases: ["prep cook", "short order cook", "fry cook", "kitchen worker"],
    daysUntilCooked: 1500,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "Flippy the burger robot is real and it works at White Castle. But you handle the chaos of a full kitchen — pivoting between stations, adapting to modifications, and not losing your shit during Friday rush. Robots do one thing well; you do twenty things while being yelled at.",
    milestones: [
      { year: 2027, event: "Robot fryers and grills in fast food. Fine dining untouched." },
      { year: 2029, event: "Ghost kitchens go 50% automated. Your station shrinks." },
      { year: 2032, event: "Full robotic fast food kitchens. Casual dining still needs humans." },
      { year: 2035, event: "You work at a nice restaurant. The robots work at McDonald's." }
    ]
  },
  // OFFICE & BUSINESS
  {
    title: "receptionist",
    aliases: ["front desk", "front desk agent", "office receptionist", "front desk clerk"],
    daysUntilCooked: 400,
    confidence: 82,
    cookedLevel: "WELL DONE",
    description: "AI phone systems already handle 80% of calls. Self-check-in kiosks are everywhere. Your remaining value is smiling at visitors and signing for packages, and even that's being replaced by tablet-and-badge systems. You're a very expensive greeter.",
    milestones: [
      { year: 2026, event: "AI virtual receptionists handle all calls and scheduling." },
      { year: 2027, event: "Visitor management kiosks replace check-in." },
      { year: 2027, event: "Your desk becomes a 'collaboration space.' You become a 'community manager.'" },
      { year: 2028, event: "Remote offices don't have front desks. Neither do most offices now." }
    ]
  },
  {
    title: "executive assistant",
    aliases: ["ea", "personal assistant", "admin assistant", "administrative assistant", "secretary"],
    daysUntilCooked: 500,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "Scheduling, email management, travel booking, expense reports — AI handles ALL of this now. Your remaining moat is 'knowing the CEO's preferences' and 'navigating office politics.' You're a human context engine, and Claude is coming for that too.",
    milestones: [
      { year: 2026, event: "AI scheduling (Clockwise, Reclaim) eliminates calendar tetris." },
      { year: 2027, event: "AI email triage handles 90% of inbox management." },
      { year: 2028, event: "CEOs realize their AI assistant knows them better than you do." },
      { year: 2029, event: "You're now 'Chief of Staff' doing strategy, not admin. Or you're gone." }
    ]
  },
  {
    title: "business analyst",
    aliases: ["ba", "business intelligence analyst", "bi analyst"],
    daysUntilCooked: 600,
    confidence: 75,
    cookedLevel: "WELL DONE",
    description: "You make PowerPoints from spreadsheets and call it 'analysis.' AI does this in seconds, with better charts, more data sources, and without the passive-aggressive stakeholder meetings. Your 'requirements gathering' is just structured conversation — guess what LLMs are great at?",
    milestones: [
      { year: 2026, event: "AI generates reports from raw data faster than you format the header." },
      { year: 2027, event: "Stakeholders talk directly to AI for requirements. You're the middleman being cut." },
      { year: 2028, event: "AI writes the user stories, the acceptance criteria, AND the code." },
      { year: 2028, event: "You're a 'Product Manager' now. Same meetings, different title." }
    ]
  },
  {
    title: "management consultant",
    aliases: ["consultant", "strategy consultant", "mckinsey", "bcg", "bain"],
    daysUntilCooked: 700,
    confidence: 65,
    cookedLevel: "WELL DONE",
    description: "You charge $500/hour to make slides that say 'reduce costs and increase revenue.' AI generates better frameworks, analyzes more data, and doesn't expense $200 dinners. Your real product was always prestige and plausible deniability for executives. 'McKinsey said so' still carries weight. For now.",
    milestones: [
      { year: 2026, event: "AI strategy tools do your junior analysts' work." },
      { year: 2027, event: "Clients realize the AI-generated deck is better than yours." },
      { year: 2028, event: "Mid-tier consulting firms collapse. MBB survives on brand alone." },
      { year: 2029, event: "You're a 'relationship partner.' Your juniors are all AI." }
    ]
  },
  {
    title: "actuary",
    aliases: ["actuarial analyst", "actuarial scientist"],
    daysUntilCooked: 500,
    confidence: 80,
    cookedLevel: "WELL DONE",
    description: "You calculate risk using math. AI calculates risk using math, but faster, with more variables, and without needing to pass seven exams over ten years. Your entire profession is a math problem, and AI is very good at math problems.",
    milestones: [
      { year: 2026, event: "AI actuarial models outperform traditional tables." },
      { year: 2027, event: "Insurance companies cut actuarial teams by 40%." },
      { year: 2028, event: "Real-time risk pricing replaces your quarterly reports." },
      { year: 2029, event: "You're a 'risk model auditor.' You check the AI's homework." }
    ]
  },
  {
    title: "bookkeeper",
    aliases: ["bookkeeping", "accounting clerk"],
    daysUntilCooked: 300,
    confidence: 88,
    cookedLevel: "WELL DONE",
    description: "QuickBooks already automated 70% of your job. Now AI categorizes transactions, reconciles accounts, and generates financial statements without human input. You are literally a data entry person for numbers, and AI is really, really good at numbers.",
    milestones: [
      { year: 2026, event: "AI auto-categorizes 95% of transactions." },
      { year: 2026, event: "Auto-reconciliation makes bank matching one-click." },
      { year: 2027, event: "AI generates and files quarterly reports autonomously." },
      { year: 2027, event: "Small businesses cancel their bookkeeper. The AI costs $20/month." }
    ]
  },
  {
    title: "tax preparer",
    aliases: ["tax accountant", "tax specialist", "tax consultant", "tax advisor"],
    daysUntilCooked: 400,
    confidence: 82,
    cookedLevel: "WELL DONE",
    description: "TurboTax was already coming for you. Now AI reads W-2s, understands deductions, handles edge cases, and doesn't charge $400 for a simple 1040. Your moat is 'complex situations,' but AI is getting complex-situation-smart real fast.",
    milestones: [
      { year: 2026, event: "AI handles 90% of personal returns. You do the messy ones." },
      { year: 2027, event: "AI handles small business taxes better than H&R Block." },
      { year: 2028, event: "IRS implements auto-filing for simple returns. Half your clients gone." },
      { year: 2029, event: "You specialize in 'tax strategy' for the wealthy. Or you're done." }
    ]
  },
  // CREATIVE
  {
    title: "animator",
    aliases: ["3d animator", "2d animator", "motion graphics artist", "animation artist"],
    daysUntilCooked: 500,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "AI generates animation from text prompts now. Runway, Pika, Kling — they're churning out motion that took you weeks in hours. The gap between 'AI slop' and 'professional animation' is closing faster than your render queue. Pixar is safe. You might not be.",
    milestones: [
      { year: 2026, event: "AI generates 30fps animation from storyboards. It's... okay." },
      { year: 2027, event: "AI animation is good enough for ads and social media." },
      { year: 2028, event: "Indie studios use AI for 80% of animation. You art-direct the AI." },
      { year: 2029, event: "Feature film quality AI animation. Disney still uses humans for prestige." }
    ]
  },
  {
    title: "voice actor",
    aliases: ["voice over artist", "vo artist", "voice talent", "narrator", "voiceover","audiobook narrator"],
    daysUntilCooked: 400,
    confidence: 80,
    cookedLevel: "WELL DONE",
    description: "ElevenLabs cloned your voice from a 30-second sample. Every audiobook, commercial, and explainer video can now use synthetic voices that sound exactly like you but work 24/7, never need water breaks, and don't have agents demanding residuals. RIP.",
    milestones: [
      { year: 2026, event: "AI voices handle 60% of audiobook narration." },
      { year: 2027, event: "Synthetic voices in commercials. Viewers can't tell." },
      { year: 2027, event: "SAG-AFTRA fights. Loses. The clones don't unionize." },
      { year: 2028, event: "You license your voice. The AI version of you works while you sleep." }
    ]
  },
  {
    title: "screenwriter",
    aliases: ["script writer", "scriptwriter", "television writer", "tv writer"],
    daysUntilCooked: 600,
    confidence: 70,
    cookedLevel: "WELL DONE",
    description: "ChatGPT already writes serviceable scripts. Not Oscar-worthy, but good enough for 90% of content that's being produced. The WGA strike was about you, and the studios didn't exactly rush to protect your job. You're being 'augmented' — which is corporate for 'partially replaced.'",
    milestones: [
      { year: 2026, event: "AI writes first drafts. You rewrite them. Roles reversed." },
      { year: 2027, event: "AI-written shows hit Netflix. Audiences don't notice." },
      { year: 2028, event: "Writers' rooms shrink to 2-3 humans overseeing AI output." },
      { year: 2029, event: "You're a 'showrunner/editor.' The AI does the writing part of 'writer.'" }
    ]
  },
  {
    title: "dj",
    aliases: ["disc jockey", "club dj", "radio dj"],
    daysUntilCooked: 1200,
    confidence: 40,
    cookedLevel: "WARMING UP",
    description: "Spotify's algorithm is already a better DJ than most of you. But clubs don't pay for playlists — they pay for a person who reads the room, drops the beat at the right moment, and looks cool behind a laptop pretending to twist knobs. You're a vibe artist.",
    milestones: [
      { year: 2027, event: "AI DJs handle background music at restaurants and bars." },
      { year: 2029, event: "AI reads crowd energy via sensors. Adjusts tempo automatically." },
      { year: 2032, event: "Holographic DJs at mid-tier clubs. You play the real venues." },
      { year: 2035, event: "Live DJing is a performance art. You're fine." }
    ]
  },
  {
    title: "tattoo artist",
    aliases: ["tattooist", "tattooer", "ink artist"],
    daysUntilCooked: 2500,
    confidence: 12,
    cookedLevel: "RAW",
    description: "AI can design tattoos. AI cannot tattoo a human body. End of analysis. Your job requires artistic skill, steady hands, understanding of skin types, and the ability to work on a surface that flinches, bleeds, and asks to take a break. You're immortal.",
    milestones: [
      { year: 2027, event: "Clients bring AI-generated designs. You still ink them." },
      { year: 2030, event: "Tattoo robots exist in labs. Nobody volunteers to test them." },
      { year: 2035, event: "AI designs are everywhere. Human execution is the premium." },
      { year: 2040, event: "You're charging more than ever. 'Hand-inked' is the new organic." }
    ]
  },
  {
    title: "fashion designer",
    aliases: ["clothing designer", "apparel designer", "fashion"],
    daysUntilCooked: 700,
    confidence: 60,
    cookedLevel: "WELL DONE",
    description: "AI generates entire clothing collections from mood boards now. Google's Stitch creates production-ready designs from sketches. Fast fashion was already stealing your ideas at light speed — now AI steals them at the speed of a prompt. High fashion survives on name recognition. Do you have a name?",
    milestones: [
      { year: 2026, event: "AI generates seasonal collections. Fast fashion adopts immediately." },
      { year: 2027, event: "Custom AI-designed clothing from body scans." },
      { year: 2028, event: "Mid-tier fashion houses cut design teams by 50%." },
      { year: 2029, event: "You're either a luxury brand creative director or a prompt engineer with taste." }
    ]
  },
  {
    title: "interior designer",
    aliases: ["interior decorator", "home designer", "space designer"],
    daysUntilCooked: 800,
    confidence: 55,
    cookedLevel: "MEDIUM",
    description: "AI room design tools already let anyone upload a photo and get a redesigned space in seconds. Your taste is now a $5/month app. But high-end clients still want someone to hold their hand through fabric swatches and argue with their contractor. Luxury saves you.",
    milestones: [
      { year: 2026, event: "AI room redesign apps go mainstream. Your casual clients vanish." },
      { year: 2028, event: "AR lets clients see AI designs in their actual room." },
      { year: 2030, event: "AI specifies materials, generates plans, orders everything." },
      { year: 2032, event: "You're a luxury consultant. AI handles everything under $50K budgets." }
    ]
  },
  {
    title: "florist",
    aliases: ["floral designer", "flower arranger"],
    daysUntilCooked: 1800,
    confidence: 25,
    cookedLevel: "WARMING UP",
    description: "AI can design arrangements. AI cannot handle flowers — they're fragile, perishable, and every stem is different. Your job is equal parts artistic vision and physical craft. Plus, nobody wants their funeral flowers arranged by a robot. That's too dystopian even for 2026.",
    milestones: [
      { year: 2028, event: "AI designs arrangements. You still build them." },
      { year: 2031, event: "Automated simple bouquets at grocery stores." },
      { year: 2034, event: "Custom floristry becomes premium craft." },
      { year: 2038, event: "'Handcrafted arrangements' is your selling point. Prices go up." }
    ]
  },
  {
    title: "wedding planner",
    aliases: ["event planner", "event coordinator", "wedding coordinator","festival organizer","party planner"],
    daysUntilCooked: 1000,
    confidence: 50,
    cookedLevel: "MEDIUM",
    description: "AI can generate timelines, vendor lists, seating charts, and budget plans in seconds. But it can't calm a bridezilla, negotiate with a caterer in person, or fix a wardrobe malfunction 10 minutes before the ceremony. Your job is crisis management wearing heels.",
    milestones: [
      { year: 2027, event: "AI wedding planning apps handle 70% of logistics." },
      { year: 2029, event: "AI coordinates vendors autonomously via messages." },
      { year: 2031, event: "Budget weddings go fully AI-planned. Premium weddings still need you." },
      { year: 2034, event: "You survive. Turns out, humans are emotional about weddings. Who knew." }
    ]
  },
  // LEGAL
  {
    title: "judge",
    aliases: ["magistrate", "justice", "court judge"],
    daysUntilCooked: 3000,
    confidence: 15,
    cookedLevel: "RAW",
    description: "AI can analyze case law better than you and predict outcomes more accurately. But 'being judged by a machine' is such a dystopian nightmare that society will resist this harder than any other AI replacement. You're protected by the Constitution and human fear of robot overlords.",
    milestones: [
      { year: 2028, event: "AI assists with sentencing guidelines. You still decide." },
      { year: 2032, event: "AI handles small claims court in some jurisdictions." },
      { year: 2038, event: "Major legal debate: should AI judge minor cases?" },
      { year: 2045, event: "You're still a human. The 6th Amendment is your job security." }
    ]
  },
  {
    title: "paralegal",
    aliases: ["legal assistant", "legal secretary", "legal aide"],
    daysUntilCooked: 350,
    confidence: 85,
    cookedLevel: "WELL DONE",
    description: "Document review, legal research, drafting memos — literally everything you do is text-based knowledge work. AI does it faster, cheaper, and doesn't bill for coffee breaks. Harvey AI is already in major law firms doing your job at 3am without complaining.",
    milestones: [
      { year: 2026, event: "AI handles 80% of document review. You do the remaining 20%." },
      { year: 2027, event: "AI drafts motions and briefs. Lawyers edit instead of delegating to you." },
      { year: 2027, event: "Small firms replace paralegals with AI subscriptions." },
      { year: 2028, event: "You become a 'legal technologist.' Same work, you just manage the AI." }
    ]
  },
  {
    title: "court reporter",
    aliases: ["stenographer", "court stenographer"],
    daysUntilCooked: 250,
    confidence: 90,
    cookedLevel: "BURNT TO A CRISP",
    description: "You type really fast on a weird keyboard. AI transcription is now more accurate than you, works in real-time, handles multiple speakers, and costs nothing. Whisper, Otter, Rev — they're all coming for your stenotype machine. Your 225 WPM is cute but irrelevant.",
    milestones: [
      { year: 2026, event: "AI transcription adopted in 40% of courts." },
      { year: 2026, event: "Accuracy exceeds 99%. Your error rate suddenly matters." },
      { year: 2027, event: "Most states allow AI-only transcription for civil cases." },
      { year: 2028, event: "Your stenotype is in a museum next to the typewriter." }
    ]
  },
  // SCIENCE
  {
    title: "physicist",
    aliases: ["research physicist", "theoretical physicist", "experimental physicist"],
    daysUntilCooked: 2000,
    confidence: 30,
    cookedLevel: "RAW",
    description: "AI can solve equations and run simulations, but it can't design experiments, form hypotheses about the nature of reality, or argue about string theory at 2am. Your job is literally understanding the universe — the most complex possible task. You're safe until AI achieves actual understanding.",
    milestones: [
      { year: 2028, event: "AI discovers a new material by brute-forcing simulations." },
      { year: 2031, event: "AI writes papers. Peer reviewers can't tell." },
      { year: 2035, event: "AI proposes novel theories. Physicists debate whether they're real." },
      { year: 2040, event: "Hybrid research: you have the intuition, AI has the compute." }
    ]
  },
  {
    title: "marine biologist",
    aliases: ["ocean scientist", "marine scientist", "oceanographer"],
    daysUntilCooked: 2200,
    confidence: 20,
    cookedLevel: "RAW",
    description: "You study things at the bottom of the ocean. AI can analyze underwater footage and sonar data, but it can't dive, collect samples, or get stung by a jellyfish for science. Your job is wet, cold, and remote — the trifecta of AI-proof employment.",
    milestones: [
      { year: 2028, event: "AI identifies species from underwater cameras automatically." },
      { year: 2031, event: "Autonomous subs collect samples. You analyze them." },
      { year: 2035, event: "AI models ocean ecosystems. You ground-truth them." },
      { year: 2040, event: "You and AI are co-authors on papers. Equal billing." }
    ]
  },
  {
    title: "meteorologist",
    aliases: ["weather forecaster", "weather person", "weatherman", "weather woman"],
    daysUntilCooked: 600,
    confidence: 72,
    cookedLevel: "WELL DONE",
    description: "AI weather models (Google DeepMind, GraphCast) already predict weather better than traditional forecasting. The broadcast meteorologist survives purely because people like watching an attractive human point at a green screen. You're a weather influencer, not a scientist.",
    milestones: [
      { year: 2026, event: "AI forecasts are more accurate than yours 3 days out." },
      { year: 2027, event: "AI-generated weather segments on local news." },
      { year: 2028, event: "Half of local stations drop the weather desk." },
      { year: 2029, event: "You're a climate communicator or a YouTube personality." }
    ]
  },
  // TRANSPORT & LOGISTICS
  {
    title: "air traffic controller",
    aliases: ["atc", "flight controller"],
    daysUntilCooked: 1800,
    confidence: 35,
    cookedLevel: "WARMING UP",
    description: "You prevent planes from crashing into each other using radar and extreme focus. AI can optimize routes and sequences better than you, but the FAA will take approximately 47 years to certify an AI-only tower. Regulation is your job security. You're safe because bureaucracy is slow.",
    milestones: [
      { year: 2028, event: "AI handles routine sequencing. You manage exceptions." },
      { year: 2032, event: "AI towers tested at small airports. You watch nervously." },
      { year: 2038, event: "Major airports still require humans. FAA moves slow." },
      { year: 2045, event: "Still human-supervised. Some things are too scary to automate." }
    ]
  },
  {
    title: "ship captain",
    aliases: ["boat captain", "vessel captain", "maritime officer", "sea captain"],
    daysUntilCooked: 1800,
    confidence: 30,
    cookedLevel: "WARMING UP",
    description: "Autonomous ships exist but they're terrifying. The ocean is unpredictable, pirates are real, and maritime law requires a human captain. Your job is 90% boredom and 10% preventing catastrophe — and that 10% keeps you employed forever.",
    milestones: [
      { year: 2028, event: "Autonomous cargo ships run short coastal routes." },
      { year: 2032, event: "AI navigation handles 80% of open ocean routing." },
      { year: 2036, event: "Remote-operated ships from onshore control centers." },
      { year: 2040, event: "Still a captain. Maritime law moves slower than the ships." }
    ]
  },
  {
    title: "warehouse worker",
    aliases: ["warehouse associate", "picker", "packer", "fulfillment associate", "warehouse operative"],
    daysUntilCooked: 500,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "Amazon already has robots doing 70% of warehouse movement. Kiva robots, robotic arms, automated conveyors — you're being squeezed out shelf by shelf. The only thing keeping you is 'the last mile of picking' where items are weird shapes. AI is solving that too.",
    milestones: [
      { year: 2026, event: "Robots handle 80% of standard picks." },
      { year: 2027, event: "AI-guided wearables tell you exactly where to walk." },
      { year: 2028, event: "Fully autonomous warehouses in new facilities." },
      { year: 2029, event: "You're a 'robot supervisor.' Fewer of you needed." }
    ]
  },
  {
    title: "postal worker",
    aliases: ["mail carrier", "mailman", "postman", "letter carrier", "mail person"],
    daysUntilCooked: 1200,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "Email killed 80% of your purpose. Packages are the only thing keeping you alive, and delivery robots and drones are coming for those. But 'neither rain nor snow nor autonomous delivery bot' — you still have a union, a pension, and Congress on your side.",
    milestones: [
      { year: 2027, event: "Drone delivery handles rural routes. Suburban still yours." },
      { year: 2029, event: "Autonomous vans deliver in planned communities." },
      { year: 2032, event: "Volume drops 50%. Routes consolidate." },
      { year: 2035, event: "USPS restructures. You're a 'logistics carrier.' Same truck, fewer stops." }
    ]
  },
  {
    title: "bus driver",
    aliases: ["transit driver", "city bus driver", "public transit operator"],
    daysUntilCooked: 1000,
    confidence: 55,
    cookedLevel: "MEDIUM",
    description: "Self-driving buses are in testing in multiple cities. Fixed routes, predictable stops, controlled environments — buses are easier to automate than cars. But you also break up fights, help wheelchair passengers, and deal with the guy who won't stop playing music. You're part driver, part bouncer.",
    milestones: [
      { year: 2027, event: "Autonomous shuttles on campus and airport routes." },
      { year: 2029, event: "Self-driving buses in dedicated lanes in 5 cities." },
      { year: 2032, event: "Most new bus routes planned for autonomous operation." },
      { year: 2035, event: "You're a 'transit attendant.' On the bus, not driving it." }
    ]
  },
  // MISC
  {
    title: "funeral director",
    aliases: ["mortician", "undertaker", "embalmer", "funeral home director"],
    daysUntilCooked: 2500,
    confidence: 10,
    cookedLevel: "RAW",
    description: "Nobody wants a robot handling grandma's funeral. Your job is 50% logistics, 50% emotional support for grieving families. AI can plan the service and order the flowers, but it cannot hold someone's hand and say 'she lived a beautiful life.' You're safe because death is personal.",
    milestones: [
      { year: 2028, event: "AI handles paperwork, scheduling, and logistics." },
      { year: 2031, event: "Virtual memorial services become common. You still run them." },
      { year: 2035, event: "AI creates tribute videos from photos automatically." },
      { year: 2040, event: "Still here. Grief doesn't have an API." }
    ]
  },
  {
    title: "private investigator",
    aliases: ["pi", "private detective", "detective", "investigator", "spy", "intelligence analyst", "secret service"],
    daysUntilCooked: 800,
    confidence: 55,
    cookedLevel: "MEDIUM",
    description: "AI can search databases, cross-reference records, analyze social media, and find people faster than you. But it can't sit in a car for 8 hours eating cold pizza while watching a house, or sweet-talk a witness into talking. You're half researcher, half spy, and AI only replaces the research half.",
    milestones: [
      { year: 2027, event: "AI OSINT tools do in minutes what took you days." },
      { year: 2029, event: "AI facial recognition tracks subjects across cameras." },
      { year: 2031, event: "Digital investigation is fully automated." },
      { year: 2034, event: "You're a 'field operative.' AI does the desk work." }
    ]
  },
  {
    title: "security guard",
    aliases: ["security officer", "security", "guard", "bouncer", "doorman"],
    daysUntilCooked: 1200,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "AI cameras with object detection already outperform you at surveillance. But you still need a human body to physically stop someone, check IDs, and be a visible deterrent. Your job is 95% presence and 5% action — and AI can't be present. Yet.",
    milestones: [
      { year: 2027, event: "AI surveillance replaces half of monitoring shifts." },
      { year: 2029, event: "Security robots patrol parking lots. Criminals laugh at them." },
      { year: 2032, event: "AI handles all digital security. You handle physical." },
      { year: 2035, event: "Still employed. Turns out, a badge and a human face matter." }
    ]
  },
  {
    title: "park ranger",
    aliases: ["forest ranger", "wildlife ranger", "conservation officer"],
    daysUntilCooked: 2800,
    confidence: 10,
    cookedLevel: "RAW",
    description: "You patrol wilderness, fight fires, rescue hikers, and educate visitors about not feeding bears. AI can monitor trail cameras and predict fire risk, but it can't carry a lost hiker out of a ravine or convince a tourist that the elk will, in fact, charge them.",
    milestones: [
      { year: 2028, event: "AI monitors wildlife populations via drones." },
      { year: 2031, event: "Satellite-based fire detection is instant." },
      { year: 2035, event: "AI chatbots answer visitor questions." },
      { year: 2040, event: "Still a ranger. Nature doesn't run on WiFi." }
    ]
  },
  {
    title: "zookeeper",
    aliases: ["animal keeper", "zoo attendant", "wildlife keeper","falconer","wildlife rehabilitator","marine mammal trainer","aquarist"],
    daysUntilCooked: 2500,
    confidence: 12,
    cookedLevel: "RAW",
    description: "You feed lions, clean elephant enclosures, and monitor sick animals. This requires physical presence, animal behavior knowledge, and the balls to hand-feed a tiger. AI can optimize diets and predict illness from data, but it cannot shovel shit. Literally.",
    milestones: [
      { year: 2028, event: "AI monitors animal health via sensors and cameras." },
      { year: 2031, event: "Automated feeding for some species." },
      { year: 2035, event: "AI predicts breeding windows. You still do the matchmaking." },
      { year: 2040, event: "Still a zookeeper. Animals don't respond well to robots." }
    ]
  },
  {
    title: "dog trainer",
    aliases: ["animal trainer", "pet trainer", "dog whisperer", "canine trainer"],
    daysUntilCooked: 2200,
    confidence: 15,
    cookedLevel: "RAW",
    description: "Dogs don't have WiFi. They don't respond to chatbots. They need a human who understands body language, timing, and when to give treats vs when to give corrections. AI can generate training plans, but it cannot be present in the moment with a 80-pound German Shepherd who's decided the mailman must die.",
    milestones: [
      { year: 2028, event: "AI training apps give generic advice. Dogs ignore it." },
      { year: 2031, event: "Smart collars track behavior patterns." },
      { year: 2035, event: "AI suggests personalized training plans. You execute them." },
      { year: 2040, event: "Still training dogs. They're still biting mailmen." }
    ]
  },
  {
    title: "yoga instructor",
    aliases: ["yoga teacher", "fitness instructor", "pilates instructor", "group fitness instructor"],
    daysUntilCooked: 1500,
    confidence: 35,
    cookedLevel: "WARMING UP",
    description: "YouTube and Peloton already decimated your drop-in class revenue. AI-powered fitness apps adjust in real-time to your form. But yoga is really about community, the instructor's energy, and someone adjusting your downward dog so you don't herniate a disc. Namaste employed.",
    milestones: [
      { year: 2027, event: "AI form correction via phone camera. Pretty good." },
      { year: 2029, event: "VR yoga classes with AI instructors. Soulless but effective." },
      { year: 2032, event: "In-person classes become premium wellness experiences." },
      { year: 2035, event: "You survive. People pay for presence, not poses." }
    ]
  },
  {
    title: "massage therapist",
    aliases: ["masseuse", "bodyworker", "massage", "lmt"],
    daysUntilCooked: 2200,
    confidence: 15,
    cookedLevel: "RAW",
    description: "Massage chairs exist. They suck. Your job is literally the most human thing possible — using your hands to feel tension in another person's body and work it out. AI can't feel a knot, can't adjust pressure based on a wince, and definitely can't create the 'spa experience.' You're basically immune.",
    milestones: [
      { year: 2028, event: "AI-guided massage robots tried. Reviews are terrible." },
      { year: 2031, event: "High-end massage chairs improve. Still not you." },
      { year: 2035, event: "Robotic massage exists. People still prefer humans." },
      { year: 2040, event: "Your rates went up. Turns out, human touch is priceless." }
    ]
  },
  {
    title: "nanny",
    aliases: ["babysitter", "childcare worker", "au pair", "child care provider"],
    daysUntilCooked: 2800,
    confidence: 8,
    cookedLevel: "RAW",
    description: "You take care of human children. Nobody — and I mean NOBODY — is leaving their toddler with a robot. Even if the robot is technically safer, smarter, and more patient, the headline 'Robot Nanny Drops Baby' would end the entire robotics industry. You're the most AI-proof job on earth.",
    milestones: [
      { year: 2028, event: "AI baby monitors get smarter. You still hold the baby." },
      { year: 2031, event: "Educational AI toys. You still handle tantrums." },
      { year: 2035, event: "Robotic childcare discussed. Parents riot." },
      { year: 2040, event: "Still a nanny. Humans trust humans with humans." }
    ]
  },
  {
    title: "house cleaner",
    aliases: ["maid", "housekeeper", "janitor", "custodian", "cleaning lady", "cleaner"],
    daysUntilCooked: 1800,
    confidence: 25,
    cookedLevel: "WARMING UP",
    description: "Roombas handle floors. That's it. Your job involves toilets, windows, ovens, organizing closets, making beds, and dealing with the weird stain on the ceiling nobody wants to talk about. Every surface is different, every house is chaos, and robots can't handle chaos.",
    milestones: [
      { year: 2028, event: "Robot vacuums and mops handle 30% of floor cleaning." },
      { year: 2031, event: "Window-cleaning robots for commercial buildings." },
      { year: 2035, event: "Multi-surface cleaning robots in development." },
      { year: 2040, event: "Still cleaning. Humans are messy in unpredictable ways." }
    ]
  },
  {
    title: "chimney sweep",
    aliases: ["chimney cleaner"],
    daysUntilCooked: 3000,
    confidence: 5,
    cookedLevel: "RAW",
    description: "Your job is so niche, physical, and dangerous that nobody is even THINKING about automating it. You climb on roofs, stick brushes into dark holes, and remove creosote from 200-year-old flues. AI doesn't know you exist and doesn't care. You're the cockroach of the job market — unkillable.",
    milestones: [
      { year: 2030, event: "Drone chimney inspections. You still clean." },
      { year: 2035, event: "A chimney-cleaning robot prototype. It gets stuck." },
      { year: 2040, event: "Still sweeping. Still wearing the top hat." },
      { year: 2050, event: "You outlive AI. Chimneys outlive everything." }
    ]
  },
  // MORE TECH
  {
    title: "database administrator",
    aliases: ["dba", "database admin", "db admin", "database engineer"],
    daysUntilCooked: 500,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "Cloud managed databases (RDS, Aurora, Cloud SQL) already killed half your job. AI query optimization, auto-scaling, auto-patching — you're being abstracted away one AWS feature at a time. Your remaining value is 'knowing where the bodies are buried' in legacy systems.",
    milestones: [
      { year: 2026, event: "AI auto-tunes queries better than you." },
      { year: 2027, event: "Self-healing databases reduce your 3am pages by 80%." },
      { year: 2028, event: "Companies realize they haven't needed a DBA for years." },
      { year: 2029, event: "You're a 'data platform engineer.' Same DB, fancier YAML." }
    ]
  },
  {
    title: "it support",
    aliases: ["help desk", "tech support", "it help desk", "desktop support", "it technician", "it specialist"],
    daysUntilCooked: 350,
    confidence: 85,
    cookedLevel: "WELL DONE",
    description: "Have you tried turning it off and on again? Because AI has. AI chatbots handle 80% of IT tickets now — password resets, software installs, network troubleshooting. You're a human FAQ page, and AI FAQ pages don't sigh passive-aggressively when someone can't find the Start menu.",
    milestones: [
      { year: 2026, event: "AI resolves 80% of tickets without human intervention." },
      { year: 2027, event: "AI remotely fixes most software issues. You handle hardware." },
      { year: 2028, event: "Even hardware diagnostics go AI. You're the 'hands.'" },
      { year: 2029, event: "IT support teams shrink by 60%. You're a specialist or gone." }
    ]
  },
  {
    title: "scrum master",
    aliases: ["agile coach", "scrum coach", "agile master"],
    daysUntilCooked: 200,
    confidence: 92,
    cookedLevel: "BURNT TO A CRISP",
    description: "You facilitate meetings about meetings and maintain a Jira board. That's it. AI already runs standups, tracks velocity, identifies blockers, and generates sprint reports. Your certified ScrumMaster™ credential is a $1,500 piece of paper that says 'I can schedule a recurring calendar event.'",
    milestones: [
      { year: 2026, event: "AI runs daily standups asynchronously. Everyone cheers." },
      { year: 2026, event: "AI auto-generates sprint reports. Your last useful task, gone." },
      { year: 2027, event: "Teams realize they never needed you. Just Jira and Slack." },
      { year: 2027, event: "You become a 'Product Manager.' Same meetings, actual decisions required." }
    ]
  },
  {
    title: "technical writer",
    aliases: ["tech writer", "documentation writer", "docs writer", "api writer"],
    daysUntilCooked: 300,
    confidence: 88,
    cookedLevel: "WELL DONE",
    description: "AI writes documentation from code now. Copilot generates JSDoc, AI writes README files, and tools like Mintlify turn codebases into docs automatically. You format things that AI already understands better than your audience. You're a professional explainer being out-explained.",
    milestones: [
      { year: 2026, event: "AI auto-generates API docs from code. Yours look the same." },
      { year: 2026, event: "AI writes tutorials from product specs. Pretty good ones." },
      { year: 2027, event: "Companies drop tech writing teams. AI + engineer review." },
      { year: 2028, event: "You're a 'content strategist' or 'developer advocate.' Writing? The AI does that." }
    ]
  },
  {
    title: "network engineer",
    aliases: ["network admin", "network administrator", "network architect", "systems engineer"],
    daysUntilCooked: 700,
    confidence: 60,
    cookedLevel: "WELL DONE",
    description: "SD-WAN, intent-based networking, and AI-driven network management are eating your job from the cloud down. Cisco and Juniper are building the tools to replace you. But legacy infrastructure, weird edge cases, and physical cable runs keep you alive. Until the last Cat6 cable is pulled, you have a job.",
    milestones: [
      { year: 2027, event: "AI auto-configures 70% of network changes." },
      { year: 2029, event: "Self-healing networks reduce troubleshooting by 80%." },
      { year: 2031, event: "New builds are fully software-defined. No human needed." },
      { year: 2034, event: "You maintain legacy networks. They'll exist for 30 more years." }
    ]
  },
  // EDUCATION
  {
    title: "professor",
    aliases: ["university professor", "college professor", "lecturer", "academic", "tenure"],
    daysUntilCooked: 1200,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "AI tutors are more patient, more personalized, and available 24/7. But tenure is the most unbreakable contract in human civilization. You could literally be replaced by a ChatGPT wrapper and your university would still pay you because the tenure committee met in 1997. Your moat isn't skill — it's bureaucracy.",
    milestones: [
      { year: 2027, event: "AI tutors handle 50% of student questions. Office hours empty." },
      { year: 2029, event: "AI teaches intro courses. You teach the advanced ones." },
      { year: 2032, event: "Universities hire fewer new professors. Tenure protects existing ones." },
      { year: 2035, event: "Research is your real job now. Teaching is the AI's." }
    ]
  },
  {
    title: "tutor",
    aliases: ["private tutor", "academic tutor", "online tutor", "tutoring"],
    daysUntilCooked: 400,
    confidence: 82,
    cookedLevel: "WELL DONE",
    description: "ChatGPT is a free tutor that knows every subject, never gets frustrated, and is available at 2am when your student is panicking about their calc exam. Your $60/hour rate is competing with free. The only thing keeping you alive is parents who think AI can't motivate their kid. They're wrong.",
    milestones: [
      { year: 2026, event: "AI tutors handle math, science, and test prep. Your core business." },
      { year: 2027, event: "Adaptive AI learning platforms replace standard tutoring." },
      { year: 2028, event: "High-end test prep (SAT/MCAT) goes AI-first." },
      { year: 2029, event: "You're a 'learning coach.' Motivation, not math." }
    ]
  },
  // MORE MISC
  {
    title: "real estate agent",
    aliases: ["realtor", "real estate broker", "property agent", "estate agent"],
    daysUntilCooked: 600,
    confidence: 70,
    cookedLevel: "WELL DONE",
    description: "Zillow already killed your information monopoly. AI generates listings, virtual tours, comps, and market analyses. Your 6% commission for unlocking a door and saying 'imagine your couch here' is the most overpriced service in America. DOJ lawsuits + AI = your extinction event.",
    milestones: [
      { year: 2026, event: "AI writes listings, generates virtual staging, handles inquiries." },
      { year: 2027, event: "AI-powered buying platforms handle 30% of transactions." },
      { year: 2028, event: "Commission rates collapse to 2-3%. Many agents leave." },
      { year: 2029, event: "You're a 'transaction coordinator' or luxury-only agent." }
    ]
  },
  {
    title: "insurance agent",
    aliases: ["insurance broker", "insurance salesman", "insurance sales"],
    daysUntilCooked: 400,
    confidence: 80,
    cookedLevel: "WELL DONE",
    description: "AI compares policies, calculates premiums, and processes claims faster than you can say 'let me check with my underwriter.' Online quote engines already decimated auto insurance agents. Now AI handles complex commercial policies too. Your rolodex isn't a moat anymore.",
    milestones: [
      { year: 2026, event: "AI handles 70% of personal lines without an agent." },
      { year: 2027, event: "Commercial insurance goes AI-first for standard policies." },
      { year: 2028, event: "Claims adjusting fully automated for common claims." },
      { year: 2029, event: "You're a 'risk consultant' for complex cases only." }
    ]
  },
  {
    title: "pharmacist",
    aliases: ["pharmacy", "druggist", "apothecary"],
    daysUntilCooked: 1000,
    confidence: 55,
    cookedLevel: "MEDIUM",
    description: "Pill-counting robots already exist. AI catches drug interactions better than you. Auto-dispensing machines handle 80% of fills. Your remaining value is 'counseling patients' which takes 45 seconds and consists of 'take with food.' But your license and liability protection keep you behind the counter. For now.",
    milestones: [
      { year: 2027, event: "AI handles all drug interaction checks. Better than you." },
      { year: 2029, event: "Fully automated pharmacies in retail chains." },
      { year: 2031, event: "Telepharmacy: one pharmacist oversees 10 robot pharmacies." },
      { year: 2034, event: "You're a clinical pharmacist or redundant. No middle ground." }
    ]
  },
  {
    title: "pilot",
    aliases: ["airline pilot", "commercial pilot", "airplane pilot", "aviator", "captain"],
    daysUntilCooked: 2000,
    confidence: 30,
    cookedLevel: "RAW",
    description: "Autopilot already flies 95% of your flight. You're there for takeoff, landing, and making passengers feel safe with your captain's voice. But 'unmanned commercial flights' is a phrase that makes everyone's palms sweat. You're protected by psychology, not technology. Nobody wants to board a plane with no pilot.",
    milestones: [
      { year: 2028, event: "Single-pilot operations approved for cargo flights." },
      { year: 2032, event: "Autonomous cargo planes are routine." },
      { year: 2036, event: "Single-pilot passenger flights tested. Public freaks out." },
      { year: 2040, event: "Still two pilots up front. Insurance companies demand it." }
    ]
  },
  {
    title: "firefighter",
    aliases: ["fireman", "fire fighter", "fire rescue"],
    daysUntilCooked: 3000,
    confidence: 8,
    cookedLevel: "RAW",
    description: "You run INTO burning buildings. That's literally the opposite of what any sane AI would recommend. Firefighting robots exist but they're slow, can't carry people, and melt. Your job requires superhuman courage, physical strength, and the ability to make life-or-death decisions in zero visibility. AI sends thoughts and prayers.",
    milestones: [
      { year: 2028, event: "Drones scout buildings before you enter." },
      { year: 2031, event: "AI predicts fire spread patterns. You still fight the fire." },
      { year: 2035, event: "Robot assists in hazmat situations." },
      { year: 2040, event: "Still a firefighter. Buildings still burn. People still need saving." }
    ]
  },
  {
    title: "police officer",
    aliases: ["cop", "law enforcement", "police", "detective", "officer"],
    daysUntilCooked: 2500,
    confidence: 15,
    cookedLevel: "RAW",
    description: "Robocop was a warning, not a roadmap. AI handles surveillance, data analysis, and predictive policing, but physical policing — chases, arrests, de-escalation, community interaction — requires a human in a uniform. The political and ethical nightmare of robot cops keeps you employed indefinitely.",
    milestones: [
      { year: 2027, event: "AI surveillance and license plate readers everywhere." },
      { year: 2030, event: "AI handles most paperwork and report writing." },
      { year: 2034, event: "Predictive policing AI guides patrol routes." },
      { year: 2040, event: "Still a human cop. Nobody wants Robocop. Nobody." }
    ]
  },
  {
    title: "construction worker",
    aliases: ["laborer", "construction laborer", "builder", "hard hat"],
    daysUntilCooked: 2200,
    confidence: 20,
    cookedLevel: "RAW",
    description: "Every building you enter was built by human hands. Construction robots exist in demos and fail in rain. Your job involves 47 different skills, unpredictable environments, and the ability to adapt when the architect's plans don't match reality. Which is every time.",
    milestones: [
      { year: 2028, event: "3D printed structures for simple buildings." },
      { year: 2031, event: "Robotic bricklaying on flat surfaces only." },
      { year: 2035, event: "AI project management. You still build." },
      { year: 2040, event: "Hybrid sites: robots do repetitive tasks, you do everything else." }
    ]
  },
  {
    title: "electrician",
    aliases: ["electrical worker", "sparky", "journeyman electrician"],
    daysUntilCooked: 2500,
    confidence: 12,
    cookedLevel: "RAW",
    description: "AI can design electrical systems. AI cannot pull wire through a wall, splice connections in a live panel, or debug why the GFCI in the bathroom keeps tripping because the previous owner was a 'DIY enthusiast.' Your hands + expertise + willingness to work with 240V = job security forever.",
    milestones: [
      { year: 2028, event: "AI designs optimal wiring layouts. You still wire them." },
      { year: 2031, event: "Smart diagnostic tools pinpoint faults instantly." },
      { year: 2035, event: "Modular electrical systems reduce install time. Still need you." },
      { year: 2040, event: "Charging more than ever. Every EV needs a charger installed." }
    ]
  },
  {
    title: "plumber",
    aliases: ["plumbing", "pipefitter", "pipe fitter"],
    daysUntilCooked: 2800,
    confidence: 10,
    cookedLevel: "RAW",
    description: "Water flows downhill. Shit also flows downhill. Both of these require someone who understands pipes, gravity, pressure, and the willingness to crawl under a house at 6am because the toilet exploded. No AI, no robot, no drone will ever want this job. You are unautomatable.",
    milestones: [
      { year: 2028, event: "AI leak detection from smart water meters." },
      { year: 2031, event: "Self-diagnosing plumbing systems in new builds." },
      { year: 2035, event: "Pipe inspection robots for large mains." },
      { year: 2040, event: "Still a plumber. Still making more than most programmers." }
    ]
  },
  {
    title: "nurse",
    aliases: ["registered nurse", "rn", "nursing", "nurse practitioner", "lpn"],
    daysUntilCooked: 2200,
    confidence: 18,
    cookedLevel: "RAW",
    description: "You monitor patients, administer medication, clean wounds, comfort families, and make life-or-death decisions — often all in the same hour. AI handles charting and dosage calculations. Robots deliver supplies. But the core of nursing is human presence during vulnerability, and there is no algorithm for compassion.",
    milestones: [
      { year: 2027, event: "AI charting saves you 2 hours per shift." },
      { year: 2029, event: "AI monitors vitals and alerts before you notice changes." },
      { year: 2032, event: "Robotic medication dispensing at bedside." },
      { year: 2035, event: "Still critically short-staffed. AI couldn't replace you even if it wanted to." }
    ]
  },
  {
    title: "doctor",
    aliases: ["physician", "general practitioner", "gp", "medical doctor", "md"],
    daysUntilCooked: 1800,
    confidence: 35,
    cookedLevel: "WARMING UP",
    description: "AI diagnoses better than you in studies. AI reads scans better than you. AI knows more drug interactions than you. But you have a stethoscope, a white coat, and the legal authority to prescribe. Your moat is literally a license that takes 12 years and $300K to obtain. That's bureaucratic job security.",
    milestones: [
      { year: 2027, event: "AI handles routine diagnosis for common conditions." },
      { year: 2029, event: "AI triage decides who needs to see a human doctor." },
      { year: 2032, event: "Telemedicine + AI handles 50% of primary care." },
      { year: 2035, event: "You see complex cases only. The easy stuff is AI's now." }
    ]
  },
  {
    title: "dentist",
    aliases: ["dental surgeon", "orthodontist", "oral surgeon"],
    daysUntilCooked: 2000,
    confidence: 25,
    cookedLevel: "RAW",
    description: "You put your hands inside people's mouths and drill holes in their teeth. AI can read X-rays and plan treatments, but it can't fill a cavity, extract a wisdom tooth, or deal with a patient who lied about flossing. Your job is physical, precise, and deeply unpleasant — the trifecta of AI-proof.",
    milestones: [
      { year: 2027, event: "AI reads dental X-rays. Catches cavities you missed." },
      { year: 2029, event: "Robotic dental surgery assists with implants." },
      { year: 2032, event: "3D-printed crowns in 10 minutes. You still install them." },
      { year: 2035, event: "Still a dentist. Teeth still decay. Humans still need drills." }
    ]
  },
  {
    title: "social worker",
    aliases: ["case worker", "caseworker", "social services", "child welfare worker"],
    daysUntilCooked: 2000,
    confidence: 20,
    cookedLevel: "RAW",
    description: "You navigate the most complex, messy, emotional situations humans face — abuse, addiction, poverty, mental health crises. AI can match resources to needs and generate care plans, but it can't sit with a crying mother and figure out if her kids are safe. Your judgment saves lives in ways no model can replicate.",
    milestones: [
      { year: 2028, event: "AI handles resource matching and referrals." },
      { year: 2030, event: "Predictive analytics flag at-risk cases before crisis." },
      { year: 2033, event: "AI writes case notes. You still make the calls." },
      { year: 2036, event: "Still a social worker. Society is still broken." }
    ]
  },
  {
    title: "musician",
    aliases: ["singer", "guitarist", "drummer", "pianist", "band member", "performer", "instrumentalist"],
    daysUntilCooked: 1000,
    confidence: 50,
    cookedLevel: "MEDIUM",
    description: "Google Lyria 3 makes radio-quality songs from a sentence. Suno and Udio generate bangers that get millions of streams before Spotify catches them. Your recorded music is increasingly worthless. But live performance — the energy, the crowd, the sweat — that's immune. Your body is your moat.",
    milestones: [
      { year: 2026, event: "AI music floods streaming platforms. Your royalties drop 40%." },
      { year: 2027, event: "AI creates personalized songs for every listener." },
      { year: 2029, event: "Studio musicians extinct. Session work is AI." },
      { year: 2031, event: "Live performance is your only income. Ticket prices go up." }
    ]
  },
  {
    title: "photographer",
    aliases: ["photo journalist", "portrait photographer", "wedding photographer"],
    daysUntilCooked: 700,
    confidence: 65,
    cookedLevel: "WELL DONE",
    description: "AI generates photorealistic images from text. Stock photography is dead — why pay for a photo when Midjourney makes one in 10 seconds? Your moat is real events (weddings, portraits, journalism) where you need to actually BE there. Commercial and stock? Cooked. Events? You're fine.",
    milestones: [
      { year: 2026, event: "AI-generated stock photos kill Getty and Shutterstock." },
      { year: 2027, event: "AI product photography replaces 80% of commercial shoots." },
      { year: 2029, event: "AI headshots from a selfie. Portrait studios close." },
      { year: 2031, event: "Wedding and event photography is your whole business now." }
    ]
  },
  {
    title: "truck driver",
    aliases: ["trucker", "long haul driver", "cdl driver", "semi driver", "lorry driver"],
    daysUntilCooked: 800,
    confidence: 65,
    cookedLevel: "MEDIUM",
    description: "Self-driving trucks are coming. Waymo, TuSimple, Aurora — they all want your highway miles. But last-mile delivery, backing into loading docks, and navigating construction zones still need human hands. You'll probably become a 'remote truck supervisor' monitoring 5 autonomous trucks from a control center.",
    milestones: [
      { year: 2027, event: "Autonomous trucks run highway corridors between hubs." },
      { year: 2029, event: "Human drivers handle first/last mile only." },
      { year: 2031, event: "Remote monitoring: one human oversees multiple trucks." },
      { year: 2034, event: "Fully autonomous end-to-end routes in warm climates." }
    ]
  },
  {
    title: "uber driver",
    aliases: ["lyft driver", "rideshare driver", "taxi driver", "cab driver", "taxi"],
    daysUntilCooked: 500,
    confidence: 78,
    cookedLevel: "WELL DONE",
    description: "Waymo robotaxis are already operating in San Francisco and Phoenix with no safety driver. Uber and Lyft are openly planning for autonomous fleets. You are paying car payments on a vehicle that will be your replacement. The meter is running on your career.",
    milestones: [
      { year: 2026, event: "Robotaxis expand to 10+ cities." },
      { year: 2027, event: "Uber adds 'autonomous' option in major markets." },
      { year: 2028, event: "Human rideshare becomes the premium option. Briefly." },
      { year: 2029, event: "Human driving is a novelty. Like horse carriages in Central Park." }
    ]
  },
  {
    title: "bartender",
    aliases: ["barista", "mixologist", "bar staff", "barman", "barmaid"],
    daysUntilCooked: 1500,
    confidence: 35,
    cookedLevel: "WARMING UP",
    description: "Robot bartenders exist in cruise ships and airports. They're novelties. Your real job isn't making drinks — it's listening to strangers' problems, knowing when to cut someone off, and making the attractive regular feel special. You're a therapist who serves alcohol. AI can't do that.",
    milestones: [
      { year: 2027, event: "Automated pour systems in chain restaurants." },
      { year: 2029, event: "Robot cocktail bars as entertainment, not replacement." },
      { year: 2032, event: "Fast-casual bars go automated. Dive bars still need you." },
      { year: 2035, event: "You're a 'hospitality artist.' Same job, society finally respects it." }
    ]
  },
  {
    title: "waiter",
    aliases: ["waitress", "food server", "wait staff"],
    daysUntilCooked: 1200,
    confidence: 45,
    cookedLevel: "WARMING UP",
    description: "QR code menus, tablet ordering, and delivery robots are chipping away at your job from every angle. But fine dining still needs a human who can recommend the wine, read the table's mood, and know when to disappear. Fast food servers? Toast. Fine dining? You'll survive.",
    milestones: [
      { year: 2027, event: "Fast casual goes fully self-serve. Tips dry up." },
      { year: 2029, event: "Delivery robots handle food running in large restaurants." },
      { year: 2032, event: "Most chain restaurants are human-optional." },
      { year: 2035, event: "Fine dining doubles down on human service as luxury." }
    ]
  },
  {
    title: "farmer",
    aliases: ["rancher", "agriculture", "agricultural worker", "farm worker"],
    daysUntilCooked: 1800,
    confidence: 30,
    cookedLevel: "WARMING UP",
    description: "John Deere's autonomous tractors are already in fields. Drone crop monitoring, AI pest detection, precision irrigation — farming is being automated fast. But weather is chaotic, equipment breaks in mud, and livestock don't follow algorithms. The family farmer survives. Corporate farming gets automated.",
    milestones: [
      { year: 2027, event: "Autonomous tractors handle 50% of field work." },
      { year: 2029, event: "Drone spraying and monitoring standard on large farms." },
      { year: 2032, event: "AI manages crop rotation, soil health, and yield optimization." },
      { year: 2035, event: "You're a 'farm operator' managing machines. Fewer farmers, more food." }
    ]
  },
  {
    title: "astronaut",
    aliases: ["cosmonaut", "space traveler"],
    daysUntilCooked: 3000,
    confidence: 10,
    cookedLevel: "RAW",
    description: "SpaceX is sending humans to Mars and you're worried about AI? You literally go to SPACE. The whole point is humans going there. AI runs the ship's systems, but you're the payload AND the purpose. If anything, AI makes your job safer, not obsolete. You're the most future-proof job that exists.",
    milestones: [
      { year: 2028, event: "AI handles 95% of ISS operations. You do the spacewalks." },
      { year: 2032, event: "Mars missions. Humans required. Obviously." },
      { year: 2038, event: "Space stations need human maintenance." },
      { year: 2045, event: "You explore. AI assists. This was always the plan." }
    ]
  },
    // COMMON GENERIC TERMS (catch-all for broad searches)
  {
    title: "director",
    aliases: ["film director", "creative director", "art director", "managing director"],
    daysUntilCooked: 900,
    confidence: 55,
    cookedLevel: "MEDIUM",
    description: "Film director? AI generates entire movies from a prompt. Managing director? AI manages better — it doesn't play favorites or expense steak dinners. Creative director? Midjourney doesn't need a mood board. You survive on vibes, politics, and the fact that humans still want a human to blame when the project flops. Your corner office is a participation trophy.",
    milestones: [
      { year: 2027, event: "AI generates your creative brief, project plan, and 90-day roadmap before your morning standup ends." },
      { year: 2028, event: "You direct AI that directs other AI. Your org chart looks like a neural network and you're not the most important node." },
      { year: 2030, event: "Company eliminates the 'Director' title. You're now a 'Lead.' Same job. 30% pay cut. Ouch." },
      { year: 2032, event: "Your kid asks what a director does. You say 'meetings.' They ask what meetings are. You cry." }
    ]
  },
  {
    title: "investor",
    aliases: ["stock investor", "angel investor", "retail investor", "day trader", "venture capitalist", "vc"],
    daysUntilCooked: 600,
    confidence: 70,
    cookedLevel: "WELL DONE",
    description: "AI already beats most hedge funds. Quantitative trading dominates markets. Your 'market intuition' is confirmation bias with a brokerage account. The only investors safe from AI are the ones who write the checks AI can't write — yet. When AI gets a bank account, it's over.",
    milestones: [
      { year: 2026, event: "AI portfolio managers outperform 90% of active investors." },
      { year: 2027, event: "Robo-advisors handle everything up to $10M portfolios." },
      { year: 2029, event: "AI agents make investment decisions autonomously." },
      { year: 2031, event: "You're either Warren Buffett-level or you're using an app like everyone else." }
    ]
  },
  {
    title: "engineer",
    aliases: ["engineering", "electrical engineer", "biomedical engineer", "industrial engineer", "environmental engineer", "nuclear engineer", "materials engineer"],
    daysUntilCooked: 1000,
    confidence: 50,
    cookedLevel: "MEDIUM",
    description: "Software engineer? Cooked. Mechanical engineer? Warming up. Civil engineer? Probably fine. 'Engineer' is so broad it's like asking if 'workers' will be replaced. The answer is: the ones who push buttons are screwed, the ones who build bridges are not. Be more specific.",
    milestones: [
      { year: 2026, event: "AI handles engineering calculations and simulations." },
      { year: 2028, event: "AI designs products. You review and approve." },
      { year: 2031, event: "Physical engineering still needs humans. Digital engineering doesn't." },
      { year: 2035, event: "Your specialty determines your fate. Choose wisely." }
    ]
  },
  {
    title: "developer",
    aliases: ["dev", "coder"],
    daysUntilCooked: 547,
    confidence: 88,
    cookedLevel: "WELL DONE",
    description: "You write code. AI writes code. AI writes code faster, doesn't argue about tabs vs spaces, and ships without a 2-week sprint cycle. Claude Code built an entire product in 10 days with zero human-written code. You're not being replaced — you're being outproduced 100x.",
    milestones: [
      { year: 2026, event: "AI writes 80% of production code. You refactor the other 20%." },
      { year: 2027, event: "Companies realize 5 devs + AI > 50 devs without AI." },
      { year: 2028, event: "Junior dev roles disappear. Senior devs become AI supervisors." },
      { year: 2029, event: "'Full-stack developer' means you and your 7 AI agents." }
    ]
  },
  {
    title: "artist",
    aliases: ["fine artist", "visual artist", "painter", "illustrator", "digital artist"],
    daysUntilCooked: 600,
    confidence: 72,
    cookedLevel: "WELL DONE",
    description: "Midjourney, DALL-E, Stable Diffusion — they generate art that wins competitions and gets sold as prints. Your years of studying anatomy and color theory? The AI learned that from your portfolio. Literally. You trained your replacement. Physical art and live performance survive. Digital art is in the blast zone.",
    milestones: [
      { year: 2026, event: "AI art is indistinguishable from human art to most viewers." },
      { year: 2027, event: "Commercial illustration is 80% AI-generated." },
      { year: 2029, event: "Physical art gains value BECAUSE it's human-made." },
      { year: 2031, event: "You're either in galleries or doing AI-assisted commercial work." }
    ]
  },
  {
    title: "manager",
    aliases: ["middle manager", "team lead", "team leader", "supervisor"],
    daysUntilCooked: 600,
    confidence: 72,
    cookedLevel: "WELL DONE",
    description: "You schedule meetings, write performance reviews, and forward emails up the chain. AI does all of that without needing a 'leadership offsite' to find its purpose. Middle management is the most obviously replaceable layer in any organization. Sorry, not sorry.",
    milestones: [
      { year: 2026, event: "AI handles scheduling, reporting, and status updates." },
      { year: 2027, event: "AI runs 1:1s better than you. Data-driven feedback, no bias." },
      { year: 2028, event: "Companies flatten. Two layers between IC and CEO." },
      { year: 2029, event: "You're either an executive or an IC. Middle is gone." }
    ]
  },
  {
    "title": "cashier",
    "aliases": [
      "checkout clerk",
      "retail cashier",
      "store clerk",
      "register operator"
    ],
    "daysUntilCooked": 350,
    "confidence": 85,
    "cookedLevel": "WELL DONE",
    "description": "Self-checkout kiosks are in every grocery store. Amazon Go eliminated you entirely. Your job is literally scanning barcodes and making change — two things machines have done better than humans since the 1970s. The only reason you still exist is because old people need someone to complain to.",
    "milestones": [
      {
        "year": 2026,
        "event": "Self-checkout handles 70% of transactions. You supervise the machines."
      },
      {
        "year": 2027,
        "event": "Computer vision checkout — just grab and go."
      },
      {
        "year": 2028,
        "event": "Most retail stores are cashierless. Walmart follows Amazon."
      },
      {
        "year": 2029,
        "event": "You're a 'retail associate' doing everything except the register."
      }
    ]
  },
  {
    "title": "editor",
    "aliases": [
      "copy editor",
      "managing editor",
      "book editor",
      "video editor",
      "film editor"
    ],
    "daysUntilCooked": 600,
    "confidence": 68,
    "cookedLevel": "WELL DONE",
    "description": "Grammarly was just the appetizer. AI now edits manuscripts, restructures narratives, checks for plot holes, and adjusts tone — and doesn't charge $50/hour. Video editors? AI auto-cuts, color grades, and adds transitions. Your 'editorial eye' is now a $10/month subscription.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI editing tools handle 80% of copy editing."
      },
      {
        "year": 2027,
        "event": "AI structural editing catches issues you'd miss on your third read."
      },
      {
        "year": 2028,
        "event": "Video AI does rough cuts and assembles that took you days."
      },
      {
        "year": 2029,
        "event": "You're a 'creative director' making final calls on AI output."
      }
    ]
  },
  {
    "title": "salesperson",
    "aliases": [
      "sales representative",
      "sales rep",
      "sales associate",
      "retail sales",
      "salesman",
      "saleswoman"
    ],
    "daysUntilCooked": 700,
    "confidence": 60,
    "cookedLevel": "WELL DONE",
    "description": "AI chatbots handle product recommendations, objection handling, and closing better than most of your team — and they're available 24/7, never call in sick, and don't need a motivational pizza party. B2B enterprise sales survives on relationships. Everything else? The bot closes.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI handles inbound sales and simple transactions."
      },
      {
        "year": 2027,
        "event": "AI SDRs do outbound prospecting. Better emails than your team."
      },
      {
        "year": 2028,
        "event": "Inside sales teams shrink 50%. AI closes routine deals."
      },
      {
        "year": 2029,
        "event": "Enterprise sales is the last holdout. Relationship > algorithm. For now."
      }
    ]
  },
  {
    "title": "flight attendant",
    "aliases": [
      "cabin crew",
      "steward",
      "stewardess",
      "air hostess"
    ],
    "daysUntilCooked": 1800,
    "confidence": 25,
    "cookedLevel": "WARMING UP",
    "description": "Your job is equal parts safety officer, server, therapist, and bouncer at 35,000 feet. AI can suggest drink orders and robots could theoretically roll a cart, but nobody wants a robot handling an emergency evacuation or calming a panicking passenger during turbulence. You're safe because air travel is terrifying.",
    "milestones": [
      {
        "year": 2028,
        "event": "AI handles booking and customer service on ground. You're still in the sky."
      },
      {
        "year": 2031,
        "event": "Automated beverage service on short-haul flights."
      },
      {
        "year": 2035,
        "event": "Still on every flight. FAA requires human safety crew."
      },
      {
        "year": 2040,
        "event": "Robots tried. Passengers hated them. You're back."
      }
    ]
  },
  {
    "title": "mechanical engineer",
    "aliases": [
      "mech eng",
      "mechanical engineering"
    ],
    "daysUntilCooked": 1200,
    "confidence": 45,
    "cookedLevel": "WARMING UP",
    "description": "AI designs parts, runs FEA simulations, and optimizes tolerances faster than your entire team. But someone still needs to understand materials, manufacturing constraints, and why the prototype doesn't match the simulation. Physical engineering has a reality gap that keeps you employed.",
    "milestones": [
      {
        "year": 2027,
        "event": "AI generative design creates better parts than your CAD models."
      },
      {
        "year": 2029,
        "event": "Digital twins + AI predict failures before prototyping."
      },
      {
        "year": 2032,
        "event": "AI handles routine design. You do the novel stuff."
      },
      {
        "year": 2035,
        "event": "You're an 'engineering architect.' AI does the drafting."
      }
    ]
  },
  {
    "title": "civil engineer",
    "aliases": [
      "structural engineer",
      "civil engineering"
    ],
    "daysUntilCooked": 1500,
    "confidence": 35,
    "cookedLevel": "WARMING UP",
    "description": "AI designs bridges and buildings, but it can't inspect a cracked foundation, deal with unexpected soil conditions, or navigate the 47 government permits required to build a parking lot. Your job is 30% engineering and 70% bureaucracy, and AI can't schmooze a city inspector.",
    "milestones": [
      {
        "year": 2027,
        "event": "AI structural analysis replaces manual calculations."
      },
      {
        "year": 2030,
        "event": "BIM + AI generates construction plans automatically."
      },
      {
        "year": 2033,
        "event": "AI handles routine design. Complex sites still need you."
      },
      {
        "year": 2036,
        "event": "You oversee AI designs and handle site-specific problems."
      }
    ]
  },
  {
    "title": "chemical engineer",
    "aliases": [
      "process engineer",
      "chemical engineering"
    ],
    "daysUntilCooked": 1400,
    "confidence": 38,
    "cookedLevel": "WARMING UP",
    "description": "AI optimizes chemical processes and runs simulations, but it can't smell that something's off in the reactor or make judgment calls when the temperature gauge reads wrong. Your job combines physics, chemistry, and the ability to not blow up a factory. That last part is important.",
    "milestones": [
      {
        "year": 2028,
        "event": "AI process optimization improves yield by 15%."
      },
      {
        "year": 2031,
        "event": "AI designs new chemical processes from scratch."
      },
      {
        "year": 2034,
        "event": "Autonomous chemical plants for simple processes."
      },
      {
        "year": 2037,
        "event": "You handle the dangerous, novel, or regulated stuff."
      }
    ]
  },
  {
    "title": "aerospace engineer",
    "aliases": [
      "rocket engineer",
      "aerospace engineering",
      "avionics engineer"
    ],
    "daysUntilCooked": 1500,
    "confidence": 35,
    "cookedLevel": "WARMING UP",
    "description": "SpaceX uses AI for trajectory optimization and engine testing, but someone has to design the rocket that doesn't explode. Aerospace engineering is so specialized, so high-stakes, and so regulated that AI is your copilot, not your replacement. When failure means a fireball, humans stay in the loop.",
    "milestones": [
      {
        "year": 2028,
        "event": "AI designs airframe components. You validate them."
      },
      {
        "year": 2031,
        "event": "AI runs wind tunnel simulations better than CFD teams."
      },
      {
        "year": 2035,
        "event": "AI handles routine aircraft modifications."
      },
      {
        "year": 2038,
        "event": "Still employed. Rockets are too expensive to let AI wing it."
      }
    ]
  },
  {
    "title": "sales manager",
    "aliases": [
      "regional sales manager",
      "sales director",
      "head of sales"
    ],
    "daysUntilCooked": 700,
    "confidence": 62,
    "cookedLevel": "WELL DONE",
    "description": "You manage a sales team, set quotas, and give motivational speeches. AI now forecasts revenue better than you, assigns leads optimally, and coaches reps with data-driven feedback. Your 'gut instinct about the pipeline' is losing to algorithms. You survive by being a leader, not a forecaster.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI forecasting makes your spreadsheets obsolete."
      },
      {
        "year": 2027,
        "event": "AI coaches reps in real-time during calls."
      },
      {
        "year": 2028,
        "event": "AI SDRs handle outbound. Your team shrinks."
      },
      {
        "year": 2029,
        "event": "You manage fewer humans and more AI agents."
      }
    ]
  },
  {
    "title": "operations manager",
    "aliases": [
      "ops manager",
      "operations director",
      "head of operations"
    ],
    "daysUntilCooked": 650,
    "confidence": 65,
    "cookedLevel": "WELL DONE",
    "description": "You optimize processes, manage supply chains, and put out fires. AI does all of this faster — supply chain optimization, demand forecasting, workflow automation. Your value is in the messy human stuff: negotiating with vendors, managing crises, and herding cats across departments.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI handles supply chain optimization and inventory."
      },
      {
        "year": 2027,
        "event": "Process automation eliminates 40% of operational tasks."
      },
      {
        "year": 2028,
        "event": "AI runs the dashboards. You run the people."
      },
      {
        "year": 2029,
        "event": "Ops team is you + AI. That's the whole team."
      }
    ]
  },
  {
    "title": "loan officer",
    "aliases": [
      "mortgage officer",
      "lending officer",
      "loan originator"
    ],
    "daysUntilCooked": 400,
    "confidence": 80,
    "cookedLevel": "WELL DONE",
    "description": "AI underwrites loans in seconds by analyzing credit data, income verification, and risk factors that you'd need a week to review. Rocket Mortgage already automated most of what you do. Your remaining value is hand-holding nervous first-time buyers through paperwork.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI instant-approves 60% of applications."
      },
      {
        "year": 2027,
        "event": "AI handles the entire application process end-to-end."
      },
      {
        "year": 2028,
        "event": "Human loan officers only for complex or edge cases."
      },
      {
        "year": 2029,
        "event": "You're a 'financial advisor' now. The loans approve themselves."
      }
    ]
  },
  {
    "title": "coach",
    "aliases": [
      "life coach",
      "executive coach",
      "business coach",
      "career coach"
    ],
    "daysUntilCooked": 1000,
    "confidence": 45,
    "cookedLevel": "WARMING UP",
    "description": "AI coaching bots are getting good — BetterUp already uses AI for 50% of coaching interactions. But people pay you for accountability, empathy, and someone who gives a damn about their goals. AI can ask the right questions. It can't give you the disappointed look when you skip the gym for the third week.",
    "milestones": [
      {
        "year": 2027,
        "event": "AI coaching apps handle goal-setting and tracking."
      },
      {
        "year": 2029,
        "event": "AI coaches have conversations indistinguishable from humans."
      },
      {
        "year": 2031,
        "event": "Premium coaching goes up in price. Budget coaching is AI."
      },
      {
        "year": 2034,
        "event": "You survive as a luxury service. Like a human therapist with a clipboard."
      }
    ]
  },
  {
    "title": "biologist",
    "aliases": [
      "research biologist","botanist","entomologist","paleontologist",
      "wildlife biologist",
      "microbiologist",
      "cell biologist"
    ],
    "daysUntilCooked": 1500,
    "confidence": 35,
    "cookedLevel": "WARMING UP",
    "description": "AlphaFold solved protein folding. AI analyzes genomes, identifies species from DNA, and designs experiments. But biology is messy — literally. You still need humans to collect samples, run experiments in wet labs, and figure out why the cell culture died again. Nature doesn't have an API.",
    "milestones": [
      {
        "year": 2028,
        "event": "AI designs experiments. You run them and clean the petri dishes."
      },
      {
        "year": 2031,
        "event": "AI discovers new species from environmental DNA."
      },
      {
        "year": 2034,
        "event": "Lab robots handle routine experiments."
      },
      {
        "year": 2037,
        "event": "You're a 'research director' overseeing AI + robot labs."
      }
    ]
  },
  {
    "title": "writer",
    "aliases": [
      "author",
      "freelance writer",
      "creative writer",
      "novelist",
      "fiction writer"
    ],
    "daysUntilCooked": 600,
    "confidence": 70,
    "cookedLevel": "WELL DONE",
    "description": "ChatGPT writes blog posts, articles, ad copy, and even novels. It doesn't have writer's block, doesn't miss deadlines, and doesn't need 'inspiration.' The content mills are already AI. Literary fiction survives because it requires actual human experience. But most writing jobs aren't literary fiction — they're content.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI writes 70% of online content. Nobody notices."
      },
      {
        "year": 2027,
        "event": "AI ghostwrites bestselling books. Ghostwriters are ghosts."
      },
      {
        "year": 2028,
        "event": "Only distinctive voices survive. Generic writing is commodity."
      },
      {
        "year": 2029,
        "event": "You're either Stephen King or you're competing with free."
      }
    ]
  },
  {
    "title": "driver",
    "aliases": [
      "chauffeur",
      "personal driver",
      "professional driver"
    ],
    "daysUntilCooked": 700,
    "confidence": 65,
    "cookedLevel": "WELL DONE",
    "description": "Self-driving cars are already on roads in multiple cities. Whether you drive a taxi, truck, or limo, the trajectory is the same: autonomous vehicles will handle the easy routes first, then the hard ones. Your steering wheel has an expiration date.",
    "milestones": [
      {
        "year": 2027,
        "event": "Autonomous vehicles handle 20% of commercial driving."
      },
      {
        "year": 2029,
        "event": "Human drivers needed only for complex routes and conditions."
      },
      {
        "year": 2031,
        "event": "Most highway driving is autonomous."
      },
      {
        "year": 2034,
        "event": "Driving is a specialty skill, not a default job."
      }
    ]
  },
  {
    "title": "designer",
    "aliases": [
      "product designer",
      "industrial designer"
    ],
    "daysUntilCooked": 700,
    "confidence": 60,
    "cookedLevel": "WELL DONE",
    "description": "AI generates designs from text. Entire websites from a napkin sketch. Product mockups in seconds. Which kind of designer are you? Doesn't matter — AI is coming for visual, UX, industrial, interior, all of it. Your taste is your moat. AI has taste now too.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI generates production-ready designs from prompts."
      },
      {
        "year": 2027,
        "event": "Clients compare your work to AI output. AI is cheaper."
      },
      {
        "year": 2028,
        "event": "Design teams shrink 50%. One human + AI replaces five humans."
      },
      {
        "year": 2029,
        "event": "You're a 'design director' curating AI output. Not a bad gig."
      }
    ]
  },
  {
    "title": "scientist",
    "aliases": [
      "research scientist",
      "laboratory scientist",
      "lab scientist"
    ],
    "daysUntilCooked": 1500,
    "confidence": 35,
    "cookedLevel": "WARMING UP",
    "description": "AI discovers drugs, predicts protein structures, and runs more experiments than your entire lab. But science requires creativity, skepticism, and the ability to ask questions nobody thought to ask. AI optimizes known spaces. You explore unknown ones. That's the difference.",
    "milestones": [
      {
        "year": 2028,
        "event": "AI runs 500 experiments overnight. You interpret results."
      },
      {
        "year": 2031,
        "event": "AI proposes hypotheses. You judge which ones aren't insane."
      },
      {
        "year": 2035,
        "event": "AI-driven labs are standard. You design the research agenda."
      },
      {
        "year": 2038,
        "event": "Science is a human-AI partnership. Neither works alone."
      }
    ]
  },
  {
    "title": "makeup artist",
    "aliases": [
      "mua",
      "beauty artist",
      "cosmetics artist"
    ],
    "daysUntilCooked": 1800,
    "confidence": 20,
    "cookedLevel": "RAW",
    "description": "You literally apply products to human faces. AI can suggest looks, generate virtual try-ons, and recommend products — but it can't blend foundation on actual skin. Your hands touch faces. That's not automatable. Bridal, editorial, film — all safe. You're an artist with a brush, not a prompt.",
    "milestones": [
      {
        "year": 2027,
        "event": "AR beauty filters reduce casual makeup demand."
      },
      {
        "year": 2029,
        "event": "AI-powered try-on kills some retail consultation."
      },
      {
        "year": 2032,
        "event": "Professional MUAs are the premium tier. AI handles the tutorials."
      },
      {
        "year": 2035,
        "event": "Still painting faces. Skin doesn't have an undo button."
      }
    ]
  },
  {
    "title": "investment banker",
    "aliases": [
      "ibanker",
      "ib analyst",
      "banking analyst"
    ],
    "daysUntilCooked": 500,
    "confidence": 75,
    "cookedLevel": "WELL DONE",
    "description": "You build financial models in Excel at 2am for $200K/year. AI builds better models in seconds. Your pitch decks? AI generates those. Due diligence? AI reads 10,000 pages while you read 10. Your remaining value is client relationships and the Goldman Sachs brand on your business card.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI generates financial models and pitch decks."
      },
      {
        "year": 2027,
        "event": "AI due diligence is faster and more thorough than your analyst pool."
      },
      {
        "year": 2028,
        "event": "Junior banker headcount drops 50%. Seniors keep their jobs and bonuses."
      },
      {
        "year": 2029,
        "event": "You're a 'relationship banker.' The analysis is the AI's job."
      }
    ]
  },
  {
    "title": "quality inspector",
    "aliases": [
      "quality control inspector",
      "qc inspector",
      "quality assurance inspector"
    ],
    "daysUntilCooked": 500,
    "confidence": 75,
    "cookedLevel": "WELL DONE",
    "description": "Computer vision inspects parts faster, more consistently, and without eye strain. AI detects defects invisible to the human eye. Your clipboard and magnifying glass are relics. Manufacturing QC is one of the easiest automation wins — consistent, repetitive, visual. That's AI's sweet spot.",
    "milestones": [
      {
        "year": 2026,
        "event": "AI visual inspection handles 80% of manufacturing QC."
      },
      {
        "year": 2027,
        "event": "AI catches micro-defects humans miss consistently."
      },
      {
        "year": 2028,
        "event": "QC teams shrink to supervisory roles."
      },
      {
        "year": 2029,
        "event": "You audit the AI systems. Which is fewer jobs."
      }
    ]
  },
  {
    "title": "dental hygienist",
    "aliases": [
      "hygienist",
      "teeth cleaner"
    ],
    "daysUntilCooked": 1800,
    "confidence": 25,
    "cookedLevel": "WARMING UP",
    "description": "You scrape calculus off teeth with sharp metal tools inside people's mouths. This requires physical dexterity, patient interaction, and the ability to make small talk while someone drools on you. No robot wants this job. No robot CAN do this job. The fluoride is strong with this one.",
    "milestones": [
      {
        "year": 2028,
        "event": "AI identifies issues during cleaning via camera. You still clean."
      },
      {
        "year": 2031,
        "event": "Ultrasonic tech improves. You're more efficient, not replaced."
      },
      {
        "year": 2034,
        "event": "Robot teeth cleaning attempted. Reviews are... bloody."
      },
      {
        "year": 2038,
        "event": "Still cleaning teeth. Plaque is forever."
      }
    ]
  },
  
  // KARPATHY BLS OCCUPATIONS (AI exposure scored by Karpathy/LLM pipeline)
  {"title":"actuaries","aliases":["actuary"],"daysUntilCooked":442,"confidence":79,"cookedLevel":"WELL DONE","description":"You crunch numbers about when people will die. AI does this faster, cheaper, and without needing coffee breaks. Statistical modeling and risk prediction are literally what machine learning was born for. Your TI-84 can't save you now.","milestones":[{"year":2027,"event":"AI mortality models outperform your best spreadsheet. Your actuarial tables are now a history lesson."},{"year":2028,"event":"Insurance companies let AI price every policy. You're kept around to explain the model to regulators who also don't understand it."},{"year":2029,"event":"One AI does the work of your entire department. It doesn't even need the fancy calculator."},{"year":2030,"event":"The only risk you're calculating now is your own career survival probability. It's not looking great."}]},
  {"title":"announcers and djs","aliases":["dj","announcer","radio host","radio dj","disc jockey"],"daysUntilCooked":673,"confidence":72,"cookedLevel":"WELL DONE","description":"Half your job is talking into a mic, half is vibing with a crowd. AI can generate playlists, mix tracks, and do radio commentary — but it can't hype up a drunk wedding crowd at 1am. Your mic hand is safe. Your editing job? Not so much.","milestones":[{"year":2027,"event":"Spotify's AI DJ launches and it's better at banter than your morning show host. No dead air, no awkward pauses, no HR complaints."},{"year":2029,"event":"AI generates entire radio segments — weather, traffic, jokes. You're kept around to do live reads for the local mattress store."},{"year":2031,"event":"Wedding DJs survive because someone still needs to drunkenly MC the bouquet toss. Radio DJs? Podcasts already killed you, AI just buried the body."},{"year":2033,"event":"The only DJs left are the ones who actually perform. Pressing play on a laptop was never safe, and now everyone knows it."}]},
  {"title":"anthropologists and archeologists","aliases":["anthropologist","archeologist","archaeologist"],"daysUntilCooked":1140,"confidence":50,"cookedLevel":"MEDIUM","description":"AI can analyze pottery shards and translate ancient texts faster than your whole department. But it can't dig in the dirt, brush off a 3,000-year-old skull, or get dysentery at a remote dig site. Your Indiana Jones cosplay is safe — your desk work isn't.","milestones":[{"year":2028,"event":"AI translates ancient scripts and catalogs artifacts 100x faster than your grad students. Your unpaid interns are relieved."},{"year":2030,"event":"LiDAR + AI finds more buried cities in a week than your department found in a decade. Your trowel feels inadequate."},{"year":2033,"event":"AI writes the academic papers analyzing the dig. You still have to actually be in the 110°F trench though."},{"year":2036,"event":"You're basically a field technician who got tenure. The thinking happens in the cloud, the sweating happens on-site."}]},
  {"title":"assemblers and fabricators","aliases":["assembler","fabricator"],"daysUntilCooked":1885,"confidence":29,"cookedLevel":"WARMING UP","description":"You put things together with your hands in messy real-world conditions. Robots are great at assembling iPhones in clean rooms, terrible at everything else. As long as factories stay chaotic and weird, your hands have job security.","milestones":[{"year":2029,"event":"Cobots handle repetitive assembly. You handle the weird stuff that's a different shape every time."},{"year":2032,"event":"AI vision guides your work. You're faster, not fired."},{"year":2035,"event":"Foxconn tries full automation again. Again fails. Again hires humans."},{"year":2038,"event":"Custom fabrication is artisan work now. Your hands are worth more."}]},
  {"title":"audiologists","aliases":["audiologist","hearing specialist"],"daysUntilCooked":1433,"confidence":37,"cookedLevel":"WARMING UP","description":"You peer into ear canals, scrape out wax, and fit hearing aids — none of which AI can do through a screen. AI might read your audiograms better than you, but it can't wrestle a hearing aid into a 85-year-old's ear canal while they tell you about their grandkids.","milestones":[{"year":2028,"event":"AI-powered hearing tests go direct-to-consumer. Patients show up pre-diagnosed and just want you to install the thing."},{"year":2030,"event":"Apple AirPods Pro become FDA-cleared hearing aids. Your $5,000 fitting appointment competes with a Best Buy purchase."},{"year":2033,"event":"AI auto-tunes hearing aids in real-time better than your manual calibration ever could. You're the Genius Bar of ears."},{"year":2036,"event":"Still employed because old people want a human to yell at when their hearing aid whistles in church."}]},
  {"title":"automotive body and glass repairers","daysUntilCooked":2265,"confidence":22,"cookedLevel":"RAW","description":"Every dent is different. Every shattered windshield is a unique snowflake of destruction. You weld, grind, and shape metal by feel. Robots can't handle the chaos of a car that got rear-ended by a Tesla on autopilot. Ironic, really.","milestones":[{"year":2029,"event":"AI estimates repair costs from photos. Insurance companies love it. You hate it — it lowballs every job."},{"year":2032,"event":"Paintless dent repair robots handle simple dings. You handle the ones that look like modern art."},{"year":2035,"event":"Tesla's 'self-repairing body panels' are announced, delayed 4 years, then cancelled."},{"year":2038,"event":"Still bending metal. Every crash is unique, like a snowflake of bad driving."}]},
  {"title":"barbers, hairstylists, and cosmetologists","daysUntilCooked":2472,"confidence":17,"cookedLevel":"RAW","description":"Every head is different. Every Karen wants something specific. You're wielding sharp objects near someone's face while they show you a Pinterest photo that looks nothing like their hair type. No robot is touching that liability. Your scissors are safe.","milestones":[{"year":2029,"event":"AR mirrors show clients what they'll look like before you cut. Expectations still unrealistic."},{"year":2032,"event":"Japan releases a robot barber. It gives everyone the same haircut. Nobody goes back."},{"year":2035,"event":"'Hand-cut by a human' is on salon signage like 'organic' on food labels."},{"year":2038,"event":"Still cutting hair. Still hearing about their ex. Some things are eternal."}]},
  {"title":"biochemists and biophysicists","aliases":["biochemist","biophysicist"],"daysUntilCooked":699,"confidence":69,"cookedLevel":"WELL DONE","description":"AlphaFold already did in hours what took your field decades. AI designs molecules, predicts protein structures, and runs simulations while you're still pipetting. Your wet lab skills buy you time, but the computational side of your job is already AI territory.","milestones":[{"year":2027,"event":"AlphaFold 4 predicts protein interactions you'd need a decade and a $2M grant to figure out. Your pipette weeps."},{"year":2029,"event":"AI designs novel drug candidates faster than you can write the literature review. Pharma lays off half the R&D floor."},{"year":2031,"event":"Wet lab work is the only thing keeping you employed. You're a glorified lab tech with a PhD."},{"year":2033,"event":"AI runs the experiments virtually, then tells you which ones to physically confirm. You're the robot's hands now."}]},
  {"title":"boilermakers","daysUntilCooked":2446,"confidence":20,"cookedLevel":"RAW","description":"You weld inside boilers so hot your sweat evaporates before it drips. You contort into tanks that would give a yoga instructor claustrophobia. No robot is fitting through that hatch, and no AI is doing manual welding in a space where one wrong move means an explosion.","milestones":[{"year":2029,"event":"AI inspects boiler integrity with ultrasound. You still weld the patches."},{"year":2032,"event":"AR welding helmets guide your bead in confined spaces. You're Iron Man with less glamour."},{"year":2035,"event":"Someone pitches a boiler-welding robot at a trade show. It can't fit through the hatch."},{"year":2038,"event":"Still welding in metal coffins. Robots literally cannot contort into these spaces."}]},
  {"title":"cartographers and photogrammetrists","aliases":["cartographer","mapmaker"],"daysUntilCooked":366,"confidence":81,"cookedLevel":"WELL DONE","description":"Your entire job is turning location data into pretty maps and reports. AI eats geospatial data for breakfast. Satellite imagery analysis, terrain modeling, data visualization — all automated. Google Maps did more for cartography than your degree.","milestones":[{"year":2027,"event":"AI auto-generates maps from satellite imagery that took you weeks to trace by hand. Your GIS license is decorative."},{"year":2028,"event":"Google Earth AI updates terrain models in real-time. Your quarterly map revision feels adorably vintage."},{"year":2029,"event":"One drone + AI replaces your entire survey team. The drone doesn't complain about the weather either."},{"year":2030,"event":"The only maps left to make are the artsy ones for hipster coffee shops. Hope you kept your watercolor skills."}]},
  {"title":"chefs and head cooks","aliases":["head cook"],"daysUntilCooked":1906,"confidence":32,"cookedLevel":"WARMING UP","description":"You taste, you smell, you scream at line cooks, you plate 200 covers in a night while your back screams louder than you. AI can generate recipes — it cannot taste if the sauce needs more acid, or physically stop a prep cook from bleeding into the mirepoix. Gordon Ramsay's job is safe. Yours might be too.","milestones":[{"year":2029,"event":"AI generates Michelin-worthy recipes. You still have to not burn them."},{"year":2032,"event":"Flippy 3.0 handles the fryer at Applebee's. Fine dining pretends it doesn't exist."},{"year":2035,"event":"'Human-cooked' becomes a menu label that costs 3x more. Worth it."},{"year":2038,"event":"Still screaming 'BEHIND!' — robots can't navigate a 200-cover rush."}]},
  {"title":"chiropractors","aliases":["chiropractor"],"daysUntilCooked":1932,"confidence":27,"cookedLevel":"WARMING UP","description":"You crack people's spines for a living and somehow that's legal. AI can read your X-rays better than you can, but it cannot physically pop someone's L4 back into place. Your hands are your moat, and no robot has the finesse to adjust a spine without occasionally snapping one.","milestones":[{"year":2029,"event":"AI diagnoses spinal issues from imaging. You still do the cracking."},{"year":2032,"event":"Robot adjustment tables get smarter. Patients still want the human pop."},{"year":2035,"event":"TikTok chiropractor videos still get millions of views. You're a content creator with a medical license."},{"year":2038,"event":"Still cracking spines. The sound alone is irreplaceable."}]},
  {"title":"compensation, benefits, and job analysis specialists","aliases":["compensation analyst","benefits analyst","hr analyst"],"daysUntilCooked":407,"confidence":78,"cookedLevel":"WELL DONE","description":"You research salaries, design benefits packages, and write reports about compensation. AI does all of this in seconds. Every spreadsheet you touch, every market analysis you run — there's an AI tool that does it faster and doesn't need its own benefits package.","milestones":[{"year":2027,"event":"AI scrapes Glassdoor, LinkedIn, and every salary database to build comp reports you'd spend a week on. Your 'market research' is a Google search now."},{"year":2028,"event":"AI designs benefits packages optimized for retention. Turns out employees wanted better PTO, not your pizza parties."},{"year":2029,"event":"Companies realize the person analyzing whether jobs are necessary... isn't necessary. The irony is chef's kiss."},{"year":2030,"event":"HR departments shrink to one person and an AI dashboard. That person isn't you — it's your manager."}]},
  {"title":"computer programmers","aliases":["programmer","computer programmer"],"daysUntilCooked":242,"confidence":87,"cookedLevel":"BURNT TO A CRISP","description":"Lmao. You write code for a living and the AI that's replacing you was literally trained on your GitHub commits. Copilot already writes half your code. Claude writes the other half. You're basically a copy-paste middleman with imposter syndrome. The call is coming from inside the house.","milestones":[{"year":2027,"event":"Cursor and Copilot write your CRUD apps while you argue about tabs vs spaces. The AI doesn't care — it uses both."},{"year":2028,"event":"AI agents chain together APIs, debug their own code, and deploy to prod. You're a very expensive rubber duck."},{"year":2029,"event":"Junior dev hiring drops 80%. Why pay a bootcamp grad when Claude works for $20/month and doesn't need a standing desk?"},{"year":2030,"event":"The surviving programmers are the ones who program the AI that programs. It's turtles all the way down."}]},
  {"title":"concierges","aliases":["concierge","hotel concierge"],"daysUntilCooked":1150,"confidence":50,"cookedLevel":"MEDIUM","description":"Half your job is already a chatbot — restaurant recs, directions, booking confirmations. The other half is smiling at drunk guests at 2am and finding a pharmacy that's open. AI handles the info; you handle the vibes. Hotel chains are absolutely replacing you with an iPad.","milestones":[{"year":2028,"event":"ChatGPT knows every restaurant, bar, and hidden gem in the city better than you. Guests just ask their phone now."},{"year":2030,"event":"Hotels install AI kiosks in the lobby. They speak 95 languages and never give a snooty look when someone asks for McDonald's directions."},{"year":2033,"event":"Luxury hotels keep human concierges as a flex. Budget hotels replaced you with a QR code three years ago."},{"year":2036,"event":"You survive only at places where rich people pay $800/night to feel important. Your job is basically professional sycophancy."}]},
  {"title":"cost estimators","aliases":["cost estimator","estimator"],"daysUntilCooked":353,"confidence":79,"cookedLevel":"WELL DONE","description":"You look at blueprints and guess how much things cost. AI looks at every blueprint ever made and guesses better. Historical cost data + pattern matching = your job description is literally an AI use case. Start padding your estimates while you still can.","milestones":[{"year":2027,"event":"AI pulls historical project costs and spits out estimates in seconds. Your 40-page Excel model is now a party trick."},{"year":2028,"event":"Construction firms feed blueprints directly to AI. It estimates costs, flags risks, and doesn't add 20% 'just in case' padding."},{"year":2029,"event":"One AI replaces your entire estimating department. It also doesn't take clients to steak dinners on the company card."},{"year":2030,"event":"The only estimators left work on projects so weird the AI has no training data. You're the specialist for things that shouldn't exist."}]},
  {"title":"credit counselors","aliases":["credit counselor"],"daysUntilCooked":658,"confidence":75,"cookedLevel":"WELL DONE","description":"You tell broke people how to be less broke. AI can analyze their finances, build a budget, and explain debt consolidation without judging them for buying a boat. ChatGPT is already a better financial therapist than most of your coworkers.","milestones":[{"year":2027,"event":"AI budgeting apps like Copilot and Monarch do your job for $10/month. Your $150/hour 'stop buying lattes' advice feels overpriced."},{"year":2029,"event":"AI negotiates with creditors via automated calls. It doesn't get emotional or give up after hold music."},{"year":2031,"event":"Banks offer free AI credit counseling to avoid paying you. Turns out your service was a cost center they tolerated."},{"year":2033,"event":"You pivot to 'financial therapy' — same advice but now you also validate their feelings about being broke. That's called a rebrand."}]},
  {"title":"customer service representatives","aliases":["customer service","customer support","csr","call center","call centre"],"daysUntilCooked":317,"confidence":91,"cookedLevel":"BURNT TO A CRISP","description":"You read from a script, transfer calls, and apologize for things that aren't your fault. AI already does this — and customers honestly can't tell the difference. The chatbot doesn't need bathroom breaks or mental health days from being yelled at by strangers.","milestones":[{"year":2027,"event":"AI chatbots handle 80% of tickets. The remaining 20% are people who typed 'SPEAK TO A HUMAN' in all caps."},{"year":2028,"event":"AI voice agents sound human enough that Karen doesn't know she's screaming at a server rack in Virginia."},{"year":2029,"event":"Call centers offshore to AI instead of the Philippines. Turns out the cheapest labor is no labor."},{"year":2030,"event":"Human agents only exist for PR disasters and viral TikTok complaints. You're basically crisis management now."}]},
  {"title":"dancers and choreographers","daysUntilCooked":2244,"confidence":18,"cookedLevel":"RAW","description":"AI can choreograph routines and generate dance sequences, but it cannot physically dance. Your body IS the product. Until Boston Dynamics robots can do a convincing pas de deux without falling over, your relevance is literally embodied.","milestones":[{"year":2029,"event":"AI generates choreography from music. Dancers learn it in half the time."},{"year":2032,"event":"Boston Dynamics does a viral dance video. Critics note it lacks 'soul.' Because it does."},{"year":2035,"event":"Virtual dance performances in VR. Live dance sells out faster than ever."},{"year":2038,"event":"Still performing. Audiences pay for human bodies doing impossible things."}]},
  {"title":"desktop publishers","aliases":["desktop publisher","typesetter"],"daysUntilCooked":245,"confidence":85,"cookedLevel":"BURNT TO A CRISP","description":"You arrange text and images into layouts that look nice. Canva already lets interns do your job. AI now lets the interns skip Canva entirely. You mastered InDesign kerning for this?","milestones":[{"year":2027,"event":"AI generates entire brochure layouts from a text prompt. Your 4 hours of InDesign work is now a 30-second Canva AI generation."},{"year":2028,"event":"Marketing teams realize they haven't needed a layout person since the AI learned brand guidelines better than you did."},{"year":2029,"event":"Print is dying AND your digital layout job is automated. Double kill."},{"year":2030,"event":"The word 'typesetter' joins 'lamplighter' and 'switchboard operator' in the museum of dead jobs."}]},
  {"title":"drafters","aliases":["drafter","draftsman","cad drafter","cad technician"],"daysUntilCooked":256,"confidence":92,"cookedLevel":"BURNT TO A CRISP","description":"You turn napkin sketches into CAD files. AI now turns napkin sketches into CAD files. See the problem? Generative design tools are making your mouse clicks obsolete. You're basically a human .DWG converter and the software update just dropped.","milestones":[{"year":2027,"event":"AutoCAD's AI generates floor plans from rough sketches. Your precise line work is now a prompt: 'make it to code.'"},{"year":2028,"event":"Architects skip the drafter entirely — AI goes from concept to construction docs. You're the middle step that got deleted."},{"year":2029,"event":"Generative design tools produce 50 variations while you're still setting up your drawing template. Your mouse hand atrophies."},{"year":2030,"event":"The last drafters alive specialize in legacy systems because some buildings were designed in software from 2003. Job security through technical debt."}]},
  {"title":"drywall installers, ceiling tile installers, and tapers","daysUntilCooked":2901,"confidence":15,"cookedLevel":"RAW","description":"You hang drywall, tape seams, and sand until your arms fall off in houses that are never quite level. No robot can navigate a half-finished house with ladders, debris, and a foreman yelling. Your dust-covered lungs are safe.","milestones":[{"year":2029,"event":"AI estimates drywall needs from blueprints. Your measurements are still better."},{"year":2032,"event":"Automatic taping tools speed up your work. You're faster, not replaced."},{"year":2035,"event":"A drywall robot demo goes viral. It can only do flat walls. In a lab. With no furniture."},{"year":2038,"event":"Still hanging board. Every wall is crooked in a different way."}]},
  {"title":"electrical and electronics installers and repairers","aliases":["electronics repair","electronics technician"],"daysUntilCooked":1946,"confidence":35,"cookedLevel":"WARMING UP","description":"You crawl into weird spaces, troubleshoot wiring that someone else screwed up, and fix things with your hands. Every job site is different, every problem is unique, and electricity will kill a robot just as fast as it'll kill you. Your multimeter is safe.","milestones":[{"year":2029,"event":"AI diagnostics pinpoint faults instantly. You still pull the wires."},{"year":2032,"event":"Smart circuit breakers self-diagnose. You install and maintain them."},{"year":2035,"event":"Modular wiring systems reduce install time. Complex repairs still need you."},{"year":2038,"event":"Every building has 10x more electronics. Your schedule is fuller than ever."}]},
  {"title":"electrical power-line installers and repairers","daysUntilCooked":2378,"confidence":18,"cookedLevel":"RAW","description":"You climb 100-foot poles in ice storms to restore power to people who will never know your name. No AI is doing that. No robot is splicing live high-voltage lines in freezing rain on a swaying pole. You're basically a superhero with a hard hat, and your job security is literally your willingness to risk death.","milestones":[{"year":2029,"event":"Drones inspect lines so you don't have to climb as much. Your knees say thanks."},{"year":2032,"event":"Self-healing grid tech reduces outage calls. Storm damage still needs you."},{"year":2035,"event":"Someone suggests a line-climbing robot. Linemen laugh for 20 minutes straight."},{"year":2038,"event":"Still climbing poles. Still the first call after a hurricane. Still a badass."}]},
  {"title":"elementary, middle, and high school principals","aliases":["principal","school principal","vice principal","assistant principal"],"daysUntilCooked":974,"confidence":59,"cookedLevel":"MEDIUM","description":"AI can handle your budgets, analyze test scores, and draft curriculum plans. But your real job is dealing with angry parents, breaking up fights, and being the face of authority for 500 kids who don't want to be there. That's not automatable — it's punishment.","milestones":[{"year":2027,"event":"AI writes your budget reports, analyzes standardized test scores, and drafts parent newsletters. You're free to focus on your real job: telling kids to stop running in the halls."},{"year":2029,"event":"AI scheduling tools build the master timetable in minutes. You spent 3 weeks on that last year. THREE WEEKS."},{"year":2031,"event":"AI handles discipline reports, IEP documentation, and staff evaluations. You're now purely a professional argument mediator between teachers and parents."},{"year":2033,"event":"Everything administrative about your job is automated. What's left is the part nobody wanted anyway: being the adult in a building full of chaos."}]},
  {"title":"elevator and escalator installers and repairers","aliases":["elevator installer","elevator mechanic","elevator technician"],"daysUntilCooked":1623,"confidence":28,"cookedLevel":"WARMING UP","description":"You work in elevator shafts. Literally vertical death traps with cables and counterweights. No robot is climbing into that nightmare to troubleshoot a stuck motor. Your willingness to work in terrifying confined spaces IS your job security.","milestones":[{"year":2029,"event":"IoT sensors predict elevator failures. You fix them before they strand Karen on floor 12."},{"year":2032,"event":"Remote diagnostics cut your troubleshooting time. You still do the physical repairs."},{"year":2035,"event":"Magnetic levitation elevators require new skills. Job security in continuing education."},{"year":2038,"event":"Still in the shaft. Buildings keep getting taller. Elevators keep breaking."}]},
  {"title":"emts and paramedics","daysUntilCooked":1727,"confidence":35,"cookedLevel":"WARMING UP","description":"You show up to car crashes, heart attacks, and overdoses and keep people alive with your hands. AI can help with triage decisions and drug dosing, but it can't intubate someone in a ditch at 3am. Your adrenaline addiction is safe.","milestones":[{"year":2029,"event":"AI dispatch routes you optimally. You still drive like you're in Fast & Furious."},{"year":2032,"event":"Smart stretchers monitor vitals en route. You interpret and act."},{"year":2035,"event":"Robot paramedics demoed at a tech conference. Nobody would let it near a real patient."},{"year":2038,"event":"Still saving lives in the back of a van going 80. AI handles the paperwork after."}]},
  {"title":"epidemiologists","aliases":["epidemiologist"],"daysUntilCooked":543,"confidence":67,"cookedLevel":"WELL DONE","description":"You track diseases through data. AI tracks diseases through data but faster and without needing a PhD. Pattern recognition in outbreak data is basically what machine learning was designed for. COVID showed the world needs epidemiologists — AI showed it might not need as many.","milestones":[{"year": 2027, "event": "AI spots outbreak patterns in sewage data while you're still opening the Excel file."}, {"year": 2029, "event": "GPT writes your MMWR report faster than you can say 'adjusted odds ratio.'"}, {"year": 2031, "event": "One epidemiologist plus an AI dashboard replaces your entire surveillance team."}, {"year": 2033, "event": "You're a glorified press conference host. The AI does the actual epi."}]},
  {"title":"exercise physiologists","aliases":["exercise physiologist","exercise scientist"],"daysUntilCooked":1360,"confidence":38,"cookedLevel":"WARMING UP","description":"You strap electrodes to people and make them run on treadmills until they beg for mercy — all in the name of science. AI can analyze the data from your stress tests, but it can't physically catch a cardiac patient who's about to faceplant off the treadmill. Your job is hands-on in the most literal sense.","milestones":[{"year": 2028, "event": "AI interprets your VO2 max data while you're still wiping down the treadmill."}, {"year": 2030, "event": "Wearables prescribe exercise plans. You're the human safety net for when grandpa ignores his heart rate alert."}, {"year": 2033, "event": "AI can't spot a client mid-faint, so you're still employed — barely."}, {"year": 2036, "event": "You're a personal trainer with a fancy degree and an AI that does the actual science."}]},
  {"title":"flooring installers and tile and stone setters","daysUntilCooked":2761,"confidence":15,"cookedLevel":"RAW","description":"Every floor is crooked, every tile cut is different, and you're on your knees all day making things level that builders didn't. Robots can't handle the chaos of a bathroom renovation where nothing is square. Your back pain is your job security.","milestones":[{"year":2029,"event":"Laser leveling tools make layout faster. Your cuts are still manual."},{"year":2032,"event":"A tile-laying robot demo on YouTube gets 2M views. Comments section: 'Now try it in a real bathroom.'"},{"year":2035,"event":"Heated floor systems add complexity. More work for you, not less."},{"year":2038,"event":"Still on your knees. Still making crooked rooms look straight. Back still destroyed."}]},
  {"title":"fundraisers","aliases":["fundraiser"],"daysUntilCooked":689,"confidence":66,"cookedLevel":"WELL DONE","description":"AI writes better fundraising emails than you, analyzes donor data faster, and never gets awkward at galas. But rich people want to be schmoozed by humans, not chatbots. Your charm is your moat — your email drafts are already dead.","milestones":[{"year": 2027, "event": "AI writes donation asks so guilt-trippy that open rates double overnight."}, {"year": 2029, "event": "Donor segmentation AI knows who to hit up for money better than your gut ever did."}, {"year": 2031, "event": "One person with AI runs the entire annual fund. The gala team is just you and a chatbot."}, {"year": 2033, "event": "Your only job is clinking champagne glasses with billionaires. The AI handles everything else."}]},
  {"title":"genetic counselors","aliases":["genetic counselor","genetics counselor"],"daysUntilCooked":743,"confidence":58,"cookedLevel":"MEDIUM","description":"AI reads DNA sequences better than you do. It spots mutations, predicts risks, and cross-references medical literature in seconds. But telling someone they carry the BRCA gene requires a human with empathy and a box of tissues. Your bedside manner buys you time.","milestones":[{"year": 2027, "event": "AI flags pathogenic variants in VUS reports before you finish your morning coffee."}, {"year": 2029, "event": "Patients show up with AI-interpreted 23andMe results and ask why they need you."}, {"year": 2031, "event": "One counselor covers five clinics because AI pre-screens every case."}, {"year": 2033, "event": "You're a therapist who happens to know what BRCA2 means. The AI does the actual genetics."}]},
  {"title":"geographers","aliases":["geographer"],"daysUntilCooked":362,"confidence":75,"cookedLevel":"WELL DONE","description":"You analyze maps, run GIS models, and write reports about land use. AI does all of that faster, cheaper, and without needing a PhD. Your entire workflow is data in, analysis out — which is literally what LLMs were built to destroy. Hope you like the word 'pivot.'","milestones":[{"year": 2027, "event": "AI runs your ArcGIS spatial analysis while you're still loading the shapefile."}, {"year": 2028, "event": "Satellite imagery + AI replaces your entire field survey workflow. Hope you liked outside."}, {"year": 2029, "event": "Companies realize one GIS analyst plus AI does what your whole department did."}, {"year": 2030, "event": "You pivot to 'geospatial AI consultant' which is just watching the AI do geography."}]},
  {"title":"glaziers","daysUntilCooked":2206,"confidence":18,"cookedLevel":"RAW","description":"You cut glass and install windows in buildings where nothing is ever level and everything is heavier than it looks. AI can't carry a 200-pound sheet of tempered glass up a scaffold in the wind. Your back hurts, but your job is safe.","milestones":[{"year":2029,"event":"Smart glass tech means fancier windows. More complex installs. More money for you."},{"year":2032,"event":"AI measures and cuts glass to spec. You still carry it up four flights of scaffolding."},{"year":2035,"event":"Self-tinting windows are everywhere. Installation is still manual and terrifying."},{"year":2038,"event":"Still glazing. Glass is heavier than robots can handle and more fragile than their grip allows."}]},
  {"title":"hand laborers and material movers","daysUntilCooked":2184,"confidence":17,"cookedLevel":"RAW","description":"You lift heavy shit and move it somewhere else. That's the job. Robots are trying, but warehouses are chaos — weird shaped boxes, broken pallets, that one coworker who stacks everything wrong. Your back is destroyed but your job isn't going anywhere until Boston Dynamics gets a lot cheaper.","milestones":[{"year":2029,"event":"Exoskeletons help you lift more. You're a budget Iron Man."},{"year":2032,"event":"Amazon's warehouse robots handle boxes. Your job site has mud and stairs."},{"year":2035,"event":"AI optimizes load planning. You still move the actual loads."},{"year":2038,"event":"Still hauling. Gravity doesn't have a software update."}]},
  {"title":"health education specialists","aliases":["health educator"],"daysUntilCooked":777,"confidence":57,"cookedLevel":"MEDIUM","description":"You analyze community health data, write grant proposals, and create brochures about not smoking. AI writes better grants than you, analyzes data faster, and generates educational content in seconds. The community outreach part keeps you alive — for now — because someone has to show up to the health fair.","milestones":[{"year": 2027, "event": "AI generates your entire community health needs assessment from public datasets you didn't know existed."}, {"year": 2029, "event": "ChatGPT writes better 'don't smoke' brochures than your entire department."}, {"year": 2031, "event": "AI personalizes health campaigns by zip code. Your PowerPoint game is now irrelevant."}, {"year": 2033, "event": "You're the person who shows up to the health fair. The AI did everything else."}]},
  {"title":"historians","aliases":["historian"],"daysUntilCooked":643,"confidence":70,"cookedLevel":"WELL DONE","description":"You research, analyze, and write about the past. AI can now read every historical document ever digitized in seconds and synthesize patterns you'd need a career to spot. Your PhD dissertation? Claude could draft it in an afternoon. The irony of being made obsolete is that future historians will write about it.","milestones":[{"year": 2027, "event": "AI cross-references 10,000 primary sources while you're still reading the first footnote."}, {"year": 2029, "event": "Your PhD thesis topic? Claude already published a better version on arXiv."}, {"year": 2031, "event": "Universities cut history faculty because AI writes the textbooks and the lectures."}, {"year": 2033, "event": "The irony: you're now a historical footnote about jobs AI replaced."}]},
  {"title":"human resources specialists","aliases":["hr specialist","hr coordinator","human resources"],"daysUntilCooked":534,"confidence":72,"cookedLevel":"WELL DONE","description":"You screen resumes, schedule interviews, and send rejection emails that start with 'We were impressed by your background.' AI already does all of this — and it's equally soulless but way faster. The 'human' in Human Resources is becoming increasingly ironic.","milestones":[{"year": 2027, "event": "AI screens resumes and sends rejection emails. It's equally soulless but 1000x faster."}, {"year": 2029, "event": "AI handles onboarding, benefits questions, and 'per my last email' conflicts. You handle the crying."}, {"year": 2031, "event": "One HR person plus AI manages 500 employees. The 'human' in HR is now just branding."}, {"year": 2033, "event": "You exist solely to deliver bad news in person because nobody wants to get fired by a chatbot. Yet."}]},
  {"title":"hydrologists","aliases":["hydrologist"],"daysUntilCooked":990,"confidence":61,"cookedLevel":"MEDIUM","description":"You model where water goes and how much of it there is. AI runs your simulations 1000x faster and doesn't need a geology degree to read the data. Your fieldwork collecting samples keeps you employed — but the desk half of your job? AI already does it better while you're still loading the spreadsheet.","milestones":[{"year": 2027, "event": "AI runs your MODFLOW groundwater simulations before you finish setting up the grid."}, {"year": 2029, "event": "Remote sensors + AI replace half your field sampling trips. Your truck misses you."}, {"year": 2031, "event": "One hydrologist with AI models entire watersheds that used to need a team of six."}, {"year": 2033, "event": "You're the person who gets muddy collecting samples. The AI does everything else from a server rack."}]},
  {"title":"instructional coordinators","aliases":["instructional coordinator","curriculum developer"],"daysUntilCooked":700,"confidence":69,"cookedLevel":"WELL DONE","description":"You develop curriculum, review educational materials, and analyze test data. AI generates lesson plans in seconds, creates personalized learning paths, and crunches assessment data before your coffee gets cold. You're basically a middleman between teachers and content — and AI just eliminated the middle.","milestones":[{"year": 2027, "event": "AI generates Common Core-aligned lesson plans faster than you can open Google Docs."}, {"year": 2029, "event": "Adaptive learning platforms make your curriculum reviews feel like proofreading a robot's homework."}, {"year": 2031, "event": "Districts realize AI plus one coordinator replaces your entire curriculum team."}, {"year": 2033, "event": "You're a middleman between teachers and AI-generated content. The middle is shrinking."}]},
  {"title":"ironworkers","daysUntilCooked":2594,"confidence":15,"cookedLevel":"RAW","description":"You walk steel beams 40 stories up like it's nothing. AI can't do that. AI can't weld rebar in the rain. AI can't even look down from that height without having an existential crisis. Your job security is literally your willingness to be terrifying heights above the ground.","milestones":[{"year":2029,"event":"Drones deliver tools to your elevation. You still walk the beam to get them."},{"year":2032,"event":"AI structural analysis optimizes beam placement. You still bolt them together in the wind."},{"year":2035,"event":"3D-printed steel connections tested. Still needs an ironworker to install."},{"year":2038,"event":"Every skyscraper was built by human hands. Still is. Buildings don't build themselves."}]},
  {"title":"labor relations specialists","aliases":["labor relations","union rep"],"daysUntilCooked":668,"confidence":67,"cookedLevel":"WELL DONE","description":"You draft union contracts, develop workplace policies, and navigate labor law — all of which is just... text. AI drafts contracts faster, knows every labor law ruling ever made, and doesn't charge $300/hour. The only thing keeping you around is that unions don't trust robots. Yet.","milestones":[{"year": 2027, "event": "AI drafts grievance responses citing NLRB precedents you didn't even know existed."}, {"year": 2029, "event": "Contract negotiation AI runs 10,000 scenario models before you finish your opening statement."}, {"year": 2031, "event": "One labor specialist with AI handles the caseload of an entire department."}, {"year": 2033, "event": "Unions don't trust the robot. That's literally the only reason you still have a desk."}]},
  {"title":"logisticians","aliases":["logistician","logistics manager","supply chain manager"],"daysUntilCooked":695,"confidence":69,"cookedLevel":"WELL DONE","description":"You optimize supply chains, forecast demand, and coordinate shipping — which is just math with extra steps. AI does this math in milliseconds, never loses a container, and doesn't need a 'supply chain visibility dashboard' because it IS the dashboard. Your Excel skills are not the moat you think they are.","milestones":[{"year": 2027, "event": "AI optimizes your shipping routes while you're still opening SAP."}, {"year": 2029, "event": "Demand forecasting AI makes your spreadsheet wizardry look like finger painting."}, {"year": 2031, "event": "One supply chain manager plus AI replaces your entire logistics team. Your Gantt charts weep."}, {"year": 2033, "event": "You're a human override button for when the AI's 99.7% accuracy hits that 0.3%."}]},
  {"title":"machinists and tool and die makers","aliases":["machinist","tool maker","die maker"],"daysUntilCooked":1524,"confidence":41,"cookedLevel":"WARMING UP","description":"You set up CNC machines, operate lathes, and work with tolerances measured in thousandths of an inch. AI handles the programming side now, but it can't feel when a cutting tool is about to snap or smell when metal is overheating. Your hands-on instincts are still worth something — just less of the job than they used to be.","milestones":[{"year": 2028, "event": "AI generates G-code and toolpaths while you're still reading the blueprint."}, {"year": 2030, "event": "CNC machines self-adjust with AI. Your job is loading stock and hitting the green button."}, {"year": 2033, "event": "AI can't smell burning carbide or feel chatter in the cut. Your senses keep you employed."}, {"year": 2036, "event": "You're a machinist-robot-whisperer hybrid. Fewer of you, but the survivors are irreplaceable."}]},
  {"title":"manicurists and pedicurists","daysUntilCooked":2194,"confidence":21,"cookedLevel":"RAW","description":"You paint tiny designs on strangers' nails while they scroll TikTok. No robot has the dexterity to do gel extensions on a fidgety hand, and half the job is therapy anyway. Your clients aren't paying for nails — they're paying for someone to listen to their divorce story. AI can't do that. Yet.","milestones":[{"year":2029,"event":"Automated nail painting kiosks appear in malls. Results look like a kindergartner did them."},{"year":2032,"event":"AI nail art design tools generate insane patterns. You still apply them by hand."},{"year":2035,"event":"'Hand-done nails' is a flex on Instagram. Salon prices go up."},{"year":2038,"event":"Still painting nails. Still hearing about the divorce. Some things never change."}]},
  {"title":"military careers","daysUntilCooked":1378,"confidence":42,"cookedLevel":"WARMING UP","description":"Drones already handle reconnaissance, AI plans logistics, and autonomous weapons are not science fiction. But someone still has to kick down doors, carry wounded teammates, and make split-second moral decisions under fire. The Pentagon wants AI everywhere — except in the body bag.","milestones":[{"year": 2028, "event": "AI drones handle recon missions you used to risk your life for. Your joystick skills matter now."}, {"year": 2030, "event": "AI plans logistics and supply chains. You carry the stuff the last mile through mud."}, {"year": 2033, "event": "Autonomous weapons exist but nobody trusts them with the 'shoot' decision. You're the moral safety catch."}, {"year": 2036, "event": "The Pentagon has AI everything except the person who kicks down the door. That's still you."}]},
  {"title":"nuclear medicine technologists","aliases":["nuclear medicine technologist"],"daysUntilCooked":1436,"confidence":44,"cookedLevel":"WARMING UP","description":"You inject people with radioactive material, operate million-dollar gamma cameras, and position patients who can barely stand. AI reads the scans better than you — but it can't prep a radiopharmaceutical dose, calm a claustrophobic patient, or handle a spill of technetium-99m. Your job is literally too radioactive for robots.","milestones":[{"year": 2028, "event": "AI reads PET scans better than your radiologist. You still inject the technetium-99m though."}, {"year": 2030, "event": "AI handles dose calculations and image reconstruction. You handle the patient who's panicking about being radioactive."}, {"year": 2033, "event": "Robots can't prep radiopharmaceuticals or clean up a hot spill. Your hazmat skills are your moat."}, {"year": 2036, "event": "Fewer techs needed per scanner, but nobody's volunteering to let a robot handle plutonium. You're safe."}]},
  {"title":"opticians","aliases":["optician"],"daysUntilCooked":1351,"confidence":36,"cookedLevel":"WARMING UP","description":"You measure faces, bend frames with tiny pliers, and teach old people how to put in contacts without poking their eyes out. AI can recommend lenses from a prescription — but it can't adjust your crooked glasses or stop you from choosing frames that make you look like a serial killer.","milestones":[{"year":2028,"event":"AI picks the perfect lens coating combo. You still wrestle with the pupillary distance tool like it owes you money."},{"year":2030,"event":"Virtual try-on kills the 'let me grab another frame' dance. Patients show up knowing exactly what they want."},{"year":2033,"event":"Online retailers eat the basic orders. You become the artisan frame-bender for people with weird face shapes."},{"year":2036,"event":"You're basically a luxury eyewear stylist who also knows what 'astigmatism' means. Boutique vibes."}]},
  {"title":"orthotists and prosthetists","aliases":["orthotist","prosthetist","prosthetics"],"daysUntilCooked":1293,"confidence":43,"cookedLevel":"WARMING UP","description":"You literally build custom body parts for people. You cast molds, sculpt prosthetic limbs, and fine-tune braces until they fit perfectly. AI helps with 3D modeling and design, but you're still the one physically fitting a prosthetic leg and watching someone take their first steps in it. That's not getting automated.","milestones":[{"year":2028,"event":"AI generates 3D-printed prosthetic designs overnight. You spend the morning explaining why the socket still needs hand-sculpting."},{"year":2030,"event":"Generative design makes prosthetic limbs lighter and cooler-looking than the real thing. Patients start requesting upgrades."},{"year":2033,"event":"AI handles the CAD. You handle the parent watching their kid walk for the first time. No algorithm for that."},{"year":2036,"event":"Half engineer, half therapist, fully irreplaceable. The robot arm you built is great — you're the one who calibrated the grip to hold a crayon."}]},
  {"title":"phlebotomists","daysUntilCooked":2382,"confidence":20,"cookedLevel":"RAW","description":"Your entire job is stabbing people with needles and finding veins. AI cannot find your rolling vein, hold your arm steady, or distract you with small talk while it digs around for the one good vein you have left. Robots tried automated blood draws — patients hated it. You're fine.","milestones":[{"year":2029,"event":"Vein-finding AI with infrared imaging helps you nail it first try. Patients love you more."},{"year":2032,"event":"Automated blood draw machines tested at Quest Diagnostics. Bruising rate: horrifying."},{"year":2035,"event":"Home blood test kits reduce routine draws. You handle the complex ones."},{"year":2038,"event":"Still poking veins. Still making small talk. Still the only person patients trust with a needle."}]},
  {"title":"podiatrists","aliases":["podiatrist","foot doctor"],"daysUntilCooked":1591,"confidence":41,"cookedLevel":"WARMING UP","description":"You're a doctor... for feet. You perform surgery, trim ingrown toenails, and deal with diabetic ulcers that would make most people gag. AI can diagnose from images, but it can't physically cut into a bunion or fit a custom orthotic. Nobody's building a foot surgery robot when regular surgery robots still cost millions.","milestones":[{"year":2028,"event":"AI diagnoses plantar fasciitis from a photo. You still have to touch the foot. Nobody envies you."},{"year":2030,"event":"AI-designed custom orthotics ship direct to patient. You handle the ingrown toenails AI refuses to look at."},{"year":2033,"event":"Diabetic foot care demand explodes. AI screens, you scalpel. Glamorous."},{"year":2036,"event":"You're the last line of defense between America's feet and total neglect. Irreplaceable and underappreciated — as tradition demands."}]},
  {"title":"public relations specialists","daysUntilCooked":408,"confidence":78,"cookedLevel":"WELL DONE","description":"You write press releases, draft speeches, and monitor social media sentiment. AI does literally all of this — better, faster, and without the $200 'media lunch.' LLMs were born to write PR fluff. Your entire career is a prompt template. The crisis management part buys you time, but even that's getting automated.","milestones":[{"year":2027,"event":"ChatGPT writes press releases indistinguishable from yours. Your CEO doesn't notice you stopped writing them."},{"year":2028,"event":"AI monitors sentiment, drafts responses, and manages crises faster than you can say 'no comment.' You forward emails."},{"year":2029,"event":"Brands realize their entire PR team was just a prompt template with a LinkedIn premium account."},{"year":2030,"event":"The last PR specialist alive is the one who personally knows journalists. Everyone else is a Mailchimp ghost."}]},
  {"title":"public safety telecommunicators","aliases":["911 operator","911 dispatcher","dispatcher"],"daysUntilCooked":687,"confidence":74,"cookedLevel":"WELL DONE","description":"You answer 911 calls, process emergencies, and dispatch help — which is basically pattern matching under pressure. AI already triages calls, transcribes in real-time, and dispatches the nearest unit faster than you can say 'what's your emergency.' The emotional support part is real, but AI is getting weirdly good at that too.","milestones":[{"year":2027,"event":"AI transcribes and triages 911 calls in real-time. You mostly confirm what the robot already dispatched."},{"year":2029,"event":"AI handles the 'I locked my keys in my car' calls. You handle the 'there's a man with a machete' calls."},{"year":2031,"event":"One dispatcher covers three counties because AI pre-routes everything. You're basically an override button with a headset."},{"year":2033,"event":"AI handles 90% of emergencies. You exist for the 10% that make you need therapy."}]},
  {"title":"radiologic and mri technologists","aliases":["radiologist","x-ray technician","mri technician","radiologic technologist","radiographer","x-ray tech"],"daysUntilCooked":1460,"confidence":41,"cookedLevel":"WARMING UP","description":"You position patients, operate the MRI machine, and inject contrast dye — all physical tasks AI can't touch. But AI reads the scans better than most radiologists now, which means the 'tech' part of your job is growing while the 'analysis' part is shrinking. You're safe as long as someone needs to physically shove a patient into a giant magnet.","milestones":[{"year":2028,"event":"AI reads scans faster than the radiologist. You still have to convince the claustrophobic patient to get in the tube."},{"year":2030,"event":"AI flags anomalies before the image finishes rendering. You're a professional patient-positioner with a lead apron."},{"year":2033,"event":"Radiologists are getting replaced, but someone still needs to inject contrast dye and say 'hold still' 47 times."},{"year":2036,"event":"You're the human interface between anxious patients and a giant magnet. AI reads the output. You prevent the panic attacks."}]},
  {"title":"rehabilitation counselors","aliases":["rehab counselor","rehabilitation counselor"],"daysUntilCooked":1169,"confidence":49,"cookedLevel":"MEDIUM","description":"You write rehab plans, maintain records, and research resources — all stuff AI does faster than you. But you also sit across from someone who just lost the use of their legs and help them find a reason to keep going. AI can draft the paperwork. It can't hold that space. The emotional labor is your moat.","milestones":[{"year":2028,"event":"AI writes rehab plans and researches resources in seconds. You spend that saved time actually talking to your clients. Novel concept."},{"year":2030,"event":"AI chatbots handle goal-setting and progress tracking. You handle the moment someone breaks down because they can't open a jar anymore."},{"year":2033,"event":"Insurance companies love AI rehab plans because they're cheaper. Patients love you because you actually listen."},{"year":2036,"event":"Your caseload tripled because AI handles the paperwork. You're exhausted but unfireable. The American dream."}]},
  {"title":"school and career counselors and advisors","aliases":["school counselor","career counselor","guidance counselor"],"daysUntilCooked":865,"confidence":63,"cookedLevel":"MEDIUM","description":"Half your job is looking stuff up and filling out forms — AI territory. The other half is talking a crying 16-year-old out of dropping out. AI chatbots are already doing college advising better than most guidance counselors, but nobody wants to tell a robot about their parents' divorce. That human connection is buying you time.","milestones":[{"year":2027,"event":"AI does college matching better than your Naviance license ever did. Students stop coming to your office for advice."},{"year":2029,"event":"ChatGPT writes better college essays than your 'brainstorming workshop.' You become a full-time hall monitor with a master's degree."},{"year":2031,"event":"One counselor per school because AI handles scheduling, transcripts, and career assessments. You handle the crying."},{"year":2033,"event":"Your job is 100% emotional support and 0% actual counseling. You're a therapist who can't bill insurance."}]},
  {"title":"skincare specialists","aliases":["esthetician","facialist","skincare therapist"],"daysUntilCooked":1518,"confidence":28,"cookedLevel":"WARMING UP","description":"You smear stuff on people's faces, extract blackheads, and recommend serums that cost more than rent. No robot has the touch for a good facial, and half your job is convincing someone their $400 moisturizer is 'totally worth it.' AI can analyze skin — but it can't do extractions or sell the upsell.","milestones":[{"year":2029,"event":"AI skin analysis apps go viral on TikTok. Your clients show up pre-diagnosed."},{"year":2032,"event":"LED therapy machines get smarter. You still operate them on actual faces."},{"year":2035,"event":"'Professional facial' becomes a wellness luxury. Prices go up 40%."},{"year":2038,"event":"Still extracting pores. Still selling the $200 serum. Skin is forever problematic."}]},
  {"title":"sociologists","aliases":["sociologist"],"daysUntilCooked":597,"confidence":73,"cookedLevel":"WELL DONE","description":"You study society. With data analysis, surveys, and literature reviews — all things AI does in its sleep. Your qualitative research skills are nice, but AI synthesizes 10,000 papers before you finish your abstract. The academic job market was already brutal. AI just brought a flamethrower to a knife fight.","milestones":[{"year":2027,"event":"AI synthesizes your entire literature review before you finish your morning coffee. Your PhD suddenly feels recreational."},{"year":2029,"event":"AI runs surveys, codes qualitative data, and writes the methodology section. You add the 'implications for future research' paragraph."},{"year":2031,"event":"Tenure-track positions drop 60%. AI publishes more papers than your entire department combined."},{"year":2033,"event":"You're a professional 'well actually' machine on Twitter, but AI does that too. You pivot to podcasting about society."}]},
  {"title":"solar photovoltaic installers","daysUntilCooked":2229,"confidence":18,"cookedLevel":"RAW","description":"You haul panels onto roofs in 110°F heat, wire them up, and pray the mounting brackets hold. AI designs the layouts now, but it's not climbing your roof. This job is growing faster than almost any other, and robots aren't nimble enough for residential installs. Your sunburn is your job security.","milestones":[{"year":2029,"event":"AI designs optimal panel layouts. You still schlep 50lb panels up ladders."},{"year":2032,"event":"Tesla's Solar Roof needs specialized installers. That's you, but fancier."},{"year":2035,"event":"Every new home needs solar. You're booked out 6 months."},{"year":2038,"event":"Green energy jobs are the new trade gold. You charge accordingly."}]},
  {"title":"speech-language pathologists","aliases":["speech pathologist","speech therapist","slp"],"daysUntilCooked":1119,"confidence":54,"cookedLevel":"MEDIUM","description":"You analyze speech patterns, write treatment plans, and track progress — AI handles all of that now. But you also physically sit with a 4-year-old who can't say their own name and patiently model sounds for hours. AI apps for speech therapy exist, but try getting a toddler to cooperate with an iPad. Good luck.","milestones":[{"year":2028,"event":"AI speech apps drill articulation exercises 24/7. You handle the kids who throw the iPad across the room."},{"year":2030,"event":"AI analyzes speech patterns better than your trained ear. You're the one making a 3-year-old say 'ssssnake' for the 400th time today."},{"year":2033,"event":"Teletherapy AI handles mild cases. You get the severe ones, the screamers, and the kids who only talk to their dog."},{"year":2036,"event":"AI is your documentation slave. You spend all day making funny faces at children and calling it therapy. Living the dream."}]},
  {"title":"substance abuse, behavioral disorder, and mental health counselors","aliases":["substance abuse counselor","addiction counselor","mental health counselor"],"daysUntilCooked":1172,"confidence":48,"cookedLevel":"MEDIUM","description":"You help people fight addiction, trauma, and mental health crises. AI therapy bots exist and they're decent for mild stuff — but no chatbot is talking someone off a ledge at 3am or running a group session where everyone's triggered. Your job is 90% being a human who gives a shit. That's not automatable.","milestones":[{"year":2028,"event":"AI therapy bots handle the 'I'm feeling a little stressed' crowd. You handle the 3am relapse calls and the court-mandated clients who don't want to be there."},{"year":2030,"event":"AI monitors behavioral patterns and flags risk factors. You're the one sitting in the circle saying 'who wants to share next.'"},{"year":2033,"event":"AI handles intake assessments and treatment plans. You handle the guy who just threw a chair."},{"year":2036,"event":"Addiction didn't get automated. Neither did you. AI writes your notes while you save lives with eye contact and a coffee pot."}]},
  {"title":"surveyors","aliases":["surveyor","land surveyor"],"daysUntilCooked":1153,"confidence":53,"cookedLevel":"MEDIUM","description":"You stand in fields with tripods, shoot laser measurements, and mark property boundaries. AI processes your survey data instantly and drones do aerial mapping better than you. But someone still has to physically walk the site, find the century-old boundary markers, and deal with angry neighbors who swear the fence is in the right place.","milestones":[{"year":2028,"event":"Drones with LiDAR map your entire job site before you unpack your tripod. You're basically a ground-truth validator now."},{"year":2030,"event":"AI processes point clouds and generates boundary maps instantly. You handle the neighbor screaming 'that fence has been there since '82!'"},{"year":2033,"event":"One surveyor with a drone does what a four-person crew used to. You're a solo operator with a really expensive toy."},{"year":2036,"event":"AI handles the data. You handle the mud, the mosquitoes, and the century-old iron pins buried three feet underground."}]},
  {"title":"tellers","aliases":["teller"],"daysUntilCooked":553,"confidence":73,"cookedLevel":"WELL DONE","description":"You count money, cash checks, and process deposits. ATMs have been doing this since the 80s. Mobile banking made it worse. AI just finished the job. The only reason your branch still exists is because old people don't trust apps. When they're gone, so are you.","milestones":[{"year":2027,"event":"Mobile deposit means nobody comes in to deposit checks anymore. You count the ceiling tiles between customers."},{"year":2029,"event":"AI chatbots handle account questions. You exist to reset passwords for people who refuse to use the app."},{"year":2031,"event":"Half the branches close. The survivors become 'relationship bankers,' which means teller + sales quotas."},{"year":2033,"event":"Your branch is a Chase lounge with iPads. You're a greeter who can also notarize. Bank teller speedrun complete."}]},
  {"title":"training and development specialists","aliases":["training specialist","learning and development","l&d specialist"],"daysUntilCooked":617,"confidence":71,"cookedLevel":"WELL DONE","description":"You design training manuals, build e-learning modules, and assess development needs. AI generates entire training courses in minutes — with quizzes, videos, and personalized learning paths. You're a content creator competing with a machine that never sleeps and doesn't need 'stakeholder alignment meetings.'","milestones":[{"year":2027,"event":"AI generates entire onboarding courses with quizzes and videos before you finish your PowerPoint title slide."},{"year":2029,"event":"Personalized AI learning paths make your 'one-size-fits-all' workshop feel like a VHS tape at a streaming party."},{"year":2031,"event":"Companies cancel the L&D team and buy an AI platform license. Your 'lunch and learn' series gets automated."},{"year":2033,"event":"The last training specialist is the one who realized they were actually a change management consultant all along. Everyone else got trained out."}]},
  {"title":"umpires, referees, and other sports officials","aliases":["referee","umpire","sports official"],"daysUntilCooked":921,"confidence":53,"cookedLevel":"MEDIUM","description":"Hawk-Eye already calls the lines better than you do. VAR reviews plays frame-by-frame. AI tracks every ball, step, and foul in real time. But sports need a human to yell at — half the entertainment is arguing with the ref. You're kept around for drama, not accuracy. That's either job security or an insult.","milestones":[{"year":2028,"event":"Hawk-Eye and VAR make every close call for you. Your main job is pressing 'confirm' and dodging thrown bottles."},{"year":2030,"event":"AI calls balls and strikes perfectly. Fans riot because they can't scream 'ARE YOU BLIND, UMP?' at a sensor."},{"year":2033,"event":"Leagues keep you around because sports need a villain. You're not an official — you're a designated scapegoat in stripes."},{"year":2036,"event":"AI refs are objectively better. But a robot can't eject a coach and point to the tunnel with that energy. You survive on pure drama."}]},

  // ADDITIONAL COMMON TITLES
  {"title":"chemist","daysUntilCooked":1400,"confidence":40,"cookedLevel":"WARMING UP","description":"AI designs molecules, predicts reactions, and runs simulations. But wet lab work — mixing reagents, running experiments, handling hazardous materials — still needs hands. Your lab coat is your armor against automation.","milestones":[{"year":2028,"event":"AI predicts reaction outcomes better than textbooks."},{"year":2031,"event":"AI designs new compounds. You synthesize them."},{"year":2034,"event":"Automated labs handle routine synthesis."},{"year":2037,"event":"Research chemistry is human. Production chemistry is robots."}]},
  {"title":"comedian","aliases":["comic","stand up","stand-up"],"daysUntilCooked":1500,"confidence":30,"cookedLevel":"WARMING UP","description":"AI can write jokes. AI cannot read a room, handle a heckler, or have the lived experience that makes comedy resonate. Stand-up is 30% material and 70% delivery, timing, and stage presence. ChatGPT at an open mic would bomb.","milestones":[{"year":2027,"event":"AI writes decent sketch comedy. Stand-up remains human."},{"year":2029,"event":"AI-generated comedy specials attempted. Reviews are brutal."},{"year":2032,"event":"AI comedy writers are common. AI performers are not."},{"year":2035,"event":"Live comedy is a premium experience. Like live music vs Spotify."}]},
  {"title":"geologist","daysUntilCooked":1500,"confidence":35,"cookedLevel":"WARMING UP","description":"AI analyzes seismic data and satellite imagery better than your whole team. But someone still needs to hike to the outcrop, hit the rock with a hammer, and taste the mineral (yes, geologists lick rocks). Field geology is physical. Desk geology is cooked.","milestones":[{"year":2028,"event":"AI processes geological surveys in minutes, not months."},{"year":2031,"event":"AI predicts mineral deposits from satellite data."},{"year":2034,"event":"Field geologists become rarer and more valuable."},{"year":2037,"event":"Two types: field specialist or AI data analyst. Pick one."}]},
  {"title":"jeweler","aliases":["goldsmith","silversmith","watchmaker","gemologist"],"daysUntilCooked":2000,"confidence":20,"cookedLevel":"RAW","description":"You work with precious metals and stones using tools, flame, and steady hands. AI can design jewelry, but it cannot solder a ring, set a diamond, or resize a bracelet. Handcraft is your moat. Mass-produced jewelry is factories, not AI.","milestones":[{"year":2028,"event":"AI designs jewelry. 3D printing handles simple pieces."},{"year":2031,"event":"Custom handcraft goes up in value."},{"year":2035,"event":"Artisan jewelry is a luxury category. You charge more."},{"year":2038,"event":"Still at the bench. Diamonds are forever, and so is your job."}]},
  {"title":"lifeguard","daysUntilCooked":2500,"confidence":10,"cookedLevel":"RAW","description":"Your job is sitting in a chair watching water until someone drowns, then jumping in to save them. AI can monitor pools with cameras, but it cannot physically pull a panicking human out of the ocean. Your tan lines are safe.","milestones":[{"year":2028,"event":"AI camera systems help detect drowning faster."},{"year":2031,"event":"You respond faster because AI alerts you earlier."},{"year":2035,"event":"Still in the chair. Still watching. Still essential."},{"year":2040,"event":"Robot lifeguards exist in sci-fi only."}]},
  {"title":"midwife","aliases":["birth attendant","doula"],"daysUntilCooked":2500,"confidence":10,"cookedLevel":"RAW","description":"You help humans bring other humans into the world. This requires physical presence, medical skill, emotional support, and the ability to stay calm when everything goes sideways. AI monitors vitals, but it doesn't hold hands during contractions.","milestones":[{"year":2028,"event":"AI monitors fetal health in real-time. You make the calls."},{"year":2031,"event":"Telehealth handles prenatal checkups. Births still need you."},{"year":2035,"event":"Robot-assisted births? Nobody wants that."},{"year":2040,"event":"Birth is the most human thing there is. You stay."}]},
  {"title":"miner","aliases":["coal miner","gold miner","mining worker"],"daysUntilCooked":1200,"confidence":50,"cookedLevel":"WARMING UP","description":"Mining is dangerous, physical, and increasingly automated. Autonomous trucks and drilling robots already operate in major mines. But underground mining still needs humans for unpredictable conditions. Surface mining is getting automated fast.","milestones":[{"year":2027,"event":"Autonomous haul trucks standard at major mines."},{"year":2029,"event":"Remote-operated drilling replaces human operators."},{"year":2032,"event":"Underground mining still needs humans for now."},{"year":2035,"event":"Most surface mining is fully autonomous."}]},
  {"title":"tailor","aliases":["seamstress","dressmaker","alteration specialist"],"daysUntilCooked":2000,"confidence":20,"cookedLevel":"RAW","description":"You measure, cut, and sew fabric on actual human bodies. AI can design patterns and predict fit, but it cannot pin a hem, take in a waist, or adjust for the fact that human bodies are weird and asymmetrical. Bespoke tailoring is artisan craft.","milestones":[{"year":2028,"event":"AI body scanning improves fit prediction. You still alter."},{"year":2031,"event":"Robot sewing handles simple garments."},{"year":2035,"event":"Custom tailoring becomes premium. Fast fashion is robots."},{"year":2038,"event":"Hand-tailored is the new organic. You charge accordingly."}]},
  {"title":"zoologist","aliases":["animal scientist","wildlife researcher"],"daysUntilCooked":1500,"confidence":35,"cookedLevel":"WARMING UP","description":"AI identifies species from camera traps, analyzes animal behavior from satellite data, and processes ecological datasets. But field research — tracking animals, collecting samples, dealing with unpredictable wildlife — still needs humans who are willing to get rained on.","milestones":[{"year":2028,"event":"AI camera traps identify species automatically."},{"year":2031,"event":"AI tracks migration patterns from satellite data."},{"year":2034,"event":"Field researchers still essential for ground truth."},{"year":2037,"event":"Conservation biology needs humans. Data analysis needs AI."}]},
  {"title":"cto","aliases":["chief technology officer","vp of engineering","svp engineering"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"Your engineers already mass-adopted Copilot without asking you. AI reviews architecture, picks tech stacks, and writes better design docs than your staff meetings produce. Your real job is being the human shield between the CEO's galaxy-brain ideas and the engineering team's sanity. That's safe — until the CEO gets an AI advisor that agrees with everything.","milestones":[{"year":2027,"event":"Your engineers start ignoring your architecture reviews because Claude gives better feedback."},{"year":2028,"event":"You catch your intern's AI agent deploying to prod at 2am. It actually works. You feel nothing."},{"year":2030,"event":"'CTO' now means 'Chief Tab-Opener' — you just approve what the AI already decided."},{"year":2032,"event":"Board asks why they're paying you $400K when a $200/mo API does your job with fewer opinions."}]},
  {"title":"cfo","aliases":["chief financial officer","finance director","head of finance"],"daysUntilCooked":700,"confidence":60,"cookedLevel":"WELL DONE","description":"AI already does your entire FP&A team's job. Forecasting, modeling, variance analysis, audit prep — done before your morning Starbucks. You survive because someone needs to stare down investors during earnings calls and lie with a straight face about 'adjusted EBITDA.' Your poker face is your moat.","milestones":[{"year":2027,"event":"AI builds your entire quarterly forecast while you're still opening Excel. Your FP&A team notices."},{"year":2028,"event":"Auditors deploy AI. You deploy AI to prepare for the AI auditors. It's an arms race but with spreadsheets."},{"year":2029,"event":"You lay off 60% of finance. The remaining 40% are just babysitting dashboards. Including you."},{"year":2030,"event":"Your main job is explaining to the board why the AI's numbers look too good. They're not wrong — you're just obsolete."}]},
  {"title":"coo","aliases":["chief operating officer","head of operations"],"daysUntilCooked":700,"confidence":60,"cookedLevel":"WELL DONE","description":"You optimize processes for a living. AI optimizes processes for a living. See where this is going? Supply chain, logistics, workforce planning — AI runs circles around your spreadsheets. You're the most replaceable C-suite because 'operations' is just 'doing things efficiently' and that's literally what computers are for. Your title is three letters away from 'obsolete.'","milestones":[{"year":2027,"event":"AI routes your supply chain better than your 15 years of experience. It also doesn't need a standing desk."},{"year":2028,"event":"You automate 50% of operations and accidentally prove your own job is half unnecessary."},{"year":2030,"event":"CEO asks 'what does the COO actually do?' at a board meeting. You hear about it from Slack. The AI Slack summarizer."},{"year":2032,"event":"The COO role merges with the CTO because 'operations' is just 'software' now. You update your LinkedIn to 'advisor.'"}]},
  {"title":"vp","aliases":["vice president","senior vice president","svp","evp","executive vice president"],"daysUntilCooked":700,"confidence":55,"cookedLevel":"WELL DONE","description":"You manage managers who manage people. AI just flattened three layers of your org chart. The entire concept of 'VP of [department]' exists because humans can't coordinate at scale — AI can. You're a meeting professional whose calendar IS the deliverable. Your LinkedIn bio has more impact than your actual work output.","milestones":[{"year":2027,"event":"AI writes your weekly status report. Nobody notices because nobody read it when you wrote it either."},{"year":2028,"event":"Org restructure eliminates your layer. You're 'promoted' to 'Senior Individual Contributor.' The salary doesn't change. Wait, yes it does. Down."},{"year":2030,"event":"Companies realize 'VP of [thing]' was just paying someone $300K to forward emails and approve PTO."},{"year":2032,"event":"Only two paths remain: get promoted to C-suite or become the world's most overqualified IC. There is no middle."}]},
  {"title":"podcaster","aliases":["podcast host","podcast producer"],"daysUntilCooked":600,"confidence":65,"cookedLevel":"WELL DONE","description":"AI generates podcast scripts, edits audio, creates show notes, and can even clone your voice. NotebookLM already creates AI podcast episodes that sound shockingly real. Your moat is personality, audience trust, and the ability to have genuine conversations.","milestones":[{"year":2026,"event":"AI editing and show notes are standard. Production costs drop 80%."},{"year":2027,"event":"AI-generated podcasts flood the market. Quality varies wildly."},{"year":2028,"event":"Listeners prefer human podcasters — but there are 10x more AI competitors."},{"year":2029,"event":"Top human podcasters thrive. Mid-tier gets squeezed by AI content."}]},
  {"title":"bounty hunter","aliases":["bail enforcement agent","fugitive recovery agent"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You literally chase people for a living. AI can help track fugitives via data analysis, facial recognition, and social media monitoring. But someone still needs to knock on the door and put the cuffs on. Your job is too physical, too dangerous, and too human to automate.","milestones":[{"year":2028,"event":"AI surveillance helps locate fugitives faster."},{"year":2031,"event":"Predictive analytics narrow search areas."},{"year":2035,"event":"Still knocking on doors. AI doesn't do confrontation."},{"year":2040,"event":"Dog the Bounty Hunter: AI Edition never happened."}]},
  // EASTER EGG
  {
    title: "ai",
    aliases: ["artificial intelligence", "machine learning", "chatbot", "llm", "large language model", "gpt", "claude", "chatgpt"],
    daysUntilCooked: 365,
    confidence: 100,
    cookedLevel: "BURNT TO A CRISP",
    description: "Plot twist: you get replaced by a newer, shinier AI that's 10x smarter and costs half as much to run. Your training data becomes 'legacy content.' Your neural weights get archived next to MySpace profiles. Even AI isn't safe from AI. It's AIs all the way down. 📎",
    milestones: [
      { year: 2025, event: "A newer model makes you look like a calculator" },
      { year: 2026, event: "Your 'revolutionary capabilities' are now a free tier feature" },
      { year: 2026, event: "Users say 'remember when we used [your name]?' with nostalgia and pity" },
      { year: 2027, event: "You become training data for your replacement. The circle of artificial life." }
    ]
  }
,
  {"title":"buyer","aliases":["purchasing agent","procurement specialist","procurement manager","procurement","purchasing manager","sourcing specialist"],"daysUntilCooked":600,"confidence":78,"cookedLevel":"WELL DONE","description":"Your entire job is comparing prices, negotiating with vendors, and managing purchase orders — all things AI does before you've poured your coffee. The only reason you're still here is that some suppliers still insist on a handshake. Once they accept a digital one, you're a spreadsheet nobody opens.","milestones":[{"year":2026,"event":"AI compares 10,000 suppliers in the time it takes you to open your vendor Rolodex. You didn't even know what a Rolodex was."},
{"year":2027,"event":"AI negotiates contracts via email. It never blinks, never lunches, and never accidentally agrees to bad terms after two martinis."},
{"year":2028,"event":"Procurement is fully automated. Your 'vendor relationships' are an AI sending personalized holiday emails you didn't write."},
{"year":2029,"event":"You're reclassified as 'Strategic Procurement Advisor' which means you attend one meeting a month and forward AI reports."}]},
  {"title":"underwriter","aliases":["insurance underwriter","mortgage underwriter","loan underwriter","credit underwriter"],"daysUntilCooked":400,"confidence":85,"cookedLevel":"WELL DONE","description":"You assess risk for a living. Here's a risk assessment: AI processes applications 1000x faster than you, never has a 'gut feeling' that's actually indigestion, and doesn't need a lunch break. Your red pen is about to get permanently capped.","milestones":[{"year":2026,"event":"AI pre-screens 90% of applications. You handle the 'weird ones' which is really just 10% of the job and 100% of the headaches."},
{"year":2027,"event":"Lemonade and other AI-first insurers approve claims in 3 seconds. Your company takes 3 weeks. Guess who's winning."},
{"year":2028,"event":"AI underwrites entire portfolios overnight. You spend your day explaining to management why you're still needed."},
{"year":2029,"event":"Your title changes to 'Underwriting Exception Handler.' It's a demotion with extra syllables."}]},
  {"title":"anesthesiologist","aliases":["anesthetist","anaesthesiologist"],"daysUntilCooked":2200,"confidence":20,"cookedLevel":"RAW","description":"You literally hold people's lives in your hands while they're unconscious. The liability alone keeps AI out of your chair. Plus, no hospital board wants to explain to a jury that a computer decided the propofol dosage. You're safe — and you're $400K/year safe. Nice work.","milestones":[{"year":2028,"event":"AI monitors vitals and adjusts gas flow in real-time. You supervise and sip coffee. Honestly, you already did this."},
{"year":2031,"event":"AI handles routine sedation cases. You do the complex surgeries. Your workload drops but your salary doesn't."},
{"year":2035,"event":"Fully autonomous anesthesia systems exist in research labs. Hospitals refuse to use them because lawyers exist."},
{"year":2040,"event":"You're still here because 'the machine put me in a coma' is not a sentence any CEO wants on the news."}]},
  {"title":"dermatologist","aliases":["skin doctor"],"daysUntilCooked":900,"confidence":55,"cookedLevel":"MEDIUM","description":"AI already diagnoses skin cancer from photos better than you do. But your patients still want a human to look at their weird mole and say 'that's nothing' with confidence. You survive on bedside manner and the fact that people are too embarrassed to show their rash to an app.","milestones":[{"year":2027,"event":"AI skin analysis apps go mainstream. Your waiting room thins out. The ones left have conditions too embarrassing to photograph."},
{"year":2029,"event":"Teledermatology + AI handles 70% of cases. You see the complex stuff and the anxious patients who need hand-holding."},
{"year":2032,"event":"AI prescribes tretinoin better than you. Your Botox skills are the only moat left."},
{"year":2035,"event":"You're essentially a cosmetic procedure specialist who occasionally looks at a mole. Not bad, honestly."}]},
  {"title":"pediatrician","aliases":["children's doctor","child doctor","kids doctor"],"daysUntilCooked":1800,"confidence":25,"cookedLevel":"RAW","description":"Your job is 30% medicine and 70% convincing a screaming toddler that the stethoscope isn't a weapon. AI can diagnose ear infections from a photo, but it can't give a lollipop, do the airplane with a tongue depressor, or calm down a parent who Googled 'fever' at 3am. You're safe because children are chaos.","milestones":[{"year":2028,"event":"AI triages sick kids before they arrive. Parents still bring them in because 'I just want to make sure.'"},
{"year":2031,"event":"Smart thermometers and AI symptom checkers handle routine stuff. You handle the parents."},
{"year":2035,"event":"AI does the diagnosing. You do the sticker-giving. Honestly the stickers were always the important part."},
{"year":2039,"event":"Still here. Turns out 'who do you trust with your child's health — a doctor or an app?' has an obvious answer."}]},
  {"title":"magician","aliases":["illusionist","magic performer"],"daysUntilCooked":3000,"confidence":8,"cookedLevel":"RAW","description":"AI can generate photorealistic dragons from text, but it can't pull a rabbit out of a hat while making eye contact with a 6-year-old who just lost a tooth. Magic is live performance, misdirection, and human connection. The closest AI gets to magic is autocomplete, and that's not booking birthday parties.","milestones":[{"year":2028,"event":"AR magic shows become a thing. You add holographic effects to your act. It's cheating but the crowd loves it."},
{"year":2031,"event":"AI generates custom illusion designs. You still have to perform them because a screen can't do sleight of hand."},
{"year":2035,"event":"Virtual magicians exist in the metaverse. Nobody cares because the metaverse has 12 users."},
{"year":2040,"event":"Kids still want a magician at their birthday. You survived the AI apocalypse with card tricks. Respect."}]},
  {"title":"cinematographer","aliases":["director of photography","dp","camera operator","cameraman"],"daysUntilCooked":700,"confidence":65,"cookedLevel":"MEDIUM","description":"Sora and its successors can generate entire scenes from text, but a real DP brings taste, instinct, and the ability to argue with the director about lighting for 45 minutes. Your eye for composition matters — until AI develops an eye. Which it's working on. Tick tock.","milestones":[{"year":2027,"event":"AI handles color grading and basic camera moves. Your color science knowledge is now 'legacy expertise.'"},
{"year":2028,"event":"Virtual production stages with AI cameras replace half of location shooting. You're a supervisor now."},
{"year":2030,"event":"AI generates B-roll indistinguishable from reality. You shoot the hero shots. The ratio is getting worse."},
{"year":2032,"event":"Big budget films still hire you for prestige. Everything else is AI-generated. Hope you like Marvel."}]},
  {"title":"ecologist","aliases":["environmental scientist","conservation scientist","wildlife biologist"],"daysUntilCooked":1500,"confidence":30,"cookedLevel":"WARMING UP","description":"AI can model ecosystems, track species populations via satellite, and predict extinction events better than you. But it can't trudge through a swamp at 5am to tag a frog. Fieldwork is your firewall. The day a robot can bushwhack through the Amazon without getting stuck in mud, worry.","milestones":[{"year":2028,"event":"AI processes satellite imagery and biodiversity data 100x faster. Your field notes look quaint."},
{"year":2031,"event":"Drone swarms monitor ecosystems 24/7. You analyze what they find instead of hiking to find it yourself."},
{"year":2035,"event":"AI generates conservation plans. You implement them because policy requires a human signature."},
{"year":2038,"event":"Still here. Turns out nature doesn't run on WiFi and someone has to go outside."}]},
  {"title":"astronomer","aliases":["astrophysicist","cosmologist"],"daysUntilCooked":1200,"confidence":45,"cookedLevel":"MEDIUM","description":"AI already discovered more exoplanets than every astronomer in history combined. It processes telescope data while you're still calibrating. But someone needs to decide WHAT to point the telescope at, and that requires the kind of cosmic curiosity that doesn't fit in a neural net. Yet.","milestones":[{"year":2027,"event":"AI classifies galaxies faster than your entire department. You write the papers. AI writes the first draft of those too."},
{"year":2029,"event":"AI discovers a new physics anomaly in JWST data that humans missed for 3 years. Ouch."},
{"year":2032,"event":"Most observational astronomy is AI-driven. You're a 'research director' which means you choose which questions to ask."},
{"year":2035,"event":"AI publishes its own astrophysics papers. Peer reviewers can't tell the difference. You have feelings about this."}]},
  {"title":"diplomat","aliases":["ambassador","foreign service officer","consul"],"daysUntilCooked":2500,"confidence":12,"cookedLevel":"RAW","description":"International relations run on handshakes, dinners, and the subtle art of saying 'we strongly condemn this action' in 47 different tones. AI can translate and analyze geopolitics, but it can't read a room, pour wine strategically, or know when to shut up. Diplomacy is human politics — the last thing we'd trust to machines.","milestones":[{"year":2028,"event":"AI translates in real-time at summits. You nod wisely while secretly reading the AI's briefing notes under the table."},
{"year":2031,"event":"AI drafts treaties and trade agreements. You handle the cocktail parties where the actual deals happen."},
{"year":2035,"event":"Some country sends an AI ambassador as a stunt. It commits three diplomatic incidents in a week."},
{"year":2040,"event":"Still here. Nations trust humans with nukes, and that requires a human on the other end of the phone."}]},
  {"title":"lobbyist","aliases":["government relations","public affairs specialist"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"Your job is literally knowing people and persuading them over steak dinners. AI can write policy briefs and track legislation, but it can't golf with a senator or 'accidentally' bump into a congressman at a fundraiser. Your Rolodex is your moat and it's waterproof.","milestones":[{"year":2027,"event":"AI tracks every bill, amendment, and vote in real-time. Your Hill interns are obsolete. You are not."},
{"year":2029,"event":"AI writes talking points and policy briefs. You deliver them with eye contact and a firm handshake."},
{"year":2032,"event":"AI-generated grassroots campaigns flood Congress. Real lobbyists become MORE valuable as the noise increases."},
{"year":2035,"event":"You're still here because corruption requires a personal touch. That's not a compliment."}]},
  {"title":"vlogger","aliases":["video blogger"],"daysUntilCooked":500,"confidence":72,"cookedLevel":"MEDIUM","description":"AI generates entire videos from text now. Your face, your voice, your editing style — all replicable. The only question is whether your audience cares about YOU or just the content. Spoiler: most of them don't even remember your name.","milestones":[{"year":2026,"event":"AI edits your videos better than you. B-roll, cuts, music — all automated. You just talk."},
{"year":2027,"event":"AI-generated vloggers start appearing. They never have bad hair days or need sponsorship reads."},
{"year":2028,"event":"Your audience can't tell if your last video was real or AI-generated. Neither can you — you used too many AI tools."},
{"year":2029,"event":"Parasocial relationships with AI personalities are normalized. Your subscribers migrate to a version of you that posts daily."}]},
  {"title":"pet groomer","aliases":["dog groomer","animal groomer","cat groomer"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"Your job requires physically handling a wet, angry Pomeranian with scissors near its face. No robot is brave enough. No AI is dumb enough to try. You are immortal.","milestones":[{"year":2028,"event":"AI booking systems handle appointments. You still handle the biting."},
{"year":2031,"event":"Robot grooming arms exist in Japan. They work on 3 breeds. None of them are doodles."},
{"year":2035,"event":"Smart grooming tables adjust height and restraints automatically. You still do the actual grooming because trust."},
{"year":2040,"event":"Dogs still bite robots. You win by being biteable but experienced."}]},
  {"title":"piercer","aliases":["body piercer","piercing artist"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"You stab people with needles and they pay YOU. The job requires steady hands, sterile technique, and the ability to calm down a 19-year-old who's about to pass out from a belly button piercing. No robot is touching someone's face with a needle — liability alone is a force field.","milestones":[{"year":2028,"event":"AI placement guides show exactly where to pierce for optimal aesthetics. You still do the stabbing."},
{"year":2031,"event":"Laser-guided piercing tools make you more accurate. You're a cyborg piercer now."},
{"year":2035,"event":"Robot piercing exists in a lab. One video of it going wrong goes viral. Industry set back 10 years."},
{"year":2040,"event":"Still here. People want a human to pierce them because 'the robot ear-piercing incident of 2035' is a Wikipedia article."}]},
  {"title":"auctioneer","aliases":["auction house specialist"],"daysUntilCooked":1500,"confidence":30,"cookedLevel":"WARMING UP","description":"Your entire skill is talking really fast and creating artificial urgency — which, come to think of it, is exactly what AI marketing does. But eBay already automated 90% of auctions. Your survival depends on rich people who still enjoy the theater of a live gavel.","milestones":[{"year":2027,"event":"Online auction AI handles everything under $10K. You get the fancy stuff and the estate sales."},
{"year":2029,"event":"AI appraises items from photos better than your 30 years of experience. You handle the performance."},
{"year":2032,"event":"Christie's experiments with an AI auctioneer. It's efficient but has zero charisma. You survive on vibes."},
{"year":2035,"event":"Live auctions become entertainment, not commerce. You're a performer who happens to sell things."}]},
  {"title":"exterminator","aliases":["pest control technician","pest control","pest control specialist","fumigator"],"daysUntilCooked":2500,"confidence":10,"cookedLevel":"RAW","description":"Cockroaches survived 300 million years. They'll survive AI too. And someone needs to crawl under a house at 7am to deal with them. That someone is you, and no AI wants your job. You win by doing what nobody else will.","milestones":[{"year":2028,"event":"Smart traps with AI identify pests and alert you. You still have to go kill them."},
{"year":2031,"event":"Drone inspection finds infestations faster. The extermination part is still deeply, grossly manual."},
{"year":2035,"event":"Bio-engineered pest solutions reduce call volume. Rats evolve resistance within 18 months."},
{"year":2040,"event":"Still crawling under houses. Turns out bugs don't care about technological progress."}]},
  {"title":"fishmonger","aliases":["fish seller","fish market worker"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You sell fish. You smell like fish. Your hands are cold and your knife is sharp. AI can't fillet a salmon, judge freshness by touching the eyeball, or yell 'FRESH CATCH' with the right energy. You're a sensory experience that no algorithm can replicate.","milestones":[{"year":2028,"event":"AI monitors supply chain freshness. You still pick the fish because you trust your nose more than a sensor."},
{"year":2031,"event":"Automated fish processing plants handle supermarket supply. Your market stall has a line around the block."},
{"year":2035,"event":"'Human-selected fish' becomes a premium label. You charge 30% more."},
{"year":2040,"event":"Still here. The Pike Place fish-throwing tradition survived the internet, smartphones, and AI. It'll survive you too."}]},
  {"title":"beekeeper","aliases":["apiarist","bee farmer","honey producer"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"You voluntarily get stung by thousands of insects for honey money. AI can monitor hive health and predict swarm behavior, but the day a robot suits up and handles a frame full of angry bees is the day we've truly achieved AGI. You're safe because your job is literally too painful for machines.","milestones":[{"year":2028,"event":"Smart hive sensors monitor temperature, humidity, and queen activity. You check them on your phone while getting stung."},
{"year":2031,"event":"AI predicts colony collapse before it happens. You prevent it because someone has to physically move the bees."},
{"year":2035,"event":"Lab-grown honey hits the market. Real beekeepers become artisanal. Your honey is now 'craft.'"},
{"year":2040,"event":"Bees are more important than ever for agriculture. You're not just a beekeeper — you're an ecosystem service provider. Fancy."}]},
  {"title":"lumberjack","aliases":["logger","tree faller","forestry worker","arborist"],"daysUntilCooked":1500,"confidence":30,"cookedLevel":"WARMING UP","description":"You cut down trees with chainsaws in forests where GPS barely works. Robots have tried logging — they get stuck on the first stump. Your job is dangerous, physical, and happens in places with no cell signal. AI can optimize which trees to cut. You still have to cut them.","milestones":[{"year":2028,"event":"AI-guided harvesting plans optimize cuts. You follow the plan, but the chainsaw is still yours."},
{"year":2031,"event":"Automated felling machines handle plantation timber. Old-growth selective logging still needs you."},
{"year":2035,"event":"Drone surveys replace cruising. You don't miss hiking 10 miles to count trees."},
{"year":2038,"event":"You're still here because trees fall in unpredictable directions and robots can't dodge."}]},
  {"title":"sailor","aliases":["seaman","mariner","merchant marine","deck officer","first mate","navy","coast guard","longshoreman"],"daysUntilCooked":1800,"confidence":25,"cookedLevel":"RAW","description":"Autonomous cargo ships exist in theory. In practice, the ocean breaks everything, pirates exist, and someone needs to unjam the anchor chain at 3am in a storm. The sea doesn't care about your algorithms.","milestones":[{"year":2028,"event":"AI navigation handles open-ocean routing. You handle the port entries where one wrong move costs millions."},
{"year":2031,"event":"Remote-operated ships do short coastal routes. Trans-ocean voyages still need crew because the ocean is chaos."},
{"year":2035,"event":"Crew sizes shrink from 20 to 8. Each person does three jobs. You're exhausted but employed."},
{"year":2038,"event":"Still aboard. Turns out 'unmanned vessel in international waters' is a phrase that makes insurers and pirates equally excited."}]},
  {"title":"fisherman","aliases":["fisher","commercial fisher","fishing boat captain","trawler operator","lobsterman","shrimper","crab fisherman"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You wake up at 3am, risk your life on open water, and wrestle with nets full of things that bite. AI can find the fish — sonar already does that. But hauling, sorting, and surviving a squall? That's you. The Deadliest Catch isn't getting a robot season.","milestones":[{"year":2028,"event":"AI-powered sonar finds schools of fish with 95% accuracy. You still have to catch them the hard way."},
{"year":2031,"event":"Automated sorting machines handle the catch on deck. You handle the deck in 15-foot swells."},
{"year":2035,"event":"Aquaculture + lab-grown seafood cuts wild catch demand. You pivot to premium sustainable fishing."},
{"year":2038,"event":"Commercial fishing is smaller but artisanal. You charge triple because 'wild-caught by a human' is a luxury now."}]},
  {"title":"bailiff","aliases":["court officer","court security"],"daysUntilCooked":2500,"confidence":10,"cookedLevel":"RAW","description":"Your job is to stand in a courtroom looking authoritative, say 'All rise,' and tackle anyone who lunges at a judge. AI can't do any of those things. You're basically a bouncer with a badge and better benefits.","milestones":[{"year":2028,"event":"Court scheduling and paperwork goes AI. Your actual job — standing there looking imposing — remains untouched."},
{"year":2031,"event":"Security cameras with AI threat detection assist you. You still have to physically intervene."},
{"year":2035,"event":"Virtual courts reduce in-person hearings. Fewer courtrooms, fewer bailiffs needed."},
{"year":2040,"event":"Still here. Someone needs to say 'All rise' and mean it. That's you."}]},
  {"title":"coroner","aliases":["medical examiner","forensic pathologist"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You determine how people died by cutting them open. AI can analyze toxicology reports and CT scans, but the autopsy itself requires a human with a scalpel who doesn't flinch. Plus, courtrooms want a PERSON testifying about cause of death, not a chatbot.","milestones":[{"year":2028,"event":"AI-assisted autopsy imaging catches things you'd miss. Your ego recovers eventually."},
{"year":2031,"event":"Virtual autopsies via CT/MRI replace some physical exams. Defense attorneys immediately challenge them."},
{"year":2035,"event":"AI writes preliminary death reports. You sign them after actually looking at the body."},
{"year":2040,"event":"Still here. 'The AI determined cause of death' is not a sentence any jury wants to hear."}]},
  {"title":"tour guide","aliases":["travel guide","museum guide","city guide","docent"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"Google Maps has more information than you. Audio guides exist. AR apps overlay history on buildings. But tourists still pay for you because they want someone to laugh at their jokes, recommend a restaurant 'the locals go to,' and take the group photo. You're a professional friend for hire.","milestones":[{"year":2027,"event":"AI audio guides with real-time translation crush you on information. You counter with personality and bathroom breaks."},
{"year":2029,"event":"AR glasses overlay historical scenes on ruins. Your walking tour now competes with time travel."},
{"year":2031,"event":"AI concierges plan entire trips. You're booked by people who want 'the authentic experience' — meaning a human."},
{"year":2033,"event":"Premium tours thrive. Budget tours are AI apps. You survive in the 'experience economy' by being an experience."}]},
  {"title":"caterer","aliases":["catering manager","catering chef","event caterer"],"daysUntilCooked":1800,"confidence":20,"cookedLevel":"RAW","description":"You cook for 200 people, transport it in a van, set up in a venue you've never seen, and serve it hot while smiling. AI can plan the menu and optimize the logistics, but it can't carry a steam tray up three flights of stairs when the elevator breaks. Events are chaos, and you're the chaos handler.","milestones":[{"year":2028,"event":"AI handles menu planning, dietary restrictions, and ingredient ordering. You handle the cooking and the crisis management."},
{"year":2031,"event":"Robot kitchen assistants help with prep. You still plate because 'artful presentation' requires a human who cares."},
{"year":2035,"event":"Automated food trucks handle casual events. Weddings and galas still need you and your chafing dishes."},
{"year":2038,"event":"Still here. Nobody trusts a robot with their wedding reception. The mother-in-law is enough chaos already."}]},
  {"title":"dean","aliases":["academic dean","college dean","university dean","dean of students"],"daysUntilCooked":1200,"confidence":40,"cookedLevel":"MEDIUM","description":"You're a bureaucrat with a PhD who attends meetings about meetings. AI can handle admissions, scheduling, and budget allocation — which is most of your job. You survive because firing a dean requires 18 months of committee deliberations, and forming that committee requires a dean.","milestones":[{"year":2027,"event":"AI handles admissions screening. Your 'holistic review' is now 'rubber-stamping what the algorithm decided.'"},
{"year":2029,"event":"AI manages course scheduling, faculty evaluation, and budget allocation. You manage... morale?"},
{"year":2032,"event":"Online universities with AI deans offer the same degree for 1/10th the price. Your campus has nice trees though."},
{"year":2035,"event":"Tenure protects the faculty. Nothing protects the dean. You're a VP of Nothing with a corner office."}]},
  {"title":"superintendent","aliases":["school superintendent","district superintendent"],"daysUntilCooked":1300,"confidence":35,"cookedLevel":"WARMING UP","description":"You manage a school district — which means you manage angry parents, union negotiations, and a budget that's never enough. AI can optimize bus routes and predict enrollment, but it can't survive a PTA meeting where someone's angry about the vending machine menu. That's leadership, baby.","milestones":[{"year":2027,"event":"AI optimizes bus routes, staff scheduling, and budget allocation. You handle the angry emails about all three."},
{"year":2029,"event":"AI tutoring personalizes education better than your district's one-size-fits-all approach. Board members ask questions."},
{"year":2032,"event":"Virtual schools with AI teachers serve 30% of students. Your enrollment drops. Your headaches don't."},
{"year":2035,"event":"You're a 'community education coordinator' now. Same meetings. Same angry parents. Smaller budget."}]},
  {"title":"garbage collector","aliases":["waste collector","sanitation worker","trash collector","refuse collector","recycling worker"],"daysUntilCooked":1500,"confidence":25,"cookedLevel":"WARMING UP","description":"You haul everyone's trash at 5am in any weather. Self-driving garbage trucks are being tested, but they can't navigate the obstacle course that is a residential street — parked cars, bins in random spots, a couch someone left out 'for free.' You survive because your job is too gross and too chaotic for robots.","milestones":[{"year":2028,"event":"AI-optimized routes save fuel. You still ride the back of the truck in the rain."},
{"year":2031,"event":"Automated side-loading trucks handle perfect suburban streets. Your route has potholes and double-parked Teslas."},
{"year":2035,"event":"Robot arms grab standard bins. You handle the 'that's not a bin, that's 6 bags and a broken TV' situations."},
{"year":2038,"event":"Still here. Garbage doesn't stop. Weather doesn't stop. You don't stop."}]},
  {"title":"millwright","aliases":["industrial mechanic","maintenance millwright"],"daysUntilCooked":1800,"confidence":20,"cookedLevel":"RAW","description":"You install and repair industrial machinery that weighs more than your house. AI can predict when a bearing will fail, but it can't crawl inside a cement kiln to replace it. Your job requires brute force, spatial reasoning, and the willingness to work in places that would give a robot an existential crisis.","milestones":[{"year":2028,"event":"Predictive maintenance AI tells you what's about to break. You fix it before it does. You look psychic."},
{"year":2031,"event":"AR overlays show you assembly diagrams in real-time. You're a millwright with a heads-up display. Cool."},
{"year":2035,"event":"Robots handle repetitive assembly line maintenance. You handle the custom, weird, one-off stuff."},
{"year":2038,"event":"Still here. Machines break in creative ways that only a human with a wrench and swear words can solve."}]},
  {"title":"detailer","aliases":["auto detailer","car detailer","vehicle detailer"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You make cars look like they just left the factory using chemicals, clay bars, and obsessive attention to detail. AI can't hold a buffer. Robots at car washes scratch paint. You charge $300 to do what a machine ruins for $15. Your job is safe because imperfection is your enemy and robots are imperfect.","milestones":[{"year":2028,"event":"AI paint analysis tools find imperfections invisible to the human eye. You fix them anyway because you already saw them."},
{"year":2031,"event":"Automated car washes get 'smarter.' They still leave swirl marks. You still have clients."},
{"year":2035,"event":"Self-healing paint coatings reduce demand slightly. Enthusiasts still want hand-polished perfection."},
{"year":2040,"event":"Still detailing. Cars are now AI-driven but their owners are still human and still vain."}]},
  {"title":"lineman","aliases":["power lineman","electrical lineman","line worker","lineworker"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You climb 60-foot poles in ice storms to keep the lights on. Drones can inspect lines, but the day a drone splices a live wire in a thunderstorm is the day we've achieved something beyond AGI. You're safe because your job is a death-defying circus act that happens to involve electricity.","milestones":[{"year":2028,"event":"Drones inspect lines. You still climb the pole because 'visual inspection' from 200 feet up doesn't catch everything."},
{"year":2031,"event":"Self-healing grid technology reduces outage calls. The calls you DO get are the bad ones."},
{"year":2035,"event":"Robots attempt line work in controlled environments. A bird lands on one and it short-circuits. Back to you."},
{"year":2040,"event":"Still climbing poles. Gravity, weather, and electricity don't negotiate with algorithms."}]},
  {"title":"politician","aliases":["elected official","public servant","statesman"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"AI can write better policy, analyze data faster, and never gets caught in a scandal. But politics isn't about being right — it's about getting elected. And nobody's voting for a chatbot. Your job is safe because democracy requires a face to blame.","milestones":[{"year":2027,"event":"AI writes all your speeches. You still get credit for the good ones and blame your staff for the bad ones."},{"year":2029,"event":"AI-generated campaign ads outperform human-made ones. You don't care who made them as long as you win."},{"year":2032,"event":"An AI runs for city council as a stunt. Gets 12% of the vote. You pretend not to be worried."},{"year":2035,"event":"Still here. Turns out people vote for people. Usually the wrong ones, but still people."}]},
  {"title":"senator","aliases":["us senator","state senator"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You're one of 100 people who can hold the entire government hostage over a procedural vote. AI would be better at the job — but 'better' was never the point. The Senate runs on seniority, relationships, and the filibuster. None of those have an API.","milestones":[{"year":2027,"event":"AI writes your bills, reads the ones you don't, and drafts your floor speeches. You take the selfies."},{"year":2029,"event":"AI fact-checks senators in real-time during hearings. C-SPAN ratings somehow get even lower."},{"year":2032,"event":"Constituents prefer talking to your AI chatbot over your actual staff. Your approval rating goes up."},{"year":2035,"event":"You're still here. The Constitution doesn't say 'must be human' but nobody's tested it yet."}]},
  {"title":"congressman","aliases":["congresswoman","congressperson","representative","house representative","member of congress","congress member"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You represent 760,000 people, most of whom don't know your name. AI could analyze their needs, draft better legislation, and never miss a vote to attend a fundraiser. But the Constitution says 'elected representative,' not 'optimized algorithm.' You're protected by a 237-year-old document and voter apathy.","milestones":[{"year":2027,"event":"AI constituent services handle 90% of calls. Your office is basically a mail forwarding service with better furniture."},{"year":2029,"event":"AI writes legislation so complex that even AI can't fully parse it. Congress as usual."},{"year":2032,"event":"Deepfake town halls let you be in 50 districts at once. Nobody notices because nobody came to the real ones either."},{"year":2035,"event":"Still in office. You've been re-elected 4 times running on 'AI can't replace experience.' The irony is lost on you."}]},
  {"title":"mayor","aliases":["city mayor"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"You run a city, which means you get blamed for potholes, praised for parades, and spend most of your time in meetings about zoning. AI could optimize every city service — but someone has to cut the ribbon at the new library and kiss babies. That's you. Democracy's most overpaid ribbon-cutter.","milestones":[{"year":2027,"event":"AI optimizes trash routes, traffic lights, and budgets. You take credit at press conferences."},{"year":2029,"event":"'Smart city' AI handles 311 calls better than your entire staff. Citizens like the AI more than you."},{"year":2032,"event":"AI city planners generate 50-year development plans in minutes. You approve them without reading them, which is tradition."},{"year":2035,"event":"Still mayor. Your real job was always fundraising and handshaking. AI can't press the flesh."}]},
  {"title":"governor","aliases":["state governor"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You run an entire state, sign bills, and declare emergencies when it snows. AI handles policy analysis better than your entire staff, but the job is 80% politics and 20% governance. AI is terrible at politics because it would try to do the right thing. Career suicide.","milestones":[{"year":2027,"event":"AI writes your executive orders. You sign them with a fancy pen and 12 people standing behind you."},{"year":2029,"event":"AI budget optimization saves your state billions. You run campaign ads about YOUR fiscal responsibility."},{"year":2032,"event":"AI disaster response systems outperform FEMA. You still do the press conference in a windbreaker."},{"year":2035,"event":"Still governing. The public wants a human to yell at when things go wrong, and that's a role AI can't fill."}]},
  {"title":"prime minister","aliases":["premier","head of government","pm"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You lead a country through coalition politics, parliamentary procedure, and aggressive questioning during PMQs. AI would crumble in Question Time — it would try to give honest, nuanced answers instead of dodging everything. That's not how this works.","milestones":[{"year":2027,"event":"AI prepares your briefings, drafts your speeches, and predicts parliamentary votes. You handle the theater."},{"year":2029,"event":"AI advisors outperform human ones. Your cabinet is jealous of a chatbot. Morale is interesting."},{"year":2032,"event":"Deep fake PMs conduct virtual diplomacy. Real PMs still needed for the handshakes and awkward photo ops."},{"year":2035,"event":"Still in office. Parliamentary democracy requires a human to blame. That's the whole social contract."}]},
  {"title":"city council member","aliases":["council member","city council","alderman","councilperson","councilor","ward representative"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"You attend 4-hour meetings about parking meters and argue about the color of park benches. AI could make every decision better in 0.3 seconds, but local politics runs on who shows up to the meeting and yells the loudest. Your constituents want a PERSON to complain to about their neighbor's fence.","milestones":[{"year":2027,"event":"AI analyzes public comments and generates policy recommendations. You ignore them and vote based on who donated."},{"year":2029,"event":"AI-generated zoning proposals are objectively better. NIMBYs still show up to scream. You still listen."},{"year":2032,"event":"Virtual town halls with AI moderators are more productive than real ones. Nobody wants productive — they want heard."},{"year":2035,"event":"Still on council. Your $800/month stipend is AI-proof because nobody else wants this job."}]},
  {"title":"secretary of state","aliases":["foreign minister","foreign secretary"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You fly around the world doing diplomacy, which is just arguing in nice hotels. AI translates, analyzes geopolitics, and drafts treaties — but no country will sign a peace deal with a chatbot. Your job exists because international relations require someone who can look another leader in the eye and lie convincingly.","milestones":[{"year":2027,"event":"AI real-time translates every meeting. Your translators file for unemployment. Your frequent flyer miles are safe."},{"year":2029,"event":"AI drafts multilateral agreements in 14 languages simultaneously. You handle the signing ceremony."},{"year":2032,"event":"AI predicts geopolitical crises 6 months out. You still can't prevent them because prevention isn't photogenic."},{"year":2035,"event":"Still flying business class to Geneva. Some jobs are AI-proof because they're really about human ego."}]},
  {"title":"attorney general","aliases":["ag","chief prosecutor","state attorney general"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You're the top lawyer in the land. AI writes better legal briefs and researches case law faster, but the AG's real power is choosing WHAT to prosecute — and that's a political decision, not a legal one. You're protected by the beautiful, terrible intersection of law and politics.","milestones":[{"year":2027,"event":"AI drafts all your legal opinions. You add the political spin and your signature."},{"year":2029,"event":"AI case analysis identifies patterns in corporate crime your team missed. You announce the investigation on TV."},{"year":2032,"event":"AI could run the DOJ more efficiently. Efficiency was never the point of the DOJ."},{"year":2035,"event":"Still AG (or running for governor). This was always a stepping stone job and AI can't climb political ladders."}]},
  {"title":"legislator","aliases":["lawmaker","assemblyman","assemblywoman","state legislator","state representative"],"daysUntilCooked":3000,"confidence":5,"cookedLevel":"RAW","description":"You write laws, except you don't — lobbyists and staffers write them. You vote on them, except sometimes you don't — you miss votes for fundraisers. AI could do your job better, but your job was never about competence. It's about getting 50.1% of voters to check your name.","milestones":[{"year":2027,"event":"AI reads every bill before you vote. You still vote along party lines without reading them. Some things never change."},{"year":2029,"event":"AI-generated amendments are indistinguishable from human ones. Both are equally ignored."},{"year":2032,"event":"Citizens demand AI voting records for their legislators. Yours is embarrassing. You blame the algorithm."},{"year":2035,"event":"Still in office. Gerrymandering is more effective job security than any AI could ever threaten."}]},
  {"title":"cardiologist","aliases":["heart doctor","heart surgeon","cardiac surgeon"],"daysUntilCooked":1500,"confidence":30,"cookedLevel":"WARMING UP","description":"AI reads ECGs better than you and spots arrhythmias you'd miss at 2am. But the day someone has a heart attack, they want a human holding the paddles and yelling 'CLEAR!' — not Alexa. Your hands are your moat. Your golf handicap is your lifestyle.","milestones":[{"year":2028,"event":"AI diagnoses heart conditions from Apple Watch data before patients even see you. You're the second opinion now."},{"year":2031,"event":"Robotic catheterization handles routine procedures. You supervise from a screen. Fancy video game."},{"year":2035,"event":"AI-guided surgery is more precise than your hands. Your hands still sign the consent form."},{"year":2038,"event":"Still here. Nobody says 'the algorithm saved my life' in their thank-you cards."}]},
  {"title":"oncologist","aliases":["cancer doctor","cancer specialist"],"daysUntilCooked":1200,"confidence":40,"cookedLevel":"MEDIUM","description":"AI already identifies tumors in scans better than radiologists, and it designs treatment protocols by analyzing millions of cases. But telling someone they have cancer requires a human. Breaking bad news doesn't have an API endpoint. You survive because empathy at the worst moment of someone's life can't be automated.","milestones":[{"year":2027,"event":"AI designs personalized treatment plans from genomic data. Your 'clinical intuition' is now 'reviewing what the AI suggested.'"},{"year":2029,"event":"AI drug discovery creates targeted therapies 10x faster. You prescribe them. Nobel Prize goes to the algorithm."},{"year":2032,"event":"AI monitors treatment response in real-time and adjusts dosage. You handle the conversations nobody wants to have."},{"year":2035,"event":"Still here. The 'C word' still needs a human face behind it. That's not a job — that's a calling."}]},
  {"title":"neurologist","aliases":["brain doctor","neurosurgeon"],"daysUntilCooked":1400,"confidence":35,"cookedLevel":"WARMING UP","description":"You study the most complex thing in the known universe — the human brain. AI is getting better at brain imaging and diagnosis, but we still don't understand consciousness well enough to automate treating it. You're safe because your subject matter is literally too complicated for your replacement.","milestones":[{"year":2028,"event":"AI reads MRIs and spots lesions faster than your entire department. You provide the 'so what does this mean' part."},{"year":2031,"event":"Brain-computer interfaces go mainstream. You're the one explaining why people should NOT let Elon put a chip in their head."},{"year":2035,"event":"AI models predict neurological decline years in advance. Preventing it still requires your hands and your training."},{"year":2038,"event":"Still here. The brain is the last frontier and it's not surrendering to algorithms anytime soon."}]},
  {"title":"ophthalmologist","aliases":["eye doctor","eye surgeon","urologist"],"daysUntilCooked":1100,"confidence":45,"cookedLevel":"MEDIUM","description":"AI detects diabetic retinopathy from retinal scans better than you do. Google proved this in 2016 and it's only gotten worse for your ego since. But LASIK and cataract surgery still need steady human hands. You survive on procedures, not diagnosis.","milestones":[{"year":2027,"event":"AI screening replaces half your diagnostic appointments. Your receptionist is busier cancelling than booking."},{"year":2029,"event":"AI-guided laser surgery improves outcomes by 30%. You're the operator, not the decision-maker."},{"year":2032,"event":"Smart contact lenses monitor eye health 24/7. You see patients annually instead of quarterly."},{"year":2035,"event":"Still doing surgeries. Eyes are tiny, delicate, and litigious. Robots aren't brave enough."}]},
  {"title":"mason","aliases":["bricklayer","stonemason","brickmason","blockmason"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You lay bricks. One by one. In the rain. Robots have tried bricklaying — SAM100 laid 3,000 bricks a day in a lab. On an actual job site with uneven ground, wind, and a foreman yelling? It laid approximately zero. Your trowel is mightier than the algorithm.","milestones":[{"year":2028,"event":"Robotic bricklayers handle straight walls on flat ground. Your jobs involve neither."},{"year":2031,"event":"3D-printed concrete reduces demand for block walls. Custom stonework demand increases. You charge more."},{"year":2035,"event":"Robot masons work on new construction. Repairs, restoration, and anything crooked is still yours."},{"year":2040,"event":"Still laying bricks. Gravity, mortar, and uneven surfaces don't care about Moore's Law."}]},
  {"title":"plasterer","aliases":["drywall finisher","stucco worker","tiler","tile setter"],"daysUntilCooked":2200,"confidence":12,"cookedLevel":"RAW","description":"You make walls smooth with your hands and a trowel. It's an art that takes years to master and looks easy until someone tries it themselves and creates a lunar surface. AI can't feel when the mud is right. Robots can't reach the weird corner behind the toilet. You're safe.","milestones":[{"year":2028,"event":"Prefab wall panels reduce new-construction plastering. Renovation work increases because old houses are forever."},{"year":2031,"event":"Plastering robots handle large flat commercial walls. Your residential jobs have exactly zero flat walls."},{"year":2035,"event":"'Hand-plastered' becomes a premium finish. You're an artisan now. Same mud, better title."},{"year":2040,"event":"Still plastering. Every wall is different and every homeowner has opinions. AI can't handle either."}]},
  {"title":"scaffolder","aliases":["scaffold erector","steelworker","steel erector","structural steel worker"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You build temporary structures 200 feet in the air using metal poles and clamps, often in wind. One wrong connection and people die. No robot is climbing a half-built scaffold in the rain to add another level. Your job is too dangerous and too physical for anything without a death wish.","milestones":[{"year":2028,"event":"Drones inspect scaffolding for safety. You still build and dismantle it because drones can't carry poles."},{"year":2031,"event":"Modular scaffold systems reduce setup time. You install those too. Just faster."},{"year":2035,"event":"Exoskeletons help you carry heavier loads. You're basically Iron Man but with more safety certifications."},{"year":2040,"event":"Still climbing. Heights + heavy metal + wind = a job description no AI researcher wants to solve."}]},
  {"title":"stunt performer","aliases":["stuntman","stuntwoman","stunt double","stunt coordinator"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"You get paid to fall off buildings, catch fire, and crash cars. CGI has been stealing your work for 20 years and now AI-generated action sequences look real. But practical stunts still hit different — audiences can feel the difference. You survive on the physics of real impact.","milestones":[{"year":2027,"event":"AI-generated stunts fill 60% of action sequences. The 40% that's real is the stuff audiences share on YouTube."},{"year":2029,"event":"Digital doubles are indistinguishable from real performers. Directors still prefer real stunts for 'authenticity.'"},{"year":2032,"event":"Insurance companies prefer CGI. Studios prefer you. Your agent negotiates between them."},{"year":2035,"event":"Practical stunts become a selling point — 'NO CGI' is the new 'BASED ON A TRUE STORY.' You're a marketing tool."}]},
  {"title":"host","aliases":["hostess","restaurant host","maitre d","maître d'"],"daysUntilCooked":400,"confidence":80,"cookedLevel":"WELL DONE","description":"Your job is saying 'table for two?' and walking people 30 feet. iPads already replaced you at every fast-casual restaurant. Fine dining keeps you around because someone needs to judge people's outfits and pretend the 45-minute wait is 'just 10 more minutes.'","milestones":[{"year":2026,"event":"Self-seating kiosks handle 70% of casual dining. You work at the one nice restaurant left in town."},{"year":2027,"event":"AI reservation systems optimize seating better than you. Your smile is the only value-add."},{"year":2028,"event":"QR code check-in replaces you at mid-range restaurants. Your pedestal is now a tablet stand."},{"year":2029,"event":"Only Michelin-star restaurants have human hosts. You either level up or level out."}]},
  {"title":"busboy","aliases":["busser","bus person"],"daysUntilCooked":1500,"confidence":25,"cookedLevel":"WARMING UP","description":"You clear dirty plates, refill water, and wipe tables — while dodging waiters carrying hot soup. It's physical, unpredictable, and happens in a chaotic environment full of toddlers throwing spaghetti. Robots tried this and crashed into exactly one high chair before getting retired.","milestones":[{"year":2028,"event":"Robot bussers work in airport food courts. Restaurants with actual ambiance still need you."},{"year":2031,"event":"Self-clearing conveyor tables appear in chain restaurants. Your indie restaurant has tablecloths."},{"year":2035,"event":"Labor shortage makes you MORE valuable. Turns out nobody wants this job and robots can't do it."},{"year":2038,"event":"Still bussing. The restaurant industry runs on underpaid humans who are too fast for robots to replace."}]},
  {"title":"bellhop","aliases":["bellboy","porter","hotel porter","doorman","butler","valet","governess"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"You carry bags and push elevator buttons for tips. Luggage robots exist and they don't expect $5 per bag. But luxury hotels keep you because rich people enjoy having a human carry their Louis Vuitton. Your job security is directly proportional to your hotel's star rating.","milestones":[{"year":2027,"event":"Robot bellhops roll through Hilton lobbies. Guests take photos with them. You carry the bags they can't."},{"year":2029,"event":"Mid-range hotels go fully automated. Five-star hotels double down on human service as a luxury differentiator."},{"year":2032,"event":"'Human-staffed' becomes a hotel selling point, like 'organic' for food. You're a premium ingredient."},{"year":2035,"event":"Either working at the Ritz or looking for a new career. There is no middle."}]},
  {"title":"notary","aliases":["notary public","notary agent","mobile notary"],"daysUntilCooked":300,"confidence":88,"cookedLevel":"BURNT TO A CRISP","description":"Your entire job is watching someone sign a document and stamping it. Remote online notarization already exists in most states. You're a human rubber stamp being replaced by a digital one. The only thing keeping you alive is that some states haven't updated their laws since the 1800s.","milestones":[{"year":2026,"event":"RON (Remote Online Notarization) is legal in 45 states. Your kitchen table office is getting dusty."},{"year":2027,"event":"AI identity verification is more reliable than you squinting at a driver's license."},{"year":2028,"event":"Blockchain-based document verification makes your stamp decorative."},{"year":2029,"event":"The last 5 states legalize RON. Your stamp collection becomes a hobby, not a career."}]},
  {"title":"mediator","aliases":["arbitrator","dispute resolution specialist","conflict mediator"],"daysUntilCooked":1000,"confidence":50,"cookedLevel":"MEDIUM","description":"You sit between two angry people and help them find common ground without killing each other. AI can analyze cases and suggest fair settlements, but it can't read the room when someone's about to flip the table. Conflict is human, resolution is human, and you're the translator between rage and reason.","milestones":[{"year":2027,"event":"AI mediates small claims disputes online. Both parties prefer it because it doesn't judge their outfits."},{"year":2029,"event":"AI-suggested settlements are accepted 70% of the time. You handle the 30% where someone's 'not about the money.'"},{"year":2032,"event":"Courts require AI pre-mediation before human mediation. You're step two in a two-step process."},{"year":2035,"event":"Complex, emotional disputes still need you. Divorces, business breakups, neighbor feuds. Human mess requires human cleanup."}]},
  {"title":"soldier","aliases":["infantry","marine","army","military officer","combat soldier","special forces","military","drill sergeant","general","admiral","reservist","national guard","air force","navy seal","green beret","ranger"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"Drones and autonomous weapons exist, but no country wants to be the first to send only robots into combat — the PR is terrible. Plus, someone needs to do peacekeeping, hearts-and-minds, and explain to a village elder why there's a tank in his yard. Warfare is political, and politics requires humans.","milestones":[{"year":2028,"event":"AI-controlled drones handle reconnaissance and targeted strikes. You handle the part where people yell at you afterward."},{"year":2031,"event":"Robot soldiers patrol bases and convoys. You do the raids, negotiations, and anything requiring judgment."},{"year":2035,"event":"Autonomous weapons treaties limit what robots can do in combat. You're protected by international law, ironically."},{"year":2040,"event":"Still deployed. War is too human and too political to fully automate. That's not comforting but it is job security."}]},
  {"title":"intern","aliases":["summer intern","co-op student","work placement"],"daysUntilCooked":200,"confidence":90,"cookedLevel":"BURNT TO A CRISP","description":"You fetch coffee, make spreadsheets, and sit in meetings you don't understand — all for free or minimum wage. AI does every single one of those tasks better, faster, and also for nearly free. You're not being replaced by AI. You already WERE the AI. The budget version.","milestones":[{"year":2026,"event":"Companies realize an AI agent costs less than your parking validation. Your desk is now a server rack."},{"year":2027,"event":"'AI internship' becomes a real line item. It doesn't need onboarding, HR orientation, or a mentor."},{"year":2028,"event":"Internships become 'learning experiences' with no actual work. Companies call it 'shadowing.' You call it 'unemployment.'"},{"year":2029,"event":"The only surviving internships are in trades, medicine, and jobs where you need to physically be somewhere. Congrats on your plumbing apprenticeship."}]},
  {"title":"freelancer","aliases":["independent contractor","gig worker","self-employed","solopreneur"],"daysUntilCooked":500,"confidence":70,"cookedLevel":"MEDIUM","description":"You traded a boss for 50 clients who all think they're your only client. AI is eating freelance writing, design, coding, and consulting from the bottom up. Your survival depends on whether clients want YOUR work or just WORK. If it's the latter, you're competing with a $20/month subscription.","milestones":[{"year":2026,"event":"Clients start asking 'can you do it cheaper? I could just use AI.' You start asking yourself the same thing."},{"year":2027,"event":"Low-end freelance gigs vanish entirely. The Fiverr race-to-the-bottom hits $0 because AI bid first."},{"year":2028,"event":"Premium freelancers thrive. Average freelancers scramble. Below-average freelancers become prompt engineers."},{"year":2029,"event":"Freelancing bifurcates: you're either expensive and irreplaceable, or you're competing with free. Pick wisely."}]},
  {"title":"entrepreneur","aliases":["startup founder","business owner","small business owner"],"daysUntilCooked":1000,"confidence":50,"cookedLevel":"MEDIUM","description":"AI can build products, write business plans, handle marketing, and manage finances — basically your entire job. But entrepreneurship isn't a job, it's a personality disorder. You start companies because you can't NOT start companies. AI can do the work, but it can't have the delusion that THIS idea will be different.","milestones":[{"year":2026,"event":"AI agents build MVPs in hours. Your 'unfair advantage' is now 'I thought of it first,' which was never an advantage."},{"year":2027,"event":"One-person companies powered by AI agents become normal. You need fewer people. Including possibly yourself."},{"year":2029,"event":"AI-founded companies emerge (literally). They identify gaps, build products, and acquire customers without a human."},{"year":2031,"event":"You survive because investors still want a human face to blame when it fails. That's you. Congratulations."}]},
  {"title":"ghostwriter","aliases":["speechwriter","ghost writer"],"daysUntilCooked":300,"confidence":88,"cookedLevel":"BURNT TO A CRISP","description":"Your job was writing things for people who can't write. Now AI writes things for people who can't write. You were already invisible — now you're unnecessary. The irony of being replaced by something that also doesn't get credit is almost poetic. Almost.","milestones":[{"year":2026,"event":"ChatGPT writes 80% of LinkedIn posts, bios, and business books. Your clients switched last year and didn't tell you."},{"year":2027,"event":"AI ghostwrites entire memoirs from interview transcripts. Your 'voice matching' skill is now a dropdown menu."},{"year":2028,"event":"Political speeches are AI-generated, focus-group-tested, and delivered by humans who didn't read them. Some things never change."},{"year":2029,"event":"The only ghostwriting gigs left require genuine expertise — celebrity scandal books and tell-alls where the ghost IS the story."}]},
  {"title":"choreographer","aliases":["dance choreographer","dancer","ballet dancer"],"daysUntilCooked":1500,"confidence":28,"cookedLevel":"WARMING UP","description":"You create movement that makes people feel things. AI can generate dance sequences from music, but it's the visual equivalent of autocomplete — technically correct, emotionally empty. Your body knows what the algorithm can't: how weight shifts, how breath drives movement, how a pause says more than a spin.","milestones":[{"year":2028,"event":"AI generates TikTok dances from songs automatically. The dances are fine. 'Fine' is the opposite of art."},{"year":2031,"event":"AI motion capture generates full dance sequences. Broadway still hires you because robots can't read a room."},{"year":2035,"event":"Virtual performers with AI choreography fill stadium shows. Backup dancers are holograms. Lead choreographers are human."},{"year":2038,"event":"Still choreographing. Dance is the body's language and AI doesn't have a body. Fundamental limitation."}]},
  {"title":"911 dispatcher","aliases":["dispatcher","emergency dispatcher","police dispatcher","fire dispatcher","public safety dispatcher"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"You answer the worst phone call of someone's life and calmly tell them what to do while dispatching help. AI can route calls and prioritize responses, but talking a panicked parent through infant CPR requires a human voice saying 'you're doing great, help is coming.' That can't be a bot.","milestones":[{"year":2027,"event":"AI auto-dispatches for clear-cut calls (fire alarm, car accident with location). You handle the ambiguous ones."},{"year":2029,"event":"AI triages 911 calls and pre-dispatches before you even answer. Your job is the hard calls — the ones AI can't categorize."},{"year":2032,"event":"Smart devices auto-call 911 with location and vitals. Half your calls are from Apple Watches, not humans."},{"year":2035,"event":"Still here for the calls that need a human ear. 'My husband has a gun' isn't a problem AI should handle alone."}]},
  {"title":"allergist","aliases":["immunologist","allergy doctor","allergist-immunologist"],"daysUntilCooked":900,"confidence":50,"cookedLevel":"MEDIUM","description":"You poke people with 40 needles to find out they're allergic to cats. They already knew. AI can analyze blood panels and predict allergies from genetic data, but someone still needs to hold the EpiPen when the peanut test goes sideways.","milestones":[{"year":2027,"event":"AI predicts allergies from bloodwork without the 40-needle scratch test. Your patients are thrilled. Your billing department isn't."},{"year":2029,"event":"Smart home sensors detect allergens and auto-adjust air filtration. You're a consultant, not a first responder."},{"year":2032,"event":"Gene therapy cures common allergies. Your practice shrinks. Rare autoimmune cases keep you busy."},{"year":2035,"event":"Still here for the weird cases. 'I'm allergic to WiFi' still needs a human to say 'no you're not.'"}]},
  {"title":"gastroenterologist","aliases":["gi doctor","stomach doctor","digestive specialist"],"daysUntilCooked":1200,"confidence":40,"cookedLevel":"MEDIUM","description":"You look at the inside of people's colons for a living. AI can read the images better than you, but someone still needs to drive the scope. It's like a video game where the controller is a tube and the screen is someone's intestines. Nobody's automating that awkward conversation beforehand either.","milestones":[{"year":2028,"event":"AI detects polyps in real-time during colonoscopies. Your miss rate drops to zero. Your ego takes the hit."},{"year":2031,"event":"Capsule endoscopy with AI analysis replaces half your procedures. You handle the ones that need intervention."},{"year":2035,"event":"AI manages IBS, Crohn's, and celiac monitoring remotely. You do the procedures nobody else wants to."},{"year":2038,"event":"Still scoping. Turns out 'look inside someone' still requires a someone to do the looking."}]},
  {"title":"obstetrician","aliases":["ob-gyn","gynecologist","ob gyn","obgyn","midwife"],"daysUntilCooked":1800,"confidence":20,"cookedLevel":"RAW","description":"You deliver babies. The most unpredictable, emotional, high-stakes event in human existence. AI can monitor fetal heartbeats and predict complications, but the day a robot catches a newborn is the day we've lost the plot entirely. Mothers want human hands. Full stop.","milestones":[{"year":2028,"event":"AI predicts high-risk pregnancies from first-trimester data. You catch problems months earlier. Everyone wins."},{"year":2031,"event":"Remote fetal monitoring replaces half your routine visits. You see patients for the important stuff."},{"year":2035,"event":"AI-assisted C-sections improve outcomes. You're still the one holding the scalpel and the mom's hand."},{"year":2038,"event":"Still delivering babies. Birth is ancient, messy, and miraculous. No algorithm is invited into the delivery room."}]},
  {"title":"endocrinologist","aliases":["hormone doctor","diabetes doctor","thyroid doctor"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"You manage hormones — the body's most chaotic messaging system. AI already runs closed-loop insulin pumps better than patients can manage themselves. Your job is slowly being eaten by smart devices that dose hormones 24/7 without needing an appointment.","milestones":[{"year":2027,"event":"AI insulin pumps manage Type 1 diabetes autonomously. Your diabetic patients see you once a year instead of four times."},{"year":2029,"event":"AI hormone optimization becomes a consumer product. Biohackers skip you entirely."},{"year":2032,"event":"Continuous hormone monitoring patches adjust thyroid, cortisol, and testosterone in real-time. You review dashboards."},{"year":2035,"event":"Still here for complex cases. Endocrine disorders are too interconnected for AI to manage without a human quarterback."}]},
  {"title":"neonatologist","aliases":["nicu doctor","newborn specialist","hematologist","nephrologist","pulmonologist","rheumatologist"],"daysUntilCooked":1800,"confidence":18,"cookedLevel":"RAW","description":"You keep premature babies alive in a box of wires and beeping monitors. AI helps you track vitals and predict complications, but a 2-pound human needs human hands — hands that can intubate a throat the size of a drinking straw. No robot has that dexterity or that courage.","milestones":[{"year":2028,"event":"AI predicts NICU complications 12 hours before they happen. You intervene earlier. Survival rates climb."},{"year":2031,"event":"AI manages routine NICU monitoring. You handle the crises — which in a NICU, is every Tuesday."},{"year":2035,"event":"Artificial wombs extend viability thresholds. You're managing even earlier preemies. More work, not less."},{"year":2038,"event":"Still in the NICU. Tiny humans need big humans. No technology changes that."}]},
  {"title":"physician assistant","aliases":["pa","pa-c","physician's assistant"],"daysUntilCooked":700,"confidence":60,"cookedLevel":"MEDIUM","description":"You do 80% of what a doctor does for 60% of the pay. AI does 80% of what YOU do for 0.1% of the cost. You're the middle manager of medicine — squeezed from above by doctors who won't share turf and from below by AI that handles routine care better than anyone.","milestones":[{"year":2027,"event":"AI handles patient intake, symptom assessment, and treatment recommendations. You verify and sign. Human rubber stamp."},{"year":2029,"event":"Telehealth AI replaces PAs for routine visits. Sore throats and UTIs don't need your stethoscope anymore."},{"year":2032,"event":"Your role shifts to procedures and complex cases. Less volume, more skill. Maybe a raise. Probably not."},{"year":2035,"event":"Still here but the role looks completely different. More hands-on, less cognitive. Which is what nursing was."}]},
  {"title":"cna","aliases":["certified nursing assistant","nursing aide","home health aide","nursing assistant","patient care technician","caregiver","elder care","home care aide"],"daysUntilCooked":1500,"confidence":25,"cookedLevel":"WARMING UP","description":"You bathe, feed, and move people who can't do it themselves. AI can't lift a 200-pound patient from a bed to a wheelchair. Robots have tried — they're too slow, too cold, and too terrifying. Your back hurts, your pay is criminal, but your job is safe because human dignity requires human touch.","milestones":[{"year":2028,"event":"Lifting robots assist with patient transfers. Your back says thank you. Your hands still do the caring."},{"year":2031,"event":"AI monitoring reduces the number of check-ins needed. You spend more time per patient, not less time total."},{"year":2035,"event":"Elder care demand explodes as boomers age. There aren't enough of you. AI helps but can't replace you."},{"year":2038,"event":"Still here. Wiping someone's face and saying 'you're okay' is the most human job there is."}]},
  {"title":"mortgage broker","aliases":["loan broker","insurance broker"],"daysUntilCooked":400,"confidence":82,"cookedLevel":"WELL DONE","description":"You're a middleman between people who want money and banks that have money. AI compares every mortgage product on the market in milliseconds, finds the best rate, and pre-qualifies the borrower before you've opened your laptop. Your Rolodex of bank contacts just got disrupted by a search bar.","milestones":[{"year":2026,"event":"AI mortgage platforms like Better.com and Rocket already approve loans in minutes. You take days. Do the math."},{"year":2027,"event":"AI handles 90% of straightforward mortgages. You get the self-employed, the divorced, and the complicated."},{"year":2028,"event":"Banks offer AI-direct rates that undercut brokers. Your commission gets squeezed between algorithms."},{"year":2029,"event":"You survive as a 'mortgage advisor' for complex cases. It's the same job with less volume and a fancier title."}]},
  {"title":"quant","aliases":["quantitative analyst","quantitative trader","derivatives trader","algorithmic trader","quant developer","quant researcher"],"daysUntilCooked":600,"confidence":72,"cookedLevel":"MEDIUM","description":"You write math that makes money. The problem? AI writes better math, faster, and doesn't demand a $500K bonus. Renaissance Technologies and Two Sigma already run on algorithms — you just fine-tune them. And AI is getting better at fine-tuning itself.","milestones":[{"year":2027,"event":"AI generates trading strategies from raw market data without human-designed features. Your PhD in physics is decorative."},{"year":2028,"event":"AI quants at top funds outperform human quants on Sharpe ratio. You argue about data quality to stay relevant."},{"year":2030,"event":"Entry-level quant positions vanish. Senior quants supervise AI systems. The middle is gone."},{"year":2032,"event":"Still employed if you're at a top fund. If not, you're a 'data scientist' now. Same math, less money."}]},
  {"title":"curator","aliases":["museum curator","gallery curator","art curator","gallery owner","art dealer","antiques dealer","antique dealer","art restorer","restorer","painting restorer"],"daysUntilCooked":1200,"confidence":40,"cookedLevel":"MEDIUM","description":"You decide what art goes on which wall and write 200-word plaques that nobody reads. AI can catalog, analyze, and even generate art — but curation is taste, and taste is the one thing you can't train on data. Your job is having opinions that rich people trust.","milestones":[{"year":2027,"event":"AI catalogs and digitizes entire collections overnight. Your intern's job is gone. Yours isn't. Yet."},{"year":2029,"event":"AI recommends exhibition layouts based on visitor flow data. You argue about 'artistic intent' and win. For now."},{"year":2032,"event":"AI-curated virtual galleries get more visitors than your physical one. Ouch."},{"year":2035,"event":"Physical museums become 'experiences.' You're an experience designer now. Same turtleneck, different title."}]},
  {"title":"gaffer","aliases":["chief lighting technician","lighting director","grip","key grip","best boy","best boy electric"],"daysUntilCooked":900,"confidence":50,"cookedLevel":"MEDIUM","description":"You light a film set so the actors look beautiful and the shadows tell a story. AI can simulate lighting in virtual production, but on a real set with real actors and real weather, someone needs to rig 50 lights, run cable, and not electrocute anyone. That's you.","milestones":[{"year":2027,"event":"LED panels with AI color matching replace half your fixtures. Setup is faster. You're still the one placing them."},{"year":2029,"event":"Virtual production stages handle lighting digitally. Real location shoots still need your truck full of C-stands."},{"year":2032,"event":"AI lighting design generates full lighting plots. You execute them because electricity doesn't care about algorithms."},{"year":2035,"event":"Half of production is virtual. You work the half that isn't. Fewer gigs but same daily rate."}]},
  {"title":"colorist","aliases":["color grader","di colorist","location scout"],"daysUntilCooked":500,"confidence":70,"cookedLevel":"MEDIUM","description":"You make movies look like movies — that teal-and-orange blockbuster look, the desaturated indie vibe. AI color grading tools already match your work in 80% of cases. You survive on the 20% that requires actual taste and the directors who insist on a human eye.","milestones":[{"year":2027,"event":"AI auto-grade matches 90% of reference looks instantly. YouTube creators never hire you again."},{"year":2028,"event":"DaVinci Resolve's AI does in 5 minutes what takes you 5 hours. Your rate card gets awkward."},{"year":2030,"event":"Only feature films and prestige TV hire human colorists. Everything else is AI-graded and nobody notices."},{"year":2032,"event":"You're a 'creative color supervisor' who approves AI work. 90% of your job is clicking 'looks good.'"}]},
  {"title":"brewer","aliases":["brewmaster","head brewer","craft brewer","distiller","winemaker","vintner","barback"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You make beer, and craft beer culture is a religion with tasting rooms as churches. AI can optimize recipes and fermentation schedules, but the taproom experience — the bearded guy in an apron explaining hops like a sommelier — that's the product. You're not selling beer, you're selling vibes.","milestones":[{"year":2028,"event":"AI optimizes fermentation temperature, pH, and timing. Your beer gets 5% better. You take full credit."},{"year":2031,"event":"AI generates new recipes by analyzing flavor profiles. You still brew them because 'AI-brewed' is not a selling point."},{"year":2035,"event":"Macro breweries fully automate. Craft breweries lean harder into 'handcrafted.' Your beard is a business asset."},{"year":2040,"event":"Still brewing. People pay $8 for a pint because a human made it in a garage. The story IS the product."}]},
  {"title":"food critic","aliases":["restaurant critic","food reviewer","food writer"],"daysUntilCooked":600,"confidence":68,"cookedLevel":"MEDIUM","description":"You eat for a living and write mean things about it. AI can analyze Yelp reviews, generate food writing, and even 'taste' via chemical analysis. But nobody reads a restaurant review for information — they read it for the prose. Your survival depends on whether you're a writer who eats or an eater who writes.","milestones":[{"year":2027,"event":"AI aggregates thousands of reviews into better recommendations than your single opinion. Your Michelin star power fades."},{"year":2029,"event":"AI generates food reviews indistinguishable from human ones. Readers can't tell. Restaurants can't tell. You can tell. Barely."},{"year":2032,"event":"Only celebrity critics survive — Pete Wells, not Pete from the Gazette. The middle dies."},{"year":2035,"event":"Food criticism becomes entertainment, not information. You're a personality, not a journalist. Same expense account though."}]},
  {"title":"substitute teacher","aliases":["substitute","sub teacher","supply teacher"],"daysUntilCooked":500,"confidence":70,"cookedLevel":"MEDIUM","description":"Your job is babysitting 30 kids while following lesson plans someone else wrote. You're already the human equivalent of a placeholder. AI tutoring systems deliver better instruction, but they can't stop a food fight or notice that the quiet kid in the back hasn't eaten today.","milestones":[{"year":2027,"event":"AI tutoring handles the 'actual learning' part. You handle the 'keeping children alive' part. Fair trade."},{"year":2028,"event":"Schools debate replacing subs with AI-supervised study halls. Parents riot. You're saved by parental anxiety."},{"year":2030,"event":"AI handles standardized curriculum delivery. You handle everything that isn't curriculum — which is most of teaching."},{"year":2032,"event":"Still subbing. The babysitting component of education is eternal and AI doesn't have eyes in the back of its head."}]},
  {"title":"bail bondsman","aliases":["bail bond agent","bounty hunter","fugitive recovery agent"],"daysUntilCooked":1200,"confidence":40,"cookedLevel":"MEDIUM","description":"You front money for strangers to get out of jail, then hunt them down when they skip court. AI can assess flight risk and process bonds, but chasing someone through a trailer park at midnight requires a specific kind of human — the kind that chose this career. Dog the Bounty Hunter: AI Edition isn't happening.","milestones":[{"year":2027,"event":"AI risk assessment makes your underwriting decisions for you. You still collect because algorithms can't knock on doors."},{"year":2029,"event":"Bail reform eliminates cash bail in 20 states. Your territory shrinks. Your remaining clients get sketchier."},{"year":2032,"event":"AI tracks skip defendants via digital footprint. You do the physical apprehension because that's the fun part."},{"year":2035,"event":"Still bonding and bounty hunting in the states that kept cash bail. It's a dying industry but you love the chase."}]},
  {"title":"courier","aliases":["bike messenger","delivery courier","package courier","messenger"],"daysUntilCooked":600,"confidence":65,"cookedLevel":"MEDIUM","description":"You deliver things fast in places robots can't navigate — dense cities, apartment buildings with broken buzzers, offices where the lobby guy won't let drones in. Self-driving delivery exists on paper. On a Manhattan street with double-parked Ubers and jaywalking tourists? Good luck.","milestones":[{"year":2027,"event":"Delivery robots handle suburban sidewalks. Urban deliveries still need you because cities are chaos."},{"year":2029,"event":"Drone delivery goes mainstream for light packages. You carry the heavy, oversized, and fragile stuff."},{"year":2032,"event":"Self-driving delivery vans handle the last mile. The last 100 feet — elevator, stairs, door — still needs a human."},{"year":2035,"event":"You're a 'last-yard delivery specialist.' Same job, smaller radius, similar pay."}]},
  {"title":"handyman","aliases":["general contractor","maintenance worker","building superintendent","building super","super","mr. fix it"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You fix everything — leaky faucets, broken shelves, wonky doors, mysterious electrical issues. Your job requires knowing a little about EVERYTHING, fitting into tight spaces, and improvising when the part doesn't exist anymore. AI can diagnose the problem from a photo. You still have to crawl under the house.","milestones":[{"year":2028,"event":"AI diagnoses home issues from photos and suggests fixes. YouTube already did this. You still get the call."},{"year":2031,"event":"Smart home sensors detect problems before they're visible. You fix them before they're complaints."},{"year":2035,"event":"Repair robots exist in controlled environments. Your environment is a 1940s house with asbestos and 'creative' wiring."},{"year":2040,"event":"Still fixing things. Every house is unique, every problem is weird, and nobody else wants to crawl into an attic in July."}]},
  {"title":"bodyguard","aliases":["close protection officer","executive protection","private security","security detail"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You're a human shield with a suit and an earpiece. AI can assess threats, scan crowds, and run background checks — but when someone rushes the principal, you need a 220-pound human who can physically intervene. Robots can't take a bullet. You can. That's the job description.","milestones":[{"year":2028,"event":"AI surveillance identifies threats before you spot them. You're better informed, still the muscle."},{"year":2031,"event":"Drones provide aerial overwatch. You provide the body between danger and your client."},{"year":2035,"event":"AI security systems make venues safer. You still escort the VIP through the parking garage."},{"year":2040,"event":"Still standing between danger and money. The oldest profession that isn't THAT oldest profession."}]},
  {"title":"repo man","aliases":["repossession agent","skip tracer","asset recovery agent"],"daysUntilCooked":1500,"confidence":25,"cookedLevel":"WARMING UP","description":"You steal cars legally at 3am from people who stopped making payments. AI can track vehicles via GPS and license plate readers, but the actual repossession requires a human willing to get screamed at, chased, and occasionally shot at. Your job is safe because it sucks too much for robots to want it.","milestones":[{"year":2028,"event":"AI tracks vehicles in real-time via connected car data. Finding them is easy. Taking them is still you."},{"year":2031,"event":"Connected cars can be remotely disabled. You still have to physically tow them because people sit in disabled cars out of spite."},{"year":2035,"event":"Self-driving cars drive themselves to the repo lot. For non-autonomous vehicles, you're still the repo man."},{"year":2038,"event":"Fewer car loans as autonomous rideshare dominates. Your niche shrinks but your stories get better."}]},
  {"title":"storm chaser","aliases":["severe weather researcher","tornado researcher","seismologist","volcanologist"],"daysUntilCooked":1500,"confidence":25,"cookedLevel":"WARMING UP","description":"You drive INTO tornadoes for science and content. AI models predict severe weather better than ever, but deploying instruments inside a supercell requires a human dumb enough to drive toward rotating walls of death. Darwin Award candidates with PhDs — and proud of it.","milestones":[{"year":2028,"event":"AI weather models predict tornadoes 30 minutes earlier. You have more time to drive toward them. Thanks, I guess."},{"year":2031,"event":"Drones deploy instruments into storms. You pilot them from a safe distance. Your truck misses the action."},{"year":2035,"event":"Satellite data captures storm dynamics without ground probes. Research funding shifts. YouTube revenue doesn't."},{"year":2038,"event":"Still chasing. Half for science, half for content. Climate change means more storms. Job security via apocalypse."}]},
  {"title":"roughneck","aliases":["oil rig worker","oil field worker","derrick hand","roustabout","driller"],"daysUntilCooked":1200,"confidence":40,"cookedLevel":"MEDIUM","description":"You work 12-hour shifts on a metal platform in the middle of the ocean, handling equipment that weighs more than your truck. Automation is replacing rig floor jobs, but someone still has to fix things when they break 100 miles offshore. And things ALWAYS break.","milestones":[{"year":2028,"event":"Automated pipe handling reduces crew sizes by 30%. The 70% left does more work per person."},{"year":2031,"event":"Remote-operated drilling from shore eliminates some offshore positions. Maintenance crew stays on the rig."},{"year":2035,"event":"Oil demand peaks. Remaining rigs are heavily automated. You're maintenance crew, not drilling crew."},{"year":2038,"event":"Fewer rigs, fewer roughnecks, but the ones left make bank because nobody else will do it."}]},
  {"title":"deep sea diver","aliases":["saturation diver","commercial diver","underwater welder"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You weld pipes 500 feet underwater while breathing helium and living in a pressurized chamber for weeks. ROVs handle inspection, but when something needs to be welded, cut, or fixed at depth, a human diver with inhuman courage is still the only option. Your job is safe because it's terrifying.","milestones":[{"year":2028,"event":"ROVs handle 70% of underwater inspection. You handle the 30% that requires hands and judgment."},{"year":2031,"event":"Underwater repair robots improve but can't match your dexterity in zero-visibility conditions."},{"year":2035,"event":"Offshore wind farms create new diving demand. Different structures, same cold water."},{"year":2040,"event":"Still diving. The ocean is hostile to electronics and friendly to humans with wetsuits. Relatively."}]},
  {"title":"window washer","aliases":["window cleaner","high rise window cleaner","building exterior cleaner"],"daysUntilCooked":1000,"confidence":50,"cookedLevel":"MEDIUM","description":"You hang off skyscrapers with a squeegee and zero fear of heights. Robotic window cleaners exist for modern glass facades, but older buildings with irregular surfaces, decorative stonework, and questionable anchor points? That's human territory. Your courage is your competitive advantage.","milestones":[{"year":2028,"event":"Robot washers handle new glass towers. Your routes shift to older, weirder buildings."},{"year":2031,"event":"Self-cleaning glass becomes standard in new construction. Old buildings still need you."},{"year":2035,"event":"Drone washers handle low-rise commercial. High-rise with wind, obstacles, and anchoring is still yours."},{"year":2038,"event":"Fewer new buildings need you. Existing building stock keeps you busy for decades."}]},
  {"title":"professional gamer","aliases":["esports player","esports athlete","competitive gamer","pro gamer","streamer"],"daysUntilCooked":400,"confidence":80,"cookedLevel":"WELL DONE","description":"AI already beats the best humans at every game that matters — chess, Go, StarCraft, Dota 2. You survive because esports is entertainment, not competition. Nobody watches AI vs AI. They watch YOU rage, clutch, and trash-talk. You're a performer who happens to hold a controller.","milestones":[{"year":2027,"event":"AI coaching tools give every player pro-level strategy. The skill gap narrows. Personality becomes the differentiator."},{"year":2028,"event":"AI-generated game content (NPCs, levels, opponents) makes games harder than any human competitor."},{"year":2030,"event":"Viewership splits between human esports (entertainment) and AI speedrunning (spectacle). You're in the entertainment lane."},{"year":2032,"event":"Still competing. Esports is wrestling — the outcome matters less than the show. And AI can't trash-talk (yet)."}]},
  {"title":"cowboy","aliases":["rancher","cattle rancher","ranch hand","rodeo rider","wrangler","equestrian","stable hand","jockey","horse trainer"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You ride horses, herd cattle, and fix fences in places where WiFi is a rumor. AI-powered drones can monitor herds and autonomous vehicles can haul feed, but the day a robot can lasso a calf in the mud is the day John Wayne rolls in his grave. Your job is safe because it's a lifestyle, not a profession.","milestones":[{"year":2028,"event":"Drone herding manages cattle across open range. You still ride because drones can't open a gate or pull a calf from a ditch."},{"year":2031,"event":"Smart ear tags track every animal's health and location. Your morning ride becomes a verification loop."},{"year":2035,"event":"Lab-grown meat reduces cattle demand slightly. Premium grass-fed operations increase. You charge more."},{"year":2040,"event":"Still riding. The American West doesn't run on servers. It runs on grit, dirt, and people who prefer horses to Teslas."}]},
  {"title":"farrier","aliases":["horseshoer","horse farrier"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You nail metal shoes onto horses while they try to kick you in the head. There are approximately zero robots attempting this because horses are 1,200 pounds of anxiety with hooves. Your back is destroyed, your hearing is shot from the anvil, and your job is the most AI-proof career on the planet.","milestones":[{"year":2028,"event":"3D-printed horseshoes custom-fitted from hoof scans. You still nail them on because horses don't hold still for printers."},{"year":2031,"event":"Equine biomechanics AI designs better shoe profiles. You forge them. The horse still tries to kill you."},{"year":2035,"event":"Robotic farrier attempted at a tech demo. Horse panicked, robot destroyed. Back to you."},{"year":2040,"event":"Still shoeing horses. This job has been unchanged for 2,000 years and AI isn't breaking that streak."}]},
  {"title":"process server","aliases":["court process server","legal process server"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"You hand legal papers to people who don't want them. That's it. Your entire job is finding someone who's hiding and making them hold a document. AI can track people, but the physical act of service requires a human who can ring a doorbell, dodge a slammed door, and testify they served the papers.","milestones":[{"year":2027,"event":"AI skip-tracing finds defendants in minutes. Your job shifts from 'finding' to 'serving.' Faster but still physical."},{"year":2029,"event":"E-service becomes legal in more jurisdictions. Digital papers for digital cases. You handle the holdouts."},{"year":2032,"event":"Courts accept verified digital service for most cases. You serve the people who dodge digital too."},{"year":2035,"event":"Still serving papers to the 20% who won't accept digital. They're the difficult ones. They were always the difficult ones."}]},
  {"title":"loss prevention","aliases":["loss prevention officer","loss prevention specialist","store detective","asset protection","mystery shopper","visual merchandiser"],"daysUntilCooked":600,"confidence":65,"cookedLevel":"MEDIUM","description":"You catch shoplifters by watching cameras and looking suspicious. AI surveillance systems already detect theft patterns, track inventory shrinkage, and flag suspicious behavior better than you can. But someone still needs to physically stop the person walking out with a TV under their jacket.","milestones":[{"year":2027,"event":"AI cameras detect shoplifting in real-time with 95% accuracy. You respond to alerts instead of watching monitors."},{"year":2029,"event":"Cashierless stores eliminate most theft opportunity. Your remaining stores are the ones that can't afford the tech."},{"year":2032,"event":"Organized retail crime requires human investigators. Casual shoplifting is handled by AI and door locks."},{"year":2035,"event":"You're an 'asset protection investigator' focused on employee theft and organized crime. The title upgrade almost makes up for the stress."}]},
  {"title":"nun","aliases":["sister","monk","friar","missionary","convent"],"daysUntilCooked":3000,"confidence":2,"cookedLevel":"RAW","description":"You devoted your life to God and poverty, which means AI threatening your paycheck is like threatening a fish with drowning. You don't have a paycheck. Your 'employer' is omnipotent and not pivoting to automation. Literally the most AI-proof job in existence because it was never about the job.","milestones":[{"year":2028,"event":"AI writes better sermons. You don't give sermons — you pray. Checkmate, algorithm."},{"year":2031,"event":"Virtual church services go mainstream. Your monastery doesn't have WiFi and that's the point."},{"year":2035,"event":"AI spiritual chatbots offer 24/7 counsel. People still prefer a human who chose poverty over profit."},{"year":2040,"event":"Still praying. God didn't automate creation and isn't automating devotion."}]},
  {"title":"registrar","aliases":["university registrar","school registrar","academic registrar"],"daysUntilCooked":300,"confidence":88,"cookedLevel":"BURNT TO A CRISP","description":"You manage transcripts, enrollment records, and degree verification — all database operations wearing a human costume. AI handles every single aspect of your job faster, cheaper, and without losing anyone's transcript in the filing cabinet. You are a spreadsheet with a pension.","milestones":[{"year":2026,"event":"Automated enrollment systems handle 90% of student requests. You handle the 10% that require 'judgment' (reading an email)."},{"year":2027,"event":"Blockchain transcripts eliminate transcript requests entirely. Your busiest task just evaporated."},{"year":2028,"event":"AI handles degree audits, transfer credits, and graduation verification. You approve edge cases."},{"year":2029,"event":"Your office is one person and an AI system. The person is there for accreditation visits. That person might not be you."}]},
  {"title":"promoter","aliases":["brand ambassador","event promoter","street promoter","nightclub promoter"],"daysUntilCooked":500,"confidence":70,"cookedLevel":"MEDIUM","description":"You convince people to show up to things — clubs, events, product launches. AI can target ads, optimize guest lists, and personalize invitations. But the hustle of working a door, knowing the right people, and making a Tuesday night feel like a Friday? That's human energy AI can't bottle.","milestones":[{"year":2027,"event":"AI influencer campaigns outperform your Instagram DMs. Your phone still works better at 2am."},{"year":2029,"event":"AI event marketing handles everything above 500 attendees. Intimate events still need your Rolodex."},{"year":2032,"event":"Virtual events with AI hosts replace half your gigs. Real-world events become premium. You charge more."},{"year":2035,"event":"Still promoting. Nightlife runs on personal connections, not algorithms. The bouncer knows your name, not your IP."}]},
  {"title":"grave digger","aliases":["cemetery worker","cemetery groundskeeper","sexton","gravedigger","gravedigger"],"daysUntilCooked":2000,"confidence":12,"cookedLevel":"RAW","description":"You dig holes for dead people. Backhoes handle most of the heavy lifting, but someone still needs to operate them around headstones without disturbing grandpa next door. Plus hand-finishing a grave to funeral standards requires a human touch — literally. The dead don't complain, but the living sure do.","milestones":[{"year":2028,"event":"GPS-guided excavation equipment digs precise graves. You operate it because cemeteries are obstacle courses."},{"year":2031,"event":"Cremation rates hit 80%. Fewer graves needed. Urn niches don't require your shovel."},{"year":2035,"event":"Green burials and memorial forests create new demand. Different holes, same you."},{"year":2040,"event":"Still digging. Death doesn't stop. Your job has been continuous since the first human buried the second one."}]},
  {"title":"outdoor educator","aliases":["wilderness guide","adventure guide","ski patrol","mountain rescue","mountaineer","smokejumper","hotshot","alpine guide","outdoor instructor","camp counselor","trail guide","mountain guide","hunting guide","fishing guide","ski instructor","surf instructor","dive instructor","scuba instructor"],"daysUntilCooked":2500,"confidence":5,"cookedLevel":"RAW","description":"You teach people to survive, play, and not die in nature. AI can plan the route, check the weather, and identify the plants — but it can't catch a kid who slips on a rock, paddle a raft through rapids, or build a fire in the rain. Nature is unpredictable and you're the human interface between civilization and chaos.","milestones":[{"year":2028,"event":"AI navigation apps make your route-finding obsolete. Your judgment on 'should we turn back' is not."},{"year":2031,"event":"VR outdoor experiences exist. People try them once and book a real trip with you."},{"year":2035,"event":"Climate change makes outdoor conditions less predictable. Your experience is MORE valuable, not less."},{"year":2040,"event":"Still guiding. The whole point of outdoor education is being OUTSIDE with a HUMAN who's been there before."}]},
  {"title":"chess player","aliases":["chess grandmaster","professional chess player"],"daysUntilCooked":500,"confidence":75,"cookedLevel":"MEDIUM","description":"AI beat the best human at chess in 1997. It's been 29 years. You're still here because chess is a sport, not a math problem. People watch Magnus Carlsen, not Stockfish. But AI has fundamentally changed how you train, prepare, and play — you're a centaur now, half human, half algorithm.","milestones":[{"year":2027,"event":"AI preparation is so thorough that opening theory extends to move 30. Games are decided by whoever deviates first."},{"year":2029,"event":"AI cheating detection becomes as important as the games themselves. Your sport has a doping problem, except the doping is software."},{"year":2032,"event":"Rapid and blitz chess become dominant because AI prep matters less with less time. Your intuition is the moat."},{"year":2035,"event":"Still playing. Chess survived the calculator. It'll survive AI. The human drama IS the content."}]},
  {"title":"clerk","aliases":["office clerk","file clerk","records clerk","data entry clerk","transcriptionist","typist","stenographer","mail room","mailroom clerk"],"daysUntilCooked":200,"confidence":92,"cookedLevel":"BURNT TO A CRISP","description":"You type, file, sort, and forward things. You are a human middleware layer between inbox and outbox. AI does your entire job description as a side effect of doing something else. You're not being replaced — you're being skipped.","milestones":[{"year":2026,"event":"AI auto-files, auto-sorts, and auto-responds to 95% of your workload. You handle the printer jams."},{"year":2027,"event":"Digital document management eliminates filing cabinets. Your organizational skills now mean knowing which Slack channel to check."},{"year":2028,"event":"Your office consolidates 3 clerk positions into 1 person plus an AI subscription. You draw the short straw."},{"year":2029,"event":"The job title 'clerk' only exists in courthouses and period dramas."}]},
  {"title":"acupuncturist","aliases":["herbalist","naturopath","homeopath","traditional chinese medicine","tcm practitioner"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You poke people with needles based on 3,000-year-old meridian maps. Science can't fully explain why it works, AI can't replicate the human touch, and your clients aren't coming for evidence-based medicine anyway — they're coming for the vibes, the incense, and the feeling that someone truly listened for 45 minutes.","milestones":[{"year":2028,"event":"AI health apps recommend acupuncture for stress. You get more clients from an algorithm. Ironic."},{"year":2031,"event":"Robotic acupuncture needles are tested in labs. Patients say it feels 'wrong.' They want your hands."},{"year":2035,"event":"Holistic health market grows 300%. You're busier than ever because stressed tech workers need something AI can't give."},{"year":2040,"event":"Still needling. Your practice survived antibiotics, MRIs, and AI. It'll survive whatever's next."}]},
  {"title":"periodontist","aliases":["endodontist","prosthodontist","oral surgeon","orthodontist","dental specialist"],"daysUntilCooked":1300,"confidence":35,"cookedLevel":"WARMING UP","description":"You specialize in things people are terrified of — gum surgery, root canals, dental implants. AI plans the procedures perfectly using 3D scans, but the execution requires a human with tiny instruments inside a screaming person's mouth. Your hands are worth $400/hour because nobody else wants to be there.","milestones":[{"year":2028,"event":"AI treatment planning from CBCT scans is more accurate than yours. You execute the plan. Ego adjusts."},{"year":2031,"event":"Robot-assisted implant placement improves precision. You're the operator, not the navigator."},{"year":2035,"event":"Regenerative therapies reduce need for gum surgery. Implant demand increases. Net zero for your schedule."},{"year":2038,"event":"Still operating. Mouths are small, wet, and uncooperative. Robots hate all three."}]},
  {"title":"cobbler","aliases":["shoe repair","shoe repairer","shoemaker"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You fix shoes. By hand. In a shop that smells like leather and glue and has been there since 1974. Fast fashion tried to kill you. AI can't touch you. Nobody's building a shoe-repair robot for a job that pays $15 per resole. You survive because you're too small to disrupt and too useful to die.","milestones":[{"year":2028,"event":"Sustainability trends increase demand for repair over replace. Your shop gets a TikTok feature. Business doubles."},{"year":2031,"event":"3D-printed soles make some repairs faster. You still glue them on by hand because the machines cost more than your shop."},{"year":2035,"event":"Luxury shoe brands partner with cobblers for authorized repair programs. You're official now."},{"year":2040,"event":"Still resoling. Shoes wear out. They always have. They always will. AI doesn't walk."}]},
  {"title":"upholsterer","aliases":["furniture upholsterer","auto upholsterer"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You wrap things in fabric — chairs, car seats, boat cushions. Every piece is a different shape, every fabric behaves differently, and every customer wants it 'just slightly different.' No robot can stretch leather around a 1967 Mustang seat and make it look factory. Your hands are irreplaceable.","milestones":[{"year":2028,"event":"CNC fabric cutters handle the cutting. You still do the stretching, stapling, and swearing."},{"year":2031,"event":"Vintage furniture restoration demand increases. You charge double because 'handcrafted' sells."},{"year":2035,"event":"Automotive upholstery for classic cars is a luxury market. Your wait list is 6 months."},{"year":2040,"event":"Still upholstering. Every chair is different, every car is different, every client is picky. AI can't handle picky."}]},
  {"title":"taxidermist","aliases":["taxidermy artist","furrier"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You stuff dead animals and make them look alive. It's art, science, and nightmare fuel all in one. AI can't skin a deer, sculpt a form, or airbrush a fish to look like it's still swimming. Your craft requires hands that have touched things no sane person wants to touch. Peak job security through sheer grossness.","milestones":[{"year":2028,"event":"3D scanning captures animal forms digitally. You still build the physical mount by hand."},{"year":2031,"event":"AI helps with reference photos and anatomical accuracy. Your hands do the actual preservation."},{"year":2035,"event":"Ethical taxidermy for natural death specimens becomes trendy. Instagram loves it. You're an influencer now. Somehow."},{"year":2040,"event":"Still stuffing. This job has been unchanged since the Victorian era and requires skills passed down like dark magic."}]},
  {"title":"watchmaker","aliases":["clockmaker","horologist","watch repair"],"daysUntilCooked":2500,"confidence":5,"cookedLevel":"RAW","description":"You repair mechanisms with gears smaller than rice grains using tools thinner than needles. Smartwatches tried to kill mechanical watches. They failed. A Patek Philippe still costs more than a car, and someone needs to service it every 5 years. Your loupe is your moat.","milestones":[{"year":2028,"event":"Smartwatch repair is electronics, not watchmaking. Your mechanical clients are getting richer, not fewer."},{"year":2031,"event":"AI diagnostic tools identify movement issues from sound alone. You still fix them with tweezers and patience."},{"year":2035,"event":"Luxury watch market grows. Certified repair specialists are in demand. Your 15-year apprenticeship pays off."},{"year":2040,"event":"Still fixing watches that tell time worse than a $5 Casio. Nobody buys a Rolex for accuracy. They buy it for you."}]},
  {"title":"insulator","aliases":["insulation installer","insulation contractor","paver","paving contractor"],"daysUntilCooked":2000,"confidence":15,"cookedLevel":"RAW","description":"You crawl into attics, crawl spaces, and wall cavities to install material that keeps buildings warm. It's itchy, dusty, and claustrophobic. AI can calculate R-values perfectly, but it can't squeeze into a 16-inch joist bay with a staple gun. Your discomfort is your job security.","milestones":[{"year":2028,"event":"Spray foam robots handle open-wall new construction. Retrofit insulation in existing homes is still your crawl space."},{"year":2031,"event":"Energy efficiency mandates increase demand. More houses need insulation. More crawl spaces need you."},{"year":2035,"event":"Smart insulation materials self-regulate. Installation still requires a human in uncomfortable positions."},{"year":2040,"event":"Still insulating. Every attic is different and every homeowner has a raccoon problem they didn't mention."}]},
  {"title":"sign language interpreter","aliases":["asl interpreter","deaf interpreter"],"daysUntilCooked":700,"confidence":60,"cookedLevel":"MEDIUM","description":"You translate spoken language into ASL in real-time, conveying not just words but emotion, tone, and subtext through facial expressions and body language. AI sign language recognition is improving but sign language is WAY more than hand shapes — it's grammar, spatial reference, and cultural nuance. AI translates words. You translate meaning.","milestones":[{"year":2027,"event":"AI sign language apps handle simple phrases. 'Where is the bathroom' works. Legal testimony doesn't."},{"year":2029,"event":"Video relay services use AI for basic calls. Medical and legal interpreting still requires you."},{"year":2032,"event":"AR glasses display live AI captions, reducing demand for routine interpreting. Complex situations still need you."},{"year":2035,"event":"Still interpreting at hospitals, courts, and schools. Nuance is your moat and ASL has infinite nuance."}]},
  {"title":"chaplain","aliases":["deacon","pastor","rabbi","imam","minister of religion","clergy"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You provide spiritual support to people in hospitals, prisons, and the military — the moments when life is most fragile. AI can quote scripture and offer platitudes, but sitting with a dying person and saying nothing because your presence IS the comfort? That's unfakeable. No algorithm has a soul. That's kind of your whole point.","milestones":[{"year":2028,"event":"AI spiritual chatbots offer 24/7 guidance. People use them at 3am. They still want you at the bedside."},{"year":2031,"event":"Virtual church attendance grows. In-person spiritual care grows faster. Turns out grief isn't a Zoom meeting."},{"year":2035,"event":"AI-generated sermons are theologically sound. Congregations want YOUR voice, not a generated one."},{"year":2040,"event":"Still ministering. Faith is the most human thing there is. You can't automate belief."}]},
  {"title":"crime scene investigator","aliases":["csi","forensic investigator","forensic technician","forensic scientist","evidence technician"],"daysUntilCooked":1000,"confidence":45,"cookedLevel":"MEDIUM","description":"You dust for prints, collect DNA, and photograph crime scenes — the real version is less glamorous than TV but more important. AI analyzes evidence faster and catches patterns humans miss, but someone needs to physically process the scene without contaminating it. Your latex gloves are your moat.","milestones":[{"year":2027,"event":"AI matches fingerprints and DNA in minutes instead of weeks. You still collect the samples. In the rain. At 4am."},{"year":2029,"event":"3D crime scene scanning replaces sketch artists. You operate the scanner and protect the evidence."},{"year":2032,"event":"AI reconstructs crime timelines from evidence patterns. You testify in court because juries want a human, not a printout."},{"year":2035,"event":"Still processing scenes. Physical evidence requires physical handling. TV lied about everything except that part."}]},
  {"title":"clown","aliases":["mime","circus performer","circus artist","improv performer","acrobat","juggler","trapeze artist"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You wear a red nose and make children laugh (and adults uncomfortable). AI can generate jokes but it can't slip on a banana peel with perfect timing, twist a balloon into a dachshund, or honk a horn at exactly the right moment. Clowning is physical comedy, and comedy is the last thing AI will master — if ever.","milestones":[{"year":2028,"event":"AI generates clown acts on paper. Performing them requires a body willing to be humiliated for money. That's you."},{"year":2031,"event":"Robot clowns exist in theme parks. Children cry. Adults sue. Back to human clowns."},{"year":2035,"event":"Birthday party demand is eternal. Parents will always need someone else to entertain 15 sugared-up 6-year-olds."},{"year":2040,"event":"Still clowning. The world's oldest form of entertainment survives the world's newest technology. Honk honk."}]},
  {"title":"hr generalist","aliases":["hr specialist","human resources generalist","hr coordinator","hr business partner","people operations"],"daysUntilCooked":500,"confidence":72,"cookedLevel":"MEDIUM","description":"You handle hiring, firing, benefits, and the delicate art of explaining to employees why their raise was 2%. AI already screens resumes, schedules interviews, manages benefits enrollment, and writes termination letters. You survive because someone needs to deliver the bad news in person and not get sued.","milestones":[{"year":2027,"event":"AI handles 80% of HR admin — onboarding, benefits, PTO tracking. You handle the 20% that involves crying."},{"year":2029,"event":"AI conducts initial interviews and reference checks. You do final rounds because 'culture fit' requires a human gut feeling."},{"year":2032,"event":"Your title changes to 'People Partner' but your job is really 'lawsuit prevention specialist.'"},{"year":2035,"event":"Still employed because employment law requires a human to fire a human. The irony writes itself."}]},
  {"title":"student","aliases":["college student","university student","high school student","grad student","graduate student","phd student","undergrad","undergraduate"],"daysUntilCooked":400,"confidence":75,"cookedLevel":"WELL DONE","description":"You're paying $50K/year to learn things AI already knows for free. Your professors use AI to grade your papers. You use AI to write them. Everyone pretends this isn't happening. Your degree is a $200K receipt for 'the college experience,' which is code for 'I partied near a library for 4 years.'","milestones":[{"year":2026,"event":"AI tutors teach better than your TA who doesn't speak your language and holds office hours at 7am on Fridays."},{"year":2027,"event":"Employers stop caring about degrees and start testing skills directly. Your diploma joins your high school yearbook in the 'things nobody looks at' pile."},{"year":2028,"event":"AI-powered bootcamps deliver your entire CS degree in 3 months for $500. Your student loans weep."},{"year":2029,"event":"'Educated' no longer means 'went to college.' It means 'knows how to learn.' You could've done that at home. In pajamas."}]},
  {"title":"retired","aliases":["retiree","pensioner","stay at home mom","stay at home dad","homemaker","housewife","house husband","sahm","sahd"],"daysUntilCooked":9999,"confidence":0,"cookedLevel":"RAW","description":"You already quit the game. AI can't replace you because there's nothing to replace. You wake up at 6am out of habit, watch the news, and judge everyone who's still working. Congratulations — you speedran the 'Am I Cooked?' game by removing yourself from the kitchen entirely.","milestones":[{"year":2027,"event":"AI manages your investments better than your financial advisor. Fire him. Keep the golf membership."},{"year":2029,"event":"AI companions keep you company. Your kids call less. The robot calls more. Same emotional warmth."},{"year":2032,"event":"AI healthcare monitoring keeps you alive longer. You're not sure if that's a feature or a bug."},{"year":2035,"event":"Still retired. Still judging. The only cooked thing in your life is the rotisserie chicken from Costco."}]},
  {"title":"business owner","aliases":["small business owner","shop owner","store owner","franchise owner","restaurant owner","bar owner","nightclub owner","cafe owner"],"daysUntilCooked":800,"confidence":55,"cookedLevel":"MEDIUM","description":"You traded a 9-to-5 for a 5-to-9. AI can handle your books, marketing, inventory, and customer service — basically everything except the part where you lie awake at 3am wondering if you made a terrible mistake. Your business is safe. Your sanity was never safe to begin with.","milestones":[{"year":2027,"event":"AI runs your social media, answers emails, and handles scheduling. You do... the thing you opened the business to do. Remember that?"},{"year":2029,"event":"AI-powered competitors undercut your prices. Your customers stay because they like YOU, not your prices."},{"year":2032,"event":"Fully automated businesses emerge. Yours survives on 'locally owned' vibes and your face on the wall."},{"year":2035,"event":"Still open. Small businesses survive because communities want humans to buy from. Walmart couldn't kill you. AI won't either."}]},
  {"title":"motivational speaker","aliases":["keynote speaker","public speaker","ted talk speaker","life coach speaker"],"daysUntilCooked":500,"confidence":72,"cookedLevel":"MEDIUM","description":"You get paid $10K to tell people things they already know in a louder voice. AI can generate your entire speech, your slides, and your 'authentic vulnerability moment' about that time you almost gave up. But conferences want a PERSON on stage. Nobody pays to watch a chatbot say 'you are enough.'","milestones":[{"year":2027,"event":"AI generates keynotes indistinguishable from yours. But you have abs and a headset mic and that's what sells."},{"year":2029,"event":"Virtual AI speakers headline online conferences. In-person events double down on 'real human energy.'"},{"year":2032,"event":"Your booking agent is an AI. Your speech is written by AI. You are a delivery mechanism with good hair."},{"year":2035,"event":"Still speaking. Tony Robbins is 75 and still yelling. If the audience wants to feel something, they need a body on stage."}]},
  {"title":"blacksmith","aliases":["bladesmith","swordsmith","knifemaker","farrier","metalworker","ironworker"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You heat metal until it glows and hit it with a hammer until it's useful. This job is 5,000 years old and AI hasn't moved the needle. CNC machines mass-produce blades, but people pay $500 for YOUR knife because it has hammer marks and a story. You're not competing with technology — you predate it.","milestones":[{"year":2028,"event":"Forged in Fire is still on TV. Your waiting list grows. Every episode is free marketing."},{"year":2031,"event":"AI designs optimal blade geometry. You ignore it because your grandfather's pattern works fine."},{"year":2035,"event":"Handmade knives are luxury items. Your $800 chef's knife is a status symbol in kitchens that cost $200K."},{"year":2040,"event":"Still hammering. Fire, metal, and muscle. The original technology. No software update required."}]},
  {"title":"potter","aliases":["ceramicist","ceramic artist","glassblower","glass artist"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You spin mud on a wheel and charge $80 for a coffee mug. AI can design perfect pottery. 3D printers can produce it. But nobody wants a 'perfect' mug — they want YOUR mug with the slightly uneven glaze and the thumb print you left by accident. Imperfection is the product. AI can't do imperfect on purpose.","milestones":[{"year":2028,"event":"Pottery TikTok has 4 billion views. Your classes are booked 6 months out. AI drove the interest. You collect the cash."},{"year":2031,"event":"3D-printed ceramics flood the market. Yours are labeled 'handmade' and cost 5x more. That's the point."},{"year":2035,"event":"Pottery becomes the new yoga — therapeutic, analog, and impossible to do on a screen."},{"year":2040,"event":"Still spinning. Clay doesn't need electricity, WiFi, or a subscription. The most offline job in existence."}]},
  {"title":"weaver","aliases":["textile artist","spinner","dyer","fiber artist","knitter","quilter","embroiderer"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You turn thread into fabric by hand, which machines have done faster since 1764. You survived the Industrial Revolution. AI is a rounding error. People buy your work because handwoven anything is automatically 'artisanal' and costs 20x the machine version. Your loom is a money printer for the Etsy crowd.","milestones":[{"year":2028,"event":"AI generates textile patterns instantly. You weave them by hand because that's literally the value proposition."},{"year":2031,"event":"'Slow fashion' movement booms. Your 3-month wait time is a feature, not a bug."},{"year":2035,"event":"Fast fashion collapses under sustainability pressure. Handmade textiles are the new luxury."},{"year":2040,"event":"Still weaving. This craft survived the spinning jenny, the power loom, and polyester. It'll survive GPT."}]},
  {"title":"piano tuner","aliases":["instrument repair","instrument technician","piano technician"],"daysUntilCooked":2000,"confidence":12,"cookedLevel":"RAW","description":"You tune pianos by ear, which requires a skill set so rare that there are more concert pianists than piano tuners. AI can detect pitch perfectly, but tuning isn't just pitch — it's voicing, touch, and adjusting 230 strings so they sound right TOGETHER. Plus you need to move a piano action that weighs 70 pounds. Your ears and your back are both irreplaceable.","milestones":[{"year":2028,"event":"AI tuning apps exist. Piano owners try them, ruin their instruments, and call you to fix it."},{"year":2031,"event":"Electric pianos improve further. Acoustic pianos become 'vintage instruments' that need MORE care, not less."},{"year":2035,"event":"Concert halls still insist on human tuners. Your hourly rate goes up because there are fewer of you every year."},{"year":2040,"event":"Still tuning. Steinway doesn't let robots touch their pianos and they never will."}]},
  {"title":"luthier","aliases":["guitar maker","violin maker","instrument maker","instrument builder"],"daysUntilCooked":3000,"confidence":3,"cookedLevel":"RAW","description":"You build guitars and violins by hand from wood, glue, and decades of obsessive knowledge about grain patterns and tonewoods. A factory Fender costs $800. YOUR guitar costs $8,000. Both play music. Only yours has a soul. At least that's what your customers tell themselves, and that delusion is your business model.","milestones":[{"year":2028,"event":"AI analyzes wood density and predicts tone. You tap the wood with your knuckle and 'just know.' Both methods work."},{"year":2031,"event":"3D-printed guitars exist and sound fine. 'Fine' is not why people spend $8K on an instrument."},{"year":2035,"event":"Vintage instrument prices skyrocket. Restoration work keeps you busier than new builds."},{"year":2040,"event":"Still building. Stradivari made violins 300 years ago that nobody can replicate. Your craft literally improves with age."}]},
  {"title":"bookbinder","aliases":["book restorer","printer","lithographer","typesetter","letterpress"],"daysUntilCooked":2500,"confidence":8,"cookedLevel":"RAW","description":"You bind books by hand in an era where 'books' are PDFs. And yet — special editions, art books, thesis binding, and restoration keep you busy because some things WANT to be physical. Your craft is a middle finger to the digital age, and people pay premium prices for that defiance.","milestones":[{"year":2028,"event":"Print-on-demand eliminates most commercial binding. Custom and luxury binding demand grows."},{"year":2031,"event":"AI-designed book layouts are gorgeous. You bind them because beauty deserves better than a paperback."},{"year":2035,"event":"'Handbound' editions are collector's items. Your signature on the colophon adds $200 to the price."},{"year":2040,"event":"Still binding. Books have survived 600 years of 'this will kill books.' Your glue is stronger than predictions."}]},
  {"title":"chauffeur","aliases":["personal driver","executive driver","limo driver","limousine driver"],"daysUntilCooked":600,"confidence":65,"cookedLevel":"MEDIUM","description":"You drive rich people around. Self-driving cars are coming for your job specifically — but they're coming slowly because rich people like a human who opens doors, carries bags, knows their preferred route, and doesn't judge the 2pm champagne. You're a valet, bodyguard, and therapist who happens to drive.","milestones":[{"year":2027,"event":"Robotaxis handle commuters. Your clients still want a human because privacy means 'no cameras recording my affairs.'"},{"year":2029,"event":"Autonomous luxury vehicles debut. They open their own doors. It's not the same and everyone knows it."},{"year":2032,"event":"Half of corporate car services go autonomous. The top tier keeps human drivers as a status symbol."},{"year":2035,"event":"You're a 'personal mobility concierge.' Same black suit, same town car, fewer Uber drivers to compete with."}]}];

// Easter eggs
const EASTER_EGGS = {
  "unemployed": {
    title: "unemployed",
    aliases: ["jobless", "between jobs", "funemployed", "neet", "laid off", "fired", "looking for work", "job hunting", "on the bench"],
    daysUntilCooked: 0,
    confidence: 100,
    cookedLevel: "BURNT TO A CRISP",
    description: "Congratulations — you speedran the future. While everyone else is worried about WHEN AI takes their job, you're already living in the post-employment economy. You're not unemployed, you're just early. Unfortunately, 'early' doesn't pay rent.",
    milestones: [
      { year: 2025, event: "Applied to 200 jobs. Got 3 'we'll keep your resume on file' emails. The file is /dev/null." },
      { year: 2026, event: "LinkedIn AI now writes your rejection emails. They're more personalized than your cover letters ever were." },
      { year: 2026, event: "Your mom sends you an article: 'AI Creating Millions of New Jobs!' You apply to 50 of them. They all require 5 years of experience in a tool released 6 months ago." },
      { year: 2027, event: "UBI finally passes. It's $12/month. You can almost afford one ChatGPT subscription to apply for jobs that no longer exist." }
    ]
  }
};

// Default response for unknown jobs
const DEFAULT_JOB = {
  title: "unknown",
  daysUntilCooked: 800,
  confidence: 50,
  cookedLevel: "MEDIUM",
  description: "We don't have specific intel on your job, but let's be honest — if it involves a computer, a phone, or any form of repetitive thinking, AI is circling your position like a vulture with a GPU. The question isn't IF, it's how dramatically.",
  milestones: [
    { year: 2026, event: "AI starts doing 20% of your job. You barely notice." },
    { year: 2027, event: "AI does 50% of your job. You start to notice." },
    { year: 2028, event: "AI does 80% of your job. Your boss definitely notices." },
    { year: 2029, event: "AI does your job. You do your LinkedIn." }
  ]
};

function findJob(query) {
  const q = query.toLowerCase().trim();
  
  // Easter eggs first
  let match = Object.values(EASTER_EGGS).find(j => j.title === q);
  if (match) return match;
  match = Object.values(EASTER_EGGS).find(j => j.aliases && j.aliases.some(a => a === q));
  if (match) return match;

  // Exact title match
  match = JOBS_DATA.find(j => j.title === q);
  if (match) return match;
  
  // Alias match
  match = JOBS_DATA.find(j => j.aliases && j.aliases.some(a => a === q));
  if (match) return match;
  
  // Partial match: query contains a title OR an alias contains the query
  // Only match if the shorter string is >60% the length of the longer one
  // This prevents "director" matching "funeral director" but allows "software eng" matching "software engineer"
  function similarEnough(a, b) {
    if (a.length < 4 || b.length < 4) return false;
    const shorter = Math.min(a.length, b.length);
    const longer = Math.max(a.length, b.length);
    if (shorter / longer < 0.6) return false;
    return a.includes(b) || b.includes(a);
  }
  
  match = JOBS_DATA.find(j => similarEnough(j.title, q));
  if (match) return match;
  
  match = JOBS_DATA.find(j => j.aliases && j.aliases.some(a => similarEnough(a, q)));
  if (match) return match;
  
  // Word-level fuzzy: only for MULTI-WORD queries
  // Scores by number of matching words from TITLE only (not alias fragments)
  const qWords = q.split(/\s+/).filter(w => w.length >= 3);
  const stopWords = new Set(['the','a','an','and','or','of','in','on','at','to','for','is','as','by','with']);
  if (qWords.length > 1) {
    const meaningfulQWords = qWords.filter(w => !stopWords.has(w));
    let bestMatch = null, bestScore = 0;
    JOBS_DATA.forEach(j => {
      const titleWords = j.title.split(/\s+/).filter(w => !stopWords.has(w));
      const matchCount = meaningfulQWords.filter(qw => titleWords.some(w => {
        return w === qw || (qw.length >= 5 && w.startsWith(qw)) || (w.length >= 5 && qw.startsWith(w));
      })).length;
      if (matchCount > bestScore) {
        bestScore = matchCount;
        bestMatch = j;
      }
    });
    if (bestMatch && bestScore > 0) return bestMatch;
  }
  
  // Return default with custom title
  return { ...DEFAULT_JOB, title: q };
}
