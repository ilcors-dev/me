import Navbar from "@/components/navbar";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My journey to a MAANG",
  description:
    "The path that led me into a MAANG. From the beginning until the first achievement.",
};

export default function Page() {
  return (
    <main className="container mx-auto p-4 sm:p-10 lg:p-6">
      <Navbar />
      <article className="mt-10">
        <header className="mb-8">
          <h1 className="mb-3 text-center text-2xl font-bold sm:text-start sm:text-4xl">
            My journey to a MAANG
          </h1>
          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 sm:justify-start">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <time dateTime="2024-11-03">November 4, 2024</time>
          </div>
        </header>

        <div className="prose max-w-none dark:prose-invert">
          <p>
            After years of studying and working, I almost lost track of what I
            wanted to achieve: working at a MAANG. Today I can finally say that
            what seemed like a dream 5 years ago, it&apos;s starting to take
            form.
          </p>

          <h2>The beginning</h2>
          <p>
            The first memory I have of using a PC dates back to around 2006. I
            was a boy in my bedroom, playing Solitaire and Pinball on a really
            old, scrappy computer running Windows XP. I wonder where that PC is
            now.
          </p>

          <p>
            A few years later, around the age of 12, I discovered Minecraft and
            was really hyped about it. My brother handed me an old, somewhat
            broken PC running Windows 7. I didn&apos;t want to pay for it (and
            honestly didn&apos;t how to do it) and I tried to install it on my
            own. I just ended up filling that poor computer with viruses lol.
          </p>

          <p>
            When I entered high school, I chose to study IT under the impression
            that video games === IT. For the first two years out of five, I
            didn&apos;t learn much about anything really. My focus was more on
            playing video games.{" "}
            <i>
              League of Legends is a great game btw. (but don&apos;t spend too
              time much on it)
            </i>
          </p>

          <h2>The turning point</h2>
          <p>
            In my third year, things took a turn. My brother offered me a summer
            internship at his company, which mainly built electrical stuff. It
            was a small place with a lot of C programming involved (<b>goat</b>
            ). I was thrown into the deep end, learning how things worked from
            the ground up, from writing the software to uploading it to the
            hardware board. I mostly observed at first, seeing magicians do
            their work until one day my brother assigned me a task: complete a
            function to highlight keypresses on a touch panel keyboard.
          </p>

          <p>
            I barely knew how to <b>System.out.println</b> with Java but
            nevertheless I tried, ultimately failing miserably.{" "}
          </p>
          <p>
            <b>Something clicked in me tho</b>. I got that rush that every
            software engineer gets: <b>the thrill of solving a problem</b>.
          </p>

          <p>
            The following summer, I returned to the company. This time, they
            asked me to build a web interface for an IoT project. Terms like
            JavaScript, HTML, and SQL were thrown around — technologies I
            hadn&apos;t encountered yet in school. The only thing I could do was
            learning on my own and so I did. I dove into research and managed to
            create the first (buggy, scrappy and insecure) version of the
            website that I would refactor the next year by using Laravel &
            Vuejs, two technologies that I continue to use today.
          </p>

          <h2>The trajectory</h2>
          <p>
            After high school I decided to study computer engineering at
            university, hoping one day of joining a MAANG.{" "}
            <i>Never really believing it was a real possibility</i>.{" "}
          </p>
          <p>
            <b>The first two years of my bachelor&apos;s were tough</b> as
            someone that didn&apos;t really have the mathematical foundations.
            Calculus, Physics, and Telecommunications were challenging, beat me
            to my knees but thankfully I had a{" "}
            <Link target="_blank" href="https://babeldev0.github.io/babelog/">
              high school buddy
            </Link>{" "}
            that often studied with me, helping me get through it.
          </p>

          <p>
            Around the same time, my brother was starting a startup and invited
            me to join. I was super excited. Admittedly, I preferred (and still
            do) building things over studying, but I managed to juggle both. The
            startup wasn&apos;t aiming to do anything revolutionary; it just
            wanted to create software to help people and businesses. It was
            during this time that my passion for software engineering truly came
            to life.
          </p>
          <p>
            <strong>
              I was building things that people used and it felt great.
            </strong>
          </p>

          <h2>The realization</h2>
          <p>
            Fast forward to the present (2024) after years of the
            university-startup-university-startup cycle I&apos;m now getting my
            master&apos;s and, while browsing through{" "}
            <Link target="_blank" href="https://x.com/llcors">
              X dot com
            </Link>
            , it struck me:{" "}
          </p>
          <p>
            <strong>I was losing momentum</strong>
          </p>
          <p>
            I was seeing my younger peers getting internships, doing hackathons
            and generally being more involved in the tech community. By 23, I
            had some experience but not with any well-known companies, and
            graduation was approaching. <b>Panic set in</b>. Despite all
            I&apos;d done, it felt like I didn&apos;t achieve much.{" "}
            <b>It was now or never</b>. I started applying for internships at
            any relevant company dreaming of a MAANG, even though it seemed
            impossible. I thought my work experience and degree would make it
            easy. I was wrong. Despite years of studying and working, I really
            had no to little knowledge on data structures and algorithms. It was
            kind of a <b>cold shower</b>.
          </p>

          <h2>I&apos;m late</h2>
          <p>
            We are now in August 2024. I knew I had to address my weak spots so
            I started grinding LeetCode problems while continuing to send out
            resumes, but I had a little happy problem: a two-week road trip to
            Scotland with friends was already planned for early September - not
            ideal timing, ugh.
          </p>

          <p>
            Fortunately for me, not every company was rejecting me at first, so
            my years of working and studying were somewhat paying off. I managed
            to complete two OAs during the trip, connecting through a
            friend&apos;s mobile hotspot. The first one was for Databricks which
            I completed it{" "}
            <Link
              target="_blank"
              href="https://photos.app.goo.gl/9yzGArLp1E5H2pFA7"
            >
              by a lake
            </Link>
            . The other one was for Stripe, and I was able to do it from a
            mountain parking lot (
            <Link
              target="_blank"
              href="https://photos.app.goo.gl/LUMxwpfD2UDwcsLA7"
            >
              Quiraing
            </Link>
            , beautiful place btw). Returning in late September, to my surprise
            I had passed the OA for Stripe and they scheduled the onsite
            interview in early October. I was super happy about it.
          </p>

          <h2>The first cold shower</h2>
          <p>
            The onsite interview went somewhat well I though, it wasn&apos;t the
            classic LeetCode problem, it was more of a day to day type of
            problem that engineers at Stripe faced. I was able to solve 2 out of
            the 4 problems steps and ultimately got <b>rejected</b>. Honestly,
            thinking back, <b>I was not ready for it</b>.{" "}
            <b>I barely knew how to reverse a linked list</b>. What was I hoping
            for?
          </p>

          <h2>The grind</h2>
          <p>
            It was time to double down. I dedicated as many hours as possible
            each day (
            <Link
              target="_blank"
              href="https://x.com/llcors/status/1846291894533607474"
            >
              11+ hours
            </Link>
            ) to studying data structures and algorithms while persistently
            applying to companies.
          </p>

          <h2>The opportunity</h2>
          <p>
            After countless applications - honestly, I lost count after a while
            - Amazon sent me an OA. I knew I couldn&apos;t afford to fail it, It
            was now late mid October and I felt like many positions would start
            closing until next year. I poured everything I&apos;d learned into
            it and managed to pass 21 out of 30 test cases. Not perfect, but
            enough.
          </p>

          <p>
            Finally, I received an invitation for an onsite interview scheduled
            for the following week. With only five days to prepare, I immersed
            myself in advanced topics like backtracking and dynamic programming
            and practiced with mock interviews with random people online.
          </p>
          <p>
            Those were five days of{" "}
            <b>pure grind, but I enjoyed every bit of it</b>.
          </p>
          <p>
            {" "}
            On the day of the interview, surprisingly, I wasn&apos;t nervous. I
            had prepared as best as I could. The interviewer was friendly, and I
            was able to solve the coding problems and confidently answer the
            behavioral questions I&apos;d practiced. I felt good about it. Five
            long and agonizing days later, the result came in:{" "}
            <b> an offer from Amazon</b>. Without hesitation, I accepted it.
          </p>

          <p>
            Next summer, I&apos;ll be living in Luxembourg for six months,
            working at a MAANG. What was only a dream some years ago is now
            becoming a reality. <b>This is just the beginning.</b>
          </p>

          <p>--</p>

          <p>
            <b>
              Take risks guys. Don&apos;t be afraid of being hurt. There&apos;s
              great joy in the grind
            </b>
          </p>

          <i>
            Yes I do like motivational speeches. Yes I do like David Goggins.
          </i>
        </div>
      </article>
    </main>
  );
}
