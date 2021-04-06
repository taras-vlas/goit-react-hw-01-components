import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

/* JSS */
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



const Statistics = ({ title, stats }) => {
  const classes = useStyles()
  return (
    <section className={classes.statistics}>
      <h2 className={classes.title}>{title}</h2>
   
      <ul className={classes.stat_list}>
         
        {stats.map(stat => (
          <li className={classes.item}
            key={stat.id}>

            <span className={classes.label}>{stat.label}</span>
            <span className={classes.percentage}> {stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;