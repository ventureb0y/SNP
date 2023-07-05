import dynamic from "next/dynamic";

const DynamicCartWithNoSSR = dynamic(() => import("@/components/CartPage/Cart"), {
  ssr: false,
});

export default function R() {
  return (
    <div>
      <DynamicCartWithNoSSR />
    </div>
  );
}