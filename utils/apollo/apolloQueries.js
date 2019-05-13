import gql from 'graphql-tag';

export const GET_RECIPES_QUERY = gql`
  query GET_RECIPES {
    recipes @rest(type: "Recipes", path: "/v1/recipes") {
      count
      next
      previous
      results @type(name: "Recipe") {
        id
        owner @type(name: "RecipeOwner") {
          id
          username
          name
          mugshot
        }
        category @type(name: "RecipeCategory") {
          id
          translations @type(name: "RecipeCategoryInfo") {
            it @type(name: "RecipeCategoryInfoIt") {
              slug
            }
          }
        }
        translations @type(name: "RecipeInfo") {
          it @type(name: "RecipeInfoIt") {
            title
            description
          }
        }
        video @type(name: "RecipeVideo") {
          id
          translations @type(name: "RecipeVideoInfo") {
            it @type(name: "RecipeVideoInfoIt") {
              title
              link
              thumbnail
            }
          }
        }
        ingredients @type(name: "Ingredient") {
          quantity
          unit @type(name: "IngredientUnit") {
            symbol
            translations @type(name: "IngredientUnitName") {
              it @type(name: "IngredientUnitNameIt") {
                name
              }
            }
          }
          ingredient @type(name: "IngredientInfo") {
            id
            translations @type(name: "IngredientLabel") {
              it @type(name: "IngredientLabelIt") {
                label
              }
            }
          }
        }
        steps @type(name: "RecipeStep") {
          translations @type(name: "RecipeStepInfo") {
            it @type(name: "RecipeStepInfoIt") {
              name
              description
              image
            }
          }
        }
        tags
      }
    }
  }
`;

export const GET_RECIPE_QUERY = gql`
  query GET_RECIPE($id: String!) {
    recipe(id: $id) @rest(type: "Recipe", path: "/v1/recipes/{args.id}") {
      id
      owner @type(name: "RecipeOwner") {
        id
        username
        name
        mugshot
      }
      category @type(name: "RecipeCategory") {
        id
        translations @type(name: "RecipeCategoryInfo") {
          it @type(name: "RecipeCategoryInfoIt") {
            slug
          }
        }
      }
      translations @type(name: "RecipeInfo") {
        it @type(name: "RecipeInfoIt") {
          title
          description
        }
      }
      video @type(name: "RecipeVideo") {
        id
        translations @type(name: "RecipeVideoInfo") {
          it @type(name: "RecipeVideoInfoIt") {
            title
            link
            thumbnail
          }
        }
      }
      ingredients @type(name: "Ingredient") {
        quantity
        unit @type(name: "IngredientUnit") {
          symbol
          translations @type(name: "IngredientUnitName") {
            it @type(name: "IngredientUnitNameIt") {
              name
            }
          }
        }
        ingredient @type(name: "IngredientInfo") {
          id
          translations @type(name: "IngredientLabel") {
            it @type(name: "IngredientLabelIt") {
              label
            }
          }
        }
      }
      steps @type(name: "RecipeStep") {
        translations @type(name: "RecipeStepInfo") {
          it @type(name: "RecipeStepInfoIt") {
            name
            description
            image
          }
        }
      }
      tags
    }
  }
`;
