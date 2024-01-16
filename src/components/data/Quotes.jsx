const quotes = [
    {
      text: "Things are as they are. Looking out into it the universe at night, we make no comparisons between right and wrong stars, nor between well and badly arranged constellations.",
      author: "Alan Watts"
    },
    {
      text: "And, behold, I come quickly; and my reward is with Me, to give every man according as his work shall be. I am Alpha and Omega, the beginning and the end, the first and the last.",
      author: "Jesus Christ"
    },
    {
      text: "A room without books is like a body without a soul.",
      author: "Marcus Tullius"
    },
    {
      text:"Never in any case say I have lost such a thing, but I have returned it. Is your child dead? It is a return. Is your wife dead? It is a return. Are you deprived of your estate? Is not this also a return?",
      author:"Epictetus"
    },
    {
      text:"If you can't explain it simply, you don't understand it well enough.",
      author:"Albert Einstein"
    },
    {
      text:"Progress is impossible without change, and those who cannot change their minds cannot change anything.",
      author:"George Bernard"
    },
    {
      text:"The journey is never ending. There's always gonna be growth, improvement, adversity; you just gotta take it all in and do what's right, continue to grow, continue to live in the moment. ",
      author:"Antonio Brown"
    },
    {
      text:"Perseverance is the hard work you do after you get tired of doing the hard work you already did.",
      author:"Newt Gingrich"
    },
    {
      text:"Pretend inferiority and encourage his arrogance.",
      author:"Sun Tzu"
    },
    {
      text:"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
      author:"Lao Tzu"
    },
    {
      text:"By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
      author:"Confucius"
    },
    {
      text:"Truth is like the sun. You can shut it out for a time, but it ain't goin' away.",
      author:"Elvis Presley"
    },
    {
      text: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde"
    },
    {
      text: "That it will never come again is what makes life so sweet.",
      author: "Emily Dickinson"
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot"
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Pain is inevitable. Suffering is optional.",
      author: "Haruki Murakami"
    },
    {
      text: "All the world's a stage, and all the men and women merely players.",
      author: "William Shakespeare"
    },
    {
      text: "Be kind, for everyone you meet is fighting a hard battle.",
      author: "Plato"
    },
    {
      text: "Unable are the loved to die for love is immortality.",
      author: "Emily Dickinson"
    },
    {
      text: "Let me live, love, and say it well in good sentences.",
      author: "Sylvia Plath"
    },
    {
      text: "Don't let your happiness depend on something you may lose.",
      author: "C.S. Lewis"
    },
    {
      text: "We are all broken, that's how the light gets in.",
      author: "Ernest Hemingway"
    },
    {
      text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
      author: "Voltaire"
    },
    {
      text: "Life is tough my darling, but so are you.",
      author: "Stephanie Bennett Henry"
    },
    {
      text: "Self-awareness and self-love matter. Who we are is how we lead.",
      author: "Brene Brown"
    },
    {
      text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
      author: "Stephen King"
    },
    {
      text: "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
      author: "Bill Watterson"
    },
    {
      text: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
      author: "Stephen Chbosky"
    },
    {
      text: "And now that you don't have to be perfect, you can be good.",
      author: "John Steinbeck"
    },
    {
      text: "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.",
      author: "Ilona Andrews"
    },
    {
      text: "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
      author: "Holly Black"
    },
    {
      text: "It is impossible to live without failing at something unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
      author: "J.K. Rowling"
    },
    {
      text: "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
      author: "Charles Darwin"
    },
    {
      text: "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
      author: "Ray Bradbury"
    },
    {
      text: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
      author: "Maya Angelou"
    },
    {
      text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
      author: "Oscar Wilde"
    },
    {
      text: "Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too",
      author: "Anna White"
    },
    {
      text: "I've had the sort of day that would make St. Francis of Assisi kick babies.",
      author: "Douglas Adams"
    },
    {
      text: "Don't cry because it's over. Smile because it happened.",
      author: "Dr. Seuss"
    },
    {
      text: "Everything is hard before it is easy.",
      author: "Johann Wolfgang von Goethe"
    },
    {
      text: "Anyone who has never made a mistake has never tried anything new.",
      author: "Albert Einstein"
    },
    {
      text: "These worst mornings with cold floors and hot windows and merciless light — the soul's certainty that the day will have to be not traversed but sort of climbed, vertically, and then that going to sleep again at the end of it will be like falling, again, off something tall and sheer.",
      author: "David Foster Wallace"
    },
    {
      text: "Don't let your happiness depend on something you may lose.",
      author: "C.S. Lewis"
    },
    {
      text: "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
      author: "Chuck Palahniuk"
    },
    {
      text: "We are all broken, that's how the light gets in.",
      author: "Ernest Hemingway"
    },
    {
      text: "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
      author: "Stephen King"
    },
    {
      text: "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day.",
      author: "Brad Meltzer"
    },
    {
      text: "It hurt because it mattered.",
      author: "John Green"
    },
    {
      text: "Some of us think holding on makes us strong; but sometimes it is letting go.",
      author: "Herman Hesse"
    },
    {
      text: "I want to taste and glory in each day, and never be afraid to experience pain.",
      author: "Sylvia Plath"
    },
    {
      text: "Life's not fair; why should I be?",
      author: "Margaret Atwood"
    },
    {
      text: "Never look back unless you are planning to go that way.",
      author: "​Henry David Thoreau"
    },
    {
      text: "Sooner or later even the fastest runners have to stand and fight.",
      author: "​Stephen King"
    },
    {
      text: "We rise by lifting others.",
      author: "​Robert Ingersoll"
    },
    {
      text: "I can be changed by what happens to me. But I refuse to be reduced by it.",
      author: "​Maya Angelou"
    },
    {
      text: "Things usually work out in the end. What if they don't? That just means you haven't come to the end yet.",
      author: "​Jeanette Walls"
    },
    {
      text: "Life is a journey, not a destination.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.",
      author: "Audre Lorde"
    },
    {
      text: "All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost.",
      author: "​J.R.R. Tolkien"
    },
    {
      text: "There are chords in the hearts of the most reckless which cannot be touched without emotion.",
      author: "​Edgar Allen Poe"
    },
    {
      text: "The clearest way into the universe is through a forest wilderness.",
      author: "​John Muir"
    },
    {
      text: "As you start to walk on the way, the way appears.",
      author: "​Rumi"
    },
    {
      text: "It takes a great deal of courage to see the world in all its tainted glory, and still love it.",
      author: "​Oscar Wilde"
    },
    {
      text: "To thine own self be true.",
      author: "​William Shakespeare"
    },
    {
      text: "Never think of pain or danger or enemies a moment longer than is necessary to fight them.",
      author: "​Ayn Rand"
    },
    {
      text: "Straight roads do not make skillful drivers.",
      author: "Paula Coelho"
    },
    {
      text: "And in the end, we were all just humans... drunk on the idea that love, only love, could heal our brokenness.",
      author: "​F. Scott Fitzgerald"
    },
    {
      text: "To avoid criticism: say nothing, do nothing, be nothing.",
      author: "​Aristotle"
    },
    {
      text: "Dwell in possibility.",
      author: "​Emily Dickinson"
    },
    {
      text: "Trust our heart if the seas catch fire, live by love though the stars walk backwards.",
      author: "​E.E. Cummings"
    },
    {
      text: "When you can't change the direction of the wind, adjust your sails.",
      author: "​H. Jackson Brown Jr."
    },
    {
      text: "Have faith, have faith. When you have nothing else have faith.",
      author: "​Francine Rivers"
    },
    {
      text: "Rock solid became the solid foundation on which I rebuilt my life.",
      author: "​J.K. Rowling"
    },
    {
      text: "Let yourself be gutted. Let it open you. Start there.",
      author: "​Cheryl Strayed"
    },
    {
      text: "Laugh loudly, laugh often, and most importantly, laugh at yourself.",
      author: "​Chelsea Handler"
    },
    {
      text: "Life is tough, my darling, but so are you.",
      author: "​Stephanie Bennett Henry"
    },
    {
      text: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
      author: "Mark Twain"
    }
  ]

  export default quotes;