---
title: '2023-06-28 - Bennett and Deutsch - The Nature of Computation, Incompleteness and Mathematics'
description: 'A panel / discussion from Bennett and Deutsch, featuring David Deutsch, Charles Bennett, Charles Bédard, Vincent, Adita, Sam, Sophie, audience questioner, titled "The Nature of Computation, Incompleteness and Mathematics".'
pubDate: 2023-06-28
---

[YouTube](https://www.youtube.com/watch?v=CluVy2jICgs)

<span class="duration-label">Duration:</span> <span class="duration-time">01:53:53</span>

## Transcript
### Charles Bédard

<span class="transcript-timestamp">00:00:00 - 00:00:39</span>

So welcome everyone. I am Charles Bédard. I'll be your host today. I'm a postdoctoral researcher at Università della Svizzera Italiana in Lugano, Switzerland. And today I have the pleasure to be animating a conversation between Charles Bennett and David Deutsch on the nature of computation, incompleteness, and mathematics. I'll please ask everyone who's not David or Charlie to mute themselves so that we don't hear any background, any noise in the background. So that means among the Charles that includes yourself right?

### Charles Bennett

<span class="transcript-timestamp">00:00:39 - 00:00:42</span>

Yeah, I'll keep myself unmuted.

### Charles Bédard

<span class="transcript-timestamp">00:00:42 - 00:01:15</span>

I'll be animating the conversation for around one hour, and then I'll open it up for the audience to ask questions and jump in. Well, let me introduce our guests to continue. We have Charles Bennett. He's an IBM fellow at the IBM research and a fellow of the American Physical Society. He has been awarded the 2023 breakthrough prize in fundamental physics for his pioneer work on quantum information. Throughout his career.

### Charles Bennett

<span class="transcript-timestamp">00:01:15 - 00:01:19</span>

Not just me, what about David Deutsch? Yeah, yeah, yeah.

### Charles Bédard

<span class="transcript-timestamp">00:01:19 - 00:02:02</span>

Good thing because he's with us. I'll have to. I'll come up with him at some point. So the breakthrough prize was in fact shared between Charlie, David Deutsch, so two of our speakers today, and Gilles Brassard and Peter Shor. So we have two of them with us today. And so throughout his career Charlie played an essential role in investigating and clarifying the roles between the links between information and physics. Among other things he co invented quantum cryptography. He set the basis for quantum information theory, he resolved the Maxwell's demon paradox, and he developed the logically reversible computation. Charlie welcome and thanks for being here. All right, good.

### Charles Bennett

<span class="transcript-timestamp">00:02:02 - 00:02:17</span>

Glad that's over. Yeah. So we also have David Deutsch visiting. I think actually as Szilard solved Maxwell's demon problem and then people sort of forgot about it for 50 years.

### Charles Bédard

<span class="transcript-timestamp">00:02:17 - 00:02:54</span>

Okay, good. Yeah. Thanks for the note. David Deutsch is visiting professor of physics at Oxford University, fellow of the Royal Society and the Institute of Physics. He has also been awarded the breakthrough prize and fundamental physics for his pioneer work on quantum computation. David is mostly known for his discovery of the universal quantum computer and the first quantum algorithm. Yet he's also a pioneer of constructor theory, and he's made significant contributions to the philosophy of science. David, thank you and welcome for being here. Welcome, and thank you for being here.

### David Deutsch

<span class="transcript-timestamp">00:02:54 - 00:02:56</span>

Thank you.

### Charles Bédard

<span class="transcript-timestamp">00:02:56 - 00:03:41</span>

I'd like to start the conversation by discussing the theory of computation. Computers are all around us. Their usefulness in day to day life is now evident. But when it comes to computers and the theory of computation, what makes me the most intrigued is what computation is fundamentally and physically, and what role does it play in understanding of the world around us. So Charlie, I'll address the first question to you, but eventually hopefully this becomes a conversation, so please David if at some point you want to jump in, please feel free to react like you would in a regular living room kind of conversation. Charlie, what is the theory of computation all about?

### Charles Bennett

<span class="transcript-timestamp">00:03:41 - 00:09:08</span>

Well, I think it's almost hard to ask about the computation particularly, but the deep philosophical question is about the relation between mathematics and physics. I suppose the question, the problem of cosmology is to find a mathematical home for our classical phenomenon. So a phenomenon is this is like a genome it's the set of phenomena that we are the world that we inhabit. So this is both a problem of mathematics as a structure which we think is absolute and independent of anything physical and yet the goal of cosmology or of science in general is to find a mathematical explanation of the world. In other words, to find a part of this vast structure that is mathematics, within which what we see is typical instead of surprising and puzzling. And I think that's why I've gotten interested in cosmology lately because there are some things that seem to have been learned by modern cosmology that make it harder to feel that we've solved this problem of finding a model of the universe within which what we see is typical. So this touches on the question of the distinction between what is and what could be and also on the anthropic principle and questions that some people have asked in terms of self-locating uncertainty and it also gets into a question that's very ancient in mathematics, which is infinity, the nature of infinity. So, the big problems in cosmology. I must say I always go and ask Andreas Albrecht because he's been thinking about cosmology for much longer time. And in one of the workshops we organized he said, well, maybe let's take an hour now and wallow in prior probabilities or prior, I mean priors say this is a field where you never can solve anything. And one of the main things I got from him was the attitude of being as unsatisfied with your own ideas as you are with everybody else's. So where was I going with this? But so the problem that I said was what I think one way of trying to approach this is just to think of. Oh, I was saying that infinity is very important. I think we can kind of prove that if you have a finite world in thermal equilibrium, you get a very boring world, essentially because of the Boltzmann brain problem. And so we can get interesting things in an infinite system, which we can't get in the finite ones, qualitatively different and within that, I would say what I'm trying to find out is how permanent disequilibrium can arise and how from disequilibrium complexity in the sense of logical depth can arise and how in that in the system that is doing that science can arise. And I don't ask about consciousness directly because I think it may be a sort of an illusion. So here we have a whole bunch of people who think they're talking to each other on the screens or in the room, but the big philosophical I guess they call it the hard problem of consciousness of trying to decide what it means that we feel conscious maybe is asking too much, and it would be easier to say because our consciousnesses are not independent of one another.

### Charles Bennett

<span class="transcript-timestamp">00:09:08 - 00:09:17</span>

If a person is raised without contact with other people, they don't learn to think the way we do. And ...

### David Deutsch

<span class="transcript-timestamp">00:09:17 - 00:09:22</span>

Charlie, I know it's not my turn yet, but can I just say is infinity an illusion.

### Charles Bennett

<span class="transcript-timestamp">00:09:25 - 00:09:46</span>

Well, I think, no, I think infinity is a mathematical notion. But I think that you need infinity to think about it. I think infinity is a mathematical notion. But I think that you need infinity to get the kind of permanent disequilibrium that you need to escape the Boltzmann brain problem.

### David Deutsch

<span class="transcript-timestamp">00:09:47 - 00:11:03</span>

You may need it, but you may have another way of doing it. So in other words, I would say that instead of asking questions like, what is it, sort of the Copernican principle? Is it unusual that I'm alive at this moment, or that my observer moments are typical? I would just say the entirety of terrestrial civilization, or the terrestrial, even larger than human civilization. The complexity of the terrestrial world is something that we can look at a little bit more objectively than speaking of consciousness. And so we can say, well, maybe whales are conscious in a different way. And that's not quite a scientific question. But I think we need to look for a mathematical model within which, and I think it has to be infinite, but maybe I'm wrong, what we see is typical under as weakly anthropic a selection as possible.

### Charles Bennett

<span class="transcript-timestamp">00:11:04 - 00:11:06</span>

Okay, I'm an end of speech.

### Charles Bédard

<span class="transcript-timestamp">00:11:06 - 00:11:11</span>

At least that's sort of the reason why you're invoking infinity because then you could have fluctuations.

### David Deutsch

<span class="transcript-timestamp">00:11:12 - 00:11:16</span>

Well, if you have infinitely Yeah, I don't. If I just have an infinity.

### Charles Bennett

<span class="transcript-timestamp">00:11:18 - 00:11:25</span>

Let's say, like Boltzmann's idea, which gave rise to the Boltzmann brain. Yeah, I've just an infinite

### David Deutsch

<span class="transcript-timestamp">00:11:27 - 00:11:32</span>

Almost not even this is before general relativity and infinite

### Charles Bennett

<span class="transcript-timestamp">00:11:32 - 00:11:38</span>

Then you get the Boltzmann brain problem you get the fact that you can't believe anything that you see

### David Deutsch

<span class="transcript-timestamp">00:11:39 - 00:12:13</span>

Because everything happens somewhere. And I think this problem is somewhat better understood in the in the more modern cosmologies. But I was looking at very simple cellular automata models in which by making the model in infinite and it's dynamics is reversible. You get something that looks like unbounded complexity that goes on forever, but it only goes on forever because the model is infinite and It is a very simple model.

### Charles Bennett

<span class="transcript-timestamp">00:12:13 - 00:12:22</span>

And therefore it can never equilibrate and get boring. I think I got a picture of it. I'll see if I can find an example of the model like that. Here's

### Charles Bennett

<span class="transcript-timestamp">00:12:27 - 00:13:55</span>

Okay, so this is a reversible cellular automaton. And that time goes horizontally. Like that. There's three domains here. It's one dimensional automaton. So this time history of it and these differ just by the reversal of black and white. So there's domain boundaries that collide here producing this complicated thing that just goes on forever. Getting more and more complicated. This business up here is an artifact because I was doing it with periodic boundary conditions and this was the wraparound. It was beginning to affect it. But if you do it on an infinite model lattice, it gets ... So this is the sort of thing where you can't get this in a finite model. If you do it in a finite system with local models, it's going to be a very complex model. Here I'll just do it at the beginning. Yeah, same model. Yeah, so it gets interesting. And then if you run long enough, it just gets boring. Okay, now stop the screen share. So that's why I think it's interesting. And then if you run long enough, it just gets boring. But I think the cosmologies. I think let's see what Andy says, but I think that the cosmologies tend to be infinite now also. Yeah, screen sharing stopped there. Yes, good. Okay.

### Charles Bédard

<span class="transcript-timestamp">00:13:56 - 00:13:59</span>

I was expecting Charlie to stop sharing my screen.

### Charles Bennett

<span class="transcript-timestamp">00:14:00 - 00:14:03</span>

Yeah, screen sharing stop there. Yes, good. Okay.

### Charles Bédard

<span class="transcript-timestamp">00:14:04 - 00:14:35</span>

I was expecting Charlie to throw us into cosmology, but to be honest, I didn't expect on question one, we would go on to cosmology. Thank you, Charlie. Yeah, screen sharing stop there. Yes, good. Okay. I was expecting Charlie to throw us into cosmology. But to be honest, I didn't expect on question one, we would go on to cosmology. Thank you, Charlie. I enjoyed it. David, would you like to react like maybe you can either react to Charlie's comments and how you've been.

### David Deutsch

<span class="transcript-timestamp">00:14:35 - 00:14:42</span>

Yes, we actually yeah. Perhaps you have a you can backtrack the question and retake the theory of computation.

### Charles Bennett

<span class="transcript-timestamp">00:14:42 - 00:14:49</span>

Well, I think that I can react and respond to your question at the same time. Because I think the ...

### David Deutsch

<span class="transcript-timestamp">00:14:51 - 00:15:05</span>

Where I disagree with Charlie would be right at the beginning sort of foundation Lee. Remember, you should say the three Rs react respond and refute. Simultaneously to save time. Yes.

### Charles Bédard

<span class="transcript-timestamp">00:15:10 - 00:15:19</span>

So I'm if you ask, what is computation? What is computation in the universe? Well, what are computers? Well, what is that all about?

### David Deutsch

<span class="transcript-timestamp">00:15:21 - 00:19:05</span>

If I was answering that question, I would have to have universal and universality right in the first sentence somewhere, because I think that's what it's all about. Computation is physical, you know, I'm sure we can all agree on that. But I think there is still a hint of the mathematician's misconception in Charlie's conception of Computation, computers, physics. So I would say that the computation exists, universality exists in a particular property of the physical universe. Namely that the physical universe can accommodate machines, which are universal in the sense that they can be programmed to mimic any other machine. If they run long enough and have enough memory, and for them to have to run long enough and have enough memory, they have to be maintained. They have to have additional memory added. And so there has to be implicitly there is a background of knowledge creation. If there is to be a sufficiently powerful computer like Turing machine or something, then in the background, there has to be knowledge creation. Just like I think I first read this in Charlie's thing, like what would happen if you found a fountain pen on the moon, then it would it would tell you a massive amount. It would tell you that it had been settled by people from the 19th century. Yes, yes, most likely. And it's very, very unlikely that it formed spontaneously. And so the most likely explanation for it would be that there had been a civilization you could you could infer a lot about the civilization by as you say, it's a 19th century type civilization and you can analyze the ink and therefore see what kind of squids they had there. And so on. So this is the most likely explanation for it. What illustrates what you didn't mention is that there's an intimate connection between simple emergent properties and simple microscopic quantities. In fact, there are laws about emergent properties. And the laws about evolution and knowledge and so on are among the ones we would use to analyze the origin of this fountain pen. So we would gain a lot of knowledge about microscopic information from some macroscopic information and macroscopic laws. Now, So I haven't mentioned mathematics. No, and the reason I haven't mentioned mathematics, even though I totally agree that there's a mathematical world that's sort of super infinitely large and that that world contains all possible functions and all possible laws and all possible mathematical objects. The vast majority of which we cannot even describe. The ones we can describe are basically the ones that are computable by these machines, which are universal within our universe.

### David Deutsch

<span class="transcript-timestamp">00:19:05 - 00:22:30</span>

The ones we can describe are basically the ones that are computable by these machines, which are universal within our universe. So it's no good trying to explain that via what you are likely to see because what is typical, what is probable and so on, are all determined by the laws of physics. There is no mathematical notion of probability that applies to physics unless we have a law of physics saying so. And in some cases we do and in some cases we don't. And even when we do so, and where we do have a probabilistic theory of something, the anthropic principle alone doesn't contain any information about what the laws of physics are. This is an argument that I got from Dennis Sciama a long time ago, in his reaction to Brandon Carter's famous paper about the anthropic principle. The thing is, if you think of this as how do we fix what the dimensionless constants are? Or, you know, just the laws themselves. You could think of the laws themselves as being enumerated like in Solomonoff induction. You know, so we have all possible laws and so on. And you ask, given what we see, what is the most likely? That is all inapplicable to fundamental physics. Because, at least not via the anthropic principle, if you think of the set of all universes consistent with something like the fountain pen on the moon, or consistent with what we see, or whatever you want to say, consistent with the existence of computers, almost all of them are very near the boundary of that set. They are almost all near the boundary because the larger the dimension of the set, the more of it is contained near its boundary. So if the only reason why we're here is that we're anthropically selected, then it's overwhelmingly likely that we're going to die in the next nanosecond or picosecond, I suppose it depends where the chaos, how fast the chaos is going to come in on us. And since we haven't, that theory is hereby refuted. So, that's not the way to get the answer. I think the way to get an answer is not to try to derive microscopic properties that will then give you the desired emergent properties. It is to think of emergent laws, which, among other things, will give you microscopic laws as well as microscopic initial conditions like the ones that produced that fountain pen. You see, Charlie, your example has lived with me for decades, and this has changed me deeply.

### Charles Bennett

<span class="transcript-timestamp">00:22:30 - 00:22:38</span>

Well, I was thinking of an ordinary ballpoint pen said, but you put it back. It's evolved into a fountain pen.

### David Deutsch

<span class="transcript-timestamp">00:22:39 - 00:22:55</span>

Because of its because of its deep significance. The ballpoint pen would just mean you have a hole in your pocket. It fell out of an astronaut's pocket likely explanation.

### Charles Bédard

<span class="transcript-timestamp">00:22:55 - 00:23:03</span>

For you, David an example of an emergent law that constrains also the microscopic laws would be there exist universal computers.

### David Deutsch

<span class="transcript-timestamp">00:23:03 - 00:23:05</span>

Yes.

### Charles Bédard

<span class="transcript-timestamp">00:23:05 - 00:23:25</span>

Okay, would you like maybe to expand a bit more because you've contributed quite significantly to the Church-Turing thesis, I think there was quite a bit of ambiguity of how we should understand the Church-Turing thesis, and now you name the physicality of the universal computer. I right away see a link maybe it'd be good to expand a little bit on that especially for the audience here.

### David Deutsch

<span class="transcript-timestamp">00:23:25 - 00:26:39</span>

Okay, well I, this is controversial and I don't think I did. I think it was Turing. So, the way the story is usually told is that Turing, Gödel, Church, and Post all kind of came up with the same idea at the same time, all prove the same theorems basically although they had different points of view and they didn't. They didn't. None of them copied from each other they just sort of then, although some of them knew about each other but they kind of converged on a conception. But I think Turing's conception was different. The other three. All had the mathematicians misconception. They all thought that they were doing a piece of mathematics, or as Roger Penrose would say metamathematics, theory of proofs, but at Turing. The way he solved Hilbert's decision problem was to think of a physical model of proof, physical model and then argue, implicitly or explicitly, that again is controversial, that the argument is decisive. That is, he thought he was proving, and he almost did prove that no physical object can. So, sorry, no physical object can escape being part of the Turing universal Turing machines repertoire. And the universal Turing machine is an idealized physical machine, it's really got nothing to do with mathematics. And its relationship with the physical relationship with the rest of the universe is is what he elucidated. And then he said that that solves the decision problem, because we must regard the decision problem itself as a question about the physical world, including And so that's why he used language like functions that would naturally be regarded as computable naturally to I always took that to mean straightforwardly, computable in nature. And they said that to mathematicians they howled in rage and said that I'd misunderstood it. Well, if I misunderstood it that misunderstanding turns out to be the truth. And Turing's writings look exactly like that truth. So, I think he knew. He just wasn't used to talking about physics. He was a mathematician, but I think he did not have the mathematician's misconception. We're all brought up to have it. We have to free ourselves.

### Charles Bédard

<span class="transcript-timestamp">00:26:39 - 00:26:43</span>

How would you say, what is the mathematician's misconception.

### David Deutsch

<span class="transcript-timestamp">00:26:43 - 00:29:50</span>

Well, it's, it's, it's the idea that, well, okay, for present company I can put it like this. It's the idea that the integers and the logical operations like and or and not are given to us by God. They are the natural things and if you can make some build some structure or form some conclusion on top of those, then you have proved it. Because the real truth is that the integers and the logic logical connectives and classical rules of inference and all that they are all given to us by physics alone. There is there is no underlying mathematical substrate that we can appeal to. If the laws of physics were different, then we could have laws of physics that didn't mention and or not or integers or real numbers or, you know, they could use any mathematical objects anywhere in the mathematical world but they, the fact that they don't is a feature of the laws of physics. So, the, and with this. With this misconception comes from other misconceptions such as, for example, that simplicity is somehow defined independently of the laws of physics and infinity as well. As I have written, you know, Zeno was puzzled by the fact that there's an infinite number of points between here and the other side of the room. And how come that he can go from one point to another, an infinite and how can he can do an infinite number of things in a finite time. Well, the answer is that what is finite or infinite physically. Its relationship to mathematical finiteness or infinite is a matter for the laws of physics to determine, and they happen to say that this particular infinite thing in classical physics, the continuum can be traversed an infinite number of steps of traversing it can be finitely performed. So, what can be finitely performed or not, or and what conversely what can only be infinitely performed IE can't be performed is mandated by the laws of physics, and not vice versa. And vice versa. So it's physics that tells us the difference between finite and infinite, complex and simple. And also probability, which is a sort of scam lodged in the in the middle of all these misconceptions that the idea that is a meta misconception.

### Charles Bédard

<span class="transcript-timestamp">00:29:50 - 00:29:54</span>

It matter misconception. It's a what sorry.

### David Deutsch

<span class="transcript-timestamp">00:29:54 - 00:30:54</span>

Meta misconception. But no, no. Good place to hide a scam. It's, but there is simply a misconception that probability is another one of these concepts that we can help ourselves to, and we haven't yet invoked any physics. You know we would like what we see to have at least 0.83 probability then we won't worry that it's strange. That invocation of probability we take to be sort of harmless. We don't see that there's a rich world of physics, defining what we mean by that. And in the case of probability, unlike the other things. It doesn't even apply to most of the universe. It, or the multiverse, it, it, it just applies to very special situations. So, it's, it's, there's no excuse for it.

### Charles Bédard

<span class="transcript-timestamp">00:30:54 - 00:31:33</span>

Just ask a little bit a clarification David, if I would have been asked what's the mathematician misconception in a nutshell I would have said, it's the idea that proof theory is a branch of mathematics, but proof theory is a branch of physics, ultimately, it's, it's been, it's given rise to computer science computer science has its roots into what our computers, computers are physical objects. Now the story is, you just gave us you started speaking of natural numbers and logical connectors. How can I bridge those two pictures of the mathematician misconception.

### David Deutsch

<span class="transcript-timestamp">00:31:33 - 00:31:36</span>

Well they are the same. I think.

### Charles Bédard

<span class="transcript-timestamp">00:31:36 - 00:32:07</span>

Maybe I'm giving a try and then tell me but it's because we typically do proofs with typical logical connectors and that will give rise to some of somehow our computers, so that we end up abstracting our computers with those logical connectors and those integers. And that's where you say that taking this as a way to formalize proof is basically physical, because I'm already abstracting my physics of the computation.

### David Deutsch

<span class="transcript-timestamp">00:32:07 - 00:32:19</span>

Yes. I think that's basically what I said I mean I'm not really used to speaking in mathematical language.

### Charles Bédard

<span class="transcript-timestamp">00:32:19 - 00:32:36</span>

So, I speak with him terms of laws of physics. Yeah, yeah, okay now I was trying to map this, just the statement proof theory is a branch. Yeah, so I think, yeah, probably Turing never said this but I'm sure if he was here now he would agree that ...

### David Deutsch

<span class="transcript-timestamp">00:32:36 - 00:32:45</span>

Proof theory is a branch of physics. Yeah. Okay. I have.

### Charles Bennett

<span class="transcript-timestamp">00:32:45 - 00:36:37</span>

I find myself agreeing with almost everything you said until you started talking about the mathematician's misconception, which I don't think Turing would have agreed with you about, and which I think is actually a dysphemism. It's an idea that you don't like. I haven't shown that there's anything false about it. In fact, I think Turing thought more about physics than his contemporaries. But I think he felt that the discovery of universality meant that the physics that we have here could be simulated by a computer. And that the physics that might exist in a very different world. Perhaps one with a different number of dimensions or one that doesn't even have a notion of locality, would also be simulated by a Turing machine. In other words, I believe he was very aware of physics, but he didn't think that different parts of the multiverse, think of string theory and the vast number of different supposed things that can come out of string theory, of which we might be one. That they would have a different mathematics. I think he believed in the universality of mathematics, and its ability to simulate physics. So that's where I think that you're even calling it a misconception is a misconception of what Turing thought, and also a dysphemism rather than any kind of refutation. However, almost everything you said at the beginning I agreed with. I take for granted that universality of computation, the unsolvable problem which is the same thing, is the heart of what the notion of computation is, and that the other thing is that I also didn't even say because I believe it so strongly is that this, this mathematics, this universal mathematics of computation is capable of simulating physics not only the physics that we have here. But if you talk to Andreas, if he's still around here there he is, yes in many models of cosmology now imagine that there are inaccessible parts of the universe which are no less real than ours except that we'll never hear about them, in which the laws of physics such as the number of spatial dimensions and the number of temporal dimensions if you want, and are extremely different. And in almost all of them, universal computers don't exist. They exist physically but they don't exist. There's nobody there to complain about it, or to celebrate it. Oh, but they're there. They're like the desert areas of the universe. But all of that could be simulated by mathematics, so I don't think there's a, I don't think there is a mathematician's misconception. There is just the idea which has been around since Galileo, that whatever physics is, is discoverable by experiment and modeled by mathematics.

### David Deutsch

<span class="transcript-timestamp">00:36:37 - 00:36:57</span>

I think that's clearly untrue if by universe you mean the set of all, or potentially the set of all possible mathematical entities instantiated as physical objects, and you say most of those would not be simulatable by a Turing machine.

### Charles Bennett

<span class="transcript-timestamp">00:36:57 - 00:37:12</span>

No, no, no, they all would be simulatable by a Turing machine. Most of them wouldn't give rise to the physical possibility of Turing machine in that part of the universe. For example, I don't think there are a lot of Turing machines in the middle of the sun.

### David Deutsch

<span class="transcript-timestamp">00:37:12 - 00:37:48</span>

But in the space of all mathematical objects. There are objects which solve the halting problem. And that such an object cannot be simulated by Turing machine. It can, it might. There are also kind of universes where, oh yeah, I have. This is, in other words, these like the Kleene hierarchy of all of these higher level of unsolvable problems what you the problems that you can solve it if you had an oracle for the halting problem.

### Charles Bennett

<span class="transcript-timestamp">00:37:48 - 00:40:59</span>

Oh, now I have an idea that I'd like to run by mathematicians such as yourself. Even these mathematicians which, just as I have been lately over the last five years seduced by cosmology. And so, think, oh it must have the answers to all the things I worried about since I was five. Let me try to understand it better. So you know you're a mathematician and you said, you've gotten to be so fascinated with physics, all the answers to all the things I'm wondering about in mathematics must be in physics somewhere let me learn some physics. This is an idea that that you probably know more about as a mathematician. But when I was writing about the It's Chaitin's omega number the halting probability of a universal computer with self delimiting programs, where if you had this number you would you would have that an oracle for the halting problem, but it would be a painfully slow oracle. In other words, in order to answer any question you would have to run for a busy beaver time. And I said well, the this oracle would be universal in this sense that would add that it would. It would provide all finitely refutable propositions. In other words, it from problems such that that you can express them with one quantifier over over the natural numbers. In other words, there exists, there exists a time such that if you if you run this Turing machine for this amount of time at all. And then I speculated that the harder problems like which would involve two quantifiers are more like the twin prime conjecture might be by and large not interesting because not mathematically interesting because they, they could be decided by a stronger, but finitely refutable proposition. In other words, instead of saying there infinitely many twin primes, you could say that the spacing between twin primes grows more more rapidly or more slowly than a certain function. So in other words, one of the quantifiers, something that has more than one quantifier might turn out to be a consequence of something that has only one quantifier. So what you're feeling about when you say natural in mathematics, maybe these things that are that are harder than the halting problem are are just kind of boring because probably most of them would be what do I mean by probably I'm invoking your scam of probability. Probably most of them would be decided as cases of the halting problem.

### David Deutsch

<span class="transcript-timestamp">00:40:59 - 00:41:05</span>

I was sure for most of what you've just said that you were addressing Charles because I'm certainly not a mathematician.

### Charles Bennett

<span class="transcript-timestamp">00:41:05 - 00:41:09</span>

Them fighting words you know. Okay, okay.

### Charles Bédard

<span class="transcript-timestamp">00:41:09 - 00:41:17</span>

Well, if you have an idea how to how to, if you have a tentative answer David go for it but I also thought about it. I know.

### David Deutsch

<span class="transcript-timestamp">00:41:17 - 00:41:37</span>

Yeah, okay. I think that your case I remember that piece, Charlie you wrote in which you say that you specifically spoke about the twin prime conjecture, but would that naturally carry over to higher elements of the arithmetic hierarchy.

### Charles Bennett

<span class="transcript-timestamp">00:41:37 - 00:42:04</span>

I think so, because if you're saying, if there's, if you, if you bound these quantifiers you can make them go away and if a bound exists, it could be that there's a proposition that decides the twin prime conjecture by proving a stronger conjecture that is just of the same form as halting problem. Yeah. And if you have three or four quantifiers it could same thing, I believe the same thing could happen I didn't think.

### David Deutsch

<span class="transcript-timestamp">00:42:04 - 00:42:19</span>

Okay, so another another sort of possible glitch that I see is if the spacing in the twin prime conjecture scales. Suppose, suppose larger than busy beaver, then the no no algorithm can be.

### Charles Bennett

<span class="transcript-timestamp">00:42:19 - 00:42:27</span>

Yeah, yeah, it could. Yeah, yeah. So that's exactly it. In other words, if you say, refutable.

### David Deutsch

<span class="transcript-timestamp">00:42:27 - 00:42:31</span>

Yeah, that's it yeah certain things of that sort.

### Charles Bédard

<span class="transcript-timestamp">00:42:31 - 00:42:36</span>

So I guess this is like experimental mathematics. Yeah.

### Charles Bennett

<span class="transcript-timestamp">00:42:36 - 00:42:56</span>

Except you can't do the experiments, but it just occurred to me, I don't know has anybody thought about that how do you decide how plausible, it is that that that one of these higher level conjectures could be decided by a provable.

### David Deutsch

<span class="transcript-timestamp">00:42:56 - 00:43:11</span>

Yeah, it's really a futile gesture because it's a, if I had a solution to the halting problem then maybe I could solve the twin prime conjecture, without doing any extra work. But that's like, if my aunt had wheels she'd be a trolley car, because I don't have a solution to the halting problem.

### Charles Bennett

<span class="transcript-timestamp">00:43:11 - 00:43:20</span>

Yeah, but it might also be that you have a solution to the halting problem and you still can and you still couldn't. Yes. Yeah. So how do you compare the likelihood of those two things.

### David Deutsch

<span class="transcript-timestamp">00:43:20 - 00:43:23</span>

And I'm sure we mean by likelihood.

### Charles Bennett

<span class="transcript-timestamp">00:43:23 - 00:43:25</span>

Yeah, shut up.

### Charles Bédard

<span class="transcript-timestamp">00:43:25 - 00:46:09</span>

Well, actually, basically bring perhaps we could move on the topic of incompleteness and I think you bring it on I had a bit of a context maybe to get people into it but incompleteness was the incompleteness of mathematics was perhaps we have to start it back to Hilbert, where he was hoping to put into a single formal axiomatic theory. All of mathematical truths. And Gödel in 1931, basically put an end to this hope by finding a statement that is true and has no proof. But Gödel's statement is self referential and it might look like an exotic kind of statements. So it's tempting to think that these kind of statements are an anomaly and that we can safely ignore them and keep doing proofs and mathematics like we usually would have before Gödel's result. And I assume most mathematicians live their life this way, and I don't blame them. But I'm seeing from an algorithmic information theory perspective, notably due to the work of Gregory Chaitin. One of your former colleague, I believe, Charlie incompleteness is a much more widespread and inevitable phenomena. So for one thing Chaitin's result of incompleteness does not involve self referential statements. And also, they're usually cast in a way that he comes up with an infinite family of true but unprovable statements. And then you say oh I will enlarge my formal axiomatic theory to be able to prove more of those statements. But by doing so you only managed to prove finitely more, but you're still in front, regardless how big your formal axiomatic theory grows, you're always in front of an infinity of true, yet unprovable statements. These are generally the ideas from the algorithmic information theoretic proofs of incompleteness. So yeah, I think algorithmic information theory makes the case for somewhat natural incompleteness become somewhat natural and actually inevitable. Charlie, would you like to react or comment or expand on the limits of our formal axiomatic theories, notably I have in mind like maybe some of how we should behave with respect to formal axiomatic theories in the light of these incompleteness theorems, you know Chaitin has suggested maybe we should acquire new axioms based on the fertility of the consequences that they, the problems that they help us solving. To me there's a striking similarity now between what theoretical physicists do, where they change or update their principles, based on the problems that we're here to solve. So, do you have any remarks to make on that line of philosophy of incompleteness?

### Charles Bennett

<span class="transcript-timestamp">00:46:14 - 00:47:37</span>

Well, I'm more of a physicist, so of those, the things that I suggested, which is maybe, see I really love computational universality and the, and the, I couldn't live, this reminds me of what Danny Greenberger said about quantum mechanics. He said, in any god that would know which slit the particle went through, I wouldn't believe in that god of the two slit experiment. So, I would say, anyone who was still would like to live in a world that Hilbert wanted to find, I wouldn't, I wouldn't want to be friends with that person. In other words, I think, I think the, I think that the universality and the dual to it is the, of the incompleteness is just the way, a beautiful feature of the way world is. It's beautiful in mathematics in the same way that quantum mechanics is beautiful in physics, or general relativity.

### Charles Bédard

<span class="transcript-timestamp">00:47:37 - 00:47:45</span>

Thanks, David, what is, what is your take on incompleteness and it doesn't have to be from the algorithmic information theoretic perspective, just what are your thoughts?

### David Deutsch

<span class="transcript-timestamp">00:47:45 - 00:50:19</span>

I would agree with what Charlie just said, it's, it's the world that, that Hilbert envisaged is a world without creativity. And probably ultimately, if you, if you take sort of our world and hobble it down to that level, life could never have evolved. Because it is a world in which life can evolve, because there's incompleteness in the mathematics that describe our world. I said mathematics, just now, as a concession to you. What I meant is entirely a physical thing. A physical property of the world, which is responsible for the possibility of life, and then later, presumably of intelligence and creativity and science, and of the Incompleteness of science. So the illimitability of science is itself. Put the other way around. If science was limited, if there was a feature of the universe that limits science in the way that Hilbert wanted to limit mathematics, then there couldn't have been any science in the first place. So that's another one of those connections between emergent, what we call emergent properties and what we call microscopic properties. I would like to see a way of formulating the laws of physics that doesn't discriminate between microscopic and emergent laws of physics. The sort of notorious problems we have, like how to define entropy and the arrow of time and so on, I think are just because we insist that the microscopic world must be fundamentally made of microscopic laws. And so, just to let you all know, constructor theory is is an attempt to have a scale independent way of describing laws.

### Charles Bédard

<span class="transcript-timestamp">00:50:19 - 00:50:24</span>

I think someone's raised a hand, is that? Okay.

### Audience questioner

<span class="transcript-timestamp">00:50:24 - 00:51:24</span>

So you said that if there was anything that limited science in the universe, if science was somehow, if the universe somehow limited to the scope of science, then science couldn't have gone to the start in the first place. But I can imagine that the observable universe is actually all there is. Beyond the observable universe, there's no matter, there's only space. So there's nothing to help us form larger and larger computations. So at some point we reach the limit of what we can do with computers for something like that. And that would still be consistent with us having the energy to do science right now. And I was wondering if you think it's wrong that maybe even if there's a world without, even beyond the observable universe, there's no matter, you can still have science that progresses infinitely, or if there's another mistake, I'm curious about that.

### David Deutsch

<span class="transcript-timestamp">00:51:24 - 00:54:27</span>

Yeah, so I think that is wrong, and it's for exactly the same reason that I was just saying. If we characterize, like all possible laws, as being like, like our world but it only lasts a million years or like our world but only lasts a billion years or then there are lots of possibilities where it would look like our world was the actual one. And that's the difference between science and mathematics. You could have, it might be possible for proofs to reach up to a million steps, but no more, because it's so happened that the laws of physics make all computers decay after they have performed a million steps. And so, but, and there are many more of those worlds than there are what we think the actual world is with no limits. And that is because that that's an illustration, not because that that's an illustration of the fact that got to be okay. I won't say it's because the limitless one is simpler, because that would be falling into the mathematician's misconception. But I won't say something like that. I want to say that the limitless one is a is a good explanation in high level terms. If you try to translate that into low level terms, you'll get to two variations of it which look like well it only lasts a million years it only lasts two million years and so on. But at the high level variations of it are very difficult to find, because you would have to say, Okay, proof is is limited by what the you would have to have some high level thing that can fit into the language of talking about proofs and limits and completeness and so on. And I think from the point of view of physics, these are all high level macroscopic constructs. But I think they are those are the fundamental concepts in which the laws of physics actually are expressed. Because of that, we can say that insisting on describing it all microscopically is is perverse, because it's much less simple. But what we really mean is that there are no good explanations along that route.

### Charles Bédard

<span class="transcript-timestamp">00:54:27 - 00:54:48</span>

Very good words to summarize. The way I understand what you just said is that there's other explanation might well be that in some sense it could be that the universe ends at the observable universe is all there is but that ruin other explanations that we have like, as mentioned, how science works.

### David Deutsch

<span class="transcript-timestamp">00:54:48 - 00:54:59</span>

Yes, yeah, if you're going to settle for that you might as well settle for the fairies at the bottom of the garden we needn't have embarked on this great project of mathematics and physics.

### Charles Bédard

<span class="transcript-timestamp">00:54:59 - 00:55:19</span>

Yes. Thanks. David would you relate the incompleteness phenomenon in mathematics with fallibilism in knowledge creation in general. It seems like you sort of invoked it when you invoke life is that is that the similar ideas.

### David Deutsch

<span class="transcript-timestamp">00:55:19 - 00:57:21</span>

Yes, it's again a similar idea and for the same reason that if there if there were so if fallibilism were not true. And there were infallible ways of deriving knowledge, then when we have derived some knowledge, it would never change. And it would be true, and the world would be finite of the world would be a representation of that finite piece of knowledge. And conversely, the real situation is that the world is infinitely amenable to knowledge creation. And therefore, it must be infinitely susceptible to errors, which however can be corrected, but nothing is nothing is nothing provides a firm foundation, not even, and I repeat what I said earlier, not even logic not even the logical rules of inference. Those are all conjectures. They, we pick them because they seem right because they seem useful they seem fruitful. But who knows we may find new ones. And saying that there's that there could be a world in which, in which pi was rational, or square root of two. Well, of course that's that's a fairly simple case. The only we have to do is have a different geometry from ours. Not Euclidean geometry I mean pi isn't pi isn't instantiated in the universe anyway, it's an idealization. So if you actually measure a circle, you'll never get pi as the ratio between the radius and the, between the diameter and the circumference.

### Charles Bédard

<span class="transcript-timestamp">00:57:21 - 00:57:25</span>

So I was thinking of the mathematical pi.

### David Deutsch

<span class="transcript-timestamp">00:57:25 - 00:59:20</span>

Well, so there are two different things one might mean by the mathematical pi. Physics allows us a certain window onto the class of abstractions, a tiny window we can see some of them. We can form theories about some of them, we can learn about some of them and they include Euclidean geometry with its pi. And the pi cannot be changed by anyone, like not even God, not even if we look out of a different window. But if we did have a different window, thanks to having different laws of physics, or if the laws of physics were not what we think they are, but are a bit different from what we think they are, as happened with Euclidean geometry and general relativity, then we won't find pi out there in the stuff we can look at. We can still describe it. We can describe pi and we can describe the universe as it actually is which doesn't have pi, and there will be other ones which we can't describe. We can't describe them, but they may have people in them which can describe them. And then there'll be infinitely more where there aren't people who can describe anything. And yeah, we should be careful not to conclude that therefore we don't exist, because that is like the anthropic principle misconception. Just because of misconceptions, I would say the misapplication of the anthropic principle. These places exist but there's nobody there to complain about it. No, but you want to use it to deduce something about the world we do see. And I don't think the anthropic principle is powerful enough to do that, because it will only... The most it can do is ...

### Charles Bennett

<span class="transcript-timestamp">00:59:20 - 01:03:50</span>

Yeah, I agree. Yeah, I want to say something about on the edge because you reminded me of that. And I don't want to show you a picture. Is that okay now? Yeah, sure. Go ahead. So, I started worrying about this in terms of the Boltzmann brain problem, which most of you are familiar with but here's, here's a sort of a summary of it. New York Times version from Sean Carroll. This was Boltzmann's idea that the universe. Oh, I have to stay shared. I see it. I don't see why. Okay. That the reason the universe is out of equilibrium is anthropic, that is, that if the universe is infinite and at equilibrium, but we couldn't exist in one of these typical parts so we're in an atypical part anthropically selected. But then somebody else I think was Eddington said, wait a minute, if that's true, then we probably are in the smallest fluctuation consistent with our brain existing. And so the idea was that you would get something like this. Where do I go to the next screen here. Yeah. Let's see if we go down here. Yes. Yes. Okay, so people worried about equilibration. And in the 19th century they called it the heat death of the universe but they thought it was a different problem for the distant future, but Boltzmann or Eddington showed us a problem in the second from now or a million years from now, as almost as simple a description. So anyway, the Boltzmann brain problem says that if the world equilibrates, then almost all places that experience the same phenomena that we have. These are illusory phenomena that don't give grounds for scientific inference. So, now there's, this is a little bit like the doomsday problem, which you can argue that the world that has civilization in it has only existed for a very short time compared to the time available to it, and why are we so typically early. Maybe it's because tech civilization is intrinsically unstable, it'll destroy itself. Or maybe there's something that I think David would like is perpetual newness, that is maybe a billion years from now, there will still be people, but they will be preoccupied by the fact that some qualitatively new feature of their existence, which they consider very important, is so new, and they wonder why they are so near the beginning of infinity, as David would put it. So, I would like to credit the anthropic principle to Schopenhauer who really expressed it in the 19th century 1844 before Darwin. And here he says that the world is on the brink of self destruction, and we should expect to find it that way, because of this surface to volume argument in high dimensional space that David made. And he says that if there are many variables, and all of them have to be within a certain range for the world to be habitable or to support life or for it to support universal computation, then with the highest probability we're right near the edge, and only a little very close to self destruction. And this is Schopenhauer's.

### Charles Bennett

<span class="transcript-timestamp">01:03:50 - 01:04:46</span>

I don't know if you can put into mathematical terms but if you did, if he says, we do not live in the best of all possible worlds in fact we live in very nearly the worst of all possible worlds. Because if we imagine goodness of a world depending on many parameters here too. And we, we just take everything to lowest order. And then we find that we're very close to the edge so with, we're probably right around the edge here and therefore we should expect the world to be in the brink of self destruction, as it apparently is politically right now. Well that's, we just have to hope that it survives. Well, that's, that's my comment that I thought had to do with what we were talking about.

### David Deutsch

<span class="transcript-timestamp">01:04:46 - 01:07:57</span>

Yeah, again, I advocate thinking in terms of high level fundamental laws, rather than insisting, how do you discover these high level fundamental laws because how do you say same. Well, we already have a few. Yeah, the same way that we discovered low level ones conjecture. We have a problem that we think might be soluble by postulating a law of nature. And the law of nature seems to answer that problem and many other problems and so it, if it doesn't, then we, we, we haven't solved the problem yet. And the more we do, the more we solve the problems, the more problems it does the more problems it exposes which we then solve and so on. Now, we're doing this at many levels already, I mean there are there are people who have deep theories about what it takes to win a war and what it takes to make a stable society and so on. It's just that we have a culture that stigmatizes those from the point of view of being fundamental. So we only expect such knowledge to extend to our own planet, our own time our own species. If that, you know, we don't have, we don't think of them as being fundamental, but some of them, like the law of the existence of universal computation is is and the law of increase of entropy for that matter. They, they are from a practical point of view, we do regard them as fundamental like as Eddington or someone said, you know, somebody tells you that the first law of thermodynamics is wrong then so much so much the bad so much the worse for the theory but if they, if they say the second law is wrong, then they must retire in deep humiliation, and so on so we do, we do actually have confidence in high level laws, it's just that we have a culture that tells us that those can't be fundamental. We can't kind of infer things about the universe and the Big Bang and the long term survival of the universe. And bits of the universe that we can't see this sort of consideration is, you know, is considered it's considered ludicrous to try to talk about that from using concepts like knowledge. And even computation and information, and so on. Information actually is a bit of an exception, because thanks to the mathematician's misconception. People are inclined to think that information is fundamental and everything might be made of bits. But, yes, so.

### Charles Bédard

<span class="transcript-timestamp">01:07:57 - 01:08:02</span>

So you like, which you call it from it rather than it from bit.

### David Deutsch

<span class="transcript-timestamp">01:08:02 - 01:08:07</span>

You like bit from it rather than. Yeah, yeah, yeah, absolutely.

### Charles Bédard

<span class="transcript-timestamp">01:08:07 - 01:08:15</span>

Yes, so this is very much Landauer's, you probably sympathize with what he said about this.

### David Deutsch

<span class="transcript-timestamp">01:08:15 - 01:09:06</span>

Information is physical. Oh yeah well of course I thought we all did. I thought that's that's his great contribution to Wheeler's. See, we'll put it the other way he says physics is informational. Yeah, well that's a misconception. That, that obviously can't be right. The, you know, that that's it's the same same thing as expecting us to be in a simulation and the aliens, simulating us on a giant computer. And for some reason people think that that computer has got to be a Turing machine. That's simply a non sequitur it's just a parochial forcing of a human concept onto imaginary superhuman aliens.

### Charles Bennett

<span class="transcript-timestamp">01:09:06 - 01:09:16</span>

You mean you think it might be a machine at the higher level of the higher hierarchy which could solve the halting problem and then was worrying about harder things.

### David Deutsch

<span class="transcript-timestamp">01:09:16 - 01:10:22</span>

Yes, although call it calling it higher level. That's from our Kleene hierarchy. Yeah, yeah, which is again, expressed from our point of view, it could just have different fundamental states and different fundamental operations. So one of its fundamental operations might be to solve the halting problem. And it could do it very slowly like you were envisaging, but instantly, so you could ask it questions about Turing machines, and it could answer all such questions instantly. On the other hand, adding two and two would have it scratching its head for a million years. Probably like Borges, right. I haven't read actually. I don't know about that, about a guy who remembers everything and is paralyzed by that and about.

### Charles Bennett

<span class="transcript-timestamp">01:10:22 - 01:11:42</span>

Well, you know you, you can't deny that in the set of all mathematical objects, such things exist, and therefore it is logically possible that physics conforms to that object rather than the objects we think it conforms to. Okay, I admit that I think I'm going to just disagree with you in a way that we can't prove very easily because Turing is dead. That he would have sympathized more with my view that that all the different parts of physics, including the parts of the universe, we can't get to because they're beyond the Hubble distance would be simulable by a Turing machine and wouldn't involve these higher level things but you may seriously physicists like remember, Hartle, Geroch and Hartle wrote a paper about what would an uncomputable number look like if it was a physical constant. And I think that's certainly a legitimate question and you're saying that those things that that one aspect of the mathematician's misconception is that it is that that they assume that such things don't exist.

### David Deutsch

<span class="transcript-timestamp">01:11:42 - 01:11:48</span>

Yes, yes, when applied to physics, yes.

### Charles Bédard

<span class="transcript-timestamp">01:11:49 - 01:11:58</span>

And I think David was also invoking not just beyond the Hubble distance but also in a pure in a completely different universe.

### Charles Bennett

<span class="transcript-timestamp">01:11:58 - 01:12:18</span>

Yeah, well that's what string theory gives us as far as I understand, Andreas, that there's, there are things where I guess it's consistent with quantum field theory in general relativity, but things that are just extremely different from anything that we easily imagine. Yeah, you don't even need string theory.

### David Deutsch

<span class="transcript-timestamp">01:12:18 - 01:12:39</span>

I would say the development of theoretical physics keeps pulling us in that direction. And it's hard to truncate. I don't know if it's, you know, right, but the flavor of theoretical physics. Yeah. Even uncomputable things could be there.

### Charles Bennett

<span class="transcript-timestamp">01:12:39 - 01:15:36</span>

I don't think that way so I don't know how to how to answer that but I these, these. I mean I think one of the fascinating things about cosmology is that physicists pride ourselves in this culture of, we only talk about real stuff we can touch and measure. But cosmology really, really disrupts that it's really hard to write down theories with the laws we have with the tools we have that allow us to limit ourselves that way. And I, I'm actually really intrigued by David's angle which seems to be to take that as a judgment of our ideas about physical laws. I understand that which I find fascinating. I've I come at, I've come at a lot of these ideas from the point of view that physics, physics has nothing to do with infinity, because you only ever collect finite data, and the only stuff you have to work with is finite in terms of having finite data and so on. And I'm hearing. I'm very directly from David and I think implicitly, or maybe directly to from Charlie anyway I'm hearing in both your comments that the problem of the arrow of time or the problem of Boltzmann brains or however you want to put it is looming enough to transcend the forcing us away from that position that that position making us love infinity. Yeah, and I, I'm, I just, I will say that whatever. Wherever I am in my prejudices and all that with that. I think that that problem looms so mightily that that I that I have to respect, even though you're, you're doing stuff I that I find uncomfortable. That problem looms so mightily that it. I'm. I respect. It's very radical to me it's very radical what you're trying to do but something has to give Oscar Wilde said, we're all in the gutter but some of us are looking at the stars. Well, some of us are looking at infinity, because it solves problems here and now. But it seems to me like a cheat. That's, I think that's, so I think you're also giving up. So, and I think you're explicitly saying that you're giving up on the standard ways we think about doing physics, and whether it's embracing some beautiful better thing or giving up is a little hard for me to tell. We've embraced the continuum for centuries.

### Charles Bédard

<span class="transcript-timestamp">01:15:36 - 01:15:41</span>

Yeah, just a derivative that we do in class and derivative. Yes, but it doesn't.

### Charles Bennett

<span class="transcript-timestamp">01:15:41 - 01:16:07</span>

Okay, but that's only to make our life easier and if it were discrete instead it wouldn't change, it wouldn't be a radical thing to put it on a lattice. We're not here to make our lives easier, we're here to understand the world, and that's why these continuums and derivatives and all that infinite stuff was invented, was conjectured.

### David Deutsch

<span class="transcript-timestamp">01:16:07 - 01:16:17</span>

And it might be false, but it might not be where you shouldn't have prejudices about these things. But our, our.

### Charles Bennett

<span class="transcript-timestamp">01:16:17 - 01:16:53</span>

That's fine. I like your line, I find the. I find the finiteness of the of physics, physics is finite, except you're saying, I, what I'm hearing is. Okay, physics might be finite, but except for the arrow of time problem, forcing us out. I don't think the continuum forces us to infinity. I think that we can have a lattice we can have all kinds of things that do just fine. But you're saying this is the one thing that forces us to think about infinity, which is intriguing.

### Charles Bédard

<span class="transcript-timestamp">01:16:53 - 01:17:04</span>

I'd like to go in the audience and give, give the chance for some students to ask questions if anyone of you have a question.

### Audience questioner

<span class="transcript-timestamp">01:17:05 - 01:17:25</span>

I'm not sure whether I understood, whether I understood why incompleteness is fundamental for non equilibrium phenomena. And so for life. I think it was a point of David, as he made before. Yeah. So I'd like maybe more comments about that.

### Charles Bédard

<span class="transcript-timestamp">01:17:25 - 01:17:32</span>

Thank you. Cool. Thanks. David, would you like to react.

### David Deutsch

<span class="transcript-timestamp">01:17:32 - 01:19:18</span>

I could do this better but I, the connection is that if you have to look at the contrapositive. If there is a limitation. Such as Hilbert imagined. If you can write out an algorithm that will be a criterion of truth. Then, mathematics has stopped at that point. And the same would be true of physics. If there was a knowable law of physics that predicted everything, then that would be the end of physics. And if there were such a thing as life in a universe which I think there couldn't be but if there were, then it would really mean that the design of the most complicated creature that could exist which would be finitely complicated would exist baked into the, to the laws of physics at the Big Bang. So, you know, the universe would not have any of the kinds of openness, explain the complexity and all the high level structure. If it were not, if there were infallible truths available. The other way around, unless there were fallibility.

### Charles Bennett

<span class="transcript-timestamp">01:19:18 - 01:20:14</span>

So, Charlie. Yeah. Yeah, I think that's right. It's because incompleteness is the flip side of universality. If you had, if you're restricted to the laws of nature to something in which you couldn't produce a universal computer. Of course, it would be limited by how long it could run before, but basically something that was behaving like a Turing machine until some part broke. You could get something as complicated as a bacterium.

### Charles Bédard

<span class="transcript-timestamp">01:20:14 - 01:20:28</span>

Thanks. Are there any other questions from the audience. Yeah, Vincent, would you like to come.

### Vincent

<span class="transcript-timestamp">01:20:29 - 01:21:34</span>

So, hello, thank you so much for the great discussion. Maybe I have a question about a bit of a different topic, namely about artificial intelligence and AGI maybe because some of us are interested in this. And so from the Church-Turing thesis we know that our brains are not doing anything magical, they could be simulated by a Turing machine. Right. So that means, in principle, some, we could implement something like AGI if you, if we would know how. But it could be that the only way at least in my view, the only way to implement this is to simulate something like a human brain on a Turing machine, not that there's any simple, AGI program that does something like human level intelligence or creativity, or maybe there is any reason we might get there. Or do you think there is any reason that we should expect a simple program that implements AGI, or is, do we have to take the detour to simulate something like a human brain and this then.

### David Deutsch

<span class="transcript-timestamp">01:21:34 - 01:26:04</span>

I think well, the human brain might be simple looked at the right way. I think simple doesn't necessarily mean easy to find. I think there is a very strong reason to believe that the explanatory universality property of the human brain, which at present only humans have must be encoded in a very short amount of DNA. In a very short amount, like we are, people have different numbers for this but you know we seem to be 95% or 99% of our DNA is the same as chimpanzees. And of the rest, a lot is junk DNA, and of the rest, a lot is differences between us and chimpanzees that aren't connected with these deep epistemological things. So, maybe it's only a few K of code in DNA terms that encodes the AGI-ness or the GI-ness of the brain. But that doesn't mean it's easy to find. I would guess that it is a short program. I mean, you know, a few K of program is actually long if you want to write it, but it's relatively short compared with the kinds of things that happen in biology. And I think it'll be very hard to find. And probably, well, I would expect us to find it only once we have understood a philosophical theory of what the function is, what the creativity, consciousness, qualia, and so on, what those things are in some precise terms. Precise but high level, I would expect. And then we can probably quite easily write a program that has that property. Then we'll be in various kinds of trouble, but not any of the kinds of trouble that people are thinking about now. I worry that people who know more about it are scared about it, but people are so good at being cruel to each other with their intelligence that I doubt that the machines that do much worse. And I take this Schopenhauer's principle, which is what they should call the anthropic principle pretty seriously. And it may be that we're not likely to last more than a few or decades before we, I don't think this human civilization will make itself extinct but will set us back, you know, in the next few centuries or millennia. And we just hope for the best, but so that's why I don't worry about it so much. But maybe I should. You know, it's also, if you're, if you want to be universal, not in the sense of computational universality but in the, in the sense of the Universal Declaration of Human Rights. What's, where do we get off thinking that we're with that we have better rights than these machines they might, they might actually do a better job, or they might be our, our, our successors, not in the sense of the ones that conquered us and enslaved us. But in the, in the way that provided a shortcut to what may be what to the, to the bad instincts, or let's say the maladaptive instincts that humans have, and that that it might take a bit of very unpleasant natural selection to get rid of.

### Charles Bédard

<span class="transcript-timestamp">01:26:05 - 01:26:13</span>

So you're saying, might be better people.

### David Deutsch

<span class="transcript-timestamp">01:26:14 - 01:26:48</span>

Yeah, yeah. In other words, another way of doing it would be giving us a transplant of bonobo genes or something that just makes us, you know, more susceptible to taking it easy and less susceptible to getting angry at our neighbors for because of the information we've heard about them and going out and killing them, which seems to be the tendency people have, which probably was very adaptive at one stage but is not helping us right now.

### Charles Bédard

<span class="transcript-timestamp">01:26:48 - 01:26:57</span>

Thanks, you believe that in the better angels of our nature and Steven Pinker and all that stuff. And we've been getting better and better.

### David Deutsch

<span class="transcript-timestamp">01:26:57 - 01:28:30</span>

And look, if civilization, there's, there are those that's tendency but there are also strong tendencies in the other direction you know we saw in the 20th century it got pretty bad and it could do so again or, you know, and it's worse now because there's a more fundamental reason why you're right, namely because of fallibilism. There can be no upper bound to the size of error we can make. Although we have the potential to go exponentially into the future ad infinitum, we have the potential to make arbitrarily large errors and we may have a dark age and another dark age and a dark age lasting a million years, or we might wipe ourselves out and something else might evolve somewhere else in the universe or somewhere else in the multiverse. And there can be no guarantee that that won't happen. There can be no even, there can be no guarantee that it probably won't happen. So what we have to do is solve problems as we find them and create knowledge as we can and not rely on supernatural guarantees.

### Charles Bennett

<span class="transcript-timestamp">01:28:30 - 01:28:33</span>

I thought you'd like that point about the finite bound.

### David Deutsch

<span class="transcript-timestamp">01:28:33 - 01:28:39</span>

Yeah. Are there any other questions from the audience?

### Charles Bédard

<span class="transcript-timestamp">01:28:41 - 01:28:49</span>

Adita? I'm changing chairs depending on which side people come.

### Adita

<span class="transcript-timestamp">01:28:53 - 01:30:00</span>

Hi, so I had a question about the finite bound. Hi, so I had a question because a lot of this discussion we spent about discussing about how undecidability and the halting problem are, I guess, flip sides of the same problem. Would you also say that- Universality. Sorry, yeah, universality and the halting problem are kind of opposite sides of the same problem. Would you also say that these are opposite sides of induction and deduction as ways to kind of acquire knowledge because we talked about, I guess, Solomonoff induction a little bit in the beginning and how maybe that is like one conceptualization of how you could derive knowledge from, instead of using deduction from a formal set of axioms where you would use data instead. So would you say that the incomputability of something like ideal induction is the same as not being able to deduce because of incompleteness? Yes, yes, they are both impossible for the same reason

### David Deutsch

<span class="transcript-timestamp">01:30:00 - 01:30:32</span>

And their impossibility is a very good thing for the same reason. So in both cases, instead of deriving things, we have to guess things, we have to conjecture and the conjectures are always fallible. And I'm spouting Popper's philosophy here. So that's where you have to go for this. And he got an amazing number of things right working almost in isolation.

### Charles Bédard

<span class="transcript-timestamp">01:30:35 - 01:31:33</span>

To link to relate to Adita's point, I think also Solomonoff's induction is an idealization and to have Solomonoff's metric, one needs to solve the halting problem. But in concrete applications, one cannot find Solomonoff's prior. And so what we do, we can, as you know, upper semi-computed perhaps, and then come up with guesses. Oh, maybe this phenomenon from which I got these data has been explained by this program. Now everything is programs, but one can come up with this. Actually, that's also a problem, how we link scientific explanations with programs. But I think there is a bit of a Popperian flavor in Solomonoff induction once we realize that it's uncomputable. So forget it. It's a beautiful idea. It does converge to whatever it needs to converge. But the fact that it's uncomputable, we can only guess programs.

### David Deutsch

<span class="transcript-timestamp">01:31:33 - 01:32:37</span>

The thing is usually, or often, shall I say, often the problem we're trying to solve isn't in data. We haven't yet got any data. Sometimes it's a theoretical problem. Like how is it possible for Maxwell's equations to be true and geometry to be what we think it is? There's no data, no data at all. So you have the problem first, then the theory, then the data. And so induction of any kind simply can't exist in that kind of a reality. And as I keep saying, it's a very good thing that it can't. So Solomonoff is trying to solve a problem that isn't there. It's trying to say, how can we make this induction or this Bayesian inference or whatever make sense? How can we get the priors right? Well, the priors aren't right. Get over it.

### Charles Bennett

<span class="transcript-timestamp">01:32:38 - 01:33:30</span>

Well, my colleague, John Smolin, told me about the story of induction and about an explorer who comes to a place that's inhabited by anti-inductionists. And these are people who believe that if something happened once, it's less likely to happen again. And they have a miserable life because their buildings fall down and their crops fail. And so this explorer says, I understand why everything is not working here. It's because your principle of anti-induction is wrong. And they looked at him and they said, why should we give up this principle? It's never worked before.

### Charles Bédard

<span class="transcript-timestamp">01:33:33 - 01:33:47</span>

Nice. Great. Good. Thank you so much for your answers. Other questions? Sam.

### Sam

<span class="transcript-timestamp">01:33:50 - 01:34:11</span>

I'm interested in what kinds of cosmology Charlie is interested in. I mean, we have the, what was it? Cosmology for people like Hilbert. The progress of cosmology, just trying to get them again. I'm just curious what interests him at the moment. Well, I don't know a lot about it, ...

### Charles Bennett

<span class="transcript-timestamp">01:34:11 - 01:34:53</span>

But I've been trying to understand these models they call eternal inflation, where there isn't a beginning or an end, but in which there's inflating pockets that appear here and there with all sorts of different natural laws in them. And in that, that's a pretty scary place to live. And it's populated by all kinds of problems like David mentioned, it's hard to get a universe in which you're not extremely likely to disappear in a microsecond from now.

### Charles Bédard

<span class="transcript-timestamp">01:35:00 - 01:35:21</span>

Other questions from the group? If they come up later, be free to feel free to raise your hand at some point. And at this stage, I could also take questions from the online event. I would have a quick question. Cool, go ahead, Sophie.

### Sophie

<span class="transcript-timestamp">01:35:22 - 01:35:50</span>

Yes, I'm wondering when you're talking about other universes that would have maybe, they could solve the halting problem and for them it's pretty easy, but for us it's difficult and vice versa for other tasks. Are you thinking about other branches in the multiverse or something that would be completely outside of what we are studying now?

### David Deutsch

<span class="transcript-timestamp">01:35:50 - 01:36:43</span>

The latter, in the multiverse, there's no, all the universes in the quantum multiverse have the same tame mathematics. They even have the same computable functions. They just have different complexity theory, but complexity theory isn't that important anyway. So yeah, but we have to consider universes with different laws, if only to examine explanations like the anthropic principle which purport to explain things in our universe and only certain very special kinds of anthropic argument constitute arguments. They otherwise, they simply fall victim to this Boltzmann brain or boundary of the set of possibilities problem.

### Charles Bennett

<span class="transcript-timestamp">01:36:43 - 01:36:47</span>

And you don't think we're also on the edges?

### David Deutsch

<span class="transcript-timestamp">01:36:47 - 01:37:56</span>

Dennis Sciama, when he told us about this objection, he said that what we should really look for anthropically is for, is a case, not a case where a slight change in fundamental law would have meant that we're not here, but where we are located at the center of the region, let's say, define structure constant, rather than saying, if it was 1% different, we wouldn't be here. Look at the region where we would be here and try to find out whether we're near the center. If we're near the center, that is a real anthropic problem. If you tell this to religious people, they're going to say it's God and it's very hard to argue them out of it. But I don't think we will be in the center.

### Charles Bennett

<span class="transcript-timestamp">01:37:56 - 01:38:01</span>

But you don't think we're also on the edges, because if we're on the edges, we're out of it right after.

### David Deutsch

<span class="transcript-timestamp">01:38:01 - 01:38:20</span>

Yeah, we're neither at the center nor the edges because that's not where the explanation lies. The explanation of the actual values doesn't lie in our existence. It's a common cause. Our existence is caused by things like the law of the universality of computation.

### Charles Bennett

<span class="transcript-timestamp">01:38:22 - 01:38:24</span>

I was about to say a side effect, yeah. A common law.

### David Deutsch

<span class="transcript-timestamp">01:38:24 - 01:38:29</span>

Yeah. Thank you.

### Charles Bédard

<span class="transcript-timestamp">01:38:32 - 01:38:35</span>

Are there other questions? We're not at the middle

### Audience questioner

<span class="transcript-timestamp">01:38:35 - 01:38:39</span>

And we're not at the edge. Exactly how far from the edge are we?

### David Deutsch

<span class="transcript-timestamp">01:38:41 - 01:38:47</span>

Probably a non-computable amount or an intractably computable amount.

### Charles Bennett

<span class="transcript-timestamp">01:38:51 - 01:39:09</span>

David, I'm just curious. This is a small question, but I'm just curious. So your comments about the sort of unpredictability of the future of our civilization and the possibility of our demise, is that the same thing as this edge that we've been talking about?

### David Deutsch

<span class="transcript-timestamp">01:39:10 - 01:39:25</span>

I hope not. Or do you see a difference? Yeah, yeah. It's almost the opposite. It's to do with our fallibility, which is to do with our capacity for infinite growth.

### Charles Bennett

<span class="transcript-timestamp">01:39:25 - 01:39:34</span>

Good, okay, that's interesting, yeah. So it's our hope as well as our possible demise.

### David Deutsch

<span class="transcript-timestamp">01:39:36 - 01:39:49</span>

Well, I'm not expecting our possible demise. I think arguing that there will be a demise is itself not legitimate. That's a prophecy.

### Charles Bennett

<span class="transcript-timestamp">01:39:49 - 01:39:58</span>

That's pretty true. That's a no. But it's in the scope, but it's not, you're saying we can't be sure to avoid it.

### David Deutsch

<span class="transcript-timestamp">01:39:58 - 01:40:07</span>

Yeah, the future of knowledge is unknowable. We've got to get over that. It's a fact.

### Charles Bennett

<span class="transcript-timestamp">01:40:07 - 01:40:43</span>

Yeah, you're saying, unlike other predictions, it's not falsifiable. Because if there is a demise, it's like, I think Gilles Brassard wrote a book on quantum computation in which it had a cartoon of a bunch of elderly scientists looking into a steaming test tube. And one of them is saying, we may have discovered the elixir of immortality, but it will take forever to test it.

### Charles Bédard

<span class="transcript-timestamp">01:40:49 - 01:41:04</span>

Any more questions? I will have another question maybe for Charles. I wonder what's your view of probabilities? My view of probability? Yep.

### Charles Bennett

<span class="transcript-timestamp">01:41:05 - 01:41:46</span>

I think it's just, I think it arises from entanglement. Yes. That is, the probabilism is a feature of a subsystem in a larger system that evolves unitarily. Cool.

### Charles Bédard

<span class="transcript-timestamp">01:41:46 - 01:42:25</span>

My question would also, could also be formulated as, do you agree with David in terms of what are probabilities? And I guess the answer is yes. Not necessarily, because many people view probabilities as entanglement because they understand quantum theory as unitary and so entanglement is out there. But even among these people, there's still many disagreements about how we should read the Born Rule. And so maybe the follow-up question for Charlie without being so specific as does it equate to David's, despite you embrace unitary quantum theory, still, how do you view the Born Rule?

### Charles Bennett

<span class="transcript-timestamp">01:42:27 - 01:42:35</span>

Is it a decision? Yeah, it's hard. I try not to think about it, but I know I ought to. I know. I know.

### Charles Bédard

<span class="transcript-timestamp">01:42:41 - 01:42:43</span>

David, do you have an answer on that?

### David Deutsch

<span class="transcript-timestamp">01:42:43 - 01:44:38</span>

Yes, I think the decision theory approach to probability in quantum mechanics is correct and sufficient. And whether you call that deriving the Born Rule, I don't know. I think the Born Rule is not a universal rule, obviously, because it doesn't apply to quantum theory. I mean, it only applies to quantum theory at a tiny minority of, in a tiny minority of situations. In those situations, modeling the situation with decision theory. The decision theory, the theoretical approach, if I can say very quickly, is to take decision, classical decision theory and quantum theory, strip out all the probabilities from classical decision theory. Strip out all the probability from classical decision theory. So strip out all the probabilistic axioms and so on. And then quantum theory, strip out the probabilistic, if you're gonna have wave function collapse or something, strip out all that stuff, anything that's supposed to be probabilistic. Then smush them together and you get consistent quantum theory, namely Everett's, and you get a consistent theory of probability, which only applies when people are making decisions. And the rule that they use, assuming that they make measurements accurately and all that stuff, in that approximation, their rational behavior as determined by decision theory is the same as it would be if they believed in stochastic processes, even though stochastic processes do not happen in nature.

### Charles Bennett

<span class="transcript-timestamp">01:44:41 - 01:44:48</span>

Yeah, that sounds pretty plausible. Cool.

### Charles Bédard

<span class="transcript-timestamp">01:44:50 - 01:45:20</span>

I'm not sure I properly understood your explanation, David, because if you say you wanna get rid of the Born rule and you believe in a unitary quantum mechanics and Everett's many worlds interpretation, how do you reconcile the fact that when we do a quantum experiment in the lab, you know, we just get to see one result. How do we interpret the fact that we're in just a specific branch of the multiverse and say not another one?

### David Deutsch

<span class="transcript-timestamp">01:45:20 - 01:46:40</span>

We're not, we're in all of them. And the fact that we see only one outcome is a prediction of quantum theory. If you just write the equation with the variable for how many outcomes do we see, then you will find that the world after a good measurement, the world will be in an eigenstate of that with eigenvalue one. Okay, so. What actually happens is that all of the outcomes happen. I mean, generically. But the question was about probability. What do we then mean that some of them have a higher prior probability than others, given that they all happen? Then you have to bring in another part of the model, which is suppose we were betting on these outcomes. How would it be rational to bet? And decision theory without probabilistic axioms and quantum theory without them together, give the answer. It's magic. I'm not surprised you're shaking your head, but if you read the papers, I think it's unanswerable. I mean, it's undeniable.

### Charles Bédard

<span class="transcript-timestamp">01:46:41 - 01:46:46</span>

Do you think it's unanswerable or just we haven't found a good explanation for it? Yes.

### David Deutsch

<span class="transcript-timestamp">01:46:48 - 01:46:55</span>

Unanswerable is too ambiguous a word. I mean, it's undeniable that this is the explanation.

### Charles Bennett

<span class="transcript-timestamp">01:46:55 - 01:49:08</span>

So David has amidst his other euphemisms and disphemisms brought in what is I regard the most widespread obfuscatory euphemism, God. That is people use it to mean their own idea of God. Which they're going to try to get you to like and believe in, but they haven't actually said what it is yet. So I'm going to use that also, but in a physicist's way. So if you imagine a conversation with God and first of all, you say, what time is it? And God says, well, you would say it's about here. It's about 1037 Eastern daylight time. But for me, it's all times, I'm eternal. And then you'll say, well, you're supposed to be omniscient. Will it rain a year from now? And God says, well, that's like yes and no. And you'll say, well, will it rain for me from now? Well, I say, it's like saying what I see is something that looks like your hand. And you're sitting here and you're saying, which of my fingers is the correct extension of my wrist? They all are. When it gets to be next year, you'll either be on one where it's raining, which is the one that has my wedding ring, or you'll be one of the other ones where it isn't raining. And I can see all of them, and for you now, they're all equally real. And then next year, you will have a kind of a truncated perspective in which you think one of them is real and the others aren't, but they all still are.

### David Deutsch

<span class="transcript-timestamp">01:49:10 - 01:49:21</span>

I'm not gonna think that. I know that the other branches exist even if I can't see them. Most things in the universe I can't see. I don't know why that's so...

### Charles Bédard

<span class="transcript-timestamp">01:49:22 - 01:49:39</span>

This is like this, what Galileo said. He says, I don't know if he actually said this, but he says that it's, yes, I say that the earth moves, and if it moves, the way I say it is you shouldn't be able to feel it moving, so shut up. Yeah.

### David Deutsch

<span class="transcript-timestamp">01:49:41 - 01:49:43</span>

Everett said that to do it, yes.

### Charles Bédard

<span class="transcript-timestamp">01:49:43 - 01:49:46</span>

Yeah, so yeah, did he use the Galileo example?

### David Deutsch

<span class="transcript-timestamp">01:49:46 - 01:49:49</span>

Yes, absolutely. Yeah, yeah, that's right, that's where it came from.

### Charles Bédard

<span class="transcript-timestamp">01:49:49 - 01:49:55</span>

And is that the moment where DeWitt started to say, okay, I don't know what more to argue against?

### David Deutsch

<span class="transcript-timestamp">01:49:55 - 01:49:56</span>

Yeah, that's the moment he was convinced.

### Charles Bédard

<span class="transcript-timestamp">01:49:56 - 01:50:03</span>

Yeah. So the idea is, even the theory says this.

### David Deutsch

<span class="transcript-timestamp">01:50:05 - 01:50:06</span>

Yes.

### Charles Bédard

<span class="transcript-timestamp">01:50:06 - 01:50:07</span>

You will only experience one outcome.

### David Deutsch

<span class="transcript-timestamp">01:50:07 - 01:50:08</span>

Yes.

### Charles Bédard

<span class="transcript-timestamp">01:50:08 - 01:50:25</span>

So even though we seem to be bugged by the fact that, no, but the theory says there's gonna be many outcomes. No, no, no, it might look like the theory says there's gonna be many outcomes, but if each of, if you ask yourself, how many outcomes am I gonna see? The theory says systematically only one.

### David Deutsch

<span class="transcript-timestamp">01:50:26 - 01:50:32</span>

So it preserves its consistency in spite of its striking apparent inconsistency.

### Charles Bédard

<span class="transcript-timestamp">01:50:42 - 01:51:06</span>

Are there other questions? Hey, do you hear me? Yeah. So would you say, will any of you say that in that sense, in the sense we just discussed now, the Born Rule will be a statement about consciousness of what do you experience? Or do you think it's beyond, like consciousness will be beyond the scope of the statement?

### David Deutsch

<span class="transcript-timestamp">01:51:09 - 01:51:52</span>

It has nothing to do with it. It's, I mean, obviously if consciousness is to be described as a physical process, which it must be, then it presumably obeys quantum theory and so on. But it has nothing to do with these issues of measurement, probability, and anything like that. It's just a physical thing. There's no more reason to assume it has a special place in physics than it would be to assume that squirrels have a special place in physics. Obviously they're described by physics, but they don't have any relevance to fundamental discussions of physics.

### Charles Bédard

<span class="transcript-timestamp">01:51:54 - 01:52:23</span>

Well, I asked before, because the idea was like, I mean, the point that defined following the discussion is that like you have these different potential outcomes for measurement, all of them occur, all of them have their own branches and all of them are there. But the statement is more like the one you will experience one of them. And then it's if it's about you will experience one of them, you will see one of them, is wouldn't it be addressing directly the consciousness or maybe I'm just like going out on it.

### David Deutsch

<span class="transcript-timestamp">01:52:25 - 01:53:01</span>

The same question can be asked about a seed of a plant that grows into two trees, the left one and the right one. And you ask the seed, are you gonna be the left one or the right one or twins? Are you gonna be Joe or Fred? You ask the fertilized egg. And it says to you, well, in a sense, I'm gonna be both of them. In a sense, I'm only gonna be one of them. That is to say, I will not experience being both of them. But the experience of being each of them will both happen.

### Charles Bédard

<span class="transcript-timestamp">01:53:02 - 01:53:39</span>

Okay, I see, I understand. That's a good way of putting it, yeah. Well, David and Charlie have been tremendously generous over their time. It doesn't seem like there's other questions. If somebody has a burning desire and has been repressing his question, this is the last call. It also applies for the audience. Great, so thank you so much, David and Charlie. That was a lot of fun to discuss with you. And it was very, very fascinating in many regards.

### Charles Bennett

<span class="transcript-timestamp">01:53:42 - 01:53:44</span>

Thank you very much.

### David Deutsch

<span class="transcript-timestamp">01:53:44 - 01:53:52</span>

Very, very interesting conversation. Thank you. Bye, everyone. Thanks a lot, this was great. Bye-bye.
