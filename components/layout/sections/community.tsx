import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EarthIcon } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="h-[40%] bg-[#142e53]">
      <hr className="border-secondary" />
      <div className="py-20 sm:py-20">
        <div className="">
          <Card
            className="border-none shadow-none text-center flex flex-col items-center justify-center bg-transparent"
            h-full
          >
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <EarthIcon size={40} />
                <div className="mt-4">
                  Read our
                  <span className="text-transparent pl-2 bg-[#01bcd5] bg-clip-text">
                    WhitePaper!
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-white">
              Read our whitepaper and learn more about our project.
            </CardContent>

            <CardFooter>
              <Button asChild className="bg-[#01bcd5]">
                <a href="#" target="_blank">
                  Read now
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
