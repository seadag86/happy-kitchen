import React from 'react';
import styles from './Recipe.module.scss';
import { Card } from 'antd';

export interface IRecipe {
  id: number;
  image: string;
  imageUrls: string[];
  readyInMinutes: number;
  servings: number;
  title: string;
}

const Recipe: React.FC<IRecipe> = ({
  id,
  image,
  readyInMinutes,
  servings,
  title
}) => {
  const imageType = image ? image.substr(-3) : null;
  const imageBasePath = imageType
    ? 'https://spoonacular.com/recipeImages/'
    : '';

  const imageUrl = (imageSize: string) => {
    return `${imageBasePath}/${id}-${imageSize}.${imageType}`;
  };

  return (
    <Card
      cover={<img src={imageUrl('480x360')} alt={image} />}
      actions={[<span>DETAILS</span>]}
      className={styles.recipe}
    >
      <h2>{title}</h2>
      <p>Ready in {readyInMinutes} minutes</p>
      <p>Serves {servings}</p>
    </Card>
  );
};

export default Recipe;
