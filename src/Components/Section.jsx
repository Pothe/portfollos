function Section({ children, sectionName = "" }) {
  return (
    <section>
      <div>{sectionName ? sectionName : ""}</div>
      {children}
    </section>
  );
}

export default Section;
