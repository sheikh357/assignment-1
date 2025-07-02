"use client";

import { useState } from "react";
import { QuoteForm } from "@/components/quote-form";
import { QuoteCard } from "@/components/quote-card";
import { FormValues } from "@/lib/schema";
import quotesData from "@/data/quotes.json";

interface Quote {
  id: number;
  topic: string;
  quote: string;
  author: string;
}

export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const handleFormSubmit = (values: FormValues) => {
    const filteredQuotes = quotesData.filter(
      (quote: Quote) => quote.topic.toLowerCase() === values.topic.toLowerCase()
    );

    // If no quotes found for the exact topic, show random quotes
    const quotesToShow = filteredQuotes.length > 0 
      ? filteredQuotes 
      : quotesData;

    // Get 3 random quotes from the filtered or all quotes
    const randomQuotes = getRandomQuotes(quotesToShow, 3);
    setQuotes(randomQuotes);
  };

  // Function to get random quotes
  const getRandomQuotes = (quotes: Quote[], count: number) => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Motivational Quote Generator</h1>
        <QuoteForm onSubmit={handleFormSubmit} />

        {quotes.length > 0 && (
          <div className="space-y-6 mt-8">
            <h2 className="text-xl font-semibold">Your Motivational Quotes</h2>
            <div className="grid gap-6 md:grid-cols-1">
              {quotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote.quote}
                  author={quote.author}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}