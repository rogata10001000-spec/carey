import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-charcoal-200 overflow-hidden transition-shadow hover:shadow-card"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-charcoal-50 transition-colors"
          >
            <span className="flex items-start gap-3 pr-4">
              <span className="text-teal-600 font-semibold text-sm mt-0.5 flex-shrink-0">Q</span>
              <span className="text-charcoal-800 font-medium text-base leading-relaxed">{item.question}</span>
            </span>
            <ChevronDown
              className={`w-5 h-5 text-charcoal-400 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="flex items-start gap-3 pt-4 border-t border-charcoal-100">
                <span className="text-navy-600 font-semibold text-sm mt-0.5 flex-shrink-0">A</span>
                <p className="text-charcoal-600 leading-relaxed text-base">{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
