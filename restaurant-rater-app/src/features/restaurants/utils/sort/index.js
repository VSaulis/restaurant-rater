export const getSortByRole = (isRegularUser) => {
  if (isRegularUser) {
    return { type: 'Desc', column: 'averageRating' };
  }

  return { type: 'Desc', column: 'created' };
};
