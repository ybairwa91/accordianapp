import "./index.css";
import React from "react";
import { useState } from "react";

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
    <div className="accordian">
      {faqs.map((el, i) => (
        <AccordionItem num={i} title={el.title} text={el.text} key={i} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`item ${isOpen ? "nothing" : "open"}`}>
      <div className="number">{num < 9 ? `0${num + 1}` : num + 1}</div>
      <p className="title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </p>
      <p className="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "+" : "-"}
      </p>
      {isOpen || (
        <div onClick={() => setIsOpen(!isOpen)} className="content-box">
          {text}
        </div>
      )}
    </div>
  );
}
