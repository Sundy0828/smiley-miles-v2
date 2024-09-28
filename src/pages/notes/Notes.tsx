import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { useBanner } from "../../components/banner/BannerContext";
import { Headline, Text } from "../../components/types";
import styles from "./Notes.module.scss";

interface Quote {
  text: string;
  author: string;
}

interface Narrative {
  author: string;
  paragraphs: string[];
}

const Notes = () => {
  const { updateBanner } = useBanner();
  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `Interesting Notes`,
    date: new Date().toLocaleDateString(),
  });

  const quotes: Quote[] = [
    {
      text: "It is more blessed to give than to receive.",
      author: "ACTS 20:35",
    },
    {
      text: "We make a living by what we get, but we make a life by what we give.",
      author: "Winston Churchill",
    },
    {
      text: "Profit is what we have left after we make a donation to a worthwhile cause.",
      author: "Marilyn Vos Savant",
    },
    {
      text: "If you haven't any charity in your heart, you have the worst kind of heart trouble.",
      author: "Bob Hope",
    },
    {
      text: "One of the serious obstacles to the improvement of our race is indiscriminate charity.",
      author: "Andrew Carnegie",
    },
    {
      text: "It takes a noble man to plant a seed for a tree that will someday give shade to people he may never meet.",
      author: "David Trueblood",
    },
    {
      text: "I expect to pass through life but once. If, therefore, there can be any kindness I can show, or any good things I can do to any fellow human being, let me do it now and not defer it or neglect it, as I shall not pass this way again.",
      author: "William Penn",
    },
    {
      text: "Love cannot remain by itself, it has no meaning. Love has to be put into action, and that action is service. Whatever form we are, able or disabled, rich or poor, it is not how much we do, but how much love we put in the doing; a lifelong sharing of love with others.",
      author: "Mother Teresa",
    },
    {
      text: "Definition of TURKEY = charity vulture.",
      author: "Herb Cratty",
    },
  ];

  const narratives: Narrative[] = [
    {
      author: "Bev Weston",
      paragraphs: [
        "Last night I couldn't sleep. I knew I was tired but my mind wouldn't settle. I was facing yet another of many sleepless episodes since Dad's passing over two years ago. As I'd done so many times before, I got out of bed and reached for the collection of cards Dad had sent me over the years (birthday, Christmas, Valentine's, and Easter cards.) The occasions were varied but the message of love was always the same.",
        "Following my restless night I woke to a rainy day. Signs in our neighborhood announced the Adams Area Fire District 1st Annual 5K Run/Walk. Although I wanted to support the fire department, the sound of rain on my roof convinced me otherwise. I don't need to run to support the cause, I reasoned. If I want to help them out I can just send a donation.",
        "Walking into my dressing room I noticed Dad's exercise watch on my dresser. It had stopped working around the time of his death. Although its usefulness was gone, I just didn't have the heart to throw it away. It remained on my dresser as a silent reminder of the importance Dad placed on maintaining health and fitness. As I glanced at it this morning, I noticed something different. The watch was flashing on and off! This couldn't be happening! I had checked that watch countless times in the past, but each time I pushed the buttons, nothing had happened. As I watched it flash on-off, on-off, the decision was made. For Dad's sake, I had to run that race!",
        "The race organizers had well planned every detail. The route was clearly marked and fairly level. Emergency vehicles blocked traffic from our road to assure our safety. Along our way some folks held out cups of cold water while others with stopwatches called out our speed, and still others offered cheers of encouragement.",
        "While striving to run our personal best, we cheered each other along the way. I called out words of encouragement to several slender young men with long strides who quickly passed me, along with one female runner, Debbie. I have admired Debbie for years as I've watched her jog through her pregnancies and, following delivery, run behind a joggette cradling her newborns. As I approached the half way turn around, I passed Debby who was already on the return route. It felt so good to cheer her on and I was rewarded by her winning smile.",
        "Of the more than ninety folks who started the race, seventy of us completed the route. Each of us who crossed the finish line received hearty applause and cheers for doing our best and supporting such a worthy cause. I was honored to be awarded the first place medal for the 50 to 59 age female category and to come in second overall among the women runners. Admittedly, sixteen young men and Debbie crossed the finish line ahead of me, but in my heart this was my day of triumph, because I ran for Dad.",
      ],
    },
    {
      author: "Pittsburgh Tribune-Review",
      paragraphs: [
        "A year after Mexican presidential hopeful Roberto Madrazo flopped in elections and faded from view, his disqualification from a German marathon for cheating has thrust him back into the media spot-light. Madrazo, 55, who played up his marathon-runner image in his 2006 election campaign, was photographed beaming after he broke through the finish line first for his age group in the Berlin marathon, wearing a shiny fire engine-red tracksuit.",
        "But news this week that race authorities stripped him of his title after finding he skipped a 9-mile stretch and darted back just before the finish has gripped the nation.",
      ],
    },
    {
      author: "Philidelphia Half Marathon",
      paragraphs: [
        "This is a commentary on a story in the Jan/Feb. issue of Running Times (page 10). The story is about the Philadelphia half marathon last September in which the race officials took a elite woman Asmae Leghzaoui out of the starting line and told her that she was not allowed to run with the elites. Even though she has held world best in the 8,10, & 12k's, the reason was said to be that she did not preregister and that she registered that morning of the race.",
        'The race official confronted Asmae when she was warming up in the elite area, and asked her to leave, handing her the $40 entry fee in which she refused to take. After being escorted from the front row of the start, she managed to get back to the starting line in which she went out with the male leaders and passed 2 miles at 9:55, then stepped off the course shortly thereafter. "She kind of solved the problem for us," said the race official.',
        "This brings up some questions and comments. One of the things that makes up roadracing as the best sport is that there is and should be no politics. In other sports if the coach don't like you as much or you have the unfavorable luck of not being wealthy, you do not get to play. When we start getting into the situations where the race officials can tell who and who can't run our sport, our sport loses that great uniqueness to it. The race official said that it was not \"fair\" to the other elite competitors because they did not know that she was going to run. Ask yourself this, on your next roadrace, do you know of all your competitors that is going to be there? Of course not, that is an element to this sport of roadracing. The magazine said that my opinion is the minority and that mostly everyone was in favor of elite pre-registration. For some reason this sounds like a politician wrote that statement.",
      ],
    },
    {
      author: "The Squirrel Story",
      paragraphs: [
        "20 years ago in the 80's during the Youngstown Peace Race. I was running about 50 yards behind a runner who had passed a squirrel that was sitting along the side of the road. After he passed the squirrel, the squirrel looked at me and jumped onto the road and the squirrel proceeded to run in pursuit of the runner. The runner ahead of me kept looking back like he was hearing the footsteps of someone behind him who was obviously not there. This squirrel chased the runner ahead of me for a good quarter of a mile and then finally ran off the road and onto a log.",
        "When I passed the squirrel, I noticed he was breathing very hard and wasn't even wearing running shoes. Also, when I told the runner about the squirrel later at the finish line, he thought I was a little bit squirrelly.",
      ],
    },
  ];

  return (
    <div className={styles.notes}>
      <Headline level="1">Quotes</Headline>
      {quotes.map((quote) => (
        <Accordion key={quote.author} title={quote.author}>
          <Text>&quot;{quote.text}&quot;</Text>
        </Accordion>
      ))}

      <Headline level="1">Narratives</Headline>
      {narratives.map((narrative, index) => (
        <div key={`${narrative.author.toLowerCase().replace(/\s+/g, '-')}-${index}`}>
          <Accordion key={narrative.author} title={narrative.author}>
            {narrative.paragraphs.map((paragraph) => (
              <Text  key={`${index}`}>&quot;{paragraph}&quot;</Text>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Notes;
