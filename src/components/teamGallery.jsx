import Person1 from "../assets/images/person.svg";
import Person2 from "../assets/images/person2.png";
import Person3 from "../assets/images/person3.svg";
import Person4 from "../assets/images/person4.png";

const teamData = {
    boardOfDirectors: [
        {
            id: 1,
            name: "Martina Anderson",
            position: "CEO",
            image: Person1,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Jackson Patterson",
            position: "Head of Development",
            image: Person2,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
        {
            id: 3,
            name: "Sophia Richardson",
            position: "HR/Admin. Manager",
            image: Person3,
            width: 250,
            height: 300,
            color: "bg-[#5E8E3E]",
        },
        {
            id: 4,
            name: "Marcus Anderson",
            position: "Head of Socials",
            image: Person4,
            width: 250,
            height: 300,
            color: "bg-[#071856]",
        },
    ],
    developmentTeam: [
        {
            id: 1,
            name: "Martina Anderson",
            position: "Lead Developer",
            image: Person1,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Jackson Patterson",
            position: "Backend Developer",
            image: Person2,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
        {
            id: 3,
            name: "Sophia Richardson",
            position: "Frontend Developer",
            image: Person3,
            width: 250,
            height: 300,
            color: "bg-[#5E8E3E]",
        },
    ],
    designMediaTeam: [
        {
            id: 1,
            name: "Martina Anderson",
            position: "Design Lead",
            image: Person1,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Jackson Patterson",
            position: "UI/UX Designer",
            image: Person2,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
        {
            id: 3,
            name: "Sophia Richardson",
            position: "Media Specialist",
            image: Person3,
            width: 250,
            height: 300,
            color: "bg-[#5E8E3E]",
        },
        {
            id: 4,
            name: "Marcus Anderson",
            position: "Content Creator",
            image: Person4,
            width: 250,
            height: 300,
            color: "bg-[#071856]",
        },
    ],
    administrativeTeam: [
        {
            id: 1,
            name: "Martina Anderson",
            position: "Office Manager",
            image: Person1,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Jackson Patterson",
            position: "HR/Admin. Manager",
            image: Person2,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
    ],
};

// Team member card component
const TeamMemberCard = ({ member }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md ">
            <div className=" h-64 overflow-hidden">
                <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className={` text-center px-4 py-3 h-[100px] ${member.color}`}>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-100">{member.position}</p>
            </div>
        </div>
    );
};

// Team section component
const TeamSection = ({ title, members }) => {
    return (
        <div className="mb-12">
            <h2 className="text-xl font-bold text-[#071856] uppercase mb-6">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {members.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
};

// Team gallery component
const TeamGallery = () => {
    return (
        <div className="py-6 ">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <TeamSection title="Board of Directors" members={teamData.boardOfDirectors} />
                    <TeamSection title="The Development Team" members={teamData.developmentTeam} />
                    <TeamSection title="The Design & Media Team" members={teamData.designMediaTeam} />
                    <TeamSection title="The Administrative Team" members={teamData.administrativeTeam} />
                </div>
            </div>
        </div>
    );
};

export default TeamGallery;