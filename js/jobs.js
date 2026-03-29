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
    aliases: ["fire fighter", "first responder"],
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
    aliases: ["lock technician", "security technician"],
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
    aliases: ["voice over artist", "vo artist", "voice talent", "narrator", "voiceover"],
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
    aliases: ["event planner", "event coordinator", "wedding coordinator"],
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
    aliases: ["pi", "private detective", "detective", "investigator"],
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
    aliases: ["animal keeper", "zoo attendant", "wildlife keeper"],
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
    description: "Which kind of director? Film? Creative? Managing? Funeral? Doesn't matter — AI is coming for all of you. It directs content, manages workflows, and makes creative decisions without needing an espresso machine or a corner office. Your authority is your moat, but AI doesn't respect org charts.",
    milestones: [
      { year: 2027, event: "AI generates creative briefs and project plans better than your team." },
      { year: 2028, event: "AI directs AI. You direct humans who manage AI. It's directors all the way down." },
      { year: 2030, event: "Half of 'director' titles are eliminated as companies flatten." },
      { year: 2032, event: "You're a 'Chief Decision Officer.' The AI does the directing." }
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
      "research biologist",
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
