
'use client';

import { useEffect, useState } from 'react';

interface CardInfo {
  id: string;
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export default function CardSummary() {
  const [cards, setCards] = useState<CardInfo[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('https://6877c66edba809d901f0de01.mockapi.io/card'); 
      const result = await response.json();
      setCards(result);
    };

    fetchCards();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-md"
        >
          <div className="text-sm">Balance</div>
          <div className="text-3xl font-bold mb-4">{card.balance}</div>
          <div className="text-sm">CARD HOLDER</div>
          <div className="mb-2">{card.cardHolder}</div>
          <div className="text-sm">VALID THRU</div>
          <div>{card.validThru}</div>
          <div className="mt-4 tracking-widest">{card.cardNumber}</div>
        </div>
      ))}
    </div>
  );
}
