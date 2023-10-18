import React from 'react'

const User = () => {
  return (
    <div className="user">
      <div className="user-profile">
        <img alt="Ellipse" src="./images/user.jpg" />
      </div>
      <div className="user-details">
        <p>Evano</p>
        <span >Project Manager</span>
      </div>
      <img className="chevron" alt="Chevron" src="./images/chevron-down.svg" />
    </div>
  )
}
export default User
