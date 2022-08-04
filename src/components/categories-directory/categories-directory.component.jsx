import { DirectoryContainer } from "./categories-directory.styles.jsx";
import CategoryItem from "../category-item/category-item.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageURL: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageURL: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const CategoryDirectory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default CategoryDirectory;
