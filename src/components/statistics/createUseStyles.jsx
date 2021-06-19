import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({

    statistics: `
        width: 350px;
        margin: auto;
        border: solid 38px rgb(211, 221, 221);
    `,
    
    title:{
        fontSize: 16,
        color: '#3f3f3f',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 25,
    },
    
    stat_list:{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    item: `
        width: 55px;        
        border: solid 1px teal;
        background-color: #0d3e70;
        color: white;
    `,

    label:{
        fontSize: 10,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    percentage:{
        fontSize: 14,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'space-evenly',   
    },
});

export default useStyles;