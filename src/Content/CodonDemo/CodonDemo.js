import * as React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './CodonDemo.styles';
const nuc = require('central-dogma').nucleotide;
const cod = require('central-dogma').codon;

function setNucDna() {
    nuc.setBase('dna');
}

function setNucRna() {
    nuc.setBase('rna');
}

function setCodDna() {
    cod.setBase('dna');
}

function setCodRna() {
    cod.setBase('rna');
}

function Instructions() {
    return (
        <>
            <p>Try typing in a DNA sequence using capital T's, C's, G's, and A's (eg: TCGGTAATT)</p>
            <p>You can also type in an RNA sequence in the middle box using capital U's, C's, G's, and A''s (eg: UCGGUAAUU)</p>
        </>
    );
};

function CodonDemo() {

    const classes = useStyles();

    const [dna, setDna] = React.useState('');
    const [rnaComplement, setRnaComplement] = React.useState('');
    const [rnaCodons, setRnaCodons] = React.useState(['']);
    const [aas, setAas] = React.useState(['']);

    const updateRnaComplementFromDna = (newDnaSequence) => {
        setNucDna();
        const dnaComplement = nuc.toComplement(newDnaSequence);
        const newRnaComplement = nuc.dnaToRna(dnaComplement);
        setRnaComplement(newRnaComplement.toUpperCase());
    };

    const updateDnaFromRnaComplement = (newRnaComplement) => {
        setNucRna();
        const originalRnaSequence = nuc.toComplement(newRnaComplement);

        setNucDna()
        const newDnaSequence = nuc.rnaToDna(originalRnaSequence);
        setDna(newDnaSequence.toUpperCase());


    };

    const getRnaComplementFromDna = (dnaSequence) => {
        setNucDna();
        const dnaComplement = nuc.toComplement(dnaSequence);
        return nuc.dnaToRna(dnaComplement);
    };

    const handleDnaChange = (e) => {
        const newDnaSequence = e.target.value.toUpperCase();
        setDna(newDnaSequence);

        
        setNucRna();
        setCodRna();
        const rnaComplement = getRnaComplementFromDna(newDnaSequence);
        const newRnaCodons = nuc.toCodon(rnaComplement);
        const filteredCodons = newRnaCodons.filter(() => cod !== undefined);
        const newAas = cod.sequenceToAminoAcid(filteredCodons);

        setRnaCodons(newRnaCodons);
        setAas(newAas);

        updateRnaComplementFromDna(newDnaSequence);

    };

    const handleRnaChange = (e) => {
        const newRnaComplement = e.target.value.toUpperCase();
        setRnaComplement(newRnaComplement);

        setNucRna();
        setCodRna();
        const newRnaCodons = nuc.toCodon(newRnaComplement);
        const filteredCodons = newRnaCodons.filter(() => cod !== undefined);
        const newAas = cod.sequenceToAminoAcid(filteredCodons);

        setRnaCodons(newRnaCodons);
        setAas(newAas);

        updateDnaFromRnaComplement(newRnaComplement);
    }

    // React.useEffect(() => {
    //     updateRnaComplementFromDna(dna);
    // }, [dna])

    // React.useEffect(() => {
    //     updateDnaFromRnaComplement(rnaComplement);
    // }, [rnaComplement])

    return (
        <>
            <h1>!! WORK IN PROGRESS !!</h1>
            {/* <Instructions /> */}
            <Grid item container className={classes.root}>
                <Grid item>
                    <textarea type="text" value={dna} onChange={handleDnaChange} className={classes.textBox}/>
                </Grid>
                <Grid item>
                    <textarea type="text" value={rnaComplement} onChange={handleRnaChange} className={classes.textBox}/>
                </Grid>
                <Grid item>
                    <textarea readonly type="text" value={aas} className={classes.textBox}/>
                </Grid>
            </Grid>

            <p>dna: {dna}</p>
            <p>rna complement: {rnaComplement}</p>
            <p>codons: {rnaCodons}</p>
            <p>aas: {aas}</p>
        </>
    );
};

export default CodonDemo;
