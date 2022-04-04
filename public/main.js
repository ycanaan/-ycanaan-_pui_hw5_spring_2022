function course(name, description, keyTopics, preReq, relevance, goals,className) {
    this.name = name;
    this.description = description;
    this.keyTopics = keyTopics;
    this.preReq = preReq;
    this.relevance = relevance;
    this.goals = goals;
    this.className = "classA";
}



var myCourses=[];
var current_course_id = -1;

function showCourse(){
  document.getElementById("course-name").textContent = courses[0].name;
  document.getElementById("course-description").textContent = courses[0].description;
  document.getElementById("key-topics").textContent = courses[0].keyTopics;
  document.getElementById("pre-req").textContent = courses[0].preReq;
  document.getElementById("relev").textContent = courses[0].relevance;
  document.getElementById("course-goals").textContent = courses[0].goals;
}

function test(){
    var pui = new course ("05-430 Programmable User Interfaces","This course is combines lecture, and an intensive programming lab and design studio. It is for those who want to express their interactive ideas in working prototypes. It will cover the importance of human-computer interaction/interface design, iterative design, input/output techniques, how to design and evaluate interfaces, and research topics that will impact user interfaces in the future. In lab, you will learn how to design and program effective graphical user interfaces, and how to perform user tests. We will cover a number of prototyping tools and require prototypes to be constructed in each, ranging from animated mock-ups to fully functional programs. Assignments will require implementing UIs, testing that interface with users, and then modifying the interface based on findings. Some class sessions will feature design reviews of student work. This course is for HCII Masters students and HCI dual majors with a minimal programming background. Students will often not be professional programmers, but will need to interact with programmers. RECITATION SELECTION: Students taking this course can sign up for either Prototyping Lab recitation. PREREQUISITES: Proficiency in a programming language, program structure, algorithm analysis, and data abstraction. Normally met through an introductory programming course using C, C++, Pascal or Java, such as 15100, 15112, 15127 or equivalent. Students entering this course should be able to independently write a 300-line program in 48 hours. Students in the HCI Additional Major have priority registration in this course and ALL students will automatically be placed on a waitlist.","The course will cover the basics of rapid prototyping, discount usability, user testing, perception and cognition as related to UX design, and get a glimpse of the future of UX design","Proficiency in a programming language, program structure, algorithm analysis, and data abstraction. Normally met through an introductory programming course using C, C++, Pascal or Java, such as 15100, 15112, 15127 or equivalent. Students entering this course should be able to independently write a 300-line program in 48 hours.","Students taking this course will have a stronger grasp of concepts fundamental to UX design, including rapid prototyping, discount usability, perception and cognition, and more.","Students will have a deeper conceptual and procedural knowledge as to how to design, implement, and evaluate user interfaces.");
    var ixdi = new course ("05-651 Interaction Design Studio 1","This studio course introduces students to design thinking and the basic practices of interaction design. We follow a human-centered design process that includes research, concept generation, prototyping, and refinement. Students must work effectively as individuals and in small teams to design mobile information systems and other interactive experiences. Assignments approach design on three levels: specific user interactions, contexts of use, and larger systems. Students will become familiar with design methodologies such as sketching, storyboarding, wire framing, prototyping, etc. No coding is required. This course serves as a prerequisite for Interaction Design Studio (05-650). Students who are required to take this course have priority and will be enrolled first.","Interaction design, human-centered design process, prototyping, critiques.","Prerequisite knowledge includes deep interest in HCI and IxD, with a range of entry points, such as software development, psychology, design, and engineering. These prerequisites are part of the admission process into either the MHCI or the BHCI programs. Some students are enrolled by permission of the instructor.","Required for MHCI students and undergraduate HCI majors. This course is intended to prepare students to either become interaction designers or to work with designers on interdisciplinary teams.","To secure proficiency in the thinking, methodologies, and skills required to be an interaction designer. To prepare students for success in IXDS2.");
    var ixdii = new course ("05-650 Interaction Design Studio 2","This course follows Interaction Design Fundamentals (05-651). Students are expected to apply what they have learned about design thinking and methodologies as a starting point for all assignments. Students will work in teams to perform guerrilla research, synthesize data, and consider the needs of multiple stakeholders in their design of mobile services and other intelligent systems. Design concepts go beyond user interfaces to include sensors, controls, and ubiquitous computing. Emphasis is placed on the quality of the students ideas and their ability to give form to their design concepts. By completing and presenting their work, students will gain skills related to professional UX design practice.","This course builds on the strategic thinking, methods, and skills learned in IxDS1 05-651 (Studio 1) to further refine professional capabilities in interaction design.","IxDS1 or the equivalent: foundational design skills (typography, graphic design, etc.), control design principles (affordances, feedforward, feedback, etc.), data visualization, and responsive web design.","This rigorous, graduate-level course prepares students for real-world work in interaction design teams. It inculcates collaborate skills by bringing together students from a variety of disciplines, as both individuals and team members, in the execution of a series of design projects. Through these projects, students gain experience with a series of design methods that combine to form a disciplined approach to designing for interaction.","Building on Studio 1, this course aims to make students successful in collaborating on professional design teams. By the end of the course, students will be able to frame situation of user need and then envision possible solutions in the form of an interactive system, and they will prioritize and select among their design variations to refine a design into a finished state that can be used by developers for implementation.");
    var ucre = new course ("05-410 User-Centered Research and Evaluation","This course provides an overview and introduction to the field of human-computer interaction (HCI). It introduces students to tools, techniques, and sources of information about HCI and provides a systematic approach to design. The course increases awareness of good and bad design through observation of existing technology and teaches the basic skills of generative and evaluative research methods. This is a companion course to courses in visual design (51-422) and software implementation (05-430, 05-431). When registering for this course, undergraduate students are automatically placed the wait list. Students will be then moved into the class, based on if they are in the BHCI second major and year in school e.g. seniors, juniors, etc In the Fall, this course is NOT open to students outside the HCI major. The Spring offering is open to all students. This course is a core requirement for students in the HCI additional major.","This course covers a variety of user research methods for both generating new systems designs and evaluating them.","We assume you already have a strong background in some aspect of computer system design.","This course is intended to make you an effective, professional system designer and analyst incorporating user research.","Students will collect and analyze information about the participants in a system, design new systems that fulfill the users' needs and goals, work in teams to access multiple perspectives and exploit varying talents, and communicate with a system's users to improve designs.");
    var thesis = new course ("05-571 Undergraduate Project in HCI","Experiential learning is a key component of the MHCI program. Through a substantial team project, students apply classroom knowledge in analysis and evaluation, implementation and design, and develop skills working in multidisciplinary teams. Student teams work with Carnegie Mellon University-based clients or external clients to iteratively design, build and test a software application which people directly use.","A semester-long capstone project for students in the HCI 2nd major that integrates everything the students have learned in their coursework into one end-to-end experience.","Students must be in a position to finish the HCI 2nd major by the end of the semester.","Students work in interdisciplinary teams for a client to produce a working prototype that serves as a proof of concept of a novel service or product idea.","Understand how user-centered research, interaction design, prototyping, and testing with users can be combined effectively to solve significant problems");
    var hcielec = new course ("05-589 Independent Study in HCI","In collaboration with and with the permission of the professor, undergraduate students may engage in independent project work on any number of research projects sponsored by faculty. Students must complete an Independent Study Proposal, negotiate the number of units to be earned, complete a contract, and present a tangible deliverable. The Undergraduate Program Advisor's signature is required for HCI undergraduate-level Independent Study courses. When registering for this course, undergraduate students are automatically placed the waitlist. Please note this course is ONLY for students currently in the HCI Additional Major.","This is based on the individual study the student is working on. Students create a proposal with learning objectives, time commitments, and deliverables with the faculty member they are working with.","This is based on the individual study the student is working on. Students create a proposal with learning objectives, time commitments, and deliverables with the faculty member they are working with.","This is based on the individual study the student is working on. Students create a proposal with learning objectives, time commitments, and deliverables with the faculty member they are working with.","This is based on the individual study the student is working on. Students create a proposal with learning objectives, time commitments, and deliverables with the faculty member they are working with.");
    var courses=[pui,ixdi,ixdii,ucre,thesis,hcielec];
    current_course_id = id;
    document.getElementById("course-name").textContent = courses[id].name;
    document.getElementById("course-description").textContent = courses[id].description;
    document.getElementById("key-topics").textContent = courses[id].keyTopics;
    document.getElementById("pre-req").textContent = courses[id].preReq;
    document.getElementById("relev").textContent = courses[id].relevance;
    document.getElementById("course-goals").textContent = courses[id].goals;
    document.getElementById("pid").style.display = "none";
    document.getElementById("tid").style.display="block";

}



