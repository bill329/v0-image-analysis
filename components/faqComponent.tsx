interface FAQ {
  question: string;
  answer: string;
}

interface FaqComponentProps {
  nycFaqs?: FAQ[];
}

export default function FaqComponent({ nycFaqs = [] }: FaqComponentProps) {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {nycFaqs.map((faq, index) => (
            <details
              key={index}
              className="border border-solid border-irmt-light_gray overflow-hidden rounded-xl shadow-sm bg-irmt-white"
            >
              <summary className="cursor-pointer list-none w-full flex justify-between items-center bg-irmt-white p-5 text-left font-bold text-lg">
                {faq.question}
              </summary>
              <div className="px-5 pb-3 pt-3 text-irmt-black text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
