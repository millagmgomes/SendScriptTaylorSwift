async function enviarScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
        textarea = main.querySelector(`div[contenteditable="true"]`)

    if (!textarea) throw new Error("Não há uma conversa aberta")

    for (const line of lines) {
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);

        if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`
Mine
Taylor Swift
Ah, ah, ah, ah
Ah, ah, ah, ah

You were in college, working part-time, waiting tables
Left a small town, never looked back
I was a flight risk with a fear of falling
Wondering why we bother with love if it never lasts

I say: Can you believe it?
As we're lying on the couch
The moment I could see it
Yes, yes, I can see it now

Do you remember, we were sitting there by the water?
You put your arm around me for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine

Flash forward and we're taking on the world together
And there's a drawer of my things at your place
You learn my secrets and you figure out why I'm guarded
You say we'll never make my parents' mistakes

But we got bills to pay
We got nothing figured out
When it was hard to take
Yes, yes, this is what I thought about

Do you remember, we were sitting there by the water?
You put your arm around me for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine

Do you remember, all the city lights on the water?
You saw me start to believe for the first time
You made a rebel of a careless man's careful daughter
You are the best thing that's ever been mine

Oh, oh, oh, oh
And I remember that fight, 2:30AM
As everything was slipping right out of our hands
And I ran out crying
And you followed me out into the street

Braced myself for the goodbye
'Cause that's all I've ever known
Then you took me by surprise
You said: I'll never leave you alone

You said: I remember how we felt sitting by the water
And every time I look at you is like the first time
I fell in love with a careless man's careful daughter
She is the best thing that's ever been mine

(Hold on, make it last)
(Hold on, never turn back)
You made a rebel of a careless man's careful daughter (hold on)
You are the best thing that's ever been mine (hold on, hold on)

Do you believe it? (Hold on)
We're gonna make it now (hold on, yeah)
And I can see it (hold on)
(Yeah, yeah, I can see it now, see it now)

-

Sparks Fly
Taylor Swift
The way you move is like a full-on rainstorm
And I'm a house of cards
You're the kind of reckless that should send me running, but I
Kinda know that I won't get far

And you stood there in front of me, just
Close enough to touch
Close enough to hope you couldn't see what I was thinking of

Drop everything now, meet me in the pouring rain
Kiss me on the sidewalk, take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile

My mind forgets to remind me you're a bad idea
You touch me once and it's really something
You find I'm even better than you imagined I would be
I'm on my guard for the rest of the world, but with you
I know it's no good
And I could wait patiently, but I really wish you would

Drop everything now, meet me in the pouring rain
Kiss me on the sidewalk, take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile

I'll run my fingers through your hair and watch the lights go wild
Just keep on keeping your eyes on me
It's just wrong enough to make it feel right
And lead me up the staircase, won't you whisper soft and slow?
I'm captivated by you, baby, like a fireworks show

Drop everything now, meet me in the pouring rain
Kiss me on the sidewalk, take away the pain
'Cause I see sparks fly whenever you smile
Get me with those green eyes, baby, as the lights go down
Give me something that'll haunt me when you're not around
'Cause I see sparks fly whenever you smile

And the sparks fly
Oh, baby, smile
And the sparks fly

-

Back To December
Taylor Swift


I'm so glad you made time to see me
How's life, tell me, how's your family?
I haven't seen them in a while
You've been good, busier than ever
We small talk, work and the weather
Your guard is up and I know why

Because the last time you saw me
Is still burned in the back of your mind
You gave me roses and I left them there to die

So this is me swallowing my pride
Standing in front of you, saying I'm sorry for that night
And I go back to December all the time
It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around
And make it all right
I go back to December all the time

These days I haven't been sleeping
Staying up playing back myself leaving
When your birthday passed and I didn't call
Then I think about summer, all the beautiful times
I watched you laughing from the passenger side
And realized I loved you in the fall

And then the cold came with the dark days
When the fear crept into my mind
You gave me all your love and all I gave you was goodbye

So this is me swallowing my pride
Standing in front of you, saying I'm sorry for that night
And I go back to December all the time
It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around
And change my own mind
I go back to December all the time

I miss your tan skin, your sweet smile
So good to me, so right
And how you held me in your arms that September night
The first time you ever saw me cry
Maybe this is wishful thinking
Probably mindless dreaming
But if we loved again, I swear I'd love you right
I'd go back in time and change it, but I can't
So if the chain is on your door, I understand

But this is me swallowing my pride
Standing in front of you, saying I'm sorry for that night
And I go back to December
It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around
And make it all right
I'd go back to December, turn around
And change my own mind
I go back to December all the time

All the time

-

Speak Now
Taylor Swift
I am not the kind of girl
Who should be rudely barging in on a white veil occasion
But you are not the kind of boy
Who should be marrying the wrong girl

I sneak in and see your friends
And her snotty little family all dressed in pastel
And she is yelling at a bridesmaid
Somewhere back inside a room
Wearing a gown shaped like a pastry

This is surely not what you thought it would be
I lose myself in a daydream where I stand and say

Don't say yes, run away now
I'll meet you when you're out
Of the church at the back door
Don't wait or say a single vow
You need to hear me out
And they said: Speak now

Fond gestures are exchanged
And the organ starts to play a song
That sounds like a death march
And I am hiding in the curtains
It seems that I was uninvited
By your lovely bride-to-be

She floats down the aisle
Like a pageant queen
But I know you wish it was me
You wish it was me
Don't you?

Don't say yes, run away now
I'll meet you when you're out
Of the church at the back door
Don't wait or say a single vow
You need to hear me out
And they said: Speak now

Don't say yes, run away now
I'll meet you when you're out
Of the church at the back door
Don't wait or say a single vow (or say a single vow)
Your time is runnin' out
And they said: Speak now

I hear the preacher say
Speak now or forever hold your peace
There's a silence, there's my last chance
I stand up with shaky hands
All eyes on me
Horrified looks from everyone in the room
But I'm only looking at you

I am not the kind of girl
Who should be rudely barging in on a white veil occasion
But you are not the kind of boy
Who should be marrying the wrong girl

So don't say yes, run away now
I'll meet you when you're out
Of the church at the back door
Don't wait or say a single vow
You need to hear me out
They said: Speak now

And you say: Let's run away now
I'll meet you when I'm out
Of my tux at the back door
Baby, I didn't say my vow (didn't say my vow)
So glad you were around
When they said: Speak now

-

Dear John
Taylor Swift
Long were the nights
When my days once revolved around you
Counting my footsteps
Praying the floor won't fall through again
And my mother accused me of losing my mind
But I swore I was fine

You paint me a blue sky
And go back and turn it to rain
And I lived in your chess game
But you changed the rules every day
Wondering which version of you
I might get on the phone tonight
Well, I stopped picking up
And this song is to let you know why

Dear John
I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home
I should've known

Well, maybe it's me
And my blind optimism to blame
Or maybe it's you and your sick need
To give love and take it away
And you'll add my name
To your long list of traitors who don't understand
And I'll look back in regret
How I ignored when they said: Run as fast as you can

Dear John
I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home

Dear John
I see it all now, it was wrong
Don't you think nineteen's too young to be played
By your dark twisted games when I loved you so?
I should've known

You are an expert at sorry and keeping lines blurry
Never impressed by me acing your tests
All the girls that you've run dry have tired, lifeless eyes
'Cause you burned them out
But I took your matches before fire could catch me
So don't look now
I'm shining like fireworks over your sad, empty town, ooh

Dear John
I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress cried the whole way home

I see it all now that you're gone
Don't you think I was too young to be messed with?
The girl in the dress wrote you a song
You should've known

You should've known
Don't you think I was too young?
You should've known

-

Mean
Taylor Swift
You, with your words like knives
And swords and weapons that you use against me
You, have knocked me off my feet again
Got me feeling like I'm nothing
You, with your voice like nails
On a chalkboard, calling me out when I'm wounded
You, picking on the weaker man

Well, you can take me down
With just one single blow
But you don't know what you don't know

Someday I'll be living in a big old city
And all you're ever gonna be is mean
Someday I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?

You, with your switching sides
And your wildfire lies and your humiliation
You, have pointed out my flaws again
As if I don't already see them
I walk with my head down
Trying to block you out 'cause I'll never impress you
I just want to feel okay again

I bet you got pushed around
Somebody made you cold
But the cycle ends right now
'Cause you can't lead me down that road
You don't know what you don't know

Someday I'll be living in a big old city
And all you're ever gonna be is mean
Someday I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?

And I can see you years from now in a bar
Talking over a football game
With that same big loud opinion but
Nobody's listening
Washed up and ranting about the same old bitter things
Drunk and grumbling on about how I can't sing

But all you are is mean
All you are is mean
And a liar, and pathetic, and alone in life
And mean, and mean, and mean, and mean

But someday I'll be living in a big old city
And all you're ever gonna be is mean, yeah
Someday I'll be big enough so you can't hit me
And all you're ever gonna be is mean
(Why you gotta be so mean?)

Someday I'll be living in a big old city
(Why you gotta be so mean?)
And all you're ever gonna be is mean
(Why you gotta be so mean?)
Someday I'll be big enough so you can't hit me
(Why you gotta be so mean?)
And all you're ever gonna be is mean
Why you gotta be so mean?

-

The Story Of Us
Taylor Swift
I used to think one day we'd tell the story of us
How we met and the sparks flew instantly
And people would say: They're the lucky ones
I used to know my place was the spot next to you
Now I'm searching the room for an empty seat
'Cause lately I don't even know what page you're on

Oh, a simple complication
Miscommunications lead to fallout
So many things that I wish you knew
So many walls up I can't break through

Now I'm standing alone in a crowded room and we're not speaking
And I'm dying to know: Is it killing you like it's killing me, yeah?
I don't know what to say since the twist of fate when it all broke down
And the story of us looks a lot like a tragedy now

Next chapter

How'd we end up this way?
See me nervously pulling at my clothes and trying to look busy
And you're doing your best to avoid me
I'm starting to think one day I'll tell the story of us
How I was losing my mind when I saw you here
But you held your pride like you should've held me

Oh, I'm scared to see the ending
Why are we pretending this is nothing?
I'd tell you I miss you, but I don't know how
I've never heard silence quite this loud

Now I'm standing alone in a crowded room and we're not speaking
And I'm dying to know: Is it killing you like it's killing me, yeah?
I don't know what to say since the twist of fate when it all broke down
And the story of us looks a lot like a tragedy now

This is looking like a contest
Of who can act like they care less
But I liked it better when you were on my side
The battle's in your hands now
But I would lay my armor down
If you said you'd rather love than fight

So many things that you wish I knew
But the story of us might be ending soon

Now I'm standing alone in a crowded room and we're not speaking
And I'm dying to know: Is it killing you like it's killing me, yeah?
And I don't know what to say since the twist of fate when it all broke down
And the story of us looks a lot like a tragedy now, now, now

And we're not speaking
And I'm dying to know: Is it killing you like it's killing me, yeah?
I don't know what to say since the twist of fate 'cause we're goin' down
And the story of us looks a lot like a tragedy now

The end

-

Never Grow Up
Taylor Swift
Your little hand's wrapped around my finger
And it's so quiet in the world tonight
Your little eyelids flutter 'cause you're dreaming
So I tuck you in
Turn on your favorite night light

To you everything's funny
You got nothing to regret
I'd give all I have, honey
If you could stay like that

Oh, darling, don't you ever grow up
Don't you ever grow up
Just stay this little
Oh, darling, don't you ever grow up
Don't you ever grow up
It could stay this simple

I won't let nobody hurt you
Won't let no one break your heart
And no one will desert you
Just try to never grow up
Never grow up

You're in the car on the way to the movies
And you're mortified your mom's dropping you off
At fourteen, there's just so much you can't do
And you can't wait to move out
Someday and call your own shots

But don't make her drop you off around the block
Remember that she's getting older too
And don't lose the way that you dance around in your pj's
Getting ready for school

Oh, darling, don't you ever grow up
Don't you ever grow up
Just stay this little
Oh, darling, don't you ever grow up
Don't you ever grow up
It could stay this simple

No one's ever burned you
Nothing's ever left you scarred
And even though you want to
Just try to never grow up

Take pictures in your mind of your childhood room
Memorize what it sounded like when your dad gets home
Remember the footsteps, remember the words said
And all your little brother's favorite songs
I just realized everything I have is someday gonna be gone

So here I am in my new apartment
In a big city, they just dropped me off
It's so much colder than I thought it would be
So I tuck myself in and turn my night light on

Wish I'd never grown up
I wish I'd never grown up

Oh, I don't wanna grow up
Wish I'd never grown up
I could still be little
Oh, I don't wanna grow up
Wish I'd never grown up
It could still be simple

Oh, darling, don't you ever grow up
Don't you ever grow up
Just stay this little
Oh, darling, don't you ever grow up
Don't you ever grow up
It could stay this simple

Won't let nobody hurt you
Won't let no one break your heart
And even though you want to
Please, try to never grow up

Oh, don't you ever grow up
Oh (never grow up)
Just never grow up

-

There I was again tonight
Forcing laughter, faking smiles
Same old tired, lonely place
Walls of insincerity
Shifting eyes and vacancy
Vanished when I saw your face

All I can say is it was
Enchanting to meet you

Your eyes whispered: Have we met?
'Cross the room your silhouette
Starts to make its way to me
The playful conversation starts
Counter all your quick remarks like
Passing notes in secrecy

And it was
Enchanting to meet you
All I can say is I was
Enchanted to meet you

This night is sparkling
Don't you let it go
I'm wonderstruck
Blushing all the way home
I'll spend forever
Wondering if you knew
I was enchanted to meet you

The lingering question kept me up
2 AM, who do you love?
I wonder till I'm wide awake
And now I'm pacing back and forth
Wishing you were at my door, I'd
Open up and you would say

Hey, it was enchanting to meet you
All I know is I was
Enchanted to meet you

This night is sparkling
Don't you let it go
I'm wonderstruck
Blushing all the way home
I'll spend forever
Wondering if you knew

This night is flawless
Don't you let it go
I'm wonderstruck
Dancing around all alone
I'll spend forever
Wondering if you knew
I was enchanted to meet you

This is me praying that

This was the very first page
Not where the storyline ends
My thoughts will echo your name
Until I see you again
These are the words I held back
As I was leaving too soon
I was enchanted to meet you

Please, don't be in love with someone else
Please, don't have somebody waiting on you
Please, don't be in love with someone else
Please, don't have somebody waiting on you (oh)

This night is sparkling
Don't you let it go
I'm wonderstruck
Blushing all the way home
I'll spend forever
Wondering if you knew

This night is flawless
Don't you let it go
I'm wonderstruck
Dancing around all alone
I'll spend forever
Wondering if you knew
I was enchanted to meet you

Please, don't be in love with someone else
Please, don't have somebody waiting on you

-

Now go stand in the corner and think about what you did

(Time for a little revenge!)

The story starts when it was hot and it was summer and
I had it all, I had him right there where I wanted him
She came along, got him alone and let's hear the applause
She took him faster than you could say sabotage
I never saw it coming, wouldn't have suspected it
I underestimated just who I was dealing with
She had to know the pain was beating on me like a drum
She underestimated just who she was stealing from

She's not a saint and she's not what you think
She's an actress, whoa
He was a moth to the flame
She was holding the matches, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge

She lives her life like it's a party and she's on the list
She looks at me like I'm a trend and she's so over it
I think her ever-present frown is a little troubling
And she thinks I'm psycho 'cause I like to rhyme her name with things
But sophistication isn't what you wear or who you know
Or pushing people down to get you where you wanna go
They didn't teach you that in prep school, so it's up to me
But no amount of vintage dresses gives you dignity

She's not a saint and she's not what you think
She's an actress, whoa
He was a moth to the flame
She was holding the matches, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge

I'm just another thing for you to roll your eyes at, honey
You might have him, but haven't you heard?
I'm just another thing for you to roll your eyes at, honey
You might have him but I always get the last word, whoa

(C'mon, can't take that? C'mon)

She's not a saint and she's not what you think (no)
She's an actress, whoa
He was a moth to the flame
She was holding the matches, whoa
Soon she's gonna find stealing other people's toys
On the playground won't make you many friends
She should keep in mind, she should keep in mind
There is nothing I do better than revenge

Do you still feel like you know what you're doing?
'Cause I don't think you do
Oh, do you still feel like you know what you're doing?
I don't think you do, I don't think you do (come on)
Let's hear the applause
Show me how much better you are (you're so much better, yeah?)
So you deserve some applause
'Cause you're so much better

She took him faster than you could say sabotage

-

Innocent
Taylor Swift
I guess you really did it this time
Left yourself in your war path
Lost your balance on a tightrope
Lost your mind trying to get it back

Wasn't it easier in your lunchbox days?
Always a bigger bed to crawl into
Wasn't it beautiful when you believed in everything
And everybody believed in you?

It's alright, just wait and see
Your string of lights are still bright to me
Oh, who you are is not what you've been
You're still an innocent
You're still an innocent

Did some things you can't speak of
But at night, you live it all again
You wouldn't be shattered on the floor now
If only you had seen what you know now then

Wasn't it easier in your firefly-catching days?
When everything out of reach, someone bigger brought down to you?
Wasn't it beautiful, runnin' wild till you fell asleep
Before the monsters caught up to you?

It's alright, just wait and see
Your string of lights are still bright to me
Oh, who you are is not what you've been
You're still an innocent

It's okay, life is a tough crowd
32 and still growing up now
Who you are is not what you did
You're still an innocent

Time turns flames to embers
You'll have new Septembers
Every one of us has messed up too, ooh
Minds change like the weather
I hope you remember
Today is never too late to be brand new, ooh

It's alright, just wait and see
Your string of lights are still bright to me
Oh, who you are is not what you've been
You're still an innocent

It's okay, life is a tough crowd
32 and still growing up now
Who you are is not what you did
You're still an innocent
You're still an innocent

Lost your balance on a tightrope, oh
It's never too late to get it back

-

Haunted
Taylor Swift
You and I walk a fragile line
I have known it all this time
But I never thought I'd live to see it break
It's getting dark and it's all so quiet
And I can't trust anything now
And it's coming over you like it's all a big mistake

Oh, holding my breath
Won't lose you again
Something's made your eyes go cold

Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted

Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted

Stood there and watched you walk away
From everything we had
But I still mean every word I said to you
He will try to take away my pain
And he just might make me smile
But the whole time I'm wishing he was you instead

Oh, holding my breath
Won't see you again
Something keeps me holding onto nothing

Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
You're all I wanted

Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
Can't turn back now, I'm haunted

I know, I know
I just know
You're not gone
You can't be gone, no

Come on, come on, don't leave me like this
I thought I had you figured out
Something's gone terribly wrong
Won't finish what you started

Come on, come on, don't leave me like this
I thought I had you figured out
Can't breathe whenever you're gone
I can't go back, I'm haunted

You and I walk a fragile line
I have known it all this time
Never ever thought I'd see it break
Never thought I'd see it

-

Last Kiss
Taylor Swift
I still remember the look on your face
Lit through the darkness at 1:58
The words that you whispered for just us to know
You told me you loved me, so why did you go away?
Away

I do recall now, the smell of the rain
Fresh on the pavement, I ran off the plane
That July 9th, the beat of your heart
It jumps through your shirt, I can still feel your arms

But now I'll go
Sit on the floor wearing your clothes
All that I know is I don't know
How to be something you miss

I never thought we'd have a last kiss
I never imagined we'd end like this
Your name, forever the name on my lips

I do remember the swing in your step
The life of the party, you're showing off again
And I'd roll my eyes and then you'd pull me in
I'm not much for dancing, but for you I did

Because I love your handshake, meeting my father
I love how you walk with your hands in your pockets
How you'd kiss me when I was in the middle of saying something
There's not a day I don't miss those rude interruptions

And I'll go
Sit on the floor wearing your clothes
All that I know is I don't know
How to be something you miss

I never thought we'd have a last kiss
I never imagined we'd end like this
Your name, forever the name on my lips

So I'll watch your life in pictures like I used to watch you sleep
And I feel you forget me like I used to feel you breathe
And I keep up with our old friends just to ask them how you are
Hope it's nice where you are

And I hope the Sun shines and it's a beautiful day
And something reminds you you wish you had stayed
You can plan for a change in the weather and time
But I never planned on you changing your mind

So I'll go
Sit on the floor wearing your clothes
All that I know is I don't know
How to be something you miss

I never thought we'd have a last kiss
I never imagined we'd end like this
Your name, forever the name on my lips

Just like our last kiss
Forever the name on my lips
Forever the name on my lips
Just like our last

-

Long Live (feat. Paula Fernandes)
Taylor Swift
Lembrei desse sentimento
Gritando dentro de nós
Éramos todos meninos e em cada um vivia uma paixão
Como na cena de um filme
Vencemos pesadelos enfrentando os dragões
Criados por nossos medos
Fruto da imaginação

De frente a uma nova era
Na onda de uma canção
Nós construímos a história, mente, alma e coração

Long live the walls we crashed through
How the kingdom lights shined just for me and you
I was screaming: Long live all the magic we made
And bring on all the pretenders
One day, we will be remembered

I said: Remember this feeling
I passed the pictures around
Of all the years that we stood there on the sidelines
Wishing for right now
We are the kings and the queens
You traded your baseball cap for a crown
When they gave us our trophies
And we held them up for our town

De frente a uma nova era
Na onda de uma canção
Nós construímos a história, mente, alma e coração

Long live the walls we crashed through
How the kingdom lights shined just for me and you
I was screaming: Long live all the magic we made
And bring on all the pretenders
I'm not afraid

Long live all the mountains we moved
I had the time of my life fighting dragons with you
I was screaming: Long live the look on your face
And bring on all the pretenders
One day, we will be remembered

Hold on to spinning around
Confetti falls to the ground
May these memories break our fall

Lembrei do momento
Que fiz promessa pra nós dois
Pintando o nosso destino
Puro e simples, pleno, sem fim
Que fosse assim, sem um goodbye
Fosse pra sempre um: Cheguei
O sonho que construímos
Me vi feliz, eu te achei

Será muito mais que achar
Será muito além que pensar

Long live the walls we crashed through
I had the time of my life
With you

Long, long live the walls we crashed through
How the kingdom lights shined just for me and you
I was screaming: Long live all the magic we made
And bring on all the pretenders
I'm not afraid

Singing: Long live all the mountains we moved
I had the time of my life fighting dragons with you
And long, long live the look on your face
And bring on all the pretenders
One day, we will be remembered
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)