import PropTypes from 'prop-types';
import useStyles from './createUseStyles';

const Statistics = ({ title, stats }) => {
  const classes = useStyles()

  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
   
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