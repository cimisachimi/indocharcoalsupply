import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const TeamMemberCard = ({ imageSrc, name, role }: { imageSrc: string, name: string, role: string }) => (
  <div className="text-center">
    <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 shadow-lg">
      {/* TODO: Add your team member images to the `public/team/` folder 
              (e.g., /public/team/member-1.webp)
            */}
      <Image src={imageSrc} alt={`Photo of ${name}`} fill style={{ objectFit: 'cover' }} />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-brand-orange font-semibold">{role}</p>
  </div>
);

const OurTeam: React.FC = () => {
  const t = useTranslations('team'); // 👈 Namespace "team"

  const teamMembers = [
    {
      imageSrc: "/team-image/member1.webp",
      name: "ADAM BILLAH HADI WARDOYO ",
      role: "Chief Executive Officer"
    },
    {
      imageSrc: "/team-image/member2.webp",
      name: "AZIZAH NAYANDA FADHILAH ",
      role: "Chief Financial Officer"
    },
    {
      imageSrc: "/team-image/member3.webp",
      name: "WASESA BERLIANTO",
      role: "Chief Marketing Officer"
    }
  ];

  return (
    <section id="our-team" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;