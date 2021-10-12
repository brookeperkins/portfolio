import styles from '../../styles/About.module.css';

function Line(props) {
  return (
    <svg viewBox="0 0 1537 115" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>{"Divider Line"}</title>
      <g
        className={styles.lineColor}
        strokeWidth={15}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <path d="M14.423 55.344C79.33 75.73 133.403 86.335 176.642 87.157c43.238.82 97.646-7.723 163.222-25.633M415.676 44.345c71.186-20.825 125.62-30.88 163.3-30.164 37.682.715 91.73 12.83 162.141 36.344M806.337 67.166c70.859 21.168 124.926 32.106 162.202 32.814 37.276.707 91.69-8.17 163.24-26.633M1196.557 57.975c72.439-20.801 126.872-30.856 163.301-30.164 36.428.692 90.475 12.807 162.14 36.345" />
      </g>
    </svg>
  )
}

export default Line;
