import * as React from 'react';
import { Grid } from '@material-ui/core';
const nuc = require('central-dogma').nucleotide;
// const nucRna = require('central-dogma').nucleotide;
const cod = require('central-dogma').codon;

function Instructions() {
    return (
        <>
            <p>Try typing in a DNA sequence using capital T's, C's, G's, and A's (eg: TCGGTAATT)</p>
            <p>You can also type in an RNA sequence in the middle box using capital U's, C's, G's, and A''s (eg: UCGGUAAUU)</p>
        </>
    );
};

function CodonDemo() {
    // nucDna.setBase('dna');
    // nucRna.setBase('rna');

    const [dna, setDna] = React.useState('');
    const [rna, setRna] = React.useState('');
    const [codons, setCodons] = React.useState(['']);
    const [aas, setAas] = React.useState(['']);


    const handleDnaChange = (e) => {
        const newDnaSequence = e.target.value;
        setDna(newDnaSequence);

        const cods = nuc.toCodon(newDnaSequence);
        setCodons(cods);

        const complement = nuc.toComplement(newDnaSequence);
        const rnaSequence = nuc.dnaToRna(complement);
        setRna(rnaSequence);

        cod.setBase('rna');
        const aminos = cod.sequenceToAminoAcid(rnaSequence);
        setAas(aminos);
    };

    const handleRnaChange = (e) => {
        setRna(e.target.value);
    }

    React.useEffect(() => {

    }, [dna, rna])

    return(
        <>
            <h1>!! WORK IN PROGRESS !!</h1>
            <Instructions />
            <Grid item>
                <input type="text" value={dna} onChange={handleDnaChange}/>
                <input type="text" value={rna} onChange={handleRnaChange}/>
            </Grid>
            <p>dna: {dna}</p>
            <p>rna complement: {rna}</p>
            <p>codons: {codons}</p>
            <p>aas: {aas}</p>
        </>
    );
};

export default CodonDemo;
