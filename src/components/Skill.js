import React from 'react'
import FrontImg from "../images/Frontend..png"
import DeployImg from "../images/Deploy.png"
import VersionImg from "../images/version.png"
import CertificateImg from "../images/certificate.png"
function Skill() {
  return (
    <div className='mx-60 my-10'>
        <h1 className='text-6xl text-center py-16'>Skills</h1>
        <div className='round bg-white  '>
            <p className='text-4xl my-5'>Frontend</p>
        <img className="rounded-md" src={FrontImg}/>
        </div>
        <img className='w-96' src={DeployImg}/>
    <img src={VersionImg} className='w-96'/> 
    <img src={CertificateImg} /> </div>
  )
}

export default Skill