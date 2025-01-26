export default function Section({ title, children, ...props }) {
  // "..." forward parent's props into child
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
