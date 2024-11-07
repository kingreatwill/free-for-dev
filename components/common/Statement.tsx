/* eslint-disable react/no-unescaped-entities */
import React from 'react';

interface StatementItem {
  question: string;
  answer: any;
}

const datas: StatementItem[] = [
  {
    question: '',
    answer: (
      <>
        <p>
          This website originates from the{' '}
          <a
            href="https://github.com/kingreatwill/free-for-dev"
            target="_blank"
            className="font-medium underline text-primary underline-offset-4"
          >
            free-for-dev
          </a>{' '}
          project, which helps developers or indie hackers quickly find free
          software (SaaS, PaaS, IaaS, etc.). This project converts the large
          markdown file into an interactive mind map for quick searching and
          filtering. This webpage is hosted on{' '}
          Github Pages
          , a free global acceleration static website hosting service. This
          webpage is open source on{' '}
          <a
            href="https://github.com/kingreatwill/free-for-dev"
            target="_blank"
            className="font-medium underline text-primary underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </>
    ),
  },
];

const Statement: React.FC = () => {
  return (
    <section className="w-full p-8 mx-auto">
      <div className="space-y-6">
        {datas.map((item, index) => (
          <div key={index}>
            {item.question && (
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                {item.question}
              </h3>
            )}
            {item.answer}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statement;
