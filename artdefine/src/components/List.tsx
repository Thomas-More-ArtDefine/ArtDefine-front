import { testOutput } from "../model/testOutput";

interface listprops {
  items: testOutput[];
}

const ListItem = ({ text, ...p }: testOutput) => {
  return <div className="item">{text}</div>;
};

const List = ({ items }: listprops) => {
  return (
    <>
      {items.map((p) => (
        <ListItem key={p.key} text={p.text} />
      ))}
    </>
  );
};

export default List;
// Path: artdefine/src/components/List.tsx