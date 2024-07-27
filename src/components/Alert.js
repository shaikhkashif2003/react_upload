import React from 'react'

function Alert(props) {

  const capitalized= (word) =>{               // Capitalized the first letter of "success" in alert
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <div className={'alert alert-warning alert-dismissible fade show'} role="alert">
        <strong>{capitalized(props.alert.type)}</strong> {props.alert.msg}
        
    </div>
  )
}

export default Alert
