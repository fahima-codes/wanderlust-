import Image from 'next/image';

const features = [
  {
    icon: '/images/ShieldCheck.png',
    title: 'Safe & Secure',
    description:
      'Your safety is our priority with comprehensive travel insurance and 24/7 support.',
  },
  {
    icon: '/images/MapTrifold.png',
    title: 'Expert Guides',
    description:
      'Local experts who bring destinations to life with authentic cultural insights.',
  },
  {
    icon: '/images/Headset.png',
    title: '24/7 Support',
    description:
      'Round-the-clock customer service to assist you wherever your journey takes you.',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#e4f4f7] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-xs text-neutral-600 md:text-sm">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 shadow-sm">
              <Image
                src={feature.icon}
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
              <h3 className="mt-4 text-xl text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