function addCourse(){
    if (localStorage.savedCourses)
    {
     myCourses = JSON.parse(localStorage.getItem("savedCourses"));
    }
    //
    if (current_course_id>-1)
    {myCourses.push(current_course_id);
    }
    // check if current_course_id exisits in myCourses before adding

    console.log(myCourses);
    localStorage.setItem("savedCourses", JSON.stringify(myCourses));
    console.log(localStorage);
}
function showSchedule() {

    myCourses = JSON.parse(localStorage.getItem("savedCourses"));
    console.log(myCourses);
    if (myCourses.includes(0)){
        //alert("pui is added!");
        document.getElementById("pui").className =("show");
        document.getElementById("pui2").className =("show");
    }
    if (myCourses.includes(1)){
        document.getElementById("ixd").className =("show");
        document.getElementById("ixd1").className =("show");
    }
    if (myCourses.includes(2)){
        document.getElementById("ixd2").className =("show");
        document.getElementById("ixd3").className =("show");
    }
    if (myCourses.includes(3)){
        document.getElementById("ucre1").className =("show");
        document.getElementById("ucre2").className =("show");
    }
    if (myCourses.includes(4)){
        document.getElementById("proj1").className =("show");
        document.getElementById("proj2").className =("show");
    }
    if (myCourses.includes(5)){
        document.getElementById("ind").className =("show");
    }
}

function removeCourse(){

    if (localStorage.savedCourses)
     {   myCourses = JSON.parse(localStorage.getItem("savedCourses"));
 console.log("savedCourses");
  console.log (myCourses);
    console.log (current_course_id);

 for( var i = 0; i < myCourses.length; i++){

        if ( myCourses[i] === current_course_id) {

            myCourses.splice(i, 1);
        }

    }
     console.log("updated savedCourses");
     console.log (myCourses);
         localStorage.setItem("savedCourses", JSON.stringify(myCourses));

    console.log (current_course_id);
}


}

function change_text(){
    document.getElementById("button").innerHTML = "Course Added!";
}

function clickAndDisable(link) {
   link.onclick = function(event) {
    event.preventDefault();
}
}

