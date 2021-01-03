import * as React from 'react';
import { Grid } from '@material-ui/core';

function Experience() {
    return(
        <>
            <Grid item>
                <h1>Work</h1>
                    <h3>Seequent : March 2020 - Present</h3>
                        <p>
                            I'm currently working as a frontend developer at Seequent - a New Zealand based company that provides software solutions for geological data and various forms of engineering. The Kensington, Calgary team that I work with comprises of 3 pods (Networking, Visualization, Frontend) working together on a TypeScript/React web application that allows users to view, modify, and compare their data in a browser, rather than a legacy desktop application.
                        </p>
                        <p>
                            
                        </p>
                    <h3>Arterys : May 2017 - July 2019</h3>
                        <p>
                            Shortly after completing my undergraduate degree, I worked as a Junior Full Stack Developer at Arterys - a San Francisco based startup that leverages AI to extract additional information from x-ray data, enabling physicians to make more informed decisions. During this time, I gained experience in a variety of areas such as writing bash scripts, configuring AWS clusters, and providing updates to the MEAN (MongoDB, ExpressJS, AngularJS, and Node) code base. 
                        </p>
                        <p>
                            This position was also the first time that I was introduced to the idea of production-level code. Up to this point, I had been writing small scripts and pipelines that worked for retrieving, cleaning, and transforming large amounts of genetic data, but I was never concerned with maintainability. This awareness of the importance of design, maintainability, and legibility in code was one of the most invaluable concepts that I was introduced to in my introduction to software development.
                        </p>
                    <h3>de Koning Laboratory : May 2013 - March 2016</h3>
                        <p>
                            Throughout my undergraduate degree, I worked in Dr. A. P. Jason de Koning's Bioinformatics Laboratory at the University of Calgary as a student researcher. In this position, I worked on research projects related to variant impact prediction, simulating genomic sequences across evolutionary trees, and identifying genomic areas of interest in cancer. This gave me the opportunity to use some of the programming skills I picked up in classes on large genetic datasets. For example, I learned perl to use BioPerl libraries, bash scripting to create modular pipelines, and R to clean, transform, and analyze data. 
                        </p>
                <h1>Education</h1>
                    <h3>University of Calgary - Bachelor of Health Sciences (Bioinformatics) : 2017</h3>
                        <p>
                            My undergraduate degree was in Bioinformatics at the University of Calgary. The program combines computer science, health sciences, and biochemistry, with an emphasis on developing scientific research skills and techniques. It was also quite flexible, allowing me to focus my later classes on genetics to complement my research in the de Koning lab.
                        </p>
            </Grid>
        </>
    );
};

export default Experience;
