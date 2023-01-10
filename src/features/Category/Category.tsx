import { HeroCategory } from '../../api/heroes/types';

const Category = ({ category }: { category: HeroCategory }) => {
  return (
    <ul>
      {category.items.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Category;
