---
date: 2025-12-26
layout: post
lang: en
tag: technical rambling
title: It's an agentic world
---

In the past weeks, I have experienced a profound shift in how I experience coding. I was able to bootstrap many projects quickly, to make a lot of progress in a short time in many of them. This has been exhilarating. I am still cautious as I proceed, because this is new territory for me, but this new way of working is undeniably powerful.

However, alongside the excitement, I also felt a growing numbness. A detachment from the craft of programming. A sense that I was no longer actively building, but rather managing the output of an AI. Not in a dramatic way, but in a subtle shift that's hard to describe. I know I should be critical, reading every line the AI generates, questioning its choices. But I find myself getting overconfident, scrolling through screens of generated code with a vague sense of approval. I start trusting it's always right, even when I know I shouldn't. It's like switching from building something with my hands to managing someone else's work. Except I'm not a good manager. I'm an overconfident one who nods along without really checking.

Let me be clear from the start: LLM systems are awesome. They're genuinely useful, and I use them almost daily now. My two main use cases are learning and code assistance. In both cases, they significantly augment my capabilities. In interaction mode, I get to ask questions, get explanations, access documentation I would never have time to read. But then, there is production mode, where the AI generates code that goes into your system. These two modes feel similar but they're fundamentally different with fundamentally different risks.

When I'm learning Irish grammar on Duolingo and I ask an LLM to clarify when and how to apply the lenition rules, that's fine. When I'm trying to write a complex GitHub Actions workflow and the AI helps me navigate documentation for features I didn't know existed, that's genuinely valuable. I can only do basic stuff with GitHub Actions, but an LLM can help me design something much more sophisticated that would take me ages to figure out through trial and error. The iteration cycle is painful when you have to commit, wait for continuous integration, see it fail, repeat. The AI can ingest all that documentation and cherry-pick exactly what I need.

Code review is another place where it shines. It's good at catching weak design, missing tests, the kind of shortcuts we tell ourselves we'll fix later but never do. Sometimes it even fixes bugs. It's like having a colleague who actually reads every line and doesn't get tired.

For self-education, I love using it to create compact learning sheets, to remind me of rules I've forgotten, to help me manage resources in various human languages where I'm not fluent. It's better than anyone can be at organising information across more languages than anyone can be proficient in.

Maybe a first rule of thumb could be that it's fine to use LLM to help you understand. It's different to use it to produce. Understanding is about input. Production is about output. The risk profiles are completely different. One helps you learn, the other bypasses learning. One augments your judgment, the other replaces it.

Some enthusiast profiles ask the same question when you express concern about AI coding: "Isn't this just like assembly programmers complaining about C or Python? Every generation resists new abstractions."

But this is different. High-level programming languages are proper abstractions. They're structured. The process that transforms your Python or C code into machine instructions is deterministic. It's clearly documented. You can understand the mapping if you want to.

Different programming paradigms help structure different kinds of thought. C helps you understand how machines and memory work. Functional programming is close to mathematical proof through the Curry-Howard correspondence. Object-oriented programming helps you model complex systems through encapsulation and inheritance. Python is great for gluing programming blocks together. Each abstraction layer teaches you something about the layer below.

But AI code generation isn't an abstraction layer. It's a probabilistic generator. It intentionally uses fuzzy instructions. The transfer function is a black box. It's non-deterministic. There's no structured mapping to understand.

The learning path in traditional programming goes like this: you learn about computer architecture and memory design first, with a language like C with memory control to understand the process. You don't need to drop down to assembly, but you do need to manipulate memory with `malloc` and `free` instructions.

You only understand what you manipulate the hard way. Confront a `Segmentation fault` at least once in your life and investigate your mistakes. With an LLM, it's like learning theory but never practicing. You can ask questions about memory structure, but you never actually manipulate it. You never feel the difference between stack and heap (have you tried to allocate a 4096x4096 float matrix on the stack?), between a pointer and a value, between a copy and a reference.

When we teach functional programming, we like to make students implement Fibonacci with memoization and tail recursion. Nobody thinks you'll actually implement Fibonacci that way (or, as a matter of fact, in any other way) in production. That's not the point. The point is understanding recursion, understanding memoization, feeling in your fingers how tail calls work. Same with sorting algorithms. You'll never write bubble sort or even quicksort in a real system, you'll use a library or what is available in the language. But implementing bubble sort makes you grasp what algorithmic complexity means. You feel it. It's not abstract anymore.

