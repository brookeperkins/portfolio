import styles from '../../styles/Header.module.css'

function SvgComponent(props) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 649 543"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="mylipglossiscool mylipglossispoppin"
      role="img"
    >
      <title id="mylipglossiscool">{"Personal site of Brooke Perkins"}</title>
      <desc id="mylipglossispoppin">The website's icon, shaped like an abstract orange and yellow flower, changing to yellow-green on hover.</desc>
      <g strokeWidth={11} fill="none" fillRule="evenodd">
        <path
          className={styles.petal}
          d="M191.48 485.908c106.113 27.403 273.032 16.954 341.237-71.297 84.053-108.757 85.16-232.512 46.24-350.08-10.738-32.436-131.252-17.575-133.237-6.89-7.778 41.851-10.192 83.943-17.197 125.838-.46 2.749-13.51 102.178-59.807 150.776-30.01 31.502-91.2 23.125-113.658 15.973-24.864-7.919-53.23-38.6-60.173-91.949-9-69.162 6.308-165.02-9.016-180.88-3.948-4.087-11.143-5.544-17.412-7.16-5.946-1.533-12.376-2.834-18.76-2.166-31.117 3.257-62.178 7.857-92.869 13.852-3.87.756-7.016 3.53-9.393 6.123-3.11 3.394-5.377 7.338-6.609 11.336-4.902 15.905-10.35 31.927-11.7 48.073-1.982 23.711-.557 47.398 1.756 70.857 2.098 21.269-2.19 98.542 30.566 159.124 31.66 58.552 99.895 100.688 130.031 108.47z"
        />
        <path
        className={styles.flowermiddle}
          d="M261.61 292.772c34.522 19.68 90.39 24.15 115.673-15.56 31.158-48.935 35.143-110.079 25.624-170.473C400.281 90.077 238.987 84 228.595 85.193c-1.31.15-2.438 1.341-3.305 2.486-1.135 1.5-2.005 3.319-2.532 5.225-2.096 7.583-4.378 15.193-5.3 23.1-1.352 11.613-1.57 23.41-1.486 35.147.077 10.64-3.61 48.61 5.524 80.465 8.827 30.787 30.31 55.567 40.114 61.156z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent;
