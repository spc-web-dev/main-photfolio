import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function ProductCard({}) {
  return (
    <Card className="max-w-sm">
      <div className="relative w-full h-[300px] max-h-[300px] overflow-hidden">
          <Image
            src="/images/mk.png"
            alt="Product Image"
            className="w-full h-[300px] object-cover"
            width={300}
            height={300}
            priority
            quality={95}
          />
        </div>
      <CardContent className="">
        <CardTitle>L009UiGS-RM</CardTitle>
        <CardDescription>
          This is a description of the product. It provides more details about the product features and benefits.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 items-center">
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link href={"/dashboard/tutorial/1"}>Tutorial</Link>
          </Button>
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link href={"/"}>Order</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
