export default function TabButton(props) {
  return (
    <li>
      {/* For components that take a single piece of renderable content, this approach is closer to "normal HTML usage"
        This approach is especially convenient when passing JSX code as a value to another component */}
      <button>{props.children}</button>
    </li>
  );
}
