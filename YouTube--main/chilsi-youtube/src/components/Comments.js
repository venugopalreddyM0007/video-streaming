import React from 'react'
import { DEFAULT_USER } from '../utils/Helper'

const comments = [
    {
        name: "John Smith",
        text: "Great job on the project!",
        date: "August 20, 2024",
        replies: [
            {
                name: "Emily Johnson",
                text: "Thank you, John! It was a team effort.",
                date: "August 20, 2024",
                replies: [
                    {
                        name: "John Smith",
                        text: "Glad to hear that!",
                        date: "August 20, 2024"
                    }
                ]
            }
        ]
    },
    {
        name: "Emily Johnson",
        text: "I love the way you handled the UI.",
        date: "August 20, 2024",
        replies: [
            {
                name: "John Smith",
                text: "I appreciate it, Emily! It took some time to get it right.",
                date: "August 20, 2024",
                replies: [
                    {
                        name: "Emily Johnson",
                        text: "It shows! The effort was worth it.",
                        date: "August 20, 2024"
                    }
                ]
            }
        ]
    },
    {
        name: "Michael Brown",
        text: "Can we add more details to the report?",
        date: "August 20, 2024",
        replies: [
            {
                name: "David Wilson",
                text: "Sure, Michael. I’ll include more information in the next version.",
                date: "August 20, 2024",
                replies: [
                    {
                        name: "Michael Brown",
                        text: "Thanks, David. That would be great.",
                        date: "August 20, 2024"
                    }
                ]
            }
        ]
    },
    {
        name: "Sarah Davis",
        text: "The website looks fantastic!",
        date: "August 20, 2024",
        replies: [
            {
                name: "Jessica Martinez",
                text: "Thanks, Sarah! We’ve been working hard on it.",
                date: "August 20, 2024",
                replies: [
                    {
                        name: "Sarah Davis",
                        text: "It really shows. Great work!",
                        date: "August 20, 2024"
                    }
                ]
            }
        ]
    },
    {
        name: "David Wilson",
        text: "Could you review the latest code changes?",
        date: "August 20, 2024",
        replies: [
            {
                name: "Matthew Taylor",
                text: "I’m on it, David. I’ll get back to you shortly.",
                date: "August 20, 2024",
                replies: [
                    {
                        name: "David Wilson",
                        text: "Thanks, Matthew. Much appreciated!",
                        date: "August 20, 2024"
                    }
                ]
            }
        ]
    },
    {
        name: "Jessica Martinez",
        text: "Thanks for the quick response.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Daniel Anderson",
                text: "No problem, Jessica! Glad I could help.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Daniel Anderson",
        text: "This feature is really helpful.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Ashley Jackson",
                text: "I’m glad you find it useful, Daniel!",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Matthew Taylor",
        text: "I encountered a bug on the login page.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Christopher Lewis",
                text: "Thanks for reporting it, Matthew. I’ll look into it.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Laura Thomas",
        text: "Please check the alignment on mobile.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Olivia Harris",
                text: "I’ve noticed that too, Laura. I’ll fix it.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "James Moore",
        text: "Let’s schedule a meeting to discuss this.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Megan Garcia",
                text: "Sounds good, James. I’m available tomorrow afternoon.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Ashley Jackson",
        text: "Your presentation was very clear.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Samantha Lee",
                text: "Thanks, Ashley! I’m glad it made sense.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Brian White",
        text: "Can we optimize the loading time?",
        date: "August 20, 2024",
        replies: [
            {
                name: "Brandon Hall",
                text: "Absolutely, Brian. I’ll work on improving it.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Olivia Harris",
        text: "The animations are smooth and professional.",
        date: "August 20, 2024",
        replies: [
            {
                name: "John Smith",
                text: "Thanks, Olivia! It took a bit of tweaking.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Joshua Martin",
        text: "Please update the documentation.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Laura Thomas",
                text: "I’ll get that updated by end of day.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Samantha Lee",
        text: "The new dashboard design is impressive.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Andrew Thompson",
                text: "Thank you, Samantha! It’s been a big project.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Andrew Thompson",
        text: "Can we add dark mode?",
        date: "August 20, 2024",
        replies: [
            {
                name: "Jessica Martinez",
                text: "Great idea, Andrew. I’ll start working on that.",
                date: "August 20, 2024"
            }
        ]
    },
    {
        name: "Megan Garcia",
        text: "Let’s run more tests before deployment.",
        date: "August 20, 2024",
        replies: [
            {
                name: "Michael Brown",
                text: "Agreed, Megan. I’ll set up the test cases.",
                date: "August 20, 2024"
            }
        ]
    }
];

const CommentList = ({ data }) => {
    const { name, text, date, replies } = data
    return (
        <div className='shadow-sm  bg-gray-100 p-1 rounded m-3'>

            <div className='flex '>
                <img className='h-8 me-3 rounded-[50%]' src={DEFAULT_USER} alt="User" />
                <div>
                    <p className='font-semibold'>{name} <span className='text-xs text-gray-400'>{date}</span></p>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
const AllCommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} className="mb-4">
            <CommentList data={comment} />
            {comment.replies && comment.replies.length > 0 && (
                <div className="ml-4 mt-2 border border-l-black">
                    <AllCommentList comments={comment.replies} />
                </div>
            )}
        </div>
    ));
};




const Comments = () => {
    return (
        <div className='m-2 p-3 '>
            <h1 className='font-bold text-lg'>Comment's:</h1>
            <AllCommentList comments={comments} />
        </div>
    )
}

export default Comments