If you don't implement it, you don't understand it the same way. Then learning to code for students, and staying sharp for professionals are the same problem. Both require active manipulation and practice. Both degrade without use.

My physics teacher in high school used to say: when you use a calculator, compute an order of magnitude in your mind, then check the result is consistent with your expectations. A calculator is a fantastic tool, deterministic and reliable. But kids still make mistakes. They mess up the priority order, they miss a digit when typing. Then they get a wrong result and don't realize it. Critical judgment matters even with perfect tools. If you know roughly what answer to expect, you can catch and correct mistakes.

---

June 2009. Air France 447, Rio to Paris, crashes into the Atlantic Ocean. The investigation reveals that icing of pitot tubes resulted in incorrect airspeed measurements. Then automation was giving inconsistent feedback and the pilots failed to question the information displayed. They had relied on automation to assess the situation for so long that when it failed, they couldn't assess the situation. Their critical judgment was numbed. When you're used to the automation being right, you stop checking.

The plane went into a stall and they never recovered because they didn't recognize what was happening. They had the knowledge to fly the plane. They had done it in training. But practice makes better. When the automation failed, and the displayed information was wrong, they couldn't fall back on manual skills. One of my colleagues at the time was a former military pilot. He was saying this is so typical of what happens when commercial pilots lose manual flying skills because they rely too much on automation.

Think about the parallels. Automation displaying wrong information: black box LLM. Over-reliance on automation: trusting generated code is correct. Lack of manual practice: not coding without AI assistance. Numbed critical judgment: skimming generated code instead of reviewing carefully. When automation fails: can you still identify it does?

This isn't fearmongering. This is human factors engineering, a discipline aviation learned through tragedy. We're repeating the same pattern in software, deploying tools faster than we understand their human impact. We're failing to see the risks.

People would say we should just design better human-AI interfaces. Yes, absolutely. But we're not there yet. We're moving fast and breaking things, except what we're breaking is human expertise and we won't notice until we need it.

Here's something that bothers me. We demand explainable AI in aviation, in medicine, in finance, in criminal justice. We want to know why the algorithm made that decision, especially when lives or livelihoods are at stake. But we're comfortable accepting a black box in our code. Why?

Maybe because we don't think our code is critical. Or maybe we're not thinking clearly about what we're building. Code runs infrastructure, embedded systems onboard aircraft, medical devices, financial systems, the cars we drive. It's critical. We know it's critical. So why are we comfortable with opaque assistance?

It's fine to use LLM to help you understand. Documentation, explanations, learning resources. That's input. It's augmenting my ability to learn. But production is output. Code that will run in systems. The risk is different. With understanding, the worst case is I misunderstand something and have to relearn it. With production, the worst case is I ship code I don't understand and it fails in production in ways I can't debug.

We write code in human-readable programming languages for a reason. We could write binary if we just wanted to give instructions to machines. But we want to be able to read and confirm that what is written is correct. We want to verify correctness. That's the whole point of moving from machine code to assembly to high-level languages. Each step made code more human-readable, more verifiable.

Static type checking exists for this reason. It's the first step of validation for what plugs into what. It ensures consistency as you build. When I write code in a typed language, the type checker is constantly validating my decisions. It's an incremental feedback loop. Write a function, the types tell me what it can accept and return. Try to connect two things, the types tell me if they're compatible.

There's a reason there's now consensus around adding type hints to Python even though it was designed as a dynamically typed language. Even the "consenting adults" language decided some guardrails help.

For many reasons, I like to describe Python as "not a great tool for learning programming, but an excellent second language for people who know how to program." That applies doubly to agentic coding. It's a tool for consenting adults who already know what they're doing.

You can use agentic coding with strong type systems. Ask the LLM to respect types in Python with mypy, or use a language where it won't compile if the types are wrong. You can get both static typing and AI generation. But the incremental validation loop is different. Instead of building up your understanding piece by piece, you get a chunk of code and then validate it all at once.

It's not an abstraction layer. It doesn't bring structure. With proper interaction, it can help structure your thoughts. But it doesn't take away the hard work of understanding. It shouldn't offload that work. But in practice, it often does.

Agentic coding can handle things that are too easy for me to bother with. Boilerplate, repetitive patterns, simple glue code. And it can handle things I'd love to do but don't have time for, especially for non critical parts. Complex configurations, exploring unfamiliar libraries, trying out architectural patterns I've read about but never implemented.

