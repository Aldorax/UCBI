import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Blockchain Technologies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "BadgeCheck",
    title: "Values",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "Goal",
    title: "Investment Fund",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "PictureInPicture",
    title: "Trend Reports",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "MousePointerClick",
    title: "Tokenization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "Newspaper",
    title: "Crypto Market",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        UCBI Blockchain Data Banking
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-[#112e50] mb-8">
        UCBI Banking is a forward-thinking asset designed to unify different
        pairs in cryptocurrency markets and drive value creation through the
        power of core scarcity on the UCBI ERC-20 token Our ecosystem offers a
        unique approach to stock speculation & long-term growth by connecting
        diverse markets & pairs by streamlining different transactions
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-[#112e50] border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-[#00bcd6]/20 p-2 rounded-full ring-8 ring-[#00bcd6]/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="#00bcd6"
                    className="text-[#00bcd6]"
                  />
                </div>

                <CardTitle className="text-xl md:text-base">{title}</CardTitle>
              </CardHeader>

              {/* <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent> */}
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
