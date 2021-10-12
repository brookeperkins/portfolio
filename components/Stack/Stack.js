import styles from '../../styles/About.module.css';

function Stack({ tech1, tech2, tech3 }) {
  return (
    <ul className={styles.stack}>
      <li>{tech1}</li>
      <li>{tech2}</li> 
      <li>{tech3}</li>
    </ul>
  )        
}

export default Stack;
