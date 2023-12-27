import "./index.css";
import React from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div>
      {faqs.map((element) => (
        <AccordionItem
          item={faqs[faqs.indexOf(element)].title}
          text={faqs[faqs.indexOf(element)].text}
          key={faqs.indexOf(element)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, item, text }) {
  return (
    <div className="item">
      {/* <div className="number">{num}</div> */}
      <p className="text">{item}</p>
      <p className="icon">{text}</p>
    </div>
  );
}
