---
title: '2022-05-16 - David Deutsch - Quantum Information in Many Worlds'
description: 'A Q&A from David Deutsch, featuring David Deutsch, Mert, named audience questioners, Audience questioner, titled "Quantum Information in Many Worlds".'
pubDate: 2022-05-16
---

[YouTube](https://www.youtube.com/watch?v=XZyLQr6kv3I)

<span class="duration-label">Duration:</span> <span class="duration-time">01:34:48</span>

## Transcript
### Mert

<span class="transcript-timestamp">00:00:00 - 00:03:29</span>

Great. We're recording now. Perfect. Hello everyone. Welcome to the Q&A session with Professor David Deutsch, hosted by the Oxford Quantum Information Society. We are a student group at Oxford organizing events about quantum information sciences and quantum computing. Actually the first such group founded a few years ago. Today we have like from society, Nisatu, Simone, Amin, Jan and Benji joining us. I think Maria is also here. She was the president two years ago or three years ago and one of the founders of the society. I'm Mert. I'm a physics DPhil student at Oxford and the president of the society. I must mention that this session is personally important for me. During my freshman year at Stanford, I was taking a philosophy of physics class and I was exposed to a quote by Professor Deutsch where quantum computers were given as an argument to the multiverse. I learned that factorizing large prime numbers efficiently could be done on quantum computers as shown by Peter Shor. And to quote Professor Deutsch, These large composite numbers. Yes. Yes. Thanks. So to quote Professor Deutsch from the fabric of reality. So if the visible universe were the extent of physical reality, physical reality would not even remotely contain the resources required to factorize such a large number. Who did factorize it then? How and where was the computation performed? After this non-intuitive and no description, I got extremely interested in quantum computing or at least that what seemed non-intuitive at the time. And now six years later, I'm doing a PhD on it. We are extremely lucky to have Professor Deutsch joining us today. It would not be an exaggeration to say that Professor Deutsch is one of the pioneers of quantum computing. He defined universal quantum computing and discovered the first formal algorithm that showed quantum computers can be more efficient than classical ones, demonstrating what we now refer to as quantum advantage. And Professor Deutsch is currently a visiting professor here at Oxford. Today we'll have the chance to ask him some questions. We prepared some questions, including the ones you sent us while signing up. You can in fact, you're encouraged to ask questions as we go along. Just use the hand raised feature on Zoom when you have something to ask. And if we don't see you for some reason, please feel free to shout out. We want this to be a free open-for-all discussion. Actually, we're aiming for this to be as interactive as possible. So it would be nice if you could turn on your cameras. FYI, the meeting is being recorded. So we might do some edits before publishing. If you have some problems, just email us, message us. And the questions we prepared mostly revolve around Professor Deutsch's book, The Fabric of Reality.

### Mert

<span class="transcript-timestamp">00:03:29 - 00:04:12</span>

We divided the questions into the four strands of reality discussed in the book. Computation, quantum physics, evolution, and I don't know if you can see it, epistemology. OK, I guess we can get started with computation. And Professor Deutsch asked me to address him as David. So I'm going to do that. David, you proved universal quantum computing under quantum physics, extending on Alan Turing's universal computing principle. And now quantum computers are being built today. What do they tell us about multiverse interpretation of quantum physics?

### David Deutsch

<span class="transcript-timestamp">00:04:12 - 00:06:12</span>

I think the computers that are being built are, from the point of view of telling us about the multiverse interpretation, they are just a matter of psychological impact. The real implication for the multiverse was already there when people first described single particle, single photon interference. And then especially when people analyzed entanglement in those terms. And then especially when the theory of the universal quantum computer came along. And then there was also my thought experiment, which involved an artificial general intelligence running on a quantum computer and performing an experiment to actually test the many universes interpretation or Everettian quantum mechanics, as I prefer to call it. So and those were all theory. So, well, I suppose the single photon interference wasn't just theory, but everything else was pure theory. And when we have a working universal quantum computer, as a matter of logic, the case for Everettian quantum theory was already made and was already unanswerable before. But it is just that much more cognitive dissonance for people to cope with if they insist on denying it.

### Mert

<span class="transcript-timestamp">00:06:15 - 00:06:41</span>

OK, I'm going to go on with our questions if no one is raising their hands and feel free to shout out again if that's fine with you. We actually had a lot of questions come up about your inspiration for the Deutsch algorithm and the Deutsch-Jozsa algorithm. Can you briefly talk about the algorithm itself and maybe your inspiration for it?

### David Deutsch

<span class="transcript-timestamp">00:06:41 - 00:09:41</span>

Yes, well, the first algorithm that I proposed in my first paper on universal quantum computer was, in fact, not the one that's called the Deutsch algorithm today. It had much less power. So I've really usurped somebody else's power. Somebody else invented the thing called the Deutsch algorithm or probably several people simultaneously. But then the Deutsch-Jozsa algorithm was invented basically by Jozsa. He came to see me and said he wants to talk about quantum algorithms. And he showed me how you could execute something that in the end turned out to be what's called the Deutsch-Jozsa algorithm. And when he was halfway through his explanation, I said, wait a minute, that that violates the theorem that I proved in my first paper that quantum parallelism can't increase the average speed of computing anything, but can only increase the speed, the fastest speed. And so he just casually said, oh, yeah, that was wrong. So, oh, my theorem was wrong. Right. Good. And the reason it was wrong is that I had what I called quantum parallelism in that first paper was a particular form of quantum parallelism, which was the first one I thought of and which I described in that paper. But in fact, there are many other forms and they are more powerful and, in fact, exponentially more powerful. So we ended up writing the paper about that and that was the Deutsch-Jozsa algorithm. One way it is conceptually an improvement on my original algorithms was that it involved directly manipulating the phase. And manipulating the phase is obviously a more direct way of getting to interference, which is the basis of the power of such algorithms. Some people say it's entanglement, but it's the same thing, really, because you adjust the phase somewhere and you also adjust it somewhere else in the Schrödinger picture. Very misleading. But there you are. That's the Schrödinger picture for you. And ...

### Mert

<span class="transcript-timestamp">00:09:41 - 00:09:53</span>

You mentioned entanglement and we had a question about that as well. How is entanglement phenomena explained without any signal passing between two entangled pair of particles?

### David Deutsch

<span class="transcript-timestamp">00:09:53 - 00:10:15</span>

But it does pass. The thing is, in order to test entanglement or to demonstrate any entanglement phenomenon, you need to do experiments on one locality depending on the results of experiments in another locality.

### Mert

<span class="transcript-timestamp">00:10:15 - 00:10:23</span>

And how did the information get from you? So how did information get from one to the other?

### David Deutsch

<span class="transcript-timestamp">00:10:23 - 00:11:22</span>

Well, the answer is it gets there inside the classical qubits that one sends from one side to the other to determine what experiment to do. That shows that perfectly classical bits or bits which to all local experiments look perfectly classical actually contain quantum information inside them, which is stable to decoherence, because it's stable to decoherence, you can't measure it, but you can use it to convey the quantum information from one system to another. And then and only then can you detect the entanglement phenomenon.

### Mert

<span class="transcript-timestamp">00:11:22 - 00:11:29</span>

And I'm assuming that's a classical signal obeying the limits of speed of light.

### David Deutsch

<span class="transcript-timestamp">00:11:29 - 00:12:36</span>

Yes, although calling it a classical signal kind of begs the question or makes the explanation more obscure than it needs to be. The term classical signal or classical information is ambiguous. It can either mean a signal expressed in classical bits, each of which can be zero or one, and that is not a physical thing. There is no such thing in nature. Or it can mean a quantum system, which all systems in reality are, in which the information is decoherent. But it can be shown and Hayden and I showed in a paper that such quote classical systems can contain hidden quantum information.

### Mert

<span class="transcript-timestamp">00:12:36 - 00:12:40</span>

And by Hayden, I assume you meant Patrick Hayden.

### David Deutsch

<span class="transcript-timestamp">00:12:40 - 00:12:41</span>

Yes.

### Mert

<span class="transcript-timestamp">00:12:41 - 00:13:03</span>

I guess we moved into the realm. I might have a very naive follow up on that. So when you talk about the classical bits having some hidden quantum information, does that have anything to do with the famous hidden variables theory or no?

### David Deutsch

<span class="transcript-timestamp">00:13:03 - 00:13:35</span>

No, it's the opposite. Really, we called it locally inaccessible information. That is, it's information that cannot be accessed by a local measurement on the bit that travels from A to B. But it can be accessed by doing an experiment that involves both A and B, one after the other. So the information is there. It just can't be accessed by a by an experiment purely on the traveling bit.

### Mert

<span class="transcript-timestamp">00:13:41 - 00:14:13</span>

Great, thanks for the question, Manj. I guess we moved into the realm of quantum physics. And I mean, I guess you were arguing that the four strands are linked. So that that is natural. Could you give an overview of the experiments that provide the best evidence for parallel universes? In other words, what should an experimentalist know about many worlds? This actually came from an experimentalist in the department.

### David Deutsch

<span class="transcript-timestamp">00:14:13 - 00:19:06</span>

So right. Well, it depends. So any experiment that provides evidence, one of the other strands, namely the epistemology strand, tells us that evidence is meaningless unless there are at least two theories predicting different things about the evidence. Otherwise, one can always reinterpret if one only has one explanatory theory, one can always reinterpret any result as conforming to that theory, if only by saying it was an experimental error or a fraud or something we don't yet understand or whatever. So which experiment is most convincing depends on which rival theory. You have in mind as being the one you would jump to if the quantum, if the Everettian quantum theory predictions were refuted. So the basic the basic experiment is, as I said before, is just any interference experiment. And the more complex the variable that's involved in the interference, the more convincing the experiment is. So that's why people did experiments with interfering neutrons and then with interfering molecules and interfering buckyballs, and they keep trying to make viruses interfere and so on. And eventually we'll have, as in my thought experiment, we will have interfering. AGI programs. And that will that will rule out then one can actually perform the Wigner's friend paradox in real life and show that that Wigner was wrong. And what actually happens is, is that the AGI can recall evidence of itself having had more than one experience simultaneously. That that I think would would, if it could be done, eventually, would be the ultimate answer. But really, it is, as I keep saying, and I hope nobody's offended by this, but I think it is it has been incoherent to deny to insist that there is only one universe. Ever since 1957, when Everett wrote his paper describing his so-called interpretation, it's not an interpretation, it's a theory. And the theory that it is is quantum theory. Oh, I should say, so, as I said, it depends on what alternative theory you have in mind. If you have in mind the Bohm interpretation. That is an interesting case, because, as I have often said, the Bohm interpretation or the de Broglie-Bohm interpretation or the pilot wave interpretation is the many worlds interpretation. In the state of chronic denial. Because the. The wave function in that theory has got unoccupied grooves where the representative particle doesn't travel and yet those grooves affect the particle. So some of those grooves are human shaped grooves in which there are there are thought shaped events and those thoughts affect other thoughts. And so it's really just a matter of terminology to deny that those thoughts are the thoughts of real people. We have just we if we could do such an experiment explicitly, we would have exactly as much evidence of the people in the other universes, as we have of people in our universe. And. In both cases, that is more evidence than we have of the existence of dinosaurs in the past. In both cases, we cannot experience them directly, but we can experience evidence that is inexplicable without postulating that they exist.

### Mert

<span class="transcript-timestamp">00:19:11 - 00:19:22</span>

I see. I guess mentioning Bohmian mechanics builds up to our next question, oh, we have a question from Mo.

### Mo

<span class="transcript-timestamp">00:19:22 - 00:19:35</span>

Yeah hello it's an honor to speak here. I was wondering, so I read about the moral implications of the many worlds theorem I was just wondering if you had any thoughts on that.

### David Deutsch

<span class="transcript-timestamp">00:19:36 - 00:19:56</span>

Yes, I think the only moral implication of it that's different from. What morality was before and knew about it is that one ought to advocate it. That it is morally wrong to insist that it's false.

### Mo

<span class="transcript-timestamp">00:19:56 - 00:20:03</span>

Sorry I meant I meant more that so do we have to stop worrying about all these other possibilities.

### David Deutsch

<span class="transcript-timestamp">00:20:03 - 00:21:18</span>

No, so I'm saying that we don't have to worry about those because it's interesting. I'm often asked that question, but in two different forms. One form is saying well, since you know that every time you drive out in your car, you will necessarily run someone over in some universe so shouldn't you be more reluctant to drive a car. And the other is well when whenever you run someone over they always survive in some universe so maybe you should be a bit less worried, so I think the quantum theory of probability and decisions which comes out of the Everettian quantum theory. tells us that precisely that well, at least when we're doing decoherent things so it wouldn't necessarily hold during my thought experiment, but when we're doing decoherent things, we should attend to probabilities exactly as if the outcomes were determined by probability with the Born rule. So it should not make us more reluctant or less reluctant to drive a car.

### Mo

<span class="transcript-timestamp">00:21:19 - 00:21:30</span>

What happens when we are fully uploaded into quantum computers and then are thinking deco sorry we're thinking coherent quantum coherent thoughts

### David Deutsch

<span class="transcript-timestamp">00:21:30 - 00:21:37</span>

No one knows yet, I think, certainly I don't. It's going to be an interesting feature

### Mert

<span class="transcript-timestamp">00:21:37 - 00:21:41</span>

Thank you. You have a question from bob.

### Bob

<span class="transcript-timestamp">00:21:43 - 00:21:57</span>

Yes, thank you and hi David. I was wondering how you would explain the quantum Zeno effects or paradox, however, we want to call it within the everettian quantum theory which.

### David Deutsch

<span class="transcript-timestamp">00:21:59 - 00:22:13</span>

Yes, so. Do you mean the actual Zeno effect, or do you mean the Elitzur-Vaidman bomb phenomenon.

### Bob

<span class="transcript-timestamp">00:22:14 - 00:22:18</span>

Oh no, so I mean the so the effect being you know, or the watched pot effect.

### David Deutsch

<span class="transcript-timestamp">00:22:18 - 00:23:41</span>

Yeah yeah. Well. that's a case where one is. Where one is it again it it's. it's another experiment that confirms the Everettian quantum theory, what one is doing is one makes one makes a measurement which is overwhelmingly likely to have the answer A and has a very low probability of having the answer B. Then one does it again, then one does it again and so on, and classically the probability of getting a B would go up actually quantum mechanical as well. Actually quantum mechanical as well, but you can you can arrange, but because. quantum probabilities add up in a different way from classical ones, you can arrange so that so that in the limit B will never happen with an arbitrarily small probability, so that that is simply again I think that's better understood in the. Everettian quantum theory, because. You are simply putting yourself in a larger and larger fraction of the universe.

### Mert

<span class="transcript-timestamp">00:23:46 - 00:23:52</span>

Thank you. Thanks. Faye.

### Faye

<span class="transcript-timestamp">00:23:52 - 00:24:35</span>

Professor I am doing quantum thermodynamics and someday I explained the multiverse and quantum computation speed up to my friends who are doing us and they take a very. Different viewpoint of it and the other question that concerns a lot, they decided, would it not be stealing resources from other universes to speed up the algorithm we have this universe, so this concerns me is it a. collaboration between universes to make the computation faster or just a competition between different universes and this perhaps. I thought this two questions related but I'm not sure.

### David Deutsch

<span class="transcript-timestamp">00:24:36 - 00:26:42</span>

Yeah well, so I think this conservation of knowledge and that kind of thing happens. Where there's not any quantum theory but closed timelike curves, so I think that's the answer to your question. So just setting that aside for the moment. quantum computation never involves stealing anything from other universes it's always a collaboration, but not only a collaboration it's a collaboration. Between different versions of the same people that started the computation so somebody programs the computation and that programming happens in a certain range of universes, then, as the. quantum computation proceeds that that range of universes which were initially identical with everybody putting in the same program and wanting the same answer wanting the same number factorized or whatever and then, as the. computation goes on this range of identical universes differentiates itself into a vast vast number of different universes all performing a different computation and then they are recombined but not all with the same phase. So in such a way that they all well in some you know in sorry for some algorithms it's not all it's just most but let's say in a simple case they all end up with the answer. So they there's no stealing going on they have entirely but not only are they collaborating but they're collaborating on the same problem. Thanks.

### Audience questioner

<span class="transcript-timestamp">00:26:44 - 00:27:29</span>

And. As a question. hi. Recently in your conversation with Robin Hansen you said that the problem of why risks and frequencies can be approximated by probabilities is an unsolved problem. yeah. And I was just wondering why, how come the quantum theory. doesn't solve that problem or why is it not that probabilities are just frequencies in the multiverse.

### David Deutsch

<span class="transcript-timestamp">00:27:29 - 00:30:47</span>

Yeah very important question it's because. When you. When you're betting on roulette or something like that, which can be approximated as a quantum process. What you mean by the by using probabilities is is that you'll get a different answer in different universes. But when you bet on let's say one company over another you're not you're not betting that that the company that. Suppose you have. You can bet on two companies and you're wondering which one of them is going to make more profit than the other or give a higher dividend than the other or whatever. it's not that you're expecting the universes to divide equally supposing its risk is 50/50 you're not you're saying that you don't know how they're going to divide. In fact, you might be fully of the opinion that the universes aren't going to divide very much with respect to which company. is better that one of them is unequivocally better, but you do not know which it is and that ignorance is somehow translatable. into a probability. But that. violates the theory of probability that deriving knowledge, including knowledge of probabilities from ignorance is a cardinal mistake in probability theory. So it's not that it must be that there is some way of dealing with knowledge which gets you to a say a rational decision. And then you can work backwards and say well because that's the rational decision, the implicit probability must have been so and so, by the way, there are other cases where. Using probability and using classical decision theory at all is is a mistake, so this equivalence between. Between. decision making in the where decision making under real ignorance decision making under probability. doesn't hold and really the only thing you can say is I don't know, and you have to resort to other. objectives, such as minimizing your maximum loss or maximizing your minimum gain or whatever or just to keep out of it, if you can. So I don't know, as I say it's an unsolved problem. And it did I did I understand your question correctly, I mean you said, why isn't it the same well. For probability to make sense, according to quantum theory, it must be because things are distributed in a certain way in the multiverse it cannot possibly work when. It isn't distributed much in the multiverse but you just don't know.

### Audience questioner

<span class="transcript-timestamp">00:30:49 - 00:30:51</span>

Yes, I think you understood it correctly.

### David Deutsch

<span class="transcript-timestamp">00:30:53 - 00:31:01</span>

Okay well tell me if you have the answer. Okay.

### Audience questioner

<span class="transcript-timestamp">00:31:03 - 00:32:40</span>

We have another question if there's no follow up on that from Jan was part of our society. Hey. David thanks so much. You're in the room, I guess. Okay yeah so we have a viewing party. I'm not in the same room, so that we don't have the. I'll ask you, thanks so much for taking time so on the topic of Bohmian mechanics, I was just introduced, so if we, if you look at like modern versus Bohmian mechanics there's usually. For Bohmians there's these two important different frameworks there's a. configuration space in which the wave function evolves and there's also a physical space of particles in which particles evolve and then for this, for example interpretations were. One says that the evolution of the wave function is what guides evolution of particles and there's not really well, I guess my main question is. For all of Bohmians, this is the way they think about the world that sort of we have to model things as particles and therefore we have to find out how particles evolve. And I was just wondering how you think about the world around you in sort of the paradigm of many worlds in the multiverse. And you think along the lines of Wallace and sort of Daniel Dennett's functionalist interpretation. And sort of what you have to say to this sort of Bohmian interpretation that you have these two conflicting frameworks of or not conflicting two related framework so.

### David Deutsch

<span class="transcript-timestamp">00:32:41 - 00:36:39</span>

Well, I'm not quite sure what you mean by two conflicting frameworks because. yeah. I thought Bohmians. They are compatible, in fact, necessarily complementary or whatever, but anyway. The thing you have to ask yourself if you are a Bohmian is is the pilot wave real. Is it a real feature of the universe, or is it not is only the representative particle or whatever you call it is only that real. If the representative particle is the only real thing which I think is the psychological motivation behind Bohmian mechanics, then you have to. Concede that it is driven along by something that isn't real it's driven along by pure mathematics or something, whereas if you concede that, therefore, the wave function must be real, the pilot wave or whatever you call it. Then you must concede that the pilot wave contains people shaped unoccupied grooves where the particle where the particle is not but where. People are having conversations people people in the unoccupied grooves. Some of them believe Bohmian mechanics, some of them think it's rubbish, you know the full panoply of things that happen in the in the world represented by the particle. Also happen in all the other grooves. and denying that they exist is is logically the same as denying that the dinosaurs existed or denying that Australia exists or denying that anyone beyond your computer screen exists. Now, in contrast, I don't think there's much of a question to answer in the case of Everettian quantum mechanics, because at least in decoherent Everettian quantum mechanics. The ontology of the world is the same as it was classically. If we think of. Coherent observers and that kind of thing, then that breaks down and we may need new new conceptual framework and new language and so on, but for everyday life there's nothing new to understand. Just today I tweeted. A lecture given by Harvey Brown. Which. Who in I think is a is a is a. has said the last word on this issue, in my view. Where he described some of the philosophical. Knots one has to pull oneself through if one is to defend the Bohmian interpretation. As for functionalism and physicalism I think that's that's an unrelated issue, those are issues of the metaphysics of thinking and of what a person is and so on, which are questions orthogonal to. Well, they're orthogonal to. quantum theory in to Everettian quantum theory now, of course, if you make up a theory in which the mind has a special place, then the two issues collide, but in Everettian quantum theory they precisely don't.

### Mert

<span class="transcript-timestamp">00:36:47 - 00:36:49</span>

I think we have a follow up question from Jamal.

### Jamal

<span class="transcript-timestamp">00:36:53 - 00:37:39</span>

Hello, thank you for the opportunity of being in this question answer session. I my question refers to the book, The Science of Can and Can't that one of your grad students created. Oh, as well as reading that. Yes, when I was reading that book I came across how you were trying to use some. Instances of set theory and information theory to try to do try to give more. breadth to constructor theory and I my question regards what the halting problem and Gödel's incompleteness theorem also be some of the things that would. Also be added to constructor theory when you add set theory.

### David Deutsch

<span class="transcript-timestamp">00:37:41 - 00:39:30</span>

And no, they wouldn't at least we don't expect them to be added because those issues only arise for infinite sets and constructor theory regards, although the universe may be infinite it regards. Physical systems as always finite it only makes statements about finite systems that they can be arbitrarily large but still finite so. It the therefore constructor theory does not make statements about the universe as a whole, the universe is not what we call a substrate it's not something that a constructor can act on, so you can. think of the universe as being an emergent property of finite object of many finite objects, but you can't think of it as a first class object within. Within constructor theory. By the way, I should say that constructor theory is a work in progress. I don't think I mean some people disagree with me, but I don't think it would be the right thing to do to first make a rigorous. formalism for constructor theory and then work out what it means. Of course, it might be that's the way one has to go, but I don't think that that's that's a good idea if one can possibly avoid it, we need to work out what it means first and then think of a mathematical framework that suitably expresses what it means. And we have a mathematical framework that's good enough to be going on with.

### Mert

<span class="transcript-timestamp">00:39:30 - 00:39:57</span>

I guess yeah we will be talking about like creation of theories, so maybe we should ask you one one final question on quantum physics and, as I said before, they're all interlinked so we can come back to it, but. Maybe let's talk about time a bit in the fabric of reality, you state that the flow of time is not real it's an illusion, so why can't.

### David Deutsch

<span class="transcript-timestamp">00:39:58 - 00:40:02</span>

It's not an illusion it's not real and it's not an illusion it's a mistake.

### Mert

<span class="transcript-timestamp">00:40:02 - 00:40:04</span>

It's a mistake okay.

### David Deutsch

<span class="transcript-timestamp">00:40:05 - 00:40:10</span>

It's not an illusion it's not real and it's not an illusion it's a mistake.

### Mert

<span class="transcript-timestamp">00:40:10 - 00:40:23</span>

It's a mistake okay. But then, why can't we access past snapshots of the universe, whereas it feels like we are flowing towards the future snapshots.

### David Deutsch

<span class="transcript-timestamp">00:40:24 - 00:41:55</span>

Right. What we can access. Is a question of which physical processes are available under the laws of physics and which aren't. There are plenty of physical processes like. Obtaining a sample of the Center of the sun or seeing the Center of the sun or seeing a neutrino or whatever, which are the laws of physics happen to not provide the right kind of interactions for us to be able to harness those interactions to perceive those processes and the same is true of. Most of the past and the same is true of most of the future, though, interestingly, different subsets of the past and the future that we can know anything about and that I think that's a very. There's there are very powerful insights to be gained there, but so we shouldn't be surprised when there's something we don't know we shouldn't be surprised when there's something that the. laws of physics forbid us from. experiencing what we should be surprised if is if there's something that the laws of physics forbid us from understanding. I think that would be a very supernatural kind of world to live in and I don't think we live in it.

### Mert

<span class="transcript-timestamp">00:41:59 - 00:42:37</span>

I see I see. Okay, I guess to tie the multiverse to evolution, we have a question: is fine tuning necessary for intelligence to explain we found ourselves in these laws of physics, because we could only exist in these laws of physics. Would there be a way for the laws to be different, but intelligence to exist and by intelligence, we mean someone or something who understands the laws that govern it. Should we call that life or are laws necessary for your description of life.

### David Deutsch

<span class="transcript-timestamp">00:42:39 - 00:44:47</span>

Oh, that last question seems to be at odds with all the rest of the questions. Are laws necessary well laws. I can only understand the term laws in the context of understanding something we understand something via laws and in that if that's what you mean by laws, then yes, they are necessary, but I think you may have meant our particular laws necessary like like via the anthropic principle. I think the anthropic principle is is kind of obviously true, but what it tells us, I think, is very, very limited. I actually discussed this quite a bit in my other book, The Beginning of Infinity. Where I give an argument due to Dennis Sciama that that shows that that. If the. If there are many different kinds of laws instantiated in reality, and the only reason we see the ones that we do are that there's no one in the other ones there to ask the question, then the most likely thing is that we are only just in such a universe. I think this argument was also made in a slightly different way by Richard Feynman, but I heard what I think is a devastatingly convincing form from Dennis Sciama. And so, if the universe is only just. Only just fine tuned, which by this argument, it must be, then we should expect at any nanosecond to be wiped out, because we would be surrounded by hot stuff that will kill us in the next nanosecond and so what I've just said proves that isn't so, in a certain sense.

### Mert

<span class="transcript-timestamp">00:44:47 - 00:44:58</span>

Do we have any follow up on that. Yes, we do. Andrew Salto. Sorry you're muted.

### Andrew Salto

<span class="transcript-timestamp">00:45:01 - 00:45:19</span>

Can you hear me now? I put the question in the ending, what is wrong with the probability as a measure of the number of worlds in which one is defined.

### David Deutsch

<span class="transcript-timestamp">00:45:21 - 00:47:26</span>

Oh well, the. This is an old truism in probability theory. Probabilities are only equal to frequencies if the. Things in question are equally likely so. Probability is frequency over things that are equally likely, what does equally likely mean? It means they have the same probability, what does probability mean and so on, so that would lead to an infinite regress or to circularity or whatever. And it's worse than that in the case of like multiverse type reasoning, because you can easily make a model of a multiverse that doesn't obey quantum mechanics, where the frequencies are obviously not probabilities. So somewhere, somewhere I've I wrote an example of this, where you have there are there are a lot of copies of you all in identical prison cells and you are also identical, you know this is this is a non quantum thought experiment and then. And then. Half of you do one thing and half of you do another and then the second group half of them does one thing and half of them does another. And then, by probability that the first group would have probability half, the second group have probability one quarter, third group have probability one quarter, but you can achieve the same physical effect by dividing. into three, in which case they should all have probability one third so that's a world in which probability doesn't make sense, the fact that probability does make sense in our world is, in my view. An amazing property of quantum theory, we had to work hard to prove that property, and if you change quantum theory just slightly it no longer has that property. Thank you very much.

### Mert

<span class="transcript-timestamp">00:47:30 - 00:47:46</span>

Thanks David I guess we can still talk about evolution. To change topics a bit. A meme as described in your book is a theory or joke that survives through iterations if I'm not mistaken.

### David Deutsch

<span class="transcript-timestamp">00:47:47 - 00:47:51</span>

Well it's any idea that that can be replicated yes.

### Mert

<span class="transcript-timestamp">00:47:51 - 00:47:54</span>

I guess it's a container for knowledge.

### David Deutsch

<span class="transcript-timestamp">00:47:55 - 00:52:02</span>

Yes, yes, so if it if it can be replicated to more than random degree, then it must contain it can be said to contain knowledge. Now now memes are a widespread Internet phenomenon. By the way. What I just said. It's true of genes as well, it's true of any replicator. You guessed my next question. Are memes related to genes. So memes and genes are both replicators. So in that sense, the theory of replicators applies to both of them, and there are illuminating. properties of both that both share which were where each of them can tell us something about the other but. memes and genes. Have a radically different replication mechanism. Again, this is in my second book, The Beginning of Infinity, which you should all buy. The. genes. When they replicate they are copied blindly so the only. bottleneck to their to their exponential growth until they cover the entire universe, the only bottleneck is their actual effect on their holders, whether they increase or decrease the chance that that holder will. will survive in with. will survive in time to replicate the gene. But a meme has got two bottlenecks first, it must. pass the test of being. understood and replicated into the mind of a new holder and then when the holder then executes it, it must do something which. Like the gene so that that second bottleneck is the equivalent of the gene, the first bottleneck has no analog in genes and that makes the natural history of memes radically different from that of genes, it means that these two kinds of memes. That they have different replication strategies neither of them has the same replication strategy as a gene, there is there is no way of. There is no way for a meme to replicate itself by blind copying. Humans are incapable of blind blind copying anyway, but even if you try to engrave your meme on a stone obelisk that obelisk will wear away unless somebody tends to it. And. That is not true of genes, they can they can survive for billions of years and because they are. Because they are. maintained by a blind error correction process, whereas human memes have to be maintained by humans actually going out of their way to maintain them in every generation that's that's another difference genes need not be enacted in every generation. And they you know if you don't if you don't either the example I gave you if you don't break your arm, you will still pass the genes for repairing broken arms onto your children. But if you don't if you don't enact your religion, then your children will never hear of it. See so that that first bottleneck is the difference between.

### David Deutsch

<span class="transcript-timestamp">00:52:03 - 00:52:39</span>

Alive replication and. Non living replication, whereas a meme or your book is a container for knowledge it replicates as a printing house copied it and I acquired some knowledge to it. But if without me, it would not be able to replicate the knowledge would go away or without the readers. Yes, yes, without the readers and just printing it is blind replication but really that's that's not if we look at generations. Then if humans don't read the book, then almost all almost all printed material will never be read again nor enacted.

### Mert

<span class="transcript-timestamp">00:52:42 - 00:52:44</span>

We have a question from Arjun.

### Arjun

<span class="transcript-timestamp">00:52:45 - 00:53:34</span>

Yes, it's a pleasure to be asking a question on the. So since we're on the concept of memes, I think when you write in The Beginning of Infinity, which I have right here is in chapter 15 it's like extremely profound when you come up with the idea of memes and the fact and implications of society. And you write a little about an explicit the inexplicit component of memes and ideas which I thought was very interesting, but could you expand on that a little since. You write in fact all ideas have some inexplicit content since even a knowledge of the meanings of words largely inexplicitly in our minds. But just to sort of unpack that a little maybe I'd love to hear.

### David Deutsch

<span class="transcript-timestamp">00:53:35 - 00:56:30</span>

Yeah, well. So, first of all, the way that it couldn't be is that all knowledge is explicit. That couldn't happen, because if all knowledge were explicit, then the meanings of words would have to be explicit too. Let's say I use a word like "castle." Somebody who doesn't know what a castle is would have to look in a dictionary, and in that dictionary a castle will be defined as a type of building which has the following properties, etc.

But if the person doesn't know what "building" is or what "type" is, then they have to look those up too. It's obvious by a counting argument that a dictionary cannot possibly define every word in it, because there would have to be a route to every definition, and that route would itself be undefined.

So how is it that inexplicit knowledge gets around that? Inexplicit knowledge doesn't have definitions, and in fact, as Karl Popper says, definitions are highly overrated. They're nearly always useless. We have knowledge encoded in language, but not as definitions. It's encoded as ideas expressed in language.

The way children learn language is by guessing what words and grammatical structures mean. When they guess wrong, they correct their guess. When they guess right, they use the word and then perhaps correct it again. No two people end up with the same meanings of all the words. Loosely speaking, we say that everybody who speaks English can understand each other, but that is not true as soon as you get into any kind of detailed discussion of anything. You find that people have a different idea of what it means to exist, or what it means to be true, or just basic things like that. People have radically different intuitive ideas about which, if they are naive, they think that everyone else has them too.

So I don't know if that answers your question. I said what can't happen and what does happen.

### Mert

<span class="transcript-timestamp">00:56:30 - 00:56:47</span>

That's. Okay. We have another question also, how are we doing on time David do you think we could go on a bit more. yeah yeah up to you. Okay, maybe like 30 more minutes, I guess, then.

### Audience questioner

<span class="transcript-timestamp">00:56:48 - 00:57:17</span>

In the shop. I think hi again so. We have physical theories of what we understand now as physical theories of information, starting with thermodynamics and second law of thermodynamics, especially, but it. It seems to me that we are missing something there as a physical theory of knowledge and how that might have a bearing on all of this. Do you have any thoughts on that to share.

### David Deutsch

<span class="transcript-timestamp">00:57:18 - 00:59:58</span>

Yeah, well, first of all, we already do have some quite deep knowledge about knowledge, namely epistemology, of which the best that I know of is Popper's epistemology. It obviously is insufficient, since if it could tell us everything about knowledge and how it works, then we would be able to use it to make an AGI.

I take it as axiomatic, if you like, that until we can make an AGI there is a huge gap in our understanding of knowledge. Now as a separate matter, I am kind of hoping that constructor theory will tell us something about knowledge, since knowledge is an abstract constructor, and that can't be an irrelevant fact. So I think there will be a constructor theory of knowledge eventually, which may or may not improve on Popper's theory of knowledge.

But even if it does improve on it, I'm afraid I still think it won't be the full answer. When I say "the full answer," I mean it won't solve the problems that we have now. Nothing is ever a full answer in the sense of solving all future problems. I think that the various issues about knowledge, like the question of identity and the question of qualia and so on, knowledge, consciousness, free will and so on, we have partial knowledge of those, especially knowledge of what is a bad theory about them. But we don't have an actual explanatory theory of them.

So that's another vast area that we don't know about. Maybe somebody will come up with a single equation that just solves it. That'd be nice.

### Mert

<span class="transcript-timestamp">01:00:02 - 01:00:04</span>

Cool cool we have a question from Charles.

### Charles

<span class="transcript-timestamp">01:00:07 - 01:00:08</span>

Yes, hi David.

### David Deutsch

<span class="transcript-timestamp">01:00:08 - 01:00:09</span>

Oh hi Charles.

### Charles

<span class="transcript-timestamp">01:00:11 - 01:00:40</span>

And yeah my question is about the time and the multiverse I guess I'm going back a bit and I wonder how can the multiversal picture of time accommodate the idea of a new of an open future. If, like in classical space time determinism ends up fixing the multiverse and by open here I refer either to people's choice or to knowledge creation, I guess. So.

### David Deutsch

<span class="transcript-timestamp">01:00:41 - 01:03:48</span>

The open universe that is. Is not is not intended to be open in the sense that there's indeterminism in fact. indeterminism does not help in any way to make the universe open in the sense we want it to be open, in fact, if anything, it makes it worse that it makes. It makes. worse, we have to the problems, though, arise at a different level from the level of microscopic physics they arise at the level of understanding knowledge again when I say that. When I say that I have freely chosen to do something I mean that I have created in the process of deciding it and I don't mean simply a choice like. Whether I should have strawberry or butterscotch ice cream, where it doesn't really matter much to me I'm talking about decisions where I had to think about it and where I am a different person, as it were, after having thought of it in those cases. I have created something new I have brought something new into the world, namely the knowledge that I then use to guide my my choice. So. The universe can be open to that or not that's that's the sense in which Popper use the word open in the sense the open society and its enemies. No society is totally closed no society that we know of is totally open, but still there is a vast and important difference between societies that are basically open or which at least strive to be and societies which are basically closed or at least strive to be. And that's the sense in which it is important for a society to be open and I think exactly the same is true within one person. that's that's what we mean by being open to ideas or it's what we mean by having had a new idea. You know, I could say I had a new idea yesterday about so and so and somebody you know a rabid determinist would say no that was idea was already there at the big bang. But, in a sense, it was and, in a sense, it clearly wasn't. So we have to basically in order to think of openness, we have to. kind of put back in the drawer all the framework of. laws of motion initial state determinism otherwise it might be just meaningless and we're just going to loop around. Yes, because we shouldn't be surprised that the answer to the problem is at the same level as the problem.

### Charles

<span class="transcript-timestamp">01:03:50 - 01:03:51</span>

Mm hmm.

### David Deutsch

<span class="transcript-timestamp">01:03:51 - 01:03:53</span>

The problem isn't about electrons.

### Charles

<span class="transcript-timestamp">01:03:54 - 01:03:55</span>

Exactly yeah.

### David Deutsch

<span class="transcript-timestamp">01:03:56 - 01:05:10</span>

If you have a you know if you're worried about how your theory of knowledge is compatible with your theory of electrons. Then that's kind of I don't know what you call it the category error or something that that's that's. it's like it's like saying. Well, the example at one of the examples and given in The Beginning of Infinity is like if somebody says if you're watching a conjuring trick in the theater and the conjurer does something that looks impossible and you say to your friend, how the hell did he do that and the friend says laws of physics. He hasn't he hasn't answered your question, and if he says Oh, the conjurer did it still hasn't answered answered your question you want your problem was at a different level from those two levels. it's at one level up he did the answer is something like when it looked as though he was putting the ball in the second cup he wasn't and he then put it in the third cup that's the beginning of a real answer. And it's compatible with the first two answers, but the first two answers don't answer the question.

### Mert

<span class="transcript-timestamp">01:05:13 - 01:05:36</span>

Thank you yeah I see. Thanks for the question Charles. We have two more questions, so I guess we move to the strand of epistemology now. But let's see where these questions come from toby. hi toby you have a.

### Toby

<span class="transcript-timestamp">01:05:36 - 01:05:40</span>

Right yeah. Hello. Can you hear me.

### David Deutsch

<span class="transcript-timestamp">01:05:41 - 01:05:42</span>

Yes.

### Toby

<span class="transcript-timestamp">01:05:42 - 01:06:31</span>

Yes Hello there David and I have a question about decision theory and the arrow of time. And this could be a bad conjecture I want to know whether observation of time asymmetric increase of entropy could feasibly was be a result of agents maximizing their rational expectation values. In a time symmetric world, which the way you derive probabilistic born rule from non probabilistic many worlds so that agents such as ourselves are playing like a game as if. We can make sense of the world in terms of causation change and predicting the future, but where those things have no intrinsic or what why that time symmetry has no intrinsic existence of its own. So I was wondering if there's been any work in this area or so, however, it's a bad idea to think about.

### David Deutsch

<span class="transcript-timestamp">01:06:32 - 01:07:04</span>

There have been people who have tried to link. What's it called the entropic arrow of time with the knowledge arrow of time. I'm not very. Persuaded by that I think there's a lot more to knowledge in general and to the knowledge arrow of time in particular than just physics. Yeah, as I said before. But it doesn't it hasn't yet.

### Toby

<span class="transcript-timestamp">01:07:06 - 01:08:13</span>

Yeah, I was what I mean if I mean the cut sort of conjecture that I was that I had was, I think one of my criticisms of it was. It would mean if it was true causation would be it would mount to some I think it mounts to some form of subjectivity. Because it. The I can imagine randomness is not a cause of cause, but it's a cause of cause. It mounts to some form of subjectivity because it. The I can imagine random agents say in the multiverse with. They're determined by laws of physics and stuff like that, but the actual arrangement in time would be a fiction or a story that. Would be correlated between sets of agents, but that would mean that the kind of causal structure that I tend to think would be objective would have to be subjective, so I thought that that was probably one major problem with the idea.

### David Deutsch

<span class="transcript-timestamp">01:08:14 - 01:08:41</span>

It, I'm not sure I understand quite what the idea you're putting forward is, but it kept sounding to me that you were mixing levels of explanation again. The question of what can communicate with what is a question of physics. It has an answer in terms of laws of physics and no higher level explanation can add anything to that.

### Toby

<span class="transcript-timestamp">01:08:43 - 01:08:44</span>

Yeah, right.

### David Deutsch

<span class="transcript-timestamp">01:08:46 - 01:09:13</span>

If, on the other hand, you're talking about like what things mean, like when you realize that. Napoleon isn't what you thought he was then at level of physics that doesn't. Change Napoleon, but it does. It may change how Napoleon affects the future from now on.

### Toby

<span class="transcript-timestamp">01:09:16 - 01:09:26</span>

Yeah, yeah. Thank you. That's. That's. Think about separating levels of explanation. Bit harder. Thank you.

### Mert

<span class="transcript-timestamp">01:09:30 - 01:09:34</span>

Yeah, we had a few more questions pop up. Owen.

### Owen

<span class="transcript-timestamp">01:09:36 - 01:09:52</span>

Hi. Yeah, thank you. So earlier when we were talking about memes and genes, you called them containers of knowledge. And I thought that sounded a bit strange to me because I would consider more containers of information rather than knowledge. Maybe I'm just mistaken there, but.

### David Deutsch

<span class="transcript-timestamp">01:09:52 - 01:11:24</span>

No, no, that's a very important distinction. Information. So knowledge is a species of information. But very little information is knowledge. Because the vast majority of the information that exists in the universe does not have causal power. It doesn't have the power to replicate itself. Basically, but it also doesn't have the power to systematically cause transformations in other systems. So, you know, you could take you could take a census of all the grains of sand on all the coastlines in the world. And that would be a vast amount of information. And almost none of that information is involved in the explanation of anything else. So, whereas a much higher proportion of, let's say, the information in the books in the Bodleian Library. Still, you know, not 100 percent, probably not 10 percent, but vastly more than in the grains of sand have the power to cause things to happen. Historians can go in there convinced of one thing, come out convinced of another thing, and then go and do things in the world that have much greater mass and momentum and generally causal effect than the grains of sand.

### Owen

<span class="transcript-timestamp">01:11:27 - 01:11:36</span>

Yeah, OK, I see. OK, yeah. And also earlier you were saying time is a mistake. And I'm not sure I understood exactly what you mean by that.

### David Deutsch

<span class="transcript-timestamp">01:11:37 - 01:12:26</span>

When we when we think that time flows like a river or, you know, whatever metaphors people say, that's obviously not true. You know, the time time at this moment today is not going to flow anywhere. It's not going to flow to tomorrow. It's not going to flow to the day after it. Today will always stay at whatever today's date is. And that doesn't change and nothing about the sequence of time changes at all. Again, causation happens from one time to another. But the time itself doesn't do that. It's physical objects that do that.

### Owen

<span class="transcript-timestamp">01:12:28 - 01:12:36</span>

OK, but we still need time as sort of a substrate to understand what causation even means. Like we still need the concept.

### David Deutsch

<span class="transcript-timestamp">01:12:36 - 01:12:42</span>

Well, we need the concept of causation, but I don't think we need the concept that time flows.

### Mert

<span class="transcript-timestamp">01:12:43 - 01:12:51</span>

OK, yeah, I see. Thank you. Thanks. Sam, Sam.

### Sam

<span class="transcript-timestamp">01:12:52 - 01:13:30</span>

Chris. Yes. Hi. I had not sure is a very serious question, but you said earlier that memes replicate by using basically two methods. And one of them is that you need to enact the meme during someone's lifetime for them to remember it and then they can pass it on. What if an AGI were born with like pre-programmed knowledge of, say, the Bible or something or of certain religious traditions so that you could bypass that? Would that in any way change meme evolution?

### David Deutsch

<span class="transcript-timestamp">01:13:30 - 01:13:47</span>

I don't think it would. By the way, I'm not sure which. So memes have two bottlenecks to pass through and that means. There's also in meme replication, there are two different kinds.

### Sam

<span class="transcript-timestamp">01:13:47 - 01:14:02</span>

So I think you read those things. Yeah, I mean, I think you said if you don't enact your religion to your child, then they won't know about it. But you if you break, if you never break your leg, then they will.

### David Deutsch

<span class="transcript-timestamp">01:14:02 - 01:16:03</span>

The best you can do, I think, is to engrave something deeply on a diamond. But then you've got to put the diamond somewhere where you can ensure that somebody won't grind it up and use it for industrial purposes, or eventually so that it won't it won't burn or evaporate or something like that. If you put it in a robot, like you said, and the robot, let's say, is immortal, then that won't work because the robot, let's say you put the Bible or whatever, the robot will have a different interpretation of the Bible next year from what it had this year. It's presumed, I assume by hypothesis that it's thinking being its opinion of what things mean will change that that's what humans do. That's what any person does. If it's not a person, if it's just like the diamond, then it will eventually be ground up. So on, you know, it will only it will only be preserved if it's useful for something, or if somebody has a theory that it ought to be preserved. And in either case, that's a property of the information that it has in it, which makes that information into knowledge. But if it's if it's just information, or if it's useless information, I mean, then it will eventually fade away. I suppose there's a there's an exponentially small chance for any particular piece of information of useless information that it will eventually survive. I mean, no doubt, somewhere on one of those beaches around the world, there's a configuration of sand that will still be exactly the same after the tide has come in and gone out again.

### Mert

<span class="transcript-timestamp">01:16:03 - 01:16:23</span>

Thanks for the answer. Thanks for the question, Sam. I guess let's take one final question from Ante and then bring the conversation more to how to describe our more more comprehensible immediately accessible world. Ante, yeah, go ahead.

### Ante

<span class="transcript-timestamp">01:16:23 - 01:16:54</span>

Thanks. My question is in constructor theory. The universal constructor is it. Is there a meaningful distinction between, let's say something like DNA that can make a person, and then it's automatically a universal constructor, or does the effect have to be in some way more immediate.

### David Deutsch

<span class="transcript-timestamp">01:16:54 - 01:20:54</span>

So I have to apologize to everybody that that in my book The Beginning of Infinity. I talk in a very loose way about the universal constructor, which turns out to be not very suited to constructor theory. In particular, I spoke of human as being a universal constructor, and that's that's not quite right in an important way, namely, that a universal constructor, like a universal computer has to be programmable. So it's universal in the sense that for everything that can be constructed, there exists a program that will make the universal constructor construct it, which means that it has to be perfectly obedient. And like all constructors, it's an idealization but to say that something's a good approximation to universal constructor, you mean that it's very, very, very obedient. But humans, neither humans individually, nor human society as a whole is at all obedient. So, now you might say well it's not the human that's a universal constructor. It's just the human body. And forget about the brain, you know you have to program the brain instructs the rest of the body but then the rest of the body is has a finite lifetime. And anyway, most constructions involve cooperation between different people, and it involves machinery, and later one day when we have universal constructor robot type things, it will involve those, and then it doesn't really make, make sense to consider the human body as a universal constructor, when all it is, is an is a front end for the real universal constructor, which will be a type of robot. Okay, so having made that apology I've forgotten what your actual question was. Well, if DNA can build a human, then is it automatically universal constructor. Yes, well so if it isn't a universal constructor. The answer is no. So, if there were a way for DNA to not only build a human, but to install in the human brain, a program for doing an arbitrary thing. And for passing that on to its offspring, so that they would work for generations and generations to build rockets to go to the moons of Mars and convert them into busts of Napoleon. Unless there's a way for DNA to do that, then the answer is no. I don't think there can be a way of doing that but that that's another issue I mean that that's not a fundamental issue that it could be that that DNA can do this without going via the intermediary of a human. So, if DNA could build an animal robot that builds other robots that builds other robots and so on, and then the DNA installed in a certain cell, because something has to make the DNA work like with the ribosomes and so on. So, DNA can indeed make anything. When installed in a suitable cell. Again, I don't think so, but it's not impossible from fundamental principles.

### Mert

<span class="transcript-timestamp">01:20:54 - 01:21:23</span>

Thanks. Thanks for the question. So, I think we can bring the conversation towards more practical questions. I found, if I may say like more accessible in our everyday world with our hands, which like as quantum computers right now, we have that are being built that we can touch and play with.

### David Deutsch

<span class="transcript-timestamp">01:21:24 - 01:22:31</span>

Unfortunately, I haven't got my finger on the pulse of current technology. My, my view of current technology is just that of a layman who sees things on Twitter from time to time. So, I'm naturally skeptical about claims to have achieved universality. And I'm naturally gullible about things to claims to have universality in the sense of universal quantum computer. I'm naturally gullible when it comes to claims about having achieved something amazing, like, like a new functionality just like in the case of AI and AGI. I'm skeptical about claims to have made progress towards AGI. And I'm fully expecting amazing brilliant progress in AI, like every day.

### Mert

<span class="transcript-timestamp">01:22:31 - 01:22:50</span>

So, what I was wondering was, was there maybe a technological development that you were surprised to see positively surprised to see in the last few years, or what are some scientific trends that you were excited about you are excited about right now.

### David Deutsch

<span class="transcript-timestamp">01:22:50 - 01:27:37</span>

Oh, well that's that's a much wider question. Do you mean in regard to quantum technology. Again, I'm afraid I don't know. Maybe generally actually maybe not even maybe not immediately related but related. I think there are so the big picture is that I think that progress in fundamental progress in physics has slowed down during the last few decades, and it has slowed down, not because we've reached all the low hanging fruit or for any reason like that it there's a sociological reason that that that has stultified the scientific world in regard to almost all fundamental issues. So, most things haven't made progress. There has been a lot of progress in cosmology, which again I don't know much about. But I think that the inflationary model seems like a fairy story to me. And if it turns out to be true, it will be amazing. And I mean when I said it turns out to be true I mean if the underlying mechanisms are found to have some basis in new theories of elementary particles and that kind of thing, then that will be amazing. If it turns out to be false and it's superseded that will also turn out to be amazing. So that's a nice state for a field of science to be in that whether it succeeds or fails in its current hopes. Either way, it will be amazing. Computer technology, aside from quantum is of course making huge progress and computer software in the sense of machine learning and AI is also making rapid progress. I probably forgotten the most. I'm not remembering the most important thing and somebody will come to me after and say hey you know you dissed our field, but I don't mean to diss any field, but you've been talking about virtual reality a lot as a theoretical construct to explain the fabric of reality in the book. Yeah, well that that technology is improving but it hasn't improved in any fundamental way for many years. The resolution has got better. You know the programming has got better. But there's nothing that would amaze anybody from the 1980s that say, they'd be amazed that the actual technology. And like, they'd say you know, shut up and let me try this out. Rather than answer your questions but there's nothing fundamentally new that they didn't think of. Whereas for example if you go a bit further back and look at what was considered to be the most amazing possible future in the 1960s, let's say with Star Trek. There are a lot of things from that that were actually achieved, and there are a lot of things from that, that were not achieved. And there are a lot of things that were achieved that were not thought of then, not even conceived of. And that kind of thing has slowed down. And I think it's because of irrelevant, I mean fundamentally irrelevant things like the social sociology of science and the structure of scientific careers, and the structure of universities, and the public conception of the educational system altogether, you know thinking of the educational system as a machine for passing on knowledge is not very compatible with an open society and open science is and should be the epitome of an open society. But it's, it's less so than it has been in the past.

### Mert

<span class="transcript-timestamp">01:27:37 - 01:27:44</span>

We'll take one final question before we wrap up from Andrew.

### Andrew

<span class="transcript-timestamp">01:27:44 - 01:28:32</span>

Hey David. I'm coming over here from the US. I am actually an analyst and we invest in those cutting edge technologies at my VC firm and. So I'm curious to learn well with regard to trying to remove abstraction layers from what is cutting edge science and then commercializing it. So, and I think you've already talked on this a little bit but what would be, I don't know, like an inflection point in the science community that could help proliferate like these more cutting edge frontier technologies. And because you said it's kind of slowed down so what can kind of stop that stagnation and well.

### David Deutsch

<span class="transcript-timestamp">01:28:32 - 01:32:14</span>

So one thing is, is to do with a combination of funding and organization. So, scientific research ought to be organized in the form of where the fundamental unit is the research group. So, if the research group could be one person, in which case, that person should be free to do whatever that person wants to do, or it could be a group, in which case, that person, it should have a leader who decides who they want to work with. But the organizational structure should be flat. So that the leader is the one that talks to the funders. But apart from that everyone when they're when they're actually in the lab or in front of the whiteboard, everybody's equal. So that's one thing. Another thing. This may sound like a very parochial issue but I think they ought to leave, leave graduate students alone. There's been a sort of mission creep in universities, where it used to be like when I was a graduate student. It was taken for granted that that you were an undergraduate. And then, either you went in, if you want to do research you would you would go into research and you would start on day one being in some research group or working on some problem with your own or whatever it was, or you would first have to do an MSc and then start being a proper graduate student. And now, graduate students are from the point of view of the research itself. They are not in a creative role. They're in a subordinate role. And it's hard enough for people who come out of say a school with its regimented structure to do research to build up on the on ramp of an undergraduate degree to actually do creative research, but this has been made harder and harder by more and more burdens being placed on graduate students and then it doesn't stop with graduate students postdocs now have to spend a significant proportion of their time meeting irrelevant requirements from their departments from the funders from the government, whoever whoever is in charge of them. So, there's somebody who is called a postdoctoral researcher. That is, you know, doctor means learned, a learned person, they've become a learned person, they're supposed to be doing research and creating new knowledge. So, their job description says that they're supposed to create new and original knowledge. And yet, they have to spend most of their time meeting existing criteria. That's not creativity. So those are those are a couple of things that no doubt there are many more. Thank you.

### Mert

<span class="transcript-timestamp">01:32:14 - 01:32:34</span>

So, as the final question, then, David, what would be your advice to those people, what would be your advice to future potential discoveries of algorithms or scientific theories. In other words, what would be your advice for seekers of the truth.

### David Deutsch

<span class="transcript-timestamp">01:32:34 - 01:34:02</span>

Well, I don't give advice. Because when you give advice, what happens next is then your fault. And I don't want anything to be my fault. So the. I think the only, like, I could say, just be aware that this, the hierarchy and the structure, whose ostensible purpose is creating knowledge actually acts largely to prevent that. And the fact that this doesn't result in immediate collapse of society is due to the fact that people. Some people manage to find their way through the minefield through the labyrinth through the dark forest, and do the research anyway, despite all the discouragement and the compulsion to do irrelevant things. So, you know, is my, if my advice is, find your way through the minefield, or find a field that doesn't have mines or something that is not going to be much help.

### Mert

<span class="transcript-timestamp">01:34:02 - 01:34:48</span>

Right. All right. Thank you, David. I don't know how we can do it on zoom but. Thank you. Thank you so much, David. Thanks for everyone who showed up. After maybe some edits will post this on our website and our YouTube channel by quantum information society. And I've seen that there were many questions in the chat. We had many questions that were unanswered. You couldn't take any questions from the chat. So we'll find a way to maybe somehow record those and make use of them in our future sessions, but thanks for everyone who showed up. I guess I'm going to stop the recording now. Thanks, David.
