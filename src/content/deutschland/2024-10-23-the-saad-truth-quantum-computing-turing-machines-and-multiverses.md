---
title: '2024-10-23 - The Saad Truth - Physicist Dr. David Deutsch - Quantum Computing, Turing Machines, and Multiverses'
description: 'Title names quantum computing, Turing machines, and multiverses.'
pubDate: 2024-10-23
---

[Official](https://thesaadtruthwithdrsaad.podbean.com/e/physicist-dr-david-deutsch-quantum-computing-turing-machines-and-multiverses-the-saad-truth-with-dr-saad_729/)
[YouTube](https://www.youtube.com/watch?v=S7GS_T_2dyE)
[Spotify](https://open.spotify.com/episode/21IpAe7oLGNgZJM3XuLVso)
[Apple Podcasts](https://podcasts.apple.com/us/podcast/physicist-dr-david-deutsch-quantum-computing-turing/id1516343565?i=1000674179249)

<span class="duration-label">Duration:</span> <span class="duration-time">01:04:50</span>

## Transcript
### Gad Saad

<span class="transcript-timestamp">00:00:00 - 00:02:49</span>

With great excitement, I introduce you to Northwood University, a truly exceptional institution in American higher education. Since 1959, this private, accredited university has been a vibrant bastion of free thought and enterprise standing out among the thousands of other schools in the US. Known as America's free enterprise university, Northwood is dedicated to nurturing the next generation of leaders who drive global social and economic progress. At the heart of Northwood lies the Northwood Idea, a philosophy that celebrates individual freedom, responsibility, and the importance of moral law and free enterprise. This entrepreneurial spirit is evident in that one third of Northwood alumni own businesses. Northwood is more than an institution. It's a movement that empowers students to think critically and champion liberty. It is a rare gem in today's academic world. If you're passionate about supporting a university that values intellectual growth and free enterprise or to learn more about its academic programs, visit northwood.edu. Hi everybody, this is Gad Saad. I don't know what I've done in a former life to be able to convince all these unbelievable people to actually hold conversations with me. Today I've got the brilliant British physicist Dr. David Deutsch on the show. How are you doing, David? Fine, and it's an honor to be on it. Oh, you're very kind. Let me just read for the people who may not know you a few. You sent me a bio that would have taken me a few hours to read, so I distilled it to a few things. You're currently an honorary fellow of Wolfson College at Oxford University. You were the first to publish a proof of the universality of a universal quantum computer. We'll try to see if we can understand what that means. Published the first quantum algorithm proving to be exponentially faster than any Turing machine algorithm. Look what I've got here, David, the biography of Alan Turing, and then some pioneer in the field of quantum computation received the Breakthrough Prize in Physics, the Institute of Physics Isaac Newton Medal and Prize, the Micius Quantum Prize, the Dirac, Paul Dirac. Here's his biography, the Paul Dirac Medal and Prize. Holy moly, that's a lot of awards. You were a fellow of the Royal Society in 2008, and I'll just mention your two books meant to be consumed by the general public, The Beginning of Infinity and The Fabric of Reality. Anything else you want to add before we dive deep into this?

### David Deutsch

<span class="transcript-timestamp">00:02:49 - 00:02:51</span>

No, as you said, that's probably already too much.

### Gad Saad

<span class="transcript-timestamp">00:02:52 - 00:03:27</span>

Okay, so I thought the first thing we would do, and by the way, as I was reading your bio, I saw in one of your books, you talk about Popper, you talk about Turing, you talk about Dawkins. Those are all guys that I absolutely love, so it's not going to be very hard for us to have a really fun conversation. Question one, which I'm very afraid to ask because Richard Feynman already told us that, I can't remember the exact quote, but if you think you understand quantum physics, nobody understands quantum physics or something to that effect, can you tell us what is quantum physics and then how does that translate into quantum computing?

### David Deutsch

<span class="transcript-timestamp">00:03:28 - 00:04:53</span>

Yes, I'm not sure where Feynman, when Feynman said that. It may have been closer to being true when he said it because quantum theory, which is the most fundamental theory we know in physics, took a few wrong turns during the early 20th century and it was in a complete mess philosophically. I mean, it was like compulsory to talk nonsense about it and it's possible that Feynman was referring to that when he said that no one understands it. No one could understand it because it didn't make sense. On the one occasion that I was honored to meet Feynman, we spoke, I was very junior, but I just started my work on quantum computers and he seemed perfectly reasonable. He didn't say anything like that. I asked him what he thought of the prevailing so-called interpretation of quantum theory, which was nonsense and he said, oh, Johnny never intended that to be permanent. I thought, Johnny, wait...

### Gad Saad

<span class="transcript-timestamp">00:04:54 - 00:04:57</span>

John von Neumann?

### David Deutsch

<span class="transcript-timestamp">00:04:57 - 00:06:52</span>

Yes. Johnny. Yes. He never intended that to be permanent. It was just a stopgap measure to allow them to make computations and make predictions, but it was never meant to be actually true of the world. But at that time, by the time I met him, the right way of looking at it had already existed for 30 years. It was invented by a physics graduate student of Feynman's mentor, John Wheeler, who was also my mentor. Wow. Wow. And it is called the many worlds, many universes interpretation. Though it's not an interpretation, it's simply saying, right, let's go back to the beginning, forget all this nonsense about the observer and one can't distinguish between things that are true and things that only look as though they're true and so on. And let's go back to first principles. Let's just apply the way of using physical theories that we are all taught when we're undergraduates. And he looked at the equations and the equations clearly say that there are many universes and usually they're independent of each other. So when you're in one of them, it just looks like the others aren't there. But occasionally they affect each other. And that's called quantum interference. And that's the most important physical phenomenon in quantum theory. So that's what happens when you take quantum theory seriously as a description of the world.

### Gad Saad

<span class="transcript-timestamp">00:06:52 - 00:07:08</span>

Okay. So much to unpack there. So if when you say multiple universes, and you'll correct me if I'm getting some of the numbers wrong, right now we have a sense that the universe, the outer edges of the universe is about 16 billion light years away. Does that sound right?

### David Deutsch

<span class="transcript-timestamp">00:07:09 - 00:07:11</span>

Sounds right. They keep changing it.

### Gad Saad

<span class="transcript-timestamp">00:07:11 - 00:07:30</span>

So that's the universe as we know it. Okay, whatever. What does it then mean to have multiple universes? There is a pathway by which I go from the knowable universe that has a current outer limit of 16 billion light years away to where? What happens? Where do I go?

### David Deutsch

<span class="transcript-timestamp">00:07:30 - 00:07:36</span>

The literal answer to where is right here. But the laws of physics are such.

### Gad Saad

<span class="transcript-timestamp">00:07:36 - 00:07:39</span>

I'm already lost. I already don't follow what you're saying, but go ahead.

### David Deutsch

<span class="transcript-timestamp">00:07:41 - 00:08:41</span>

Suppose it's like the Twilight Zone or something in Superman comics or something like that. It's another world that coexists with ours, roughly speaking in the same space. And because it doesn't interact with us in any way, it's like dark matter, you know, or neutrinos. We're deluged with trillions of neutrinos per second, but we don't feel them because they don't interact with our kind of matter. And it's the same with the other universes of quantum theory, except that unlike neutrinos, they do interact strongly with our universe under certain circumstances. And these circumstances can be set up in the laboratory and then they give rise to astounding effects. So there is an earthly manifestation of that theory that is not just some axiomatic, elegant thing that happens in Booga land in mathematics.

### Gad Saad

<span class="transcript-timestamp">00:08:41 - 00:08:54</span>

There is a way for me to interact with that reality to say, oh, there is, okay, got it. Go on.

### David Deutsch

<span class="transcript-timestamp">00:08:54 - 00:12:22</span>

Yes. And the experiments in which this is demonstrated are just astounding. I mean, if you think about what's happening there, you just have to go slack-jawed and say, you know, how can the world be like this? But it is. It is. And I did a series of lectures once, only got halfway through. But the second one that I did had this experiment. I actually went to the quantum optics lab in the Clarendon laboratory. And I found a colleague who was willing to set this up, set this experiment up for me, because for them, it's like everyday stuff. We don't set that up. I mean, we know what will happen. But, you know, ordinary people and also theorists like me, who whenever I go into a lab, everything stops working. But I knew what was going to happen. But seeing it in person was just astounding. I mean, to cut a long story short, viewers can go and find it on the internet. It's on the internet. And many other people have put it on the internet since then as well. The experiment is done with a single photon. How do you make a single photon? Well, you start with a laser with trillions of photons, and then you put a dark filter and another dark filter, another dark filter, and so on until you can't see anything coming out, of course. But you know that there's one photon coming out every, I don't know what it is, every millisecond. There's one, which means that the space between photons is like thousands of miles. Each one is like thousands of miles behind the other. So you're really only doing an experiment on one photon. And then you pass it through a screen, which has many holes. And what's coming out of the other side is it lands on a photomultiplier, which is an extremely sensitive detector that can detect individual photons. And it comes out in a place that is determined by how many holes there are. And that's the basic, which shows that really the... We did this experiment in many universes, and the photon in other universes interacts with our one, and they affect each other. And they end up in a place that is not illuminated when... When... Which way around is it? When only one of the slits is open, it's never illuminated, regardless of which one you open. Then if you open all of them, it lands in a place that isn't illuminated when just one of them is. So that can't happen, yet it does happen.

### Gad Saad

<span class="transcript-timestamp">00:12:22 - 00:13:20</span>

So how do we... Maybe this is too big of a question, but how do we take that insight that is happening, I guess the right term would be at the nano level, and then jump through a gargantuan bridge to the cosmological level? How do we go from that insight at... And before you answer, David, this is maybe an opportunity to bring in Dawkins, which you talk about in one of your books, because he talks about middle world. And middle world, we haven't evolved, I mean, literally in an evolutionary sense, the mind to intuitively understand things at the nano level or at the cosmological level. And so that's why for most people, folk physics might make sense, but quantum physics, which defies the way most of us have evolved to understand how you throw a ball or a spear, it's going to break down. So draw that bridge for us. How do we go from nano world to cosmological world?

### David Deutsch

<span class="transcript-timestamp">00:13:20 - 00:13:33</span>

Yeah. Well, first of all, note that what Dawkins said is clearly false. We do understand the nano world and we do understand the macro world, the quasar distances.

### Gad Saad

<span class="transcript-timestamp">00:13:33 - 00:13:35</span>

But it's not intuitive, maybe, that's what you were saying.

### David Deutsch

<span class="transcript-timestamp">00:13:35 - 00:17:11</span>

Oh, yeah. It's not intuitive, but nor is the fact that the earth is round. Fair enough. In fact, as I always say, I actually find it an extreme effort to grok the fact that people in Australia are upside down. And if I look down into the ground and imagine looking down, what I will see is their feet. Now, I know that intellectually, I can show it in mathematical terms, I can give evidence, you know, and so on. But actually intuitively understanding it, I don't think I've quite got there. Amazing. When you do any kind of science, when you get to the edge, of course, you find things that are counterintuitive, because if they had been intuitive, they would have been discovered long ago. Right. Aristotle did lots of observations and he got lots of things wrong. And so science is about understanding things that go beyond our intuition. So the way we go from one to the other, you know, I thought you were going to ask, this is at the nano level, how do we know that it applies to the everyday level and to the quasar level and so on? Well, we do. I mean, of course, all scientific theories are temporary. So we will no doubt have better theories in the future. But there's no problem with understanding the world in so far as it goes via quantum theory or via general relativity or both. The way we know, for example, is that the cosmic microwave background radiation was released into somewhere that we can see when the universe was very small compared with how it is now and very small and very dense. And the physical processes affecting it were subject to another quantum phenomenon, quantum fluctuations, which is a bowdlerized or sanitized way of saying interference from other universes. But we call it fluctuations as if, you know, it's going fizzing like boiling water. But it's not like that at all. It's just different in different universes and they affect each other. And we can work out from that how that microwave background radiation is going to look 13 point something billion years later when we look up in the sky and we see the microwave background radiation is patchy. Well, what are those patches? You know, how big are they? How intense are they? We can work it out from quantum theory. And lo and behold, that's what we see. Well, actually, we see it, I forget what it is now. We see it about 40% different from how it actually looks from what we predict, which is a big problem in cosmology at the moment. But, you know, that doesn't affect the fact that the smallest level we know about affects the largest level we know about Amazing.

### Gad Saad

<span class="transcript-timestamp">00:17:12 - 00:18:12</span>

In a testable way. And usually the epistemology of what you're talking about is you develop something mathematically, axiomatically, and then you say, if this theory is right, so now here we introduce Popper, if the data over there that I'm looking up looks in pattern A, then the theory must be wrong, hence falsified. But if it looks like B, that is unassailable proof that it is correct. Right? Because the reason I'm asking this question, because I deal with human beings where, I mean, yes, the scientific method is the same in a grand epistemological sense, but I'm using a different type of paradigm and testing whether testosterone affects men's behavior when they ride a Porsche. So did I get that roughly right in terms of I look at the world, it's either A or B and that tells me whether my mathematical model was right.

### David Deutsch

<span class="transcript-timestamp">00:18:12 - 00:20:56</span>

This gets right the logic of testing scientific theories, but it doesn't get right the logic and epistemology of the whole of science. So this is where you and I probably disagree. So before all this testing, before this mathematical writing down of mathematical equations, before that happens, we have a problem. This is a colleague of mine says that this concept of a problem is actually Popper's greatest contribution to philosophy. The idea that everything begins with a problem, not with observation, not with conjecture, not with a theory. It begins with a problem. And then the next thing, so we have a problem like how the hell do you explain what this photon does that I described to you earlier? Basically, it's inconceivable. The photon seems to be everywhere at once or it seems to be in one place at the same time. How can that be? And then you conjecture and they made some conjectures in the early 20th century. Then they wrote down the equations. Then they tested them. And there's this famous experiment by Stern and Gerlach who some of the physics folklore, I don't know whether this is true, but some of the physics folklore says that Stern and Gerlach were trying to disprove the theory of the pie in the sky theorists, that this interference phenomenon would take place with material particles as well as with light. The experiment that I witnessed was done with light. Doing it with material particles is much more difficult and so on. So they did it with silver atoms and they passed the silver atoms. They made a beam and it was incredibly difficult. They didn't have photomultipliers. They hardly had anything compared with what's in our labs today. But they finally managed it because their detection method was not good enough and they found by sheer accident, one of them was a cigar smoker. They found that the cigar smoke was illuminated by the beam of silver atoms

### Gad Saad

<span class="transcript-timestamp">00:20:56 - 00:21:02</span>

And that's how they finally did the experiment. As so often happens in science, serendipity kicks in.

### David Deutsch

<span class="transcript-timestamp">00:21:03 - 00:21:29</span>

Yeah, so that showed that the quantum phenomena were universal. I mean, it didn't show that. It just showed photons and atoms. Since then, we've done it with all sorts of things. They're planning to do ...

### Gad Saad

<span class="transcript-timestamp">00:21:29 - 00:21:37</span>

With viruses. Oh, so by universal, it means you've demonstrated it with light. You've demonstrated with actual matter.

### David Deutsch

<span class="transcript-timestamp">00:21:37 - 00:22:56</span>

Yes. But a virus is a manifestation of material, isn't it? So why is that a third instantiation of the mystery? Well, according to us theorists, it isn't different. But some people were saying, and still do to this day, that the quantum, it's only the microscopic world that constantly divides itself into many universes, but then it collapses back into one. And so they would have to predict that when enough atoms are involved in an interference phenomenon, it'll go away. The interference phenomenon will go away. And so when you aim viruses or something at this grid of holes, you will get just a shadow of the grid, nothing special. They'll just land wherever there's a gap and not when there isn't a gap. And so that's why experimentalists, they want to have something to do. So they are trying to do this with more and more objects. On the other hand, there's another way of doing it with more and more objects, which I think is more impressive, and that is with a quantum computer. So explain to ...

### Gad Saad

<span class="transcript-timestamp">00:22:56 - 00:23:11</span>

Us before, what is a quantum computer? It's not using Boolean algebra. It's not zeros and ones. So far I understand. Take us from there. What does it mean to engage in quantum computing?

### David Deutsch

<span class="transcript-timestamp">00:23:12 - 00:25:03</span>

So a quantum computer is a computer whose operation relies on distinctively quantum phenomena, especially interference. And the same thing I've been talking about all this time. So if you imagine a photon, for example, going through this grid of holes and splitting up into, sorry, not splitting up, differentiating so that in different universes it goes through different holes. Now suppose you put something in front of each of those holes that performs a computation. Well, you can't perform much of a computation with one photon. You can perform perhaps the not operation, you know, flip it from polarization down to polarization up. But still, you can have them all doing different ones and they come together and you can make the result depend on all of them. So you have a single photon doing the result of n different computations. But that's not all. If you were to send through two photons, which it's not feasible, so you have to do it differently with electrons in a crystal. But it can be done. The same phenomenon can be harnessed. Now if you had two of them that were also interacting with each other in every individual universe, but were also interacting with their counterparts in other universes, then you could do a whole load of computations that depend on, that act on two bits. So let me stop you right there, David. So I'm going to ...

### Gad Saad

<span class="transcript-timestamp">00:25:03 - 00:25:49</span>

Harness right now my undergraduate degree in mathematics and computer science and hopefully not make a fool of myself. So I remember I took a course in analysis of algorithms where you are basically calculating. I hope if any of my former professors are watching this, this is 40 years later and I would probably still get an A plus in the exam. So in analysis of algorithms, you're saying, okay, this can be done in order, whatever, n log n, whatever. What quantum computing does effectively is it takes that computational speed and increases it. That's the net final conclusion of what we're talking about. Is that right?

### David Deutsch

<span class="transcript-timestamp">00:25:49 - 00:26:16</span>

That's exactly right. But note that the factor by which it increases it depends on which computation you're doing. But for some computations like factorizing huge integers, for example, that's the famous one invented by Shor, it increases it by an exponential factor. That is by a factor e to the n or two to the n.

### Gad Saad

<span class="transcript-timestamp">00:26:16 - 00:26:42</span>

Wow. So, but for any task, it's going to increase it. But depending on the task, the extent to which it increases, it changes. Exactly right. Okay, got it. Exactly right. So then I would imagine that for things that require great computational burden, searches, that's where you're most likely to see this application?

### David Deutsch

<span class="transcript-timestamp">00:26:44 - 00:28:08</span>

A general search is not speeded up by much. Well, it depends what you count as much. It can, the speed goes like the square root of n. If the classical computer would take n steps because you're looking at n different possibilities, let's say you're searching something, then the quantum computer can do it in the square root of n, which is not, you know, the complexity theorists don't regard that as very impressive. But in real life, you know, converting a trillion into a million is a million fold improvement. Right. So, yeah, so note that no practically usable universal quantum computer has been built yet. It's tantalizing. All they've built so far is quantum computers, special purpose quantum computers, like the code breaking computers that they had in World War II. You know, they could break codes, they needed a modification to let them be a general purpose, like general Turing machines. The Turing stuff. That step hasn't been done yet in the quantum case.

### Gad Saad

<span class="transcript-timestamp">00:28:08 - 00:28:15</span>

Is it just because methodologically you can't yet build the architecture of a quantum computer that allows you to do this with full?

### David Deutsch

<span class="transcript-timestamp">00:28:15 - 00:28:16</span>

Yes.

### Gad Saad

<span class="transcript-timestamp">00:28:16 - 00:28:29</span>

Okay, got it. That's the only reason. And what's the, I mean, I know we always get these estimates wrong. Oh, I think it's in five years. Do we have a sense? Oh, in 25 years, that problem is solved? Or do you have a bit of a sense?

### David Deutsch

<span class="transcript-timestamp">00:28:29 - 00:28:53</span>

2008, I blogged that a particular method that had been invented in 2008, and which greatly impressed me, will deliver a universal quantum computer in 10 years. In 2018, it hadn't done anything like that, and I was embarrassed. And therefore, since 2018, I haven't prophesied.

### Gad Saad

<span class="transcript-timestamp">00:28:54 - 00:29:21</span>

You've been more hesitant. You're a bit slow off the blocks. Okay, I want to talk a bit about Turing. Then I want to come back to, so in looking at your work, and maybe many physicists have this kind of synthetic thing where they want to put everything under a universal mechanism. I would call it, and I'm not sure if, tell me if you're familiar with the term. Are you familiar with the term consilience, David, of E.O. Wilson? I've heard it. That's Wilson.

### David Deutsch

<span class="transcript-timestamp">00:29:22 - 00:29:26</span>

Exactly. I haven't read it. It's on my shelf.

### Gad Saad

<span class="transcript-timestamp">00:29:26 - 00:30:08</span>

Oh, so hold on. We'll come back to that because that, I think, is going to be a wonderful overlap between our mutual interests. But let me mention my own interaction with Turing's work. So I've often said that of all my studies, whether it be as an actual student in university and subsequently as a professor for 30 years, nothing blew my mind in a true mystical sense as much as when I took the course, well, the course was called Formal Languages. I even remember, and I didn't even check this before our meeting. The book was by Hopcroft and Ullman. You know what I'm talking about?

### David Deutsch

<span class="transcript-timestamp">00:30:08 - 00:30:10</span>

No, not that book. No.

### Gad Saad

<span class="transcript-timestamp">00:30:10 - 00:31:00</span>

Okay. So it's a book on formal languages where it introduces all the Turing stuff. And I've gone back to it maybe a couple of years ago. It's still in my university office where I'm looking at the margins where I've written stuff. Half of the symbols I no longer recognize. But what I do take away from it, that it seemed as though it was a level of intellectual insight that is almost difficult to imagine. I've interacted with a lot of brilliant people, but when you kind of interact with the Turing stuff, it's almost as if he existed in another plane. So number one, as someone who is a theoretical physicist, so you may even have more access to such folks, does my evaluation that Turing was a unique beast hold true?

### David Deutsch

<span class="transcript-timestamp">00:31:01 - 00:31:50</span>

Okay. That's why I dedicated, he was one of the people I dedicated my first book to. So yes, but it's interesting that you should talk about complexity theory as an example of this, because he was like at the very beginning, he killed himself. He shouldn't have done that. Yeah. But the thing that I think is transcendently great about him is the discovery of computational universality. The fact that a single machine with a single architecture can perform the computations that any other physical object can perform. Yeah. Amazing. Now that is such a mind blowing thing.

### Gad Saad

<span class="transcript-timestamp">00:31:51 - 00:31:54</span>

As you said it, I was getting goosebumps. I mean, literally.

### David Deutsch

<span class="transcript-timestamp">00:31:54 - 00:31:56</span>

Yeah. Yeah, exactly.

### Gad Saad

<span class="transcript-timestamp">00:31:57 - 00:32:28</span>

It's funny because one of the things to me, this engagement, I can't believe we're having it. That's what I live for. That's why I became a professor. But you wish, and I don't mean that as an elitist thing, what I'm going to say. I wish everybody would spend the necessary time to be able to... I mean, it's better than taking drugs, right? Because it kind of exposes you to a level of intellectual thought that's difficult to verbalize.

### David Deutsch

<span class="transcript-timestamp">00:32:29 - 00:36:22</span>

Yes, yes. And difficult to know that it even could exist before encountering it. Yeah. Yeah. Very true. And by the way, it seems that Ada Lovelace almost had it. I always thought that people who... Babbage was first with the design for a universal computer. He never managed to build one. For all sorts of reasons, he messed it up. And I always thought that Ada was like his upper-class muse. And I thought that when people called her his collaborator and the first programmer and so on, they were just doing the usual thing of saying that we're not giving enough credit to the woman in the story. And so I didn't take it seriously. But then I saw a documentary which presented cast iron evidence that not only did she get universality, but Babbage didn't quite get it. He only realized that the analytical engine that he had designed would be able to do all mathematics. But he didn't think of the idea of other uses such as simulating a physical object or composing music or analyzing images or whatever. But Lovelace did. Wow. And she wrote this down. And then it was forgotten. Nobody thought of this for almost 100 years. And Turing, in his epoch-making paper on computational universality, he refers to Lovelace. And yes, so the one thing that she couldn't get her mind around universality extending to was thinking. So she wrote, after listing these things that it might be able to do, then she wrote, but one thing it can't do, it can't initiate an idea. It can only obey orders, not initiate an idea. Remember, this is before anything like a computer had been made. And she was thinking, and she didn't quite get there. And in his paper, Turing addresses certain objections to his view. This is in his next paper, actually, not his universality paper, his artificial intelligence paper. He lists various objections. And one of them is called Lady Lovelace's objection. And he kind of takes it seriously and then gently points out to her that that doesn't make sense and that it's true of all physical objects. And so I think obviously nobody fully got it. Lovelace kind of got it in theory, but remember, this was before Darwin. So Lovelace, she couldn't wrap her mind around the idea that the brain is a computer because she couldn't wrap her mind around lots of properties of the ...

### Gad Saad

<span class="transcript-timestamp">00:36:22 - 00:37:04</span>

Brain, so of the human brain. Amazing. Well, we have some good friends who are actually neighbors of ours. The husband is a cybersecurity expert. And they just about a year ago, they had their first child, a daughter, and they named her Ada in honor of Lovelace. So there you go. I guess the other person that I could think of that reaches that level of, let's call it kind of mystical, intellectual abilities, would be maybe Gödel with his incompleteness theorem. That to me seems like in the same stratospheric range. Does that seem right?

### David Deutsch

<span class="transcript-timestamp">00:37:04 - 00:38:32</span>

Yes. Well, Gödel's proofs and Turing's are closely related. They didn't think of it like that at the time, as often happens. One only sees things in perspective and the originators of an idea usually don't see the full ramifications. So yeah, Gödel's results were unexpected to most mathematicians. They were extremely fundamental. They were, as you say, they were an amazing intellectual feat. Both of them, both Turing and Gödel were replying to one of the questions that David Hilbert had asked in 1900. Those are sort of the 10, here are the 10 fundamental problems we all need to be paying attention to. Yeah. Right. And Turing and Gödel both addressed that problem, both got the right answer. Turing was focused on what could be done by a physical object. And he showed that this one object could do anything that the other object could do. Gödel was focused on what can't be done by any physical object. Within any axiomatic system, there are questions that you could never answer. Is that right? Yeah.

### Gad Saad

<span class="transcript-timestamp">00:38:32 - 00:38:36</span>

Okay. But which have true, I mean, there's a truth of the matter.

### David Deutsch

<span class="transcript-timestamp">00:38:36 - 00:38:42</span>

Exactly. We cannot. I never thought of it this way. I never thought about, you know, one is doing what I...

### Gad Saad

<span class="transcript-timestamp">00:38:42 - 00:39:05</span>

What you could do, the other one is doing, but that's exactly right. You're exactly right. Now, is there, do we know why one would have taken the what we can do versus we can't do? Is there something in their temperament, their personality, their background that would have caused them to attack fundamentally roughly the same thing, but one in a positive frame, one in a negative one?

### David Deutsch

<span class="transcript-timestamp">00:39:06 - 00:40:46</span>

I think so. I mean, let's not exaggerate this. Both of them discussed both things, but Turing, and all mathematicians are going to disagree with me on this because they have what I call the mathematician's misconception. But they, Turing was physically focused. When he was trying to answer Hilbert's question, like he was trying to answer the question, well, what could mathematicians do? Well, what can anyone do? What can anything do? That was Turing's, and I think his whole formalism that he set up is, has the form, what can physical objects do? Paper tape in his case. What can paper tape do? And then he conjectured that anything can do what this particular configuration of paper tape can do. Whereas Gödel was more of a, was a logician, a mathematician. He was interested in the extent of the concept of proof. So we now know that proof is the same thing as computation, but nobody knew that then. So he was interested in you, what can be proved and what can't be proved and the formal system. And he didn't think, you know, let's make a machine to do it. That's a different issue. It seemed like a different issue, though it isn't.

### Gad Saad

<span class="transcript-timestamp">00:40:47 - 00:40:57</span>

Did they ever, I think they would have overlapped, right? They were contemporaries. Do we have any historical evidence that they would have ever interacted with one another?

### David Deutsch

<span class="transcript-timestamp">00:40:58 - 00:41:07</span>

I don't know. I don't know much history. But the answer will be in Andrew Hodges' book...

### Gad Saad

<span class="transcript-timestamp">00:41:07 - 00:41:10</span>

Which you just held up. That's right.

### David Deutsch

<span class="transcript-timestamp">00:41:10 - 00:41:17</span>

Yes. Because everything that's known about Turing is in that book.

### Gad Saad

<span class="transcript-timestamp">00:41:17 - 00:43:18</span>

Oh, wow. Wonderful. Okay. So let's go back as promised to the idea of consilience. First, David, I urge you to read E.O. Wilson's book. One of my great regrets is that he passed away before I could convince him to come on this show, because we have so many things in common. One of my favorite quotes of his, which is not relevant to consilience, but relevant to some of the other stuff I talk about. I'm paraphrasing a bit, but when he was asked about his views on socialism slash communism, he answered a great idea, wrong species. Because the point is, right, he studied social ants. In social ants world, there is a reproductive queen, and then everybody else is interchangeable. So communism makes perfect sense for social ants. It doesn't make sense for a hierarchical species like humans. I thought that was brilliant. But basically, for our viewers who may not know what consilience is, I'll just explain it very quickly, and then I'll bring in your sort of universal angle. Consilience is, I mean, literally, it's in the subtitle of his book, Unity of Knowledge. So in his case, he's arguing, look, we can create consilience across the natural sciences, the social sciences, and the humanities. And the meta theory that he's going to propose, and I happen to agree with that, and I'd love to get your opinion on it, is evolutionary theory. Because I can use evolutionary principles in the pursuit of certain phenomena in the natural sciences. I can, of course, also use it in the social sciences. I apply it in studying economic decision making, consumer decision making, and so on. And you could study it and say aesthetics, the evolutionary roots of certain aesthetic movements, and so on. And so in that sense, you have a big meta theory that can build bridges across everything. Now I know that, say, in physics, you talk about the theory of everything, which in a sense is a way of seeking consilience. So what would you add to what I just said in terms of what E.O. Wilson said about consilience?

### David Deutsch

<span class="transcript-timestamp">00:43:19 - 00:44:10</span>

Okay, first of all, so many things occurred to me while you were explaining it just now. But the first thing that occurred to me is that I now remember why it's on my shelf and I haven't taken it down. Okay. It's because E.O. Wilson doesn't understand evolution. Wow, those are big words. So I think he had a row with Richard Dawkins and they were, I think he was Richard Dawkins' hero too for a while. And then suddenly he betrayed Richard Dawkins by talking about group selection and so on, which is like facepalm. And actually I had the same reaction where towards the end of his career, he came out with some ...

### Gad Saad

<span class="transcript-timestamp">00:44:10 - 00:44:27</span>

Papers. I said, either I'm not getting it or he's totally off base. So, okay, go on.

### David Deutsch

<span class="transcript-timestamp">00:44:30 - 00:46:06</span>

Yes. So coming onto my theory, I think my take, it's not my theory, the equivalent of consilience, that is the unified meta theory, as you put it for all sciences, and I think actually more than the meta theory, because I think more links them than just the structure and methodology and so on, was discovered by Popper. He found, again, I don't know whether this is historically the order in which things happen, but he is famous for his political philosophy and for his philosophy of science. And he found at one point that they are the same, that they both are about problems and about the fact that there is no such thing as instruction from without. There is only conjecture from within. So that's why Lamarckism is false and Darwinism is true. And that's why group selection is false and individual selection is true and so on. So I think it's already there in Popper. I think there's a lot more to it, and I tried to add another couple of things to it, so quantum theory and computation. But there's a lot that isn't in it, like consciousness and creativity and so on, that we have no idea of how those work and how they fit in with those other things.

### Gad Saad

<span class="transcript-timestamp">00:46:06 - 00:46:27</span>

Although, so forgive me for interrupting you, David, I'm sorry. There is a book by Dean Simonton, who's a psychologist out of, I think, UC Davis, that actually offers a Darwinian account for creativity. It's actually quite mind-blowing. So keep that in mind. I can give you the reference later, but go ahead.

### David Deutsch

<span class="transcript-timestamp">00:46:27 - 00:47:34</span>

Yeah, I don't read such things unless they've already made an AGI. Okay, fair enough. If they can't make an AGI, then they haven't got the full theory. They might have an idea for a theory, but then lots of, you know, Popper has an idea for a theory, he couldn't make one either. And Turing. Turing thought that there'd be an AGI by the year 2000, and that it would require two megabytes of memory. Now, he's obviously wrong about the year 2000, but two megabytes of memory, I reckon that's what it'll be. In other words, these large language models and all this massive computer power is going in entirely the wrong direction. The answer will be a philosophical breakthrough, which will allow, once we understand what we're trying to make, it will be relatively easy to make it with relatively few computational resources. But okay, I've gone off a tangent, so I've forgotten what you actually asked.

### Gad Saad

<span class="transcript-timestamp">00:47:34 - 00:48:03</span>

No, no, but I was just trying to link E.O. Wilson's concept of consilience to your and many other physicists' desire for synthesis, for universality through different mechanisms. And in an epistemological sense, it's the same general project. You're heretofore taking things that appear to be fragmented and orphaned and separate and trying to find a way to link them.

### David Deutsch

<span class="transcript-timestamp">00:48:03 - 00:49:57</span>

Yes. Well, yes, I'm not sure that these connections between things were done by trying to find a way to link them. For example, quantum theory and computation, which I did, I wasn't looking for a way to unify them. The way to unify them emerged as a consequence of the work I did. The first work I did, which had a quantum computer in it, I didn't know that it was a quantum computer. I wasn't looking for a quantum computer, let alone a universal one. I needed it for an experiment to test the many universes theory in quantum theory. And when I say I needed it, I needed the theory of it. Actually doing the experiment is not really relevant. And then it was several years later that I began to think that there's a new mode of computation enabled by this machine that I had designed for a completely different purpose. So I don't know. And then Popper, he eventually called it evolutionary epistemology because of its relationship with the theory of evolution. But he didn't call it that when he first invented it. So these things, I always say all problems are parochial. Solutions can be universal when you are lucky. But usually they aren't.

### Gad Saad

<span class="transcript-timestamp">00:49:57 - 00:52:37</span>

Usually they're parochial too. Well, universal Darwinism, which is a term that I'm sure you're familiar with. What excites me about that term is that, well, first, so you write that there are elements that are bottom up. In your case, it was organic that you saw the link between the quantum work you were doing and then the application and quantum computing. But there is, I think also a top down mechanism whereby some thinkers and scientists are inherently or they score higher on the quest for synthetic thinking. So the way my brain works, so my doctoral dissertation was in psychology of decision making. I was looking at the specific problem I was studying, David, was when is it that people have collected enough information to stop and make a decision? So it's a search problem, but it's a stopping decision. I don't search all of the available search space, but rather there's a cognitive mechanism where I say, I've seen enough, I'm ready to marry her. I'm ready to buy this car. I'm ready to believe this theory. So it's an iterative sequential sampling mechanism. What excited me about that process, which I could then apply in marketing or political behavior or mate choice is precisely that, that it could cause me or allow me to traverse into, I don't want to say an infinite number, but a boundless number of intellectual ecosystems. The same itch was able to be scratched when I became an evolutionist, which is I could now apply evolutionary thinking to study certain psychiatric disorders or study gift-giving behavior that are very, very different. And the capacity to have this key that allows me to unlock all sorts of problems is what allowed me in my view to have an exciting career that can then permit me to have, I hope, an intelligent conversation with David Deutsch, but tomorrow I could speak with, and that polymath ability is very important to me, but it's exactly what is not rewarded in academia where you have to be a hyper specialist. So maybe that's the next segue of our conversation. What are your thoughts about this perennial battle between what our graduate students are expected to be, which is hyper specialist versus the truly big thinkers, the John von Neumanns are defined by the fact that they can make contributions across a bewildering number of fields.

### David Deutsch

<span class="transcript-timestamp">00:52:39 - 00:53:30</span>

Yeah. So I'm not sure which aspect of the appalling mess that is the academic world at the moment where I should start. Maybe you won't agree with my starting point. I think that universities should not regard themselves primarily as teaching institutions. I think what's needed in the world, what's needed for human progress in the large scale is creative problem solving, research. And it's very beneficial for research to gather the researchers into one place. And that could be university. It could be like the Princeton Institute.

### Gad Saad

<span class="transcript-timestamp">00:53:30 - 00:53:34</span>

I was going to say that's the Princeton Institute. Yeah.

### David Deutsch

<span class="transcript-timestamp">00:53:34 - 00:56:45</span>

It's also the Oxford and Cambridge model where you go into lunch in the university cafeteria and you're sitting opposite somebody who is an authority on something that's unrelated, apparently unrelated. And you have a conversation with somebody who is very knowledgeable about something not in your field. So that is the, I think the primary function of academic institutions, but that cannot survive unless there is also scholarship. That is, if there is a built up tradition of people who learn the stuff and who are experts on it so that when the researcher finds something that they want to understand, they will go like ideally, they will go and find in the university or nowadays on the internet, of course, but it's the same idea. Somebody who has spent their life knowing about this stuff and knowing that, for example, what most people think is true of this field is not true and so on. And so then that's the second thing you need. The third thing you need, if you're still with me, is that in order to have researchers and scholars, you need to have a tradition where young people are inducted into this system of scholarship and research. And they have to be, I hesitate to use the word taught because it's really joining a culture rather than learning facts or techniques. They need contact with the existing culture so that they can become scholars and researchers themselves. I mean, it could be both, of course. And then finally, once you've got a system that is thriving and has all those things, lots of people who don't want to be researchers or scholars want to participate because it's brilliant, it's mind expanding, it's fun. It's fun to be part of this. They could be the thing that pays for most of it. They could be the same thing, the thing that causes the government to pay for it or commercial ventures could send their people to have their mind expanded and so on. But at the moment, it's the tail wagging the dog. We've got students starting with undergraduates who are not interested in their subject. Having someone around who is not interested in the subject is poison. It means you can't have a proper conversation. So as I said, I could mention a dozen things, but I think that's the basic one that's gone wrong.

### Gad Saad

<span class="transcript-timestamp">00:56:45 - 01:00:20</span>

Yeah. You know, I, so this is my 31st year as a professor. And while I, you know, I do enjoy, I love to get up on day one in front of a class and see the students faces being blown away because I'm explaining some evolutionary principle that they had never even heard of before. But to your point, you know, life is about navigating opportunity costs. And as I've progressed in my career, and I hesitate to say this because it sounds as though, you know, I don't want to teach and so on, but I would much rather spend all my time immersed in my creative impulse, whether it be working on another paper or even creating this content, this conversation that we're having. If many, many people end up listening to it, which I hope they will, that is a form of teaching that is not bound up with me having to explain to Timmy during office hours why he received the B- on his participation grade. Not because I'm elitist and he's beneath me, but because we have limited time. And if I could spend my time now, I think there are some universities that navigate this better than others. So for instance, by setting up that Institute exactly for that purpose, realize that, but many universities don't find the right balance. So for example, at my university, I could win five Nobel prizes and they're never going to reduce my teaching load, which to me seems suboptimal because if my brain was so valuable, I understand that you want to teach the next generation, but wouldn't you want to use my brain to create new stuff? So I hear you. Which leads me to the next question. At one point you mentioned, oh, it'd be great for people to discover things that were counterintuitive. I can't remember the exact words you said. There is a paper, David, written by a sociologist in 1971, titled That's Interesting Exclamation Point. Have you heard of this paper? Have you ever seen it? Well, I will, you know what? I'm going to send you the link to it because it's at least the first paper that I ever was aware of. I think he published it in 1971. His name is Davis, where he basically argued that maybe to the point that you were making earlier about Popper, the most fundamental thing that a scientist has to do is work on interesting problems. Oftentimes we're very good methodologists. I designed the experiment to be beautiful and I executed beautifully. The experiment has internal and external validity. Everything's checked off. The literature review is great, but the end bottom line of my study is complete nonsense. It's useless. You do a huge study that demonstrates that customers who are happy with your service are more likely to return to that place. It looked like it was very scientific. There was all sorts of fancy mathematical modeling, but who wouldn't have thought that? Do you think that there is a way for us to better inculcate that fundamental pursuit? Find interesting problems worthy of your time. Life is short.

### David Deutsch

<span class="transcript-timestamp">01:00:20 - 01:03:11</span>

Well, the basic way to do it, the basic thing that's in the way of that at the moment is not so much the structure of universities. The basic thing is compulsion or lack of freedom. In the picture of a university that I painted just now, everybody is there voluntarily. Well, maybe somebody was sent there by their company because they want the prestige of having their or something, but basically everybody is there because they want to be. I didn't mention exams. People get out of it what they want to get out of it and every participant is getting something else out of it. The way that it gels together to form a living institution is that everybody is enjoying participating and therefore a certain amount of creativity takes place. You can't predict in advance where it will be. It might be that the most creative person actually does little or, you know, invents something when they're 22 and then never invents anything again. That can happen. And by the way, Popper uses that example to show that there can't be such a thing as a scientific method because if there was a scientific method, then people who made a great discovery when they were young would keep making them by applying the same method. Sometimes that happens, but more often it does not happen. So there is no scientific method. I recommend the lectures that he gave at the LSE when he was a professor of the philosophy of science. He starts off at the beginning saying something like, I can't reproduce it, something like you're all here under false pretenses because there is no such thing as scientific method. And I, who am the one and only professor of scientific method in the British Empire, this was a long time ago, am telling you that. And then he explains, you know, and the, you know, professors complain that undergraduates ask whether something's going to be on the exam. Well, that's not the undergraduate's fault. That's the university's fault. That's the university trying to channel people into things they're not enjoying. So if you're enjoying something, you never ask whether that's going to be on the exam. You don't even ask if there is going to be an exam. Like neither of us is asking that in this conversation.

### Gad Saad

<span class="transcript-timestamp">01:03:11 - 01:04:50</span>

Yeah. It's funny you say this because that's probably one of my things that triggers my ire the most when a student comes to see me at the end of class. And I'm excited because I'm hoping that they're going to ask something interesting and say, Oh, what you just mentioned about the evolutionary root, blah, blah, blah. Is that going to be on Wednesday's exam? And I get so pissed off because it's exactly the tension between intrinsic motivation and extrinsic. I'd love for all of you to be there for intrinsic reasons. There's one thing that's really annoying me. I'm looking at my thing and it says you only have 2.5 gigabytes of storage left on your computer. And I'm worried about that because I don't know if I run out of storage, whether the computer will shut down or not, because I'm not, I wasn't planning on finishing this conversation. So what I would like to do is at least end it now in a very anticlimactic way, but I have it right here. You only have 2.5 gigabytes. And then maybe we can set up a, because I was still hoping to discuss Israel. I was hoping to discuss the increase of global Jew hatred. We were going to maybe talk about some of the parasitic mind stuff. So there's a lot for us to continue. Can we shelve that for round two at whatever time is appropriate for you? Certainly. So thank you so much. What a mind blowing conversation. I can't wait to post it. I just want to make sure that this is stored and that my computer doesn't die. Thank you so much. Stay on the line, David, so we could say goodbye officially offline and round two coming up soon. Thank you so much, David.
