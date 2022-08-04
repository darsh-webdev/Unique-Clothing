import { useNavigate } from "react-router-dom";

import {
  CategoryItemContainer,
  CategoryBodyContainer,
  BackgroundImage,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { title, imageURL, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageURL} />
      <CategoryBodyContainer onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
