import React from 'react';
import MentorNavbar from "../../components/Navbar/MentorNavbar"
const mentors = [
  {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    details: 'Expert in Startup Scaling and Operations.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    phone: '987-654-3210',
    email: 'jane.smith@example.com',
    details: 'Specializes in AI-driven Startup Innovations.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Michael Johnson',
    phone: '555-555-5555',
    email: 'michael.johnson@example.com',
    details: 'Mentor in Startup Legal and Compliance Issues.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Emily Davis',
    phone: '111-222-3333',
    email: 'emily.davis@example.com',
    details: 'Expert in Startup Marketing and Growth Hacking.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'David Brown',
    phone: '444-555-6666',
    email: 'david.brown@example.com',
    details: 'Specialist in Startup Fundraising and Investor Relations.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sarah Wilson',
    phone: '777-888-9999',
    email: 'sarah.wilson@example.com',
    details: 'Focuses on Sustainable Business Models for Startups.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'James Miller',
    phone: '999-888-7777',
    email: 'james.miller@example.com',
    details: 'Mentor in Startup Product Development and Design.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Linda Taylor',
    phone: '555-444-3333',
    email: 'linda.taylor@example.com',
    details: 'Expert in Startup HR and Team Building.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Robert Anderson',
    phone: '888-777-6666',
    email: 'robert.anderson@example.com',
    details: 'Specializes in Startup Finance and Accounting.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Laura Martinez',
    phone: '333-222-1111',
    email: 'laura.martinez@example.com',
    details: 'Expert in Startup Market Research and Customer Development.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Kevin Lee',
    phone: '222-333-4444',
    email: 'kevin.lee@example.com',
    details: 'Mentor in Startup Strategy and Business Planning.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Nancy Clark',
    phone: '123-987-6543',
    email: 'nancy.clark@example.com',
    details: 'Specializes in Digital Marketing for Startups.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Steven Wright',
    phone: '321-654-9870',
    email: 'steven.wright@example.com',
    details: 'Focuses on Startup IT Infrastructure and Security.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Catherine White',
    phone: '654-321-0987',
    email: 'catherine.white@example.com',
    details: 'Expert in Customer Support Systems for Startups.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Paul Green',
    phone: '789-012-3456',
    email: 'paul.green@example.com',
    details: 'Mentor in Startup Legal Structures and Intellectual Property.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jennifer King',
    phone: '012-345-6789',
    email: 'jennifer.king@example.com',
    details: 'Specialist in Social Media Marketing for Startups.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Daniel Adams',
    phone: '543-210-9876',
    email: 'daniel.adams@example.com',
    details: 'Focuses on AI and Machine Learning Startups.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Patricia Hall',
    phone: '876-543-2109',
    email: 'patricia.hall@example.com',
    details: 'Expert in Startup Ecosystem and Partnerships.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thomas Scott',
    phone: '789-654-3210',
    email: 'thomas.scott@example.com',
    details: 'Mentor in Startup Customer Acquisition and Retention.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sandra Lewis',
    phone: '901-234-5678',
    email: 'sandra.lewis@example.com',
    details: 'Specializes in UX/UI for Startup Products.',
    image: 'https://via.placeholder.com/150',
  },
];


function Mentor() {
  return (
    <>
    <MentorNavbar/>
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {mentors.map((mentor, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg w-full h-72" src='data:image/jpeg;base64,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' alt={mentor.name} />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {mentor.name}
            </h5>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              <strong>Phone:</strong> {mentor.phone}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              <strong>Email:</strong> {mentor.email}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {mentor.details}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Mentor
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Mentor;
