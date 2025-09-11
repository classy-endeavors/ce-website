import Section from "@/components/Section";
import BrandsScrollable from "./BrandsScrollable";
import SectionTitle from "@/components/Common/SectionTitle";
import { Brand } from "@/types";
type BrandsProps = {
  brands: Brand[];
}
;
const Brands = ({brands}: BrandsProps) => {
  return (
    <Section>
      <SectionTitle title={"Trusted by Global Partners"} className="text-center" />
      <div>
        <BrandsScrollable brands={brands} />
      </div>
    </Section>
  );
};

export default Brands;
