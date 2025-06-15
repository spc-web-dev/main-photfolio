import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function ProductFooter() {
    return (
        <div className="w-full py-6 mt-8 border-t">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="text-gray-600 text-sm mb-2 md:mb-0">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
                <div className="flex space-x-4">
                    <Button asChild variant={'secondary'} size={'icon'}>
                        <Link href="/">
                            <span className="text-gray-700 dark:text-gray-200"><FaTelegramPlane /></span>
                        </Link>
                    </Button>
                    <Button asChild variant={'secondary'} size={'icon'}>
                        <Link href="/">
                            <span className="text-gray-700 dark:text-gray-200"><FaFacebookMessenger /></span>
                        </Link>
                    </Button>
                    <Button asChild variant={'secondary'} size={'icon'}>
                        <Link href="/">
                            <span className="text-gray-700 dark:text-gray-200"><MdEmail /></span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductFooter;