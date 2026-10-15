/*
  EDIT YOUR PORTFOLIO HERE.
  Each category is a list. Add an object for every item you complete, for example:

  { title: "Bacterial staining practical", meta: "Microbiology lab, 2026",
    description: "What I did and what I learned.", link: "https://..." }

  "meta" and "link" are optional. Leave a list empty ([]) to show the empty message.
*/
const portfolio = {
  "Projects": {
    items: [],
    empty: "Academic assignments, exploratory projects, and practical learning activities. Add entries here as you complete them."
  },
  "Certifications": {
    items: [],
    empty: "Courses, workshops, and learning experiences that contribute to your development — e.g. NPTEL, Coursera, university workshops."
  },
  "Internships": {
    items: [],
    empty: "Future opportunities to gain exposure to biotechnology, life sciences, management, and related industries."
  },
  "Competitions": {
    items: [],
    empty: "Academic competitions, student initiatives, collaborative activities, and other learning experiences."
  },
  "Research": {
    items: [],
    empty: "Topics, scientific concepts, and interdisciplinary ideas that you explore during your academic journey."
  },
  "Leadership": {
    items: [],
    empty: "Opportunities to develop teamwork, communication, coordination, and leadership skills."
  }
};

const tabsEl = document.getElementById("tabs");
const panelEl = document.getElementById("panel");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function showCategory(name) {
  const data = portfolio[name];
  panelEl.replaceChildren();
  panelEl.setAttribute("aria-label", name);

  if (!data.items.length) {
    const box = el("div", "empty");
    box.append(el("strong", "", "No " + name.toLowerCase() + " added yet"), el("p", "", data.empty));
    panelEl.append(box);
    return;
  }

  data.items.forEach(function (item) {
    const card = el("article", "entry");
    card.append(el("h3", "", item.title));
    if (item.meta) card.append(el("div", "meta", item.meta));
    if (item.description) card.append(el("p", "", item.description));
    if (item.link) {
      const a = el("a", "", "View details");
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noopener";
      card.append(a);
    }
    panelEl.append(card);
  });
}

function selectTab(name) {
  tabsEl.querySelectorAll("button").forEach(function (b) {
    b.setAttribute("aria-selected", String(b.dataset.name === name));
  });
  showCategory(name);
}

Object.keys(portfolio).forEach(function (name, i) {
  const btn = el("button", "", name);
  btn.type = "button";
  btn.setAttribute("role", "tab");
  btn.dataset.name = name;
  btn.addEventListener("click", function () { selectTab(name); });
  tabsEl.append(btn);
  if (i === 0) selectTab(name);
});

document.getElementById("year").textContent = new Date().getFullYear();
