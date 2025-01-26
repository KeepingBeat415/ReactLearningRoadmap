export default function TabButton({ children, onSelect, isSelected, ...props }) {
  function handleClick() {
    console.log('Hello World');
  }

  return (
    <li>
      {/* For components that take a single piece of renderable content, this approach is closer to "normal HTML usage"
        This approach is especially convenient when passing JSX code as a value to another component */}
      <button className={isSelected ? 'active' : undefined} onClick={onSelect} {...props}>
        {children}
      </button>
    </li>
  );
}
