import { EntityList } from "../../../components/entity-list/entity-list.component";
import { RelatedProducts } from "../../../components/product/related-products";

export const RelatedProductsList: React.FC = (productsList) => {
  return ( 
    <EntityList
      products={productsList}
      onRenderItem={(products) => (<RelatedProducts products={products} /> )}/>
  );
};
