import { Breakpoint, BreakpointProvider } from "react-socks";
import StickyScroll2 from "./mobile/faq-mobile";
import StickyScroll from "./faq";


const FaqPage = () => {
    
  const content = [
      {
          title: "What is Ted and what is Tedx?",
          description:
              "TEDx is a program created by TED (Technology, Entertainment, Design), a global platform known for its conferences featuring influential speakers and thought leaders. TEDx events are independently organized, community-driven gatherings licensed by TED. ",
      },
      {
          title: "What is the Theme of the event?",
          description:
              "The theme of TEDxDAVV is The Within. It delves into the essence of our inner soul, exploring the profound depths of self-awareness, personal growth, and the untapped potential that resides within each of us. This theme invites speakers and attendees to reflect on their internal journeys, discover hidden truths, and embrace the power of introspection to drive meaningful change in the world.",
      },
      {
          title: "What is the date and time of the Event?",
          description:
              "The exact date and time for TEDxDAVV 2025 are yet to be finalized. Stay tuned for updates on our official website and social media channels to ensure you don’t miss any announcements!",
      },
      {
          title: "What language is spoken at the event?",
          description:
              "The languages spoken during the event are Hindi and English.",
      },
      {
          title: "What is the price of tickets?",
          description: "The price of the tickets are yet to be revealed.",
      },
      {
          title: "Are there different ticket types of packages available?",
          description:
              "Yes, there are but the diff ticket types of packages are yet to be announced.",
      },
  ];

  
  return (
    <BreakpointProvider>
        <Breakpoint customQuery="(max-width: 1025px)">
            <StickyScroll2 content={content}/>
        </Breakpoint>
        <Breakpoint customQuery="(min-width: 1025px)">
            <StickyScroll content={content}/>
        </Breakpoint>
    </BreakpointProvider>

      );
};

export default FaqPage;
