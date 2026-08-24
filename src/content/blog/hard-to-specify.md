---
title: 'Hard to specify'
description: 'Why two explanation strings cannot determine a hard-to-vary ranking.'
pubDate: 2026-08-24
---

In [*The Beginning of Infinity*](https://books.google.com/books?id=zJZPEAAAQBAJ&pg=PA30), David Deutsch writes that a good explanation is "hard to vary while still accounting for what it purports to account for." Put roughly, if you change anything in an explanation that is hard to vary, it stops explaining what it was meant to explain. In other words, every part of your explanation is important and cannot be otherwise.

Dennis Hackethal [argues that this criterion is too vague to apply](https://blog.dennishackethal.com/posts/hard-to-vary-or-hardly-usable). On his website, Veritula, he offers a [\$3,600 bounty](https://veritula.com/bounties/8) for a program that can apply HTV. (I contributed \$300.) Among other things, the program must:

- accept "two strings representing arbitrary explanations in natural language (English)";
- return "a ranking indicating which explanation is better, worse, or equal";
- be rigorous, sufficiently specified, non-arbitrary, and fully testable.

This is not a bounty entry. But I think I can show why the two-input requirement cannot be met as written.

I read "two strings" literally. The strings are the only case-specific inputs. A fact read from a database, sensor, or anywhere else is another input, whether or not it appears in the function signature.

No function of those two strings can always provide such a ranking.

## Dennis opens a door

Here is an example. Suppose Dennis enters David Deutsch's birthday, `18-05-1953`, into a keypad beside a locked door. The door opens. Why? Keep that question and event fixed while comparing two explanations:

`A`: "The door opened because Dennis entered `18-05-1953`, the lock's only accepted code."

`B`: "The door opened because Dennis entered a valid date, and the lock accepts every valid date."

Preferring an explanation is not the same as judging it hard to vary. If criticism defeats one explanation but not the other, we prefer the survivor for that reason. HTV matters only *ceteris paribus*. Both explanations must still account for the same thing, and no other criticism must settle the choice.

This example does not yet rank `A` and `B` by HTV. It asks an earlier question: does the proposed variation still explain what it claims to explain?

On a strict Popperian view, we cannot certify an explanation, or a proposed change to one, as successful. A proposal starts out uncriticized. Criticism may defeat it; otherwise, it survives for now. Let `T` stand for a critical test and its result. Let `S(A -> B | T)` record whether `B`, treated as a proposed variation of `A`, survives it.

Grant for now that replacing `A`'s unique-code rule with `B`'s valid-date rule counts as varying the explanation. Assume the lock works as designed and that no other criticism favors either statement. Then enter `19-05-1953`, another valid date in the same format.

If the door stays shut, call the test and its result `T1`. `B` predicted that the door would open, so the proposed variation is defeated:

`S(A -> B | T1) = defeated`

If the door opens, call the test and its result `T2`. That refutes `A`'s only-code claim, while `B` survives this test:

`S(A -> B | T2) = survives`

These are not HTV rankings. They say only whether `B` remains a live explanation under each test. In `T2`, "survives" means only that this test did not defeat `B`. It does not show that `B` is correct or hard to vary.

The question, the first opening of the door, and the two statements are the same. The only difference is what happens when Dennis enters the second date:

`S(A -> B | T1) != S(A -> B | T2)`

An HTV ranker must first decide whether `B`, treated as a variation of `A`, still accounts for the event. Call the function making that decision `G`. With only the two permitted inputs, it would be `G(A, B)`.

To be correct in both cases, `G(A, B)` would have to return different statuses for the same inputs. It cannot. Once we supply the test and its result, we are no longer evaluating `G(A, B)` but `G(A, B, T)`. An HTV ranker needs that extra input because "still accounting for what it purports to account for" is part of Deutsch's criterion. A ranker of the required form, `F(A, B)`, lacks necessary information before the *ceteris paribus* comparison can begin.

## Variation

We can give the function the test and its result. That still leaves "variation" undefined.

Turning explanations into bit strings does not provide one. Take `x = 0101` and `y = 0100`. If "variation" means changing exactly one bit, `y` qualifies. Suppose instead that it means a one-place cyclic rotation: shift every bit left and move the first bit to the end. Then `x` becomes `1010`, not `y`. Both rules are exact. The strings cannot choose between them. The rule supplies the answer.

A textual change need not vary the explanation either. Compare:

`C`: "The door opened because Dennis entered the correct code."

`D`: "The door opened because Dennis entered the right code."

In this context, "correct" and "right" are synonyms. `C` and `D` are different strings, but they express the same explanation. Before a program can vary meanings, it needs a theory of what the strings mean.

## Explanatory success

Fixing variation is not enough. We also need a rule for deciding whether the changed explanation still explains what it claims to explain. Its scope may be disputed. So may the relevant facts, their interpretation, and what would count as explaining them. A proposed change may be uncriticized, defeated by a test, survive a test, or remain unresolved. Survival does not establish complete explanatory success.

## A toy score

Only if we set both variation and success in advance can we calculate a score. Let the candidates be four-bit strings. Define:

- a variation as flipping exactly one bit;
- success as containing no more than one `1`;
- hardness as `1 - (successful variations / 4)`.

Both `p = 0000` and `q = 0001` succeed. All four one-bit variations of `p` also succeed, so `H(p) = 0`. Only one variation of `q`, namely `0000`, succeeds, so `H(q) = 0.75`. The program ranks `q` as harder to vary.

The calculation is exact because we defined every term it uses. But `p` and `q` are not explanations. Here, "success" means membership in a set, not explanatory success. We have built a small formal game, not a test for arbitrary explanations. A formal model could represent part of an explanatory problem, but deciding that it does is itself a conjecture.

For actual explanations, we cannot avoid guesswork about which changes preserve meaning, which facts belong to the problem, and what counts as explanatory success. In Popper's sense, these guesses are conjectures open to criticism, not random choices. A program can apply them once we supply them. It cannot derive them from two strings. It automates the arithmetic, not the epistemology.

More inputs do not remove the problem. If either rule remains open, the program remains underspecified. If we supply both rules, it returns a score relative to our conjectures. It does not derive a general HTV ranking for arbitrary English explanations.

Two explanatory statements do not determine their own HTV ranking. A formal score is possible, but only relative to definitions and judgments added to the statements. The bounty asks two strings to supply those. They cannot.
