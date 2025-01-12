import React from 'react'

export default function Page3() {
  return (
    <div className='mb-10 text-[.9rem] font-medium text-gray-700'>
        <h2 className='text-black text-xl font-semibold'>About Bitcoin</h2>
        <h3 className='text-black mt-4 font-bold text-[1rem]'>What is Bitcoin?</h3>
        <p className='mt-2  '>
        Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized digital currency that is based on cryptography. Unlike government-issued or fiat currencies such as US Dollars or Euro which are controlled by central banks, Bitcoin can operate without the need of a central authority like a central bank or a company. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.
        </p>
        <h3 className='mt-5 font-bold mb-2 text-black text-[1rem]'>Lorem ipsum dolor sit amet.</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod molestias odit ab nesciunt. Vero perspiciatis possimus explicabo ab maxime, voluptatum officia similique saepe dolores quae corporis? Nisi quia soluta, fugiat porro hic accusantium officiis facilis explicabo voluptate. Eum a libero in! Temporibus, voluptate quis quas blanditiis accusantium, dicta unde nostrum tenetur ipsum mollitia eligendi consequuntur, magnam aliquid molestiae libero.  <br/><br/>
            Exercitationem fugit vero minus corporis aliquid nobis sapiente et cupiditate molestiae facilis esse sed vel excepturi aperiam aspernatur cum eius accusamus veritatis dolore, quasi magnam doloremque. Quis aliquam accusamus nostrum. Unde doloribus sequi facilis omnis rem minus repudiandae eaque ut laborum at praesentium ipsa ad quae nulla, dignissimos voluptate quia laboriosam ab corporis alias totam esse cupiditate, fugiat atque! Ratione ea similique sint error exercitationem recusandae, eaque fugit architecto, labore, eos possimus eligendi. Iure, perferendis natus. <br/><br/>
            At dolor accusamus nihil assumenda. Eveniet sint et commodi nihil consectetur dicta fugit, unde recusandae sapiente quo ullam, assumenda voluptate adipisci hic debitis eum temporibus, suscipit nisi repellendus totam. 
        </p>
        <h3 className='mt-10 mb-4 text-xl text-black'>Already Holding Bitcoin?</h3>
        <div className='flex flex-wrap gap-5'>
            <div className='bg-gradient-to-br from-green-300 to-blue-600 p-3 flex gap-4 text-lg leading-tight text-white font-semibold w-[20rem] rounded'>
                <div className='h-24 w-28 overflow-hidden rounded '>
                <img 
                    className='h-full'
                    src="https://t3.ftcdn.net/jpg/10/58/72/14/360_F_1058721479_YxEF4j4sMY8ImCrZCq51JEG3olZHdXwZ.jpg" alt="" />

                </div>
                <div className='flex flex-col items-start justify-between'>
                    <span>Calculate your Profits</span>
                    <a
                        className='text-xs text-black px-3  w-fit flex items-center  bg-white rounded' 
                        href="">Check Now <span className='text-xl'>→</span></a>
                </div>
            </div>
            <div className='bg-gradient-to-br from-orange-300 to-orange-800 p-3 flex gap-4 text-lg leading-tight text-white font-semibold w-[20rem] rounded'>
                <div className='h-24 w-28 overflow-hidden rounded '>
                <img 
                    className='h-full'
                    src="https://t3.ftcdn.net/jpg/10/58/72/14/360_F_1058721479_YxEF4j4sMY8ImCrZCq51JEG3olZHdXwZ.jpg" alt="" />

                </div>
                <div className='flex flex-col items-start justify-between'>
                    <span>Calculate your tax liability</span>
                    <a
                        className='text-xs text-black px-3  w-fit flex items-center  bg-white rounded' 
                        href="">Check Now <span className='text-xl'>→</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}