If AI can do the things too easy to be interesting and the things too difficult to be practical, what's left? What do I want to do? This challenge forces me to articulate my values. Not efficiency, not necessity, but meaning. What do I find meaningful?

I know my answer, but I can't prescribe it for anyone else. I want to enjoy building things, working with my hands, or maybe the metaphor works better if I say "working with my fingers". I appreciate LLM help but I want to understand what I write. I enjoy the beauty of proper design. Sometimes an LLM offers good design, but not always. And I've noticed most people just accept anything that seems to work.

A few days ago, I asked ChatGPT to analyse my usage pattern. It told me most users ask goal-oriented, one-off questions. How do I fix this error? They apply the answer and leave. They accept good-enough explanations. If it works, it's fine, even if the explanation is hand-wavy.

But apparently I'm different. I value clarity and good writing. I ask for careful explanations. I'm skeptical. When something doesn't make sense, I push back and ask again.

I guess that's my approach to code too. I want to understand it, not just have it work.

But that's my answer. What's meaningful to me isn't meaningful to everyone. For me, bureaucratic nonsense and boilerplate are things I'd happily automate. But who am I to say what's meaningful? Someone else might find deep satisfaction in perfect deliverable reports nobody will ever read and consider algorithmic work boring bureaucracy.

The honest reality is this: there's easy stuff I don't want to do, and difficult stuff I don't want to do. Agentic AI offers to handle both. What a gift. But also, what a trap. Because if I accept that offer completely, what's left? What am I even doing?

The opportunity is that this question is now unavoidable. I have to decide what kind of programmer I want to be. Not what's most efficient, not what's most practical, but what I find meaningful.

---

But these aren't just personal choices. We work in teams.

I've seen the frustration from both sides. Someone submits a PR with AI-generated code. Hundreds of lines. It works, mostly. But the design is off. It uses patterns inconsistent with the rest of the codebase. It handles one case well but ignores edge cases we've been burned by before. The maintainer is frustrated because he has to review all this code they didn't carefully check, code that reveals they didn't understand the problem deeply enough to even prompt the AI well.

Flip side: I use AI to help with something. Maybe I ask it to generate test cases, or refactor something, or explore an approach. Someone on my team doesn't want AI-involved code in the codebase. They're frustrated that I'm using tools they don't trust. I'm frustrated that they're rejecting good code based on how it was created rather than what it is.

People could compare this to tabs versus spaces, or vim versus emacs. Editor wars, tool preferences, bikeshedding. But it's not the same. Those debates are about superficial preferences. This is about code quality and design competence.

It's about people bringing in code they didn't carefully check versus people who master their design choice. When a junior developer without enough experience uses AI, they are very likely to not know how to prompt it well, to lack the critical judgment to evaluate results. They accept inappropriate design choices because they don't recognize them as inappropriate. Before AI, at least junior developers produced code at their own pace. Even if it was poor quality, it was limited in scope. Maybe one function, maybe one small module. With AI, a junior can flood the codebase with poorly-reviewed generated code. Hundreds of lines that all seem to work but collectively make the architecture incoherent.

Reviewing this is exhausting for senior engineers. It's not just checking correctness, it's checking whether the person understood the problem. And often they didn't. They got AI to give them something that works without understanding why it works or what assumptions it makes.

There's a deeper problem brewing. Companies are now hiring only senior engineers, and equip them with agentic tools. Not juniors. The economic logic seems clear. Why hire a junior who needs mentoring when you can pay a few bucks for a system that can write more lines per minute? Why invest in training when the market has plenty of seniors?

But how do juniors become seniors? They learn on the job. They write code, they make mistakes, they get feedback from experienced developers, they improve. If we stop hiring juniors, we break the pipeline. And if the juniors we do hire are using AI from day one, are they actually learning? Or are they learning to manage AI output without building the underlying skills?

We're creating a competence crisis we'll pay for later. In a few years, where will the next generation of senior engineers come from?

There's the economic argument people always make. Someone using AI well can deliver three times faster than someone who doesn't. If you reject these tools, you'll be less competitive. Only privileged senior engineers can afford to be purists. Solo developers versus teams, the calculus changes. Time to market matters. Ship or die.

I think this is dangerously short-sighted. Today we produce code fast. That's great. But what about tomorrow? What about the technical debt from design choices we didn't master? What about the code we overlooked, that we didn't carefully review? We'll pay for it later. We always do.

