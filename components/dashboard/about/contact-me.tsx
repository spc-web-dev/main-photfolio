import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactMe() {
  return (
    <section className="text-center mt-10 space-y-2">
      <p className="text-lg">Interested in working together?</p>
      <ul className="flex gap-2 justify-center">
        <Button asChild size={"icon"} variant={"secondary"}>
          <li className="grid place-items-center cursor-pointer">
            <Link href={"/"}>
              <FaTelegramPlane />
            </Link>
          </li>
        </Button>
        <Button asChild size={"icon"} variant={"secondary"}>
          <li className="grid place-items-center cursor-pointer">
            <Link href={"/"}>
              <FaFacebookMessenger />
            </Link>
          </li>
        </Button>
        <Button asChild size={"icon"} variant={"secondary"}>
          <li className="grid place-items-center cursor-pointer">
            <Link href={"/"}>
              <MdOutlineMailOutline />
            </Link>
          </li>
        </Button>
      </ul>
    </section>
  );
}

export default ContactMe;
