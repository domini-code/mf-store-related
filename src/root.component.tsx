import { RelatedProducts } from "./components/product/related-products";

export default function Root(props) {
  return (
    <section>
      <RelatedProducts {...props} />
    </section>
  );
}
