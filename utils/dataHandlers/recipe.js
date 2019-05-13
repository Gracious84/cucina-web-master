export const recipeDataHandler = ({
  id,
  category,
  ingredients,
  owner,
  steps,
  tags,
  translations,
  video,
}) => {
  const recipeCategory = {
    id: category.id,
    slug: category.translations.it.slug,
  };

  const recipeIngredients = ingredients.map(ing => {
    const { ingredient, quantity, unit } = ing;

    const ingredientObj = {
      id: ingredient.id,
      label: ingredient.translations.it.label,
      quantity,
      unit,
    };

    if (unit) {
      ingredientObj.unit = unit.translations.it.name;
    }

    return ingredientObj;
  });

  const recipeSteps = steps.map(step => ({
    name: step.translations.it.name,
    description: step.translations.it.description,
    image: step.translations.it.image,
  }));

  const recipeInfo = {
    title: translations.it.title,
    description: translations.it.description,
  };

  const recipeVideo = {
    id: video.id,
    title: video.translations.it.title,
    link: video.translations.it.link,
    thumbnail: video.translations.it.thumbnail,
  };

  return {
    id,
    recipeInfo,
    recipeVideo,
    recipeIngredients,
    recipeSteps,
    recipeCategory,
    recipeTags: tags,
    recipeOwner: owner,
  };
};
