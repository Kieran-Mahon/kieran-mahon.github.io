import Image from "next/image";
import Link from 'next/link'
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

export default function PortfolioCard({project, customStyle, cardHeight}) {
  const hasImages = (project.images.length !== 0);
  const moreThanOneImg = (project.images.length > 1);

  return (
    <Card className={customStyle} style={{height: cardHeight + "px" }}>
      <CardHeader className="pb-2">
        <div className="grid grid-cols-3">
          <div className="col-span-3 2xl:col-span-2">
            <CardTitle className="text-xl">
              {project.name}
            </CardTitle>
            <CardDescription>
              {project.type}
            </CardDescription>
          </div>

          <div className="col-span-3 2xl:col-span-1 flex justify-start 2xl:justify-end mt-1 2xl:mt-0">
            {project.links.map((link) => (
            <Button asChild key={link.name} className="mr-1 2xl:mr-0 2xl:ml-2">
              <Link target="_blank" href={link.url}>
                {link.name}
              </Link>
            </Button>
            ))}
          </div>
        </div>

        <div className="pt-1 pb-1">
          {project.skills.map((skill) => (
            <Badge key={skill} className="mr-[2px]">
              {skill}
            </Badge>
          ))}
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
              <CarouselContent>
                {project.images.map((img) => (
                  <CarouselItem key={img.name} className="flex justify-center items-center">
                    <AlertDialog>
                      <AlertDialogTrigger className="relative w-full h-64">
                        <Image
                          src={img.url}
                          alt={img.name}
                          fill
                          className="object-contain"
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-4xl p-2">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            <div className="text-center">
                              {img.name}
                            </div>
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            <Image
                              src={img.url}
                              alt={img.name}
                              width={1000}
                              height={1000}
                            />
                          </AlertDialogDescription>
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
        
      </CardContent>
    </Card>
  );
}
