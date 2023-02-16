import "./styles.scss"

const AnimateLetters = ({strArr}) => {
  let animateletter = "animate-letter";
  return (
    <>
        {strArr.map((item, index) =>{
            {console.log(animateletter +" __"+index)}
            return <span key={item+index} className={`${animateletter +" __"+index}`}>{item}</span>
        })}
    </>
  )
}

export default AnimateLetters