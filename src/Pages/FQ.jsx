import React , {useState} from 'react'

export default function FQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, PayPal, and various other payment methods.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes between 3-7 business days, depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return any unused item within 30 days of purchase. Please see our return policy for more details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we’ll send you a tracking number via email.",
    },
    {
      question: "Can I change my shipping address?",
      answer:
        "Yes, you can change your shipping address before the order is shipped by contacting our customer support.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b pb-4"
        >
          <button
            className="flex justify-between w-full text-left text-xl font-medium focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
  
  )
}
