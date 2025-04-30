import Person1 from "../assets/images/lead-dev.jpeg";
import Person2 from "../assets/images/ProductM.jpeg";
import Person3 from "../assets/images/hr.jpeg";
import Person9 from "../assets/images/writer.jpeg";  
import Person5 from "../assets/images/frontend1.JPG";
import Person6 from "../assets/images/Frontend2.jpeg";
import Person7 from "../assets/images/design.jpg";
import Person4 from "../assets/images/socials.jpeg";
import Person8 from "../assets/images/graphics.png";

const teamData = {
    boardOfDirectors: [
        {
            id: 1,
            name: "Kazeem",
            position: "CEO",
            image: Person1,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Olatunde Ojesola",
            position: "Product Manager",
            image: Person2,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
        {
            id: 3,
            name: "Amaku Oluchi",
            position: "HR/Admin. Manager",
            image: Person3,
            width: 250,
            height: 300,
            color: "bg-[#5E8E3E]",
        },
        {
            id: 4,
            name: "Morris Ndeobi",
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
            name: "Damilare Ayodele",
            position: "Lead Developer",
            image: Person1,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Michael Olaleye",
            position: "Frontend Developer",
            image: Person6,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
        {
            id: 3,
            name: "Peace Nnorom",
            position: "Frontend Developer",
            image: Person5,
            width: 250,
            height: 300,
            color: "bg-[#5E8E3E]",
        },
    ],
    designMediaTeam: [
        {
            id: 1,
            name: "Abolarin Ayomide",
            position: "UI/UX Designer",
            image: Person7,
            width: 250,
            height: 300,
            color: "bg-[#CC5A71]",
        },
        {
            id: 2,
            name: "Joshua Abioye",
            position: "Graphics Designer",
            image: Person8,
            width: 250,
            height: 300,
            color: "bg-[#3771C8]",
        },
        {
            id: 3,
            name: "Florence Okafor",
            position: "Media Specialist",
            image: Person9,
            width: 250,
            height: 300,
            color: "bg-[#5E8E3E]",
        },
        {
            id: 4,
            name: "Morris Anderson",
            position: "Head Of Socials",
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
            name: "Oluchi Amaku",
            position: "HR/Admin. Manager",
            image: Person3,
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
