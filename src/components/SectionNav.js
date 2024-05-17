import React, { useState, useEffect } from "react";

export default function SectionNav({ currentSection }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const updateHeadings = () => {
      const section = document.querySelector(`.${currentSection}`);
      if (section) {
        const headingElements = section.querySelectorAll("h1, h2, h3");
        const headingList = Array.from(headingElements).map((heading, index) => ({
          id: `heading-${index}`,
          text: heading.innerText,
        }));

        console.log('Headings found:', headingList); // Debug log

        setHeadings(headingList);

        // Add ids to the headings
        headingList.forEach((heading, index) => {
          headingElements[index].id = heading.id;
        });
      } else {
        console.log('Section not found:', currentSection); // Debug log
      }
    };

    updateHeadings();
    
    // Optionally, add a MutationObserver to update headings if the DOM changes
    const observer = new MutationObserver(updateHeadings);
    const section = document.querySelector(`.${currentSection}`);
    if (section) {
      observer.observe(section, { childList: true, subtree: true });
    }

    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, [currentSection]);

  const handleScrollToHeading = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="side-navigation">
      <h3>Table of Contents</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <button onClick={() => handleScrollToHeading(heading.id)}>
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}