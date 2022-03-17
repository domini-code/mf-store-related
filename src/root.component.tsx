import { RelatedProducts } from "./components/product/related-products";

export default function Root(props) {
  console.log('Props react ', props);
  
  return (
    <section>
      <RelatedProducts {...props} />
    </section>
  );
}
