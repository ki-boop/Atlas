interface Image {
  name: string;
  alt: string;
}
export const Image = (props: Image) => {
  let url = process.env.PUBLIC_URL + `ProductImages/${props.name}`;
  if (props.name.split(":")[0] === "blob") url = props.name;
  return <img src={url} alt={props.alt} />;
};
