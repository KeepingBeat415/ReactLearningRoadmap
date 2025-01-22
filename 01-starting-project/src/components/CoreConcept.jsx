// function CoreConcept(props) {
// {} used to destructure the first parameter of this function
export default function CoreConcept({ image, title, description }) {
  return (
    // <li>
    //   <img src={props.image} alt={props.title} />
    //   <h3>{props.title}</h3>
    //   <p>{props.description}</p>
    // </li>
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
