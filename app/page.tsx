import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100%] bg-[#FFFFFF]">
      <div className="flex p-[80px] gap-[40px] w-[90%] mx-auto bg-[#F0F2F3] rounded-bl-[48px]  rounded-br-[48px]">
        <div>
          <p className="font-[sans] uppercase">wellcome to Chairy</p>
          <h1 className="font-[sans-serif ] text-[#272343] font-bold text-[60px] pt-[20px] pb-[20px]">Best Furniture
            Collection for your
            interior.</h1>
            <button className="flex gap-2 bg-[#029FAE] text-center text-[#FFFFFF] rounded-[8px] h-[52px] w-[171px] px-[24px] py-[14px]">Shop Now
              <Image
              src="/Rightarrow.png"
              alt="rightarrow"
              width={16}
              height={9}
              className="w-[28px] h-[24px] hover:w-[30px] hover:h-[28px]"
              priority />
            </button>
        </div>
        <div>
          <Image 
          src="/ProductImage.png"
          alt="front picture of chair"
          width={438}
          height={584}
          priority
          className="w-[534px] h-[484px]" 
          />
        </div>
      </div>

      <div className="flex gap-[32px] mt-[20px] pl-[10px] pr-[10px] h-[139px] w-[90%] mx-auto">
        <Image src="/zapeirlogo.png"
         alt="companiesLogo"
         width={85}
         height={87}
         priority />
        <Image src="/pepedrive.png"  
         alt="companiesLogo"
         width={107}
         height={109}
         priority  />

        <Image src="/cibbanklogo.png"  
         alt="companiesLogo"
         width={135}
         height={189}
         priority  />
        <Image src="/logo4.png" 
         alt="companiesLogo"
         width={63}
         height={59}
         priority  />
        <Image src="/burntoast.png" 
         alt="companiesLogo"
         width={98}
         height={101}
         priority />
         <Image src="/panda.png" 
         alt="companiesLogo"
         width={113}
         height={115}
         priority />
         <Image src="/maz.png" 
         alt="companiesLogo"
         width={84}
         height={87}
         priority />
      </div>
      <div className="w-[90%] mx-auto">
        <h2 className="text-[34px] mb-4">Featured Products</h2>
        <div className="flex gap-2  ">
          <Image
           src="/chair1.png"
            alt="Featured Products chairs"
            width={212}
            height={212} 
            className="rounded-[6px]"
            priority />
          <Image
           src="/chair2.png" 
          alt="Featured Products chairs"
           width={212} 
           height={212} 
           className="rounded-[10px] "
           priority/>
          <Image 
          src="/chair3.png" 
          alt="Featured Products chairs" 
          width={212} 
          height={212} 
          className="rounded-[10px] " 
          priority/>
          <Image 
          src="/chair4.png" 
          alt="Featured Products chairs" 
          width={212} 
          height={212} 
          className="rounded-[6px]"
          priority />
        </div>
      </div>

    </div>
  );
}