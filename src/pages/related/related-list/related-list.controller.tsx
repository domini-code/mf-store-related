import { RelatedProductsList } from "./related-list.component";

export const RelatedProductsController: React.FC<any> = (products) => {
  return <RelatedProductsList {...products} />;
};
