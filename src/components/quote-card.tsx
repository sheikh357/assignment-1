import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface QuoteCardProps {
  quote: string;
  author: string;
}

export function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="text-2xl font-bold">&ldquo;</div>
        <div className="text-2xl font-bold">&rdquo;</div>
      </CardHeader>
      <CardContent>
        <p className="text-lg italic">{quote}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <p className="text-sm text-gray-500">- {author}</p>
      </CardFooter>
    </Card>
  );
}