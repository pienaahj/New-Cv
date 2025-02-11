export type Competency = {
    id: string;
    coreComp: string;
};

export type Competencies = Competency[];

export type Course = {
    id: string;
    completed: string;
    courseCategory: string;
    courseTitle: string;
    datePeriod: string;
    description: string;
    institution: string;
};

export type Courses = Course[];

export type Employment = {
    id: string;
    durationPeriod: string;
    jobTitle: string;
    place: string;
    jobDescription1: string;
    jobDescription2: string;
    jobDescription3: string;
    jobResponsibilities1:  string;
    jobResponsibilities2: string;
    jobResponsibilities3: string;
};

export type Employments = Employment[];

export type Literacy = {
    id: string;
    CompSkill: string;
};

export  type Literacies = Literacy[];

export type Responsibility = {
    id: string;
    responsibility: string;
};

export type Responsibilities = Responsibility[];

export type Skill = {
    id: string;
    skill: string;
};

export type Skills = Skill[];