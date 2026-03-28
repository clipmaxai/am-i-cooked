const JOBS_DATA = [
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
    aliases: ["security engineer", "penetration tester", "pentester", "infosec", "security analyst", "ethical hacker"],
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
    aliases: ["content writer", "writer", "blogger", "content creator", "technical writer"],
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
    aliases: ["film editor", "post production", "motion designer", "motion graphics designer"],
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
    aliases: ["music producer", "composer", "songwriter", "producer", "dj", "sound designer"],
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
    aliases: ["concept artist", "digital artist", "character designer"],
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
    aliases: ["marketer", "digital marketer", "marketing director", "growth hacker", "social media manager", "seo specialist"],
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
    aliases: ["doctor", "physician"],
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
    aliases: ["pipefitter"],
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
    aliases: ["cook", "line cook", "sous chef", "head chef", "pastry chef"],
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
    aliases: ["waitress", "server", "food server", "bartender"],
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
    aliases: ["professor", "instructor", "educator", "lecturer", "tutor"],
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
    aliases: ["property appraiser", "home appraiser"],
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
    aliases: ["laborer", "construction laborer", "general laborer"],
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
    aliases: ["cop", "law enforcement", "detective", "sheriff"],
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
    aliases: ["fire fighter", "emt", "paramedic", "first responder"],
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
    aliases: ["chief executive officer", "founder", "executive", "c-suite", "managing director"],
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
    aliases: ["hairdresser", "barber", "cosmetologist", "beautician"],
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
    aliases: ["game designer", "game programmer", "indie developer"],
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
    aliases: ["cosmonaut", "space explorer"],
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
];

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
  
  // Exact title match
  let match = JOBS_DATA.find(j => j.title === q);
  if (match) return match;
  
  // Alias match
  match = JOBS_DATA.find(j => j.aliases && j.aliases.some(a => a === q));
  if (match) return match;
  
  // Partial match on title (both sides must be 4+ chars to avoid substring noise)
  match = JOBS_DATA.find(j => {
    if (j.title.length < 4 || q.length < 4) return false;
    return j.title.includes(q) || q.includes(j.title);
  });
  if (match) return match;
  
  // Partial match on aliases (both sides must be 4+ chars)
  match = JOBS_DATA.find(j => j.aliases && j.aliases.some(a => {
    if (a.length < 4 || q.length < 4) return false;
    return a.includes(q) || q.includes(a);
  }));
  if (match) return match;
  
  // Word-level fuzzy: full words must match (min 3 chars to avoid false positives)
  const qWords = q.split(/\s+/).filter(w => w.length >= 3);
  if (qWords.length > 0) {
    match = JOBS_DATA.find(j => {
      const titleWords = j.title.split(/\s+/);
      const aliasWords = (j.aliases || []).flatMap(a => a.split(/\s+/));
      const allWords = [...titleWords, ...aliasWords];
      return qWords.some(qw => allWords.some(w => w === qw || (qw.length >= 4 && w.startsWith(qw)) || (w.length >= 4 && qw.startsWith(w))));
    });
    if (match) return match;
  }
  
  // Return default with custom title
  return { ...DEFAULT_JOB, title: q };
}
