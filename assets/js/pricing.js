const faqContent = [
  {
    title: "How does my billing work?",
    desc:
      "As we are still in active development, our basic pricing will be announced when the platform and infrastructure have been set up.",
  },
  {
    title: "How can I get a custom feature for Dashboard?",
    desc:
      "Our documentation allows for the Dashboard functionality to be extended. However, we plan that Business tier customers will have access to more functionality, as well as to Request a Feature.",
  },
  {
    title: "Do you have educational or non-proft discounts?",
    desc:
      "We will release a free tier that anyone can use. At this point we do not have any discounts on paid plans.",
  },
];

const root = document.getElementById("faq-root");

const buildFaq = (id, title, desc) => {
  const container = document.createElement("div");
  container.classList.add("block", "faq-field", "pl-4");

  const columns = document.createElement("div");
  columns.classList.add("columns", "is-mobile", "is-vcentered");

  const questionCol = document.createElement("div");
  questionCol.classList.add("column", "is-10");

  const questionText = document.createElement("span");
  questionText.classList.add("medium", "is-size-4");
  questionText.innerText = title;
  questionCol.appendChild(questionText);

  const expandCol = document.createElement("div");
  expandCol.classList.add("column", "has-text-right");

  const expandIcon = document.createElement("ion-icon");
  expandIcon.classList.add("faq-icon", "mr-4");
  expandIcon.setAttribute("size", "large");
  expandIcon.setAttribute("name", "add-outline");
  expandIcon.id = `faq-${id}-icon`;
  expandCol.appendChild(expandIcon);

  columns.appendChild(questionCol);
  columns.appendChild(expandCol);

  const description = document.createElement("div");
  description.classList.add("block", "pb-4", "is-hidden");
  description.id = `faq-${id}-desc`;

  const descriptionText = document.createElement("span");
  descriptionText.classList.add("is-size-5");
  descriptionText.innerText = desc;
  description.appendChild(descriptionText);

  container.appendChild(columns);
  container.appendChild(description);

  const toggle = () => {
    const check = document.getElementById(`faq-${id}-desc`);
    const icon = document.getElementById(`faq-${id}-icon`);

    if (check.classList.contains("is-hidden")) {
      check.classList.remove("is-hidden");
      icon.classList.add("faq-icon-rotate");
    } else {
      check.classList.add("is-hidden");
      icon.classList.remove("faq-icon-rotate");
    }
  };

  container.addEventListener("click", () => {
    toggle();
  });

  return container;
};

faqContent.forEach((question, index) => {
  const el = buildFaq(index, question.title, question.desc);
  root.appendChild(el);
});
