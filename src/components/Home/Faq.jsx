const Faq = () => {
  return (
    <div className="my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div >
          <img src="https://i.ibb.co/mN1PdJ0/faq.jpg" alt="" />
        </div>
        <div className="flex flex-col space-y-2  justify-center">
          {" "}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            How do I upload an assignment?
            </div>
            <div className="collapse-content">
              <p>To upload an assignment, log in to your account and navigate to the Upload Assignment section. Click on the upload button, select the file from your device, provide any additional details or instructions, and then submit the assignment.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            Can I edit my uploaded assignment after submission?
            </div>
            <div className="collapse-content">
              <p> Generally, once an assignment is submitted, it cannot be edited. However, if you need to make changes, you can contact the administrator or instructor for assistance.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            How do I give marks or feedback on an assignment?
            </div>
            <div className="collapse-content">
              <p>To give marks or feedback on an assignment, log in to your account and access the Assignments or Grading section. Select the assignment you want to grade, review the submission, provide feedback, and assign the appropriate marks or grade.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            What file formats are accepted for assignment uploads?
            </div>
            <div className="collapse-content">
              <p>We accept various file formats for assignment uploads, including but not limited to PDF, DOC, DOCX, PPT, PPTX, TXT, and JPEG. Please ensure your file is in one of these formats before uploading.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            How will I know when my assignment has been graded?
            </div>
            <div className="collapse-content">
              <p>You will receive a notification via email or within your account dashboard when your assignment has been graded. You can then log in to your account to view the feedback and marks given by the instructor or reviewer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
