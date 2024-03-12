export const productListSorter = (productList) => {
  const sortedList = [];
  productList.map((product) => {
    sortedList.push({
      productId: product[0],
      productName: product[1],
      manufacturer: product[2],
      price: product[3],
      size: product[4],
      category: product[5],
      qauntity: product[6],
      imageUrl: product[7],
    });
  });

  return sortedList;
};
