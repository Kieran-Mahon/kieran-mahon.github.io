import Image from "next/image";
import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function PortfolioCard({project}) {
  const hasImages = (project.images.length !== 0);
  const moreThanOneImg = (project.images.length > 1);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <CardTitle className="text-xl">
              {project.name}
            </CardTitle>
            <CardDescription>
              {project.type}
            </CardDescription>
          </div>
          <div className="flex justify-end">
            {project.links.map((link) => (
            <Button key={link.name} className="ml-2">
              {link.name}
            </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <Separator className="h-[2px]" />

      <CardContent className="pt-3">
        {hasImages && 
          <div className={cn(moreThanOneImg ? "px-6": "")}>
            <Carousel opts={{
              align: "start",
              loop: true,
            }}>
              <CarouselContent className>
                {project.images.map((img) => (
                  <CarouselItem key={img.name}>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Image
                          src={img.url}
                          width={500}
                          height={50}
                          alt={img.name}
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-4xl p-2">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            <div className="text-center pb-1">
                            {img.name}
                            </div>
                            <Image
                              src={img.url}
                              width={1000}
                              height={1000}
                              alt={img.name}
                            />
                          </AlertDialogTitle>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {moreThanOneImg &&
                <>
                  <CarouselPrevious className="-left-10" />
                  <CarouselNext className="-right-10" />
                </>
              }
            </Carousel>
          </div>
        }

        {project.description}
        
        <div className="pt-2">
          {project.skills.map((skill) => (
            <Badge key={skill} className="mx-[2px]">
              {skill}
            </Badge>
          ))}
        </div>
        
      </CardContent>
    </Card>
  );
}
