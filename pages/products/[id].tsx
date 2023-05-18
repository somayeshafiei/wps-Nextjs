import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  product: string;
}

function SingleProduct({ product }: Props) {
  console.log("dakhele component ==> ", product);
  const router = useRouter();
  console.log(router.query);
  return <div>SingleProduct</div>;
}

export default SingleProduct;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params);
  console.log(context.query);
  const product = `products ${context?.params?.id}`;
  return {
    props: {
      product,
    },
  };
};
