import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    answering: false,
    finished: false,
    currentQuestion: 0,
    answers: [],
    verified: [],
    survey: [
        {
            question: '1. ¿The timebox for a daily Scrum is?',
            options: {
                A: 'The same time of day every day',
                B: 'Two minutes per person',
                C: '4 hours',
                D: '15 minutes',
                E:
                    '15 minutes for a 4 week sprint, proportionally less for shorter sprints.'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question: '2. Which statement best describes Scrum?',
            options: {
                A:
                    'A complete methodology that defines how to develop software',
                B:
                    'A cookbook that defines best practices for a software development',
                C:
                    'A framework within which complex products in complex environments are developed',
                D:
                    'A defines and predictive process that conforms to the principles of Scientific Management'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '3. What is the primary way a Scrum Master keeps a Development Team working at its highest level of productivity?',
            options: {
                A:
                    'By facilitating Development Team Decisions and removing impediments',
                B: 'By ensuring the meetings start and end at the proper time',
                C:
                    'By preventing changes to the Backlog once the Sprint begins',
                D: 'By keeping high value features high in the Product Backlog'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                "4. The CEO asks the Development Team to add a 'very important' item to the current Sprint. What should the development team do?",
            options: {
                A: 'Add the item to the current Sprint without any adjustments',
                B:
                    'Add the items to the current Sprint and drop an item of equal size',
                C: 'Add the item to the next Sprint',
                D: 'Inform the product Owner so he/she can work with the CEO.'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '5. Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly?',
            options: {
                A: 'The Product Owner',
                B: 'The Development Team',
                C: 'The Scrum Master',
                D: 'The Project Manager'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '6. What does it mean to say that an event has a timebox?',
            options: {
                A: 'The event must happen at a set time.',
                B: 'The event must happen by a given time',
                C: 'The event must take at least a minimum amount of time',
                D: 'The event can take no more than a maximun amount of time'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '7. Which two (2) things does the Development Team not do during the first Sprint?',
            options: {
                A:
                    'Deliver an increment of potentially shippable functionality',
                B: 'Nail down the complete architecture and infraestructure',
                C: 'Develop and deliver at least one piece of functionality',
                D: 'Develop a plan for the rest of the project'
            },
            correct: ['B', 'D'],
            isMultiple: true
        },
        {
            question:
                '8. Development Team members volunteer to own a Sprint Backlog item:',
            options: {
                A: 'At the Sprint planning meeting.',
                B:
                    "Never. All Sprint Backlog Items are 'Owned' by the entire Development Team, even though each one may be done by an individual team member.",
                C: 'Whenever a team can accommodate more work',
                D: 'During the Daily Scrum'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question: "9. Scrum Master is a 'management' position?",
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '10. The reason the Scrum Master is at the Daily Scrum is:',
            options: {
                A:
                    'To make sure everyone answers the three questions in order of seniority',
                B:
                    'He or she does not have to be there; he or she only has to ensure the Development Team has a Daily Scrum.',
                C:
                    'To write any changes to the sprint Backlog, including adding new items, and tracking progress on the burndown.',
                D: 'So he or she knows what to report to management'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '11. The Development Team should have all the skills needed to:',
            options: {
                A:
                    'Complete the project as estimated when the date and cost are committed to the product owner.',
                B:
                    'Do all the development work, but not the types of testing that require specialized testing, tools, and environments.',
                C:
                    'Turn the Product Backlog items it selects into an increment of potentially shippable product functionality.'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question: '12. ¿What is the maximum length of a Sprint?',
            options: {
                A:
                    'Not so long that the risk is unacceptable to the Product Owner',
                B:
                    "Not so long that other business events can't be readily synchronized with the development work.",
                C: 'No more than one calendar month.',
                D: 'All of these answers are correct.'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '13. When the Development Team determines that it has over-committed itself for a Sprint, who has to be present when reviewing and adjusting the Sprint work selected?',
            options: {
                A: 'The Scrum Master, project manager and Development Team.',
                B: 'The Product Owner and Development Team.',
                C: 'The Product Owner and All stakeholders.',
                D: 'The Development Team.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '14. The development Team should not be interrupted during the Sprint. The work it selects for a Sprint should not be changed. The Sprint Goal should remain intact. All of these attributes of a Sprint foster creativity, quality and productivity. Based on this, which of the following is FALSE?',
            options: {
                A:
                    'The Product Owner can help clarify or optimize the Sprint when asked by the Development Team.',
                B:
                    'The Sprint Backlog and its contents are fully formulated in the Sprint Planning meeting and do not change during the Sprint.',
                C:
                    'As a descomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges.',
                D:
                    'The Development Team may work with the Product Owner to remove or add work if it finds it has more or less capacity than it expected.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '15. ¿What is the recommended size for a Development Team (within the Scrum Team)?',
            options: {
                A: '3 plus or minus 1',
                B: '6 plus or minus 3',
                C: '9 plus or minus 2',
                D: '15 plus or minus 3'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question: '16. ¿Who is required to attend the Daily Scrum?',
            options: {
                A: 'The Development Team',
                B: 'The Scrum Team',
                C: 'The Development Team and Scrum Master.',
                D: 'The Development Team and Product Owner',
                E: 'The Scrum Master and Product Owner.'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '17. ¿Which of the below are roles on a Scrum Team?',
            options: {
                A: 'Development Team',
                B: 'Users',
                C: 'Customers',
                D: 'Product Owner',
                E: 'Scrum Master'
            },
            correct: ['A', 'D', 'E'],
            isMultiple: true
        },
        {
            question: '18. ¿Which statement best describes the Sprint Review?',
            options: {
                A: "It is a review of the team's during the Sprint.",
                B:
                    'It is when the Scrum Team and Stakeholders inspect the outcome of the Sprint and figure out what to do in the upcoming Sprint.',
                C:
                    'It is a demo at the end of the Sprint for everyone in the organization to provide feedback on the work done.',
                D:
                    'It is used to congratulate the Development Team if it did what it committed to doing, or to punish the Development Team if it failed to meet its commitments.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                "19. ¿Which statement best describes a Product Owner's responsibility?",
            options: {
                A:
                    'Optimizing the Return on investment (ROI) and the Total Cost of ownership (TCO) of the work the Development Team does.',
                B: 'Directing the Development Team.',
                C:
                    'Managing the project and ensuring that the work meets the commitments to the stakeholders.',
                D: 'Keeping stakeholders at bay.'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: "20. Scrum does not have a role called 'project manager'",
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '21. Which of the following options is MOST accurate about Scrum',
            options: {
                A: 'Scrum optimize change',
                B: 'Scrum optimize quality',
                C: 'Scrum optimize a plan',
                D: 'Scrum optimize predictability'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '22. Which of the following is NOT a characteristic of a Scrum Development Team? ',
            options: {
                A: 'Possesses all of the skills to create a product increment',
                B:
                    'Determines how to turn a Product Backlog item into a product increment after the architecture and requirements are documented',
                C: 'Accountability is shared amongst all team members',
                D: 'There are not titles other than Developer'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '23. How are the decisions of the Product Owner made visible? (select two)',
            options: {
                A: 'By the ordering in the Product Backlog',
                B: 'By the number of errors in the delivered product',
                C: 'By the quality of the delivered product',
                D: 'By the content in the Product Backlog'
            },
            correct: ['A', 'D'],
            isMultiple: true
        },
        {
            question:
                '24. Scrum Teams deliver products ________________ and _________________',
            options: {
                A: 'Iteratively, at lower costs',
                B: 'Iteratively, incrementally',
                C: 'Iteratively, without mistakes',
                D: 'Iteratively, waterfall way'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '25. What are the risks of making a Sprint too long? (select two)',
            options: {
                A: 'Risk may increment',
                B: 'Focus increase',
                C: 'Complexity may increase',
                D: 'All of the above'
            },
            correct: ['A', 'C'],
            isMultiple: true
        },
        {
            question:
                '26. What does the Product Backlog management include? 1	Clearly expressing Product Backlog items. 2	Authoring Product Backlog items. 3	Ordering Product Backlog items by size and risk.',
            options: {
                A: 'Only 2',
                B: 'All of the above',
                C: 'Only 1',
                D: 'Only 3'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question: '27. What is the result of Sprint Review?',
            options: {
                A: 'A revised Product Backlog',
                B: 'Critique on the development product increment',
                C: 'A completed Sprint Backlog',
                D: 'The Scrum Master´s documentation on the Sprint statistics'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '28. During which Scrum event is the Sprint Goal crafted?',
            options: {
                A: 'Daily Scrum',
                B: 'Sprint Retrospective',
                C: 'Sprint Review',
                D: 'Sprint Planning'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                "29.What optimizes the Development Team's overall efficiency and effectiveness?",
            options: {
                A: 'Being focused on only small increments at a time',
                B:
                    'Determining how they will complete a given Product Backlog item',
                C: 'Determining which Product Backlog item to pick each Sprint',
                D: 'Working in an agile development framework'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question: '30.Please select which statement is the MOST accurate ',
            options: {
                A:
                    'No one outside of the Scrum Team should be invited to the last session of Sprint Planning',
                B:
                    'The development team may invite other people to the last session of Sprint Planning',
                C:
                    'The Product Owner may invite other people to the last session of Sprint Planning',
                D:
                    'The Scrum Master may invite other people to the last session of Sprint Planning'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '31.The Scrum Master serves the organization in all of the following ways EXCEPT',
            options: {
                A:
                    'Helping employees and stakeholders understand and enact Scrum and empirical product development',
                B:
                    'Working with other Scrum Masters to increase the effectiveness of the application of Scrum in the organization',
                C:
                    'Leading and coaching the organizations in its Scrum adoption',
                D: 'Tracking Scrum implementations within the organization'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '32.How much work must a Development Team do to a Product Backlog item it selects for a Sprint?',
            options: {
                A:
                    'As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the definition of done',
                B: 'As much as it can fit into the Sprint',
                C: 'All development work and at least some testing',
                D: 'Analysis, design, programming, testing and documentation'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '33.Development Team membership should change:',
            options: {
                A: 'Every Sprint to promote shared learning.',
                B: 'Never, because it reduces productivity',
                C:
                    'As needed, while taking into account a short term reduction in productivity',
                D:
                    'As needed, with no special allowance for changes in productivity.'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '34.During a Sprint, a Development Team determines that it will not be able to finish the complete forecast. Who should be present to review and adjust the Sprint work selected?',
            options: {
                A:
                    'The Scrum Master, the project manager and the Development Team.',
                B: 'The Product Owner and the Development Team.',
                C: 'The Product Owner and all stakeholders',
                D: 'The Development Team.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '35.Who is responsible for managing the progress of work during a Sprint?',
            options: {
                A: 'The Development Team.',
                B: 'The Scrum Master',
                C: 'The Product Owner',
                D: 'The Project Manager'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '36.When multiple teams work together on the same product, each team should maintain a separate Product Backlog.',
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '37.The maximum length of the Sprint Review (its time-box) is:',
            options: {
                A: '15 minutes',
                B: 'As long as needed.',
                C:
                    '4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.',
                D: '1 day'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '38.The purpose of the Sprint is to produce a done increment of working product.',
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '39.The time-box for the Sprint Planning meeting is?',
            options: {
                A:
                    '8 hours for a monthly Sprint. For shorter Sprints it is usually shorter.',
                B:
                    '4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.',
                C: 'Monthly',
                D: 'Daily'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '40.When is a Sprint over?',
            options: {
                A:
                    'When all Product Backlog items meet their definition of done',
                B: 'When the Product Owner says it is done.',
                C: 'When all the tasks are completed.',
                D: 'When the time-box expires'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question: '41.When does the next Sprint begin?',
            options: {
                A: 'Every week',
                B: 'Immediately following the next Sprint Planning',
                C: 'When the Product Owner is ready.',
                D: 'Immediately after the conclusion of the previous Sprint.'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '42.How is management external to the Scrum Team involved in the Daily Scrum?',
            options: {
                A: 'The product Owner represents their opinions.',
                B: 'The Scrum Master speaks on their behalf.',
                C:
                    'The Development Team self-manages and is the only management required at the Daily Scrum',
                D:
                    'Management gives an update at the start of each Daily Scrum.'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '43.Choose two responsabilities of a self-organizing Development Team.',
            options: {
                A: 'Do the work planned in the Sprint Backlog.',
                B: 'Increase velocity',
                C: 'Report daily progress to stakeholders',
                D: 'Pull Product Backlog items for the Sprint.',
                E: 'Reorder the Product Backlog.'
            },
            correct: ['A', 'B'],
            isMultiple: true
        },
        {
            question:
                '44.What is the tactic a Scrum Master should use to divide a group of 100 people into multiple Development Team.',
            options: {
                A:
                    'Create teams based on their skills across multiple layers(such as database, UI, etc.)',
                B: 'Ask the Product Owner to assign the people to teams.',
                C: 'Ask the developers to divide themselves into teams.'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '45.In accordance with Scrum theory, how should a group of 100 people be divided into multiple Development Teams',
            options: {
                A:
                    'Check with the allocation department to see who has worked together before and make these the first teams.',
                B:
                    "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge",
                C:
                    'Create a matrix of skills, seniority, and level of experience to assign people to teams.',
                D:
                    'Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams.'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '46.What are three ways Scrum promotes self-organization?',
            options: {
                A:
                    'By the Development Team deciding what work to do in a Sprint.',
                B: 'By not allowing documentation.',
                C: 'By removing titles for Development Team members.',
                D: 'By being a lightweight framework.',
                E:
                    'By preventing stakeholders from entering the development room'
            },
            correct: ['A', 'C', 'D'],
            isMultiple: true
        },
        {
            question:
                '47.Which two of the following are true about the Scrum Master role?',
            options: {
                A:
                    "At the Sprint Review, the Scrum Master identifies what has been 'done' and what has not been 'done'.",
                B:
                    'The Scrum Master assigns tasks to Development Team members when they need work.',
                C:
                    'The Scrum Master is responsible for updating the Sprint Burndown.',
                D:
                    'The Scrum Master helps those outside the team interact with the Scrum Team.',
                E:
                    'The Scrum Master teaches the Development Team to keep the Scrum meetings to their timebox.'
            },
            correct: ['D', 'E'],
            isMultiple: true
        },
        {
            question:
                '48. As the Development Team starts work during the Sprint, it realizes it has selected too much work to finish in the Sprint. What should it do?',
            options: {
                A: 'Find another Scrum Team to give the excess work to.',
                B:
                    'Inform the Product Owner at the Sprint Review, but prior to the demonstration.',
                C:
                    'As soon as possible in the Sprint, work with the product owner to remove some work or Product Backlog items.',
                D:
                    "Reduce the definition of 'Done' and get all of the Product Backlog items 'done' by the new definition."
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '49. Which of these may a Development Team deliver at the end of a Sprint?',
            options: {
                A:
                    'Falling unit tests, to identify acceptance tests for the next Sprint.',
                B: "An increment of working software that is 'done'.",
                C: 'An increment of software with minor known bugs in it.',
                D:
                    'A single document, if that is what the Scrum Master asked for.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '50. How often should Development Team membership change?',
            options: {
                A: 'Every Sprint to promote shared learning.',
                B: 'Never, because it reduces productivity',
                C:
                    'As needed, while taking into account a short term reduction in productivity',
                D:
                    'As needed, with no special allowance for changes in productivity.'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question: '51. Which are properties of the Daily Scrum?',
            options: {
                A: 'Its location and time should remain constant.',
                B: 'It is facilitated by the team lead.',
                C:
                    'It consists of the Scrum Master asking the Team members the three questions.',
                D: 'It is fifteen minutes or less in duration.',
                E: 'It is held first thing in the morning.',
                F: 'It is free form and designed to promote conversation.'
            },
            correct: ['A', 'D'],
            isMultiple: true
        },
        {
            question: '52. The length of a Sprint should be:',
            options: {
                A:
                    'Short enough to keep the business risk acceptable to the Product Owner.',
                B: 'No more than one calendar month.',
                C:
                    'Short enough to be able to synchronize the development work with other business events',
                D: 'All of these answer are correct'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question: '53. Who owns the Sprint Backlog?',
            options: {
                A: 'The Scrum Master',
                B: 'The Scrum Team',
                C: 'The development Team',
                D: 'The Product Owner'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '54. The Product Owner is not collaborating with the Development Team during the Sprint.What are two actions for a Scrum Master to take?',
            options: {
                A:
                    'Stop the Sprint, send the Product Owner to a course and restart',
                B: 'Bring up the problem in the Sprint Retrospective.',
                C:
                    'Coach the Product Owner in the values of Scrum and incremental delivery.',
                D: "Inform the Product Owner's functional manager.",
                E: 'Nominate a proxy Product Owner.'
            },
            correct: ['B', 'C'],
            isMultiple: true
        },
        {
            question:
                '55. A Scrum Team is only allowed to meet with stakeholders during Sprint Review',
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '56. What is the best suited structure for Development Teams in order to produce integrated Increments?',
            options: {
                A:
                    'Each Development Team works only on one technical layer of the system(e.g. GUI, database, middle tier, interfaces)',
                B:
                    'Each Development Team develops functionality from beginning to end throughout all technical layers'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '57. A Scrum Master is working with a Development Team that has members in different physical locations. The Development Team meets in a variety of meeting rooms and has much to do logistically(for example, set up conference calls) before the Daily Scrum. What actions should the Scrum Master take?',
            options: {
                A:
                    'Allow the Development Team to self-manage and determine for itself what to do.',
                B:
                    'Set up the meeting and tell the Development Team that is how it will be done.',
                C: 'Inform management and ask them solve it',
                D:
                    'Ask the Development Team members to alternate who is responsible for meeting setup.'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '58. How should a Development Team deal with non-functional requirements?',
            options: {
                A: 'Ensure every Increment meets them',
                B:
                    'Handle them during the Integration Sprint preceding the Release Sprint.',
                C:
                    "Make sure the release department understands these requirements, but it is not the Development Team's responsibility.",
                D: 'Assign them to the lead developers on the team.'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '59. Which outcome is expected as Scrum Teams mature?',
            options: {
                A:
                    'A Scrum master is no longer needed since they are a mature team now',
                B:
                    "They will improve their definition of 'Done' to include more stronger criteria",
                C:
                    'The Sprint Retrospectives will grow to be longer than 4 hours.',
                D:
                    'There is no need for a time-boxed Sprint, since time-boxes are only for new Scrum Teams.',
                E: 'Sprint Reviews will no longer be needed.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '60. Five new Scrum Teams have been created to build one product. A few of the developers on one of the Development Teams ask the Scrum Master how to coordinate their work with the other teams.What should the Scrum Master do?',
            options: {
                A:
                    'Visit the five teams each day to inspect that their Sprint Backlogs are aligned.',
                B:
                    'Collect the Sprint tasks from the Teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.',
                C:
                    'Teach them that it is their responsibility to work with the other teams to create an integrated increment',
                D:
                    'Teach the Product Owner to work with the lead developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '61. Which of the following are true about the length of the Sprint?',
            options: {
                A:
                    'Sprint length is determined during Sprint Planning, and should hold the time it will take to code the planned features in the upcoming Sprint, but does not include time for any testing',
                B: 'All Sprints must be 1 month or less.',
                C:
                    'The length of the Sprint should be proportional to the work that is done in between Sprints.',
                D:
                    'Sprint length is determined during Sprint Planning, and should be long enough to make sure the Development Team can deliver what is to be accomplished in the upcoming Sprint',
                E:
                    'It is best to have Sprints of consistent length throughout a development effort.'
            },
            correct: ['B', 'E'],
            isMultiple: true
        },
        {
            question:
                '62. What does it mean for a Development Team to be cross-functional?',
            options: {
                A:
                    'The Development Team includes not only developers but also business analysts, architects, developers and testers',
                B:
                    'The Development Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an increment of software',
                C:
                    'Developers on the Development Team work closely with business analysts, architects, developers and testers who are not on the team.',
                D:
                    'The Development Team is a virtual team drawing from separate teams of business analysts, architects, developers and testers'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question: '63. A Sprint Retrospective should be held :',
            options: {
                A: 'At the end of each Sprint',
                B: 'At the beginning of each Sprint',
                C: 'At the end of the last Sprint in a project or a release',
                D: 'Only when the Scrum Team determines it needs one'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '64. How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?',
            options: {
                A:
                    'The Scrum team with the highest velocity pulls Product Backlog items first.',
                B: 'The Product Owner decides.',
                C:
                    'The Product Owner should provide each team with its on Product Backlog',
                D: 'Each Scrum Team takes an equal number of items.',
                E:
                    'The Development Teams pull in work in agreement with the Product Owner'
            },
            correct: ['E'],
            isMultiple: false
        },
        {
            question:
                '65. The Product Owner determines how many Product Backlog items the Development Team selects for a Sprint',
            options: {
                A:
                    'True, accordingly to what was committed to the stakeholders.',
                B:
                    'True, but only after confirmation by the resource manager that the Team has enough capacity',
                C: 'TRUE',
                D: 'False, the Scrum Master does That',
                E: 'False ',
                F:
                    "False, capacity and commitment are the Project manager's responsibility."
            },
            correct: ['E'],
            isMultiple: false
        },
        {
            question:
                '66. Scrum is a methodology that tells in detail how to build software incrementally',
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '67. Who determines how work is performed during the Sprint?',
            options: {
                A: 'Architects',
                B: 'Development Team managers',
                C: 'The Development Team',
                D: 'The Scrum Master',
                E: 'Subject matter experts'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '68. Which statement best describes the Sprint Backlog as outcome of the Sprint Planning',
            options: {
                A: "It is the Development Team's plan for the Sprint",
                B: 'Every item has a designated owner',
                C: 'It is ordered by the Product Owner.',
                D: 'It is a complete list of all work to be done in a Sprint',
                E: 'Each task is estimated in hours.'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '69. Who can abnormally terminate a Sprint?',
            options: {
                A: 'The Stakeholders',
                B: 'The Development Team or its members',
                C: 'The Product Owner',
                D: 'The Scrum Master'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '70. The Product Owner must release each Increment to production.',
            options: {
                A: 'To make sure the Development Team is done every Sprint',
                B: 'When it makes sense',
                C: 'Whenever the product is free of defects.',
                D: 'Without exception'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                "71. During the Sprint, the Scrum Master's role is to do which two of the following : ",
            options: {
                A:
                    'Facilitate the inspection and adaptation opportunities as requested or needed',
                B: 'Monitor the progress of the Development Team',
                C: 'Remove Impediments',
                D: 'Assign tasks with the Scrum Team',
                E: 'Ensure the Product Owner attends all Scrum events',
                F: 'Escalate team conflicts to functional line managers.'
            },
            correct: ['A', 'C'],
            isMultiple: true
        },
        {
            question: '72. When might a Sprint be abnormally terminated?',
            options: {
                A: 'When the Development Team feels that the work is too hard ',
                B: 'When the sales department has an important new opportunity',
                C: 'When the Sprint Goal becomes obsolete',
                D:
                    'When it becomes clear that not everything will be finished by the end of the Sprint'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '73. If two Scrum Teams are added to the development of a product that previously had only one will be the immediate impact on the productivity of the original Scrum Team?',
            options: {
                A: 'Its productivity is likely to decrease',
                B: 'Its productivity is likely to stay the same',
                C: 'Its productivity is likely to increase'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question: '74. What best describes the Product Backlog',
            options: {
                A:
                    'It contains all foreseeable tasks and requirements from which the Scrum Team can develop and mantain a complete project plan',
                B: 'It is baselined to follow change management processes',
                C:
                    'It provides just enough information to enable a Scrum team to start the design phase of a product',
                D:
                    'It is allowed to grow and change as more is learned about the product and its customers'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '75. Which of the following are true about the Product Owner role?',
            options: {
                A:
                    'The Product Owner is accountable for ordering the Product Backlog.',
                B: 'The Product Owner is one person.',
                C:
                    'Multiple people can share the Product Owner role on a Scrum team',
                D:
                    'The Product Owner role can be played by a committee or a team of people',
                E: 'The Product Owner can be influenced by a committee'
            },
            correct: ['A', 'B', 'E'],
            isMultiple: true
        },
        {
            question:
                "76. Who must do all the work to make sure Product Backlog items conform to the Definition of 'Done'?",
            options: {
                A: 'The Development Team',
                B: 'The Scrum Team',
                C: 'The Product Owner',
                D: 'QA Specialists',
                E: 'The Scrum Master'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '77. If burndown charts are used to visualize progress, what d they track?',
            options: {
                A: 'Accumulated cost',
                B: 'Individual worker productivity',
                C: 'Work remaining across time',
                D: 'Accumulated business value delivered to the customer'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '78. The Scrum master observes the Product Owner struggling with ordering the Product Backlog. What is an appropiate action for the Scrum Master to take?',
            options: {
                A:
                    'Present the Product Owner with an ordered Product Backlog to use',
                B:
                    'Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.',
                C:
                    'Suggest that the Development Team does the ordering to be sure that it is a feasible ordering of work',
                D:
                    'Suggest the Product Owner extend the Sprint, so he can have more time to order the  Product Backlog',
                E:
                    'Encourage the Product Owner to work with the Development Team to see which items technically are be to implement.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '79. What happens if the Development Team cannot complete its work by the end of the Sprint?',
            options: {
                A:
                    'The Sprint is extended and Future Sprints use this new duration',
                B:
                    "The Sprint is extended temporarally. Lessons are taken to ensure it doesn't happen again.",
                C:
                    'The Sprint length holds and the Development Team continuosly learns what is actually  possible to do within a Spring of this length.'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '80. When is implementation of a Product Backlog item considered complete?',
            options: {
                A: 'At the of the Sprint',
                B:
                    'When the item has no work remaining in order to be released',
                C:
                    'When QA reports that the item passes all acceptance criteria',
                D:
                    'When all work in the Sprint Backlog related to the item is finished'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question: '81. When can a Development Team cancel a Sprint?',
            options: {
                A: "It can't Only Product Owners can cancel Sprints.",
                B: 'When the Product Owner is absent too often.',
                C: 'When functional expectations are not well understood.',
                D:
                    'When The selected Product Backlog items for the Sprint become unachievable',
                E: 'When a technical dependency cannot be resolved.'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '82. A new developer is having continuing conflicts with existing Development Team members and creating a hostile environment. If necessary, who is responsible for removing the team member?',
            options: {
                A:
                    'The Development Team is responsible, and may need help from the Scrum Master',
                B:
                    'The hiring manager is responsible, because he/she hired the developer',
                C:
                    'The Scrum Master is responsible, because he/she remove impediments.',
                D:
                    'The Product Owner is responsible, because he/she controls the return on investment(ROI).'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question: '83. What are three benefits of self-organization?',
            options: {
                A: 'Increased creativity',
                B: 'Increased self-accountability',
                C: 'Increased accuracy of estimates',
                D: 'Increased commitment',
                E: 'Increased rule compliance'
            },
            correct: ['A', 'B', 'D'],
            isMultiple: true
        },
        {
            question:
                '84. Who should make sure everyone on the Development Team does his or her tasks for the Sprint?',
            options: {
                A: 'The Scrum Master',
                B: 'The Development Team',
                C: 'The Project Manager',
                D: 'The Product Owner',
                E: 'All of the above'
            },
            correct: ['B'],
            isMultiple: true
        },
        {
            question:
                '85. Multiple Scrum Teams working on the same project must have the same Sprint start date.',
            options: {
                A: 'TRUE',
                B: 'FALSE'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                "86. Which two things are appropiate for a Scrum Master to do if the Development Team doesn't have the engineering tools and infrastructure to completely finish each selected Product Backlog item?",
            options: {
                A:
                    "Refocus the current Sprint on establishing the Development Team's infrasstructure instead of delivering increment.",
                B:
                    'Encourage the Product Owner to accept partially done increments until the situation improves.',
                C: 'Declare the Development Team not ready for Scrum.',
                D:
                    'Have the Development Team establish a Definition of Done that is actually possible to achieve given current circumstances.',
                E:
                    'Coach the Development Team to improve its skills, tools and infrastructure over time and adjust the Definition of Done accordingly.'
            },
            correct: ['D', 'E'],
            isMultiple: true
        },
        {
            question:
                '87. Who determines when it is appropiate to update the Sprint Backlog during a Sprint?',
            options: {
                A: 'The Scrum Team',
                B: 'The Project Manager',
                C: 'The Development Team',
                D: 'The Product Owner'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '88. Which two things should the Development Team do during the first Sprint? (select two)',
            options: {
                A: 'Develop at least one piece of functionality',
                B:
                    'Analyze, design, and describe the complete architecture and infrastructure',
                C: 'Make up a plan for the rest of the Project',
                D:
                    'Analyze, describe and document the requirements for the subsequent Sprints.',
                E: 'Create an Increment of potentially releasable software'
            },
            correct: ['A', 'E'],
            isMultiple: true
        },
        {
            question: '89. When should a Sprint Goal be created?',
            options: {
                A: 'During Sprint Planning',
                B:
                    'it should have been created in the previous Sprint during Product backlog refinement',
                C:
                    'It must be established before Sprint Planning in order to begin planning',
                D: 'At any time during the Sprint',
                E: 'A Sprint Goal is not mandatory in Scrum'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '90. What are the two primary ways a Scrum Master keeps a Development Team working at its highest level of productivity?',
            options: {
                A: 'By facilitating Development Team decisions',
                B: 'By removing impediments that hinder the Development Team',
                C: 'By ensuring the meetings start and end at the proper time',
                D: 'By Keeping high value features high in the Product Backlog.'
            },
            correct: ['A', 'B'],
            isMultiple: true
        },
        {
            question: '91.When does the second Sprint start?',
            options: {
                A:
                    'Once the architectural changes for the second Sprint have been approved by the senior architect',
                B:
                    'After the customer completes acceptance testing of the first Sprint',
                C:
                    'After the Product Backlog for the second Sprint has been selected',
                D: 'Immediately after the first Sprint'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question: '92.What is included in the Sprint Backlog?',
            options: {
                A: 'Tasks',
                B: 'Use Cases',
                C: 'User Stories',
                D: 'Tests'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '93.What are two responsibilities of testers in a Development Team  (select two)',
            options: {
                A:
                    'Everyone in the Development Team is responsible for quality',
                B: "Scrum has no 'tester' role",
                C: 'Finding bugs',
                D: 'Tracking quality metrics'
            },
            correct: ['A', 'B'],
            isMultiple: true
        },
        {
            question:
                '94.One of the Scrum events is the Daily Scrum. What are two intended outcomes of the Daily Scrum? (select two)',
            options: {
                A: 'A status report for the upper management',
                B: 'New impediments for the Scrum Master to take care of',
                C:
                    'A shared understanding of the most important work to be undertaken next to achieve the best possible progress toward the Sprint goal',
                D:
                    'An updated Scrum board to make Sprint progress transparent for the stakeholders'
            },
            correct: ['B', 'C'],
            isMultiple: true
        },
        {
            question:
                '95.When many Development Teams are working on a single product, what best describes the definition of Done?',
            options: {
                A:
                    'Each Development Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint',
                B:
                    "All Development Teams must have a definition of 'Done' that makes their combined work potentially releasable",
                C:
                    'Each Development Team uses its own but must make their definition cleat to all other teams so the differences are known',
                D: 'It depends'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                "96.A Development Team is required to deliver a done increment by the end of a Sprint. Select two statements that explain what 'done' means (select two)",
            options: {
                A: 'All work the Development Team is willing to do',
                B: 'Whatever the Product Owner defines as quality',
                C:
                    'Each Development Team uses its own but must make their definition cleat to all other teams so the differences are known',
                D: "No work left from the definition of 'Done'"
            },
            correct: ['B', 'D'],
            isMultiple: true
        },
        {
            question:
                "97.When a Development Team is having trouble delivering a working increment because they don't understand the functional requirement, what should they do?",
            options: {
                A: 'Partially complete the functionality',
                B:
                    'Collaborate with the Product Owner to determine what is possible and acceptable',
                C: 'Add a specialist to the Development Team',
                D: 'Defer the work to a more appropriate Sprint'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '98.When a Development Team determines that it has over committed itself for a Sprint, who has to be present when reviewing and adjusting the Sprint work selected?',
            options: {
                A: 'The Development Team',
                B: 'The Product Owner and the Development Team',
                C: 'The Scrum Master, project manager and Development Team',
                D: 'Nobody'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '99.Which answer best describes the topics covered in Sprint Planning?',
            options: {
                A:
                    'How conditions have changed and how the Product Backlog should evolve',
                B: 'What to do and who will do it',
                C: 'What can be done and how to do it',
                D: 'Who is on the team and what team member roles will be'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '100.Why is the Daily Scrum held at the same time and same place?',
            options: {
                A: 'The Product Owner demands it',
                B: 'The consistency reduces complexity',
                C:
                    'Rooms are hard to book and this lets it be booked in advance',
                D: 'The place can be named'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '101.Who is responsible for tracking the remaining work of the Sprint?',
            options: {
                A: 'The Product Owner',
                B: 'The Development Team',
                C: 'The Scrum Master',
                D: 'The Project Manager'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '102.Who is responsible for tracking the remaining work of the Sprint?',
            options: {
                A: 'The Product Owner',
                B: 'The Development Team',
                C: 'The Scrum Master',
                D: 'The Project Manager'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '103.During a Sprint Retrospective, for what is the Product Owner responsible?',
            options: {
                A:
                    'Summarizing and reporting the discussions to the stakeholders',
                B:
                    'The Product Owner should not take part in Sprint Retrospective',
                C: 'Capturing requirements for the Product Backlog',
                D: 'Participating as a Scrum Team member'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '104.Which are not appropriate topics for discussion in a Sprint Retrospective? ',
            options: {
                A: 'How the team does its work',
                B: 'Team relations',
                C: "Definition of 'Done'",
                D: 'Sprint Backlog for the next Sprint'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question: '105.The Product Backlog is ordered by:',
            options: {
                A: 'Size',
                B: 'Risk',
                C:
                    'Importance, where the most important items are at the top at all times',
                D: 'Items are randomly arranged'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '106.What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?',
            options: {
                A: 'Refine the Product Backlog',
                B:
                    'There are no such activities. The next Sprint starts immediately after the current Sprint',
                C: 'Update the project plan with stakeholders',
                D:
                    'Work with the QA departments on the increment of the current sprint'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                "107.During the Daily Scrum, the Scrum Master's role is to:",
            options: {
                A: 'Make sure that all 3 questions have been answered',
                B:
                    'Teach the Development Team to keep the Daily Scrum within the 15 minute time-box',
                C: 'Lead the discussions of the Development Team',
                D: 'All of the above'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '108.Every Scrum Team must have a Product Owner and Scrum Master',
            options: {
                A:
                    'False. A Scrum Master is only required when asked for by the Development Team',
                B:
                    'True. Outcomes are affected by their participatioin and availability',
                C: 'True. Each must be 100% dedicated to the Scrum Team',
                D:
                    'False. A Product Owner can be replaced by a business analyst in the Development Team.'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '109.Which does a self-organizing Development Team choose?',
            options: {
                A: 'Sprint length',
                B: 'Stakeholders for the Sprint Review',
                C: 'How to best accomplish its work',
                D: 'Product Backlog ordering'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '110.What is the accountability of the Product Owner during Sprint 0?',
            options: {
                A:
                    'Make the complete project plan to commit date, budget and scope to the stakeholders',
                B:
                    'Gathering, eliciting, and analyzing the requirements that will be inserted into the Product Backlog',
                C: 'There is no such thing as Sprint 0',
                D:
                    'Make sure enough Product Backlog items are refined to fill the first 3 sprints'
            },
            correct: ['C'],
            isMultiple: false
        },
        {
            question:
                '111.Which of the following might the Scrum Team discuss during a Sprint Retrospective?',
            options: {
                A: 'Methods of communication',
                B: 'Its Definition of done',
                C: 'The way the Scrum Team does Sprint Planning',
                D: 'All of the above'
            },
            correct: ['D'],
            isMultiple: false
        },
        {
            question:
                '112.For the purpose of transparency, when does Scrum say a new increment of working software must be available?',
            options: {
                A: 'At the end of every Sprint',
                B: 'Before the release Sprint',
                C: 'After the acceptance testing phase',
                D: 'Every 3 sprints'
            },
            correct: ['A'],
            isMultiple: false
        },
        {
            question:
                '113.Which three of the following are timeboxed events in Scrum?',
            options: {
                A: 'Sprint Planning',
                B: 'Sprint 0',
                C: 'Sprint Retrospective',
                D: 'Daily Scrum'
            },
            correct: ['A', 'C', 'D'],
            isMultiple: true
        },
        {
            question: '114.When is the Sprint Backlog created?',
            options: {
                A: 'During the sprint',
                B: 'During the Sprint Planning meeting',
                C: 'At the beginning of the project',
                D: 'Prior to the Sprint Planning meeting'
            },
            correct: ['B'],
            isMultiple: false
        },
        {
            question:
                '115.Why should the Product Owner be present at the Daily Scrum?',
            options: {
                A: 'To hear about impediments in functionality',
                B: "He/She doesn't need to be there",
                C: 'To participate as a Scrum Team member',
                D: "To represent the stakeholders's point of view"
            },
            correct: ['B'],
            isMultiple: false
        }
    ]
};

const stopSurvey = (state, action) => {
    const updatedState = {
        answering: false,
        finished: false,
        currentQuestion: 0,
        answers: [],
        verified: []
    };
    return updateObject(state, updatedState);
};
const initSurvey = (state, action) => {
    const updatedState = {
        answering: true,
        finished: false,
        currentQuestion: 0,
        answers: [],
        verified: []
    };
    return updateObject(state, updatedState);
};
const continueSurvey = (state, action) => {
    const updatedState = {
        answering: true
    };
    return updateObject(state, updatedState);
};
const finishSurvey = (state, action) => {
    const updatedState = {
        answering: false,
        finished: true
    };
    return updateObject(state, updatedState);
};
const prevQuestion = (state, action) => {
    const updatedState = {
        currentQuestion: state.currentQuestion - 1
    };
    return updateObject(state, updatedState);
};
const verifyQuestion = (state, action) => {
    const updatedOption = {
        [state.currentQuestion]: true
    };
    const updatedVerified = updateObject(state.verified, updatedOption);
    const updatedState = {
        verified: updatedVerified
    };
    return updateObject(state, updatedState);
};
const skipQuestion = (state, action) => {
    const updatedState = {
        currentQuestion: state.currentQuestion + 1
    };
    return updateObject(state, updatedState);
};
const nextQuestion = (state, action) => {
    const updatedState = {
        currentQuestion: state.currentQuestion + 1
    };
    return updateObject(state, updatedState);
};
const answeredQuestion = (state, action) => {
    let updatedOptions = {};

    //Single option
    if (state.survey[state.currentQuestion].isMultiple) {
        const updatedSelected = updateObject(
            state.answers[state.currentQuestion],
            {
                [action.event.target.value]: action.event.target.checked
            }
        );
        updatedOptions = {
            [state.currentQuestion]: updatedSelected
        };
    } else {
        updatedOptions = {
            [state.currentQuestion]: {
                [action.event.target.value]: true
            }
        };
    }

    // Multioptions

    const updatedAnswers = updateObject(state.answers, updatedOptions);
    const updatedState = {
        answers: updatedAnswers
    };
    return updateObject(state, updatedState);
};

const redcuer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_SURVEY:
            return initSurvey(state, action);
        case actionTypes.STOP_SURVEY:
            return stopSurvey(state, action);
        case actionTypes.CONTINUE_SURVEY:
            return continueSurvey(state, action);
        case actionTypes.FINISH_SURVEY:
            return finishSurvey(state, action);
        case actionTypes.PREV_QUESTION:
            return prevQuestion(state, action);
        case actionTypes.VERIFY_QUESTION:
            return verifyQuestion(state, action);
        case actionTypes.SKIP_QUESTION:
            return skipQuestion(state, action);
        case actionTypes.NEXT_QUESTION:
            return nextQuestion(state, action);
        case actionTypes.ANSWERED_QUESTION:
            return answeredQuestion(state, action);
        default:
            return state;
    }
};

export default redcuer;
