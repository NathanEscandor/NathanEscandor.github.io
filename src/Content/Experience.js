import * as React from 'react';
import { Grid } from '@material-ui/core';

function Experience() {
    return(
        <>
            <Grid item>
                <h1>Work</h1>
                    <h3>Seequent : March 2020 - Present</h3>
                        <p>
                            I'm currently working as a <b>Frontend Developer</b> at Seequent - a New Zealand based company that provides software solutions for geological data and various forms of engineering. The Kensington, Calgary team that I work with comprises of 3 pods (Networking, Visualization, Frontend) working together on a TypeScript/React web application that allows users to view, modify, and compare their data in a browser. We also work closely with a UI/UX design team, QA, and a PM to deliver updates in bi-weekly sprints.
                        </p>
                        <p>
                            I went into this position wanting to develop my understanding of software development best practices to improve my coding and design choices. I'm still working on catching up with the more senior devs, but I've already gained a ton of insight into how to write code for the future and how to make decisions that allow code to scale. This position has also exposed me to the idea of Functional Programming which I've learned to really enjoy due to its resemblance to working in R.
                        </p>
                    <h3>Arterys : May 2017 - July 2019</h3>
                        <p>
                            Shortly after completing my undergraduate degree, I worked as a <b>Junior Full Stack Developer</b> at Arterys - a San Francisco based startup that leverages AI to extract additional information from x-ray data, enabling physicians to make more informed decisions and diagnoses. During this time, I gained experience in a variety of areas such as writing bash scripts, configuring AWS clusters, and providing updates to the MEAN (MongoDB, ExpressJS, AngularJS, and Node) code base. Most of my time here was spent working in the Angular.js section of the code. 
                        </p>
                        <p>
                            This position was also the first time that I was introduced to the idea of production-level code. Up to this point, I had been writing small scripts and pipelines that 'worked' for dealing with large genetic datasets, but I was never concerned with maintainability. This awareness of the importance of design, maintainability, and legibility in code was one of the most invaluable concepts that I became aware of in my introduction to software development.
                        </p>
                    <h3>de Koning Laboratory : May 2013 - March 2016</h3>
                        <p>
                            Throughout my undergraduate degree, I worked in Dr. A. P. Jason de Koning's Bioinformatics Laboratory at the University of Calgary as a <b>Student Researcher</b>. In this position, I worked on research projects related to variant impact prediction, simulating genomic sequences across evolutionary trees, and identifying genomic areas of interest in cancer. This gave me the opportunity to use some of the programming skills I picked up in classes on large genetic datasets. For example, I learned perl to use BioPerl libraries, bash scripting to create modular pipelines, and R to clean, transform, and analyze data. 
                        </p>
                        <p>
                            In addition to the research and programming skills that I picked up in this position, I also got a chance to develop my verbal communication skills at different levels. For example, I learned how to communicate my work to a technical audience by participating in weekly lab meetings, journal clubs, and oral/poster presentations. I also learned how to communicate the importance of our work to non-technical stakeholders through grant/bursary/scholarship applications. And I learned how to communicate what I do to my non-technical friends, family, and peers.
                        </p>
                <h1>Education</h1>
                    <h3>University of Calgary - Bachelor of Health Sciences (Honours - Bioinformatics) : 2017</h3>
                        <p>
                            My undergraduate degree was in Health Sciences, majoring in Bioinformatics at the University of Calgary. The program combines computer science, health sciences, and biochemistry, with an emphasis on developing scientific research skills and literacy. 
                        </p>
                        <p>
                            Because we often worked with students in the other Health Science majors (Biomedical Research, Health and Society), I ended up learning a lot about interdisciplinary work and the importance of finding how everyone's strengths can combine to solve problems. It also highlighted the importance of viewing problems from different lenses to get a picture of what's actuallly happening. Despite that I don't work directly in Bioinformatics or the Health Sciences, I'm extremely thankful for the social and verbal skills that I gained from the program.
                        </p>
            </Grid>
        </>
    );
};

export default Experience;
