import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const SeoHead = ({ recipe }) => {
  const {
    recipeInfo: { title, description },
    recipeVideo: {
      thumbnail: videoThumbnail,
      link: videoLink,
      title: videoTitle,
    },
    recipeIngredients: ingredients,
    recipeSteps: steps,
    recipeCategory: { slug: categorySlug },
    recipeTags: tags,
    recipeOwner: { name: authorName },
  } = recipe;

  const seoJson = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: title,
    image: [videoThumbnail],
    author: {
      '@type': 'Person',
      name: authorName,
    },
    description,
    keywords: tags,
    recipeCategory: categorySlug,
    recipeCuisine: 'Italian',
    recipeIngredient: ingredients.map(
      ingredient =>
        `${ingredient.quantity || ''} ${ingredient.unit || ''} of ${
          ingredient.label
        }`
    ),
    recipeInstructions: steps.map(step => ({
      '@type': 'HowToStep',
      text: step.description,
    })),
    video: [
      {
        '@type': 'VideoObject',
        embedUrl: videoLink,
        name: videoTitle,
        description,
        thumbnailUrl: [videoThumbnail],
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${JSON.stringify(seoJson)}`,
        }}
      />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

SeoHead.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default SeoHead;
