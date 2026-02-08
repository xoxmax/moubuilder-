
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Completed Projects', value: '30+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Partner Landowners', value: '50+' },
    { label: 'Operating Cities', value: '5' },
  ];

  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white">{stat.value}</span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs md:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm md:text-base">
            Actively building in <span className="text-white font-semibold">Dhaka, Chattogram, Sylhet, Rajshahi, and Khulna</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
