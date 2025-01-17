import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-[#f4f4fe] border border-black rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                alt="none"
                src={"/logo.webp"}
                width={1000}
                height={1000}
                className="rounded-lg w-9 h-9 mr-2 text-white"
              />

              <h3 className="text-2xl">UCBI</h3>
            </Link>
            <span className="text-sm text-[#5f697d]">
              Copyright © 2025 <br />
              UCBI Group Technologies LTD <br />
              All rights reserved
            </span>
          </div>

          <div className="flex flex-col gap-2 text-[#102e50] font-semibold text-sm">
            <h3 className="font-bold text-lg">Features</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Coincodex
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                CoinMarket Cap
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Etherscan Blockchain
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[#102e50] font-semibold text-sm">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Integration & API
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Trust Wallet Apps
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Term & Conditions
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[#102e50] font-semibold text-sm">
            <h3 className="font-bold text-lg">Need Help?</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                UCBI Support
              </Link>
            </div>

            <div>
              <Link
                href=""
                type="email"
                className="opacity-60 hover:opacity-100"
              >
                contact@ucbibanking.io
              </Link>
            </div>

            <div>
              <Link
                href="#"
                type="email"
                className="opacity-60 hover:opacity-100"
              >
                support@ucbibanking.io
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-black" />
        <section>
          <h3 className="">
            &copy; 2025
            <Link
              target="_blank"
              href="#"
              className="text-[#142e53] transition-all border-[#01bcd5] border-b-2 ml-1"
            >
              UCBI
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
