"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import { fetcher } from "@/app/_libs";
import { AddCart } from "@/app/_redux/actions";
import ProductContainer from "./ProductStyles";
import { engage } from "../../api/engage";
export default function ProductDetailPage({
  params,
}: {
  params: { id: number };
}) {
  const dispatch = useDispatch();
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  const {
    data: product,
    error,
    isLoading,
  } = useSWR<Product>(`/api/products/${params.id}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!product) return null;

  const sendAddEvent = () => {
    const eventData = {
      channel: "WEB",
      currency: "USD",
      pointOfSale: "aq",
      language: "EN",
      product: {
        name: product.title,
        type: product.category,
        item_id: product.id.toString(),
        productId: product.id.toString(),
        referenceId: product.id.toString(),
        orderedAt: new Date().toISOString(),
        quantity: 1,
        price: product.price,
        currency: "USD",
      },
    };

    engage && engage.event("ADD", eventData)

    dispatch(AddCart(product))
  };

  return (
    <ProductContainer className="w-full max-w-[400px] m-auto flex flex-col justify-center">
      <div className="w-full mt-4">
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={400}
          height={400}
        />
        <div className="w-full mt-2">
          <h1 className="font-bold text-2xl">{product?.title}</h1>
          <p className="text-gray-500">Price: ${product?.price}</p>
          <button
            className="bg-yellow-400 px-4 py-2 text-white mt-1"
            onClick={sendAddEvent}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </ProductContainer>
  );
}
