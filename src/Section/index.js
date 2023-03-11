import "./style.css";

const Section = ({
  sectionClassName,
  headerClassName,
  children,
  title,
  extraHeaderContent,
}) => (
  <section className={sectionClassName}>
    <h2 className={headerClassName}>{title}</h2>
    {extraHeaderContent}
    {children}
  </section>
);

export default Section;
