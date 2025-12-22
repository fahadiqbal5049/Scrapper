import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Typography from "../ui/typography";

interface ProductCardWithRemoveButtonProps {
  imageUrl: string;
  title: string;
  sku: string;
  code: string;
  onRemove?: () => void;
}

const ProductCardWithRemoveButton: React.FC<
  ProductCardWithRemoveButtonProps
> = ({ imageUrl, title, sku, code, onRemove }) => {
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div className="flex justify-center items-start gap-2">
        <Image src={imageUrl} alt="Product Image" width={60} height={60} />
        <div className="flex max-w-[350px] w-full flex-col">
          <Typography variant="p" color="primary">
            {title}
          </Typography>
          <Typography variant="p" color="primary">
            SKU: {sku}
          </Typography>
          <Typography variant="p" color="primary">
            Code: {code}
          </Typography>
        </div>
      </div>
      <button onClick={onRemove} className="p-2">
        <X size={26} color="#A3A3A3" />
      </button>
    </div>
  );
};

export default ProductCardWithRemoveButton;
