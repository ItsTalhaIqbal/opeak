

const PersonalInfo = () => {
  return (
    <div className=' h-[600px] w-full '>
<h2 className='mt-4 ml-4 text-[#9F8F87]'>Personal Information :</h2>
      
      
<p className='text-[#9F8F87] mt-4 ml-4'>Change your account details below ,</p>
      <form className='mt-10  mx-auto w-auto max-w-[1000px]'>
        
       <p className='mt-3 text-white'> Name*</p>
      <input className="w-[70%] "/>
      
      
        <p className='mt-4 text-white'>Email*</p>
        <input className="w-[70%] "/>
        
        <p className='mt-4 text-white'>Password*</p>
        <input  className="w-[70%] " />

        <button className="mt-3 text-white bg-[#9F8F87]">UPDATE</button>
      </form>
    
     
     
    </div>
  )
}

export default PersonalInfo
