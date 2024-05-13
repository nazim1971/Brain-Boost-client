

const HowItWorks = () => {
    return (
        <div>
            <div className=" my-20  grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-center space-y-5">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Efficient Assignment Management: <span className="text-rose-500">A Comprehensive Guide</span> </h1>
                    <p>Simplified Assignment Management From Upload to Completion.
Empowering Academic Success Navigating the Assignment Process</p>
                </div>
                
                
                <img className="   w-full h-80 rounded-2xl" src="https://i.ibb.co/txk2NqQ/details.jpg " alt="" />
                
                
            </div>
            <div className="my-8 space-y-5">
            <h1 className="text-3xl font-semibold">1. Upload Assignments:</h1>
            <ul className="list-disc pl-8">
                <li>Users can easily upload assignments by providing essential details such as title, topic, deadline, and total marks.</li>
                <li>Supported file formats include documents, presentations, and any other relevant file types.</li>
            </ul>
            </div>
            <div className="my-8 space-y-5">
            <h1 className="text-3xl font-semibold">2. Attend Assignments:</h1>
            <ul className="list-disc pl-8">
                <li>Students can browse through available assignments and choose the ones they wish to complete.</li>
                <li>They can then submit their work, including a document file and additional notes if necessary.</li>
            </ul>
            </div>
            <div className="my-8 space-y-5">
            <h1 className="text-3xl font-semibold">3. Grading Process:</h1>
            <ul className="list-disc pl-8">
                <li>Instructors or designated reviewers access pending assignments and evaluate them based on predefined criteria.</li>
                <li>They provide feedback, assign marks, and mark the assignment as complete once graded.
</li>
            </ul>
            </div>
            <div className="my-8 space-y-5">
            <h1 className="text-3xl font-semibold">4. Status Updates:</h1>
            <ul className="list-disc pl-8">
                <li>As assignments progress through the system, their status is updated accordingly.</li>
                <li>Users can track the status of their submitted assignments, from pending to complete.
</li>
            </ul>
            </div>
            <div className="my-8 space-y-5">
            <h1 className="text-3xl font-semibold">5. Collaborative Learning:</h1>
            <ul className="list-disc pl-8">
                <li>The platform encourages collaboration among users by facilitating discussions, feedback exchanges, and peer-to-peer interaction.</li>
                <li>Users can engage with each other, share insights, and learn collaboratively to enhance their academic experience.</li>
            </ul>
            </div>
            <div className="my-8">
                <h1 className="text-xl font-bold">By following these steps, users can efficiently manage their assignments, participate in the grading process, and contribute to a dynamic learning community.</h1>
            </div>
        </div>
    );
};

export default HowItWorks;