The thing about technical debt is that it's invisible until it isn't. Code is written once but read many times. Maintained for years. Often by people who weren't there when it was written. If the original author didn't understand it because AI wrote it, how will future maintainers understand it? When a bug appears three years later in production, who debugs it? When requirements change and the code needs to adapt, who makes those changes? Who accepts the full rewrite by an agentic system to fix a minor bug when the system is already running in production?

The real competitive question isn't speed of initial development. It's maintainability, reliability, adaptability. It's team knowledge and capability. It's avoiding catastrophic failures. Technical debt always comes due. The question is whether you're prepared to pay it.

We're accumulating debt we're not counting. Code we don't understand. Architectures that seem reasonable but have subtle assumptions we never examined. Patterns that work until they don't. We're moving fast but I'm not sure we're moving well.

I keep coming back to that manager versus craftsman question. When I use agentic coding, I shift from productive mode to managerial mode. But I'm not a good manager. Good managers understand the work they're managing. They can evaluate quality. They know when to push back. They ask hard questions.

When I'm managing AI output, I'm an overconfident manager who skims reports and approves things that seem fine. The work gets done, sort of. But I'm not building anything. I'm not learning anything.

Someone suggested "conductor" might be a better metaphor than "manager." I like that. A conductor doesn't play every instrument but they're still an artist. But here's the thing: conductors know how to play many instruments themselves. They studied music deeply before they started conducting. They understand what they're asking for.

Many people using agentic coding are producing programs without understanding the specifics of the language. Without understanding the patterns. Without understanding the tradeoffs. They're conducting an orchestra when they can't read music. Maybe that works. Good enough for the local community band performing for the village fair.

You need to be a craftsman before you can be a conductor. You need to understand the work before you can effectively direct it.

---

To be honest, I'm not certain I'm right about any of this. What if resisting agentic coding is like blacksmiths resisting the assembly line? What if manual coding becomes historical re-enactment, like people who cultivate those forgotten vegetables or develop film photography as a hobby? What if programming becomes like people who restore vintage cars, a niche craft for enthusiasts?

What if the next generation finds deep meaning in AI orchestration, in prompt engineering, in curating and combining outputs? What if the work shifts entirely and I'm just nostalgic for a craft that's transitioning to history?

These are real possibilities. I don't have certainty. But I have concerns based on human factors, skill degradation, and technical debt. Software isn't usually life-or-death, though sometimes it is. But even when it's not, there are consequences. Systems that fail. Businesses that collapse. Infrastructure that becomes unmaintainable.

We're deploying these tools faster than we're understanding their impact. We're running an experiment on human expertise and we won't know the results for years. Maybe it will be fine. Maybe we'll adapt. Maybe new skills will replace old ones and nothing important will be lost.

But maybe we should slow down and think. Maybe we should acknowledge the risks. Maybe we should design better human-AI interfaces before we're all dependent on tools we don't fully understand. Maybe we should study the human factors problem we're creating.

This isn't a crisis. I don't think the sky is falling. But it is a clarifying moment. A technology that forces us to articulate our values. Forces us to decide what we want to do. Forces us to be intentional about learning, practice, and competence.

What do you want to do? Not what's fastest, not what's easiest, not what the market demands. What do you want to do with your life?

Answer that question carefully. Your answer matters. Not just for you, but for the craft, for your team, for the systems we build together. For the next generation trying to learn.

My answer is that I want to understand what I write. I want to enjoy science, and proper design, because it is what is fun for me. I want to maintain the skills to build things, not just manage their construction. I want to be a craftsman who sometimes uses AI as a tool, not a manager who depends on AI to do the work.

Your answer might be different. That's fine. But you need an answer. Letting the tool decide by default is itself a choice. Make it consciously.

Because when your moment comes, when the automation fails or gives you inconsistent feedback or generates something subtly catastrophic, you'll need to fall back on skills you've been practicing. On judgment you've been sharpening. On understanding you've been building.

Can you still fly the plane manually? Can you still write the code yourself? Not in theory, not "I used to be able to," but right now, today, if you had to.

If the answer is yes, good. Keep it that way. If the answer is no, or you're not sure, and if that answer bothers you, maybe it's time to practice. Before you need it. Before your systems stall and you don't recognize what's happening.

The tools are amazing. Use them. But use them as tools for consenting adults who know what they're doing. And keep knowing what you're doing. That part isn't optional.

That part is the craft.
