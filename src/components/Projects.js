import React from 'react'
import './Projects.css';
import DFL from '../img/DFL.png';
import NFTMarketplace from '../img/NFTMarketplace.png';
import ticketevent from '../img/ticketevent.png';
import BJNFTMarketplace from '../img/BJNFTMarketplace.png';
import NFTExplorer from '../img/NFTExplorer.png';
import PokemonNFT from '../img/PokemonNFT.png';
import Ecomm from '../img/Ecomm.png';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className='projects_container'>
        <p className='projects_title'>Projects</p>

        <div className='projects_list_container'>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <img alt='project' className='projects_item_img' src={Ecomm}></img>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>E-Commerce</p>
              <p className='projects_item_description'>Website developed with MERN stack.
              An admin side for adding and deleting
              items. A customer side with
              authentication and shopping cart.
              </p>
            </div>
          </div>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <a rel="noreferrer" target="_blank" href='https://jejebl.github.io/rds-front/'><img alt='project' className='projects_item_img' src={DFL}></img></a>
              </div>
              <div className='projects_item_button_container'>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/rds-front'><button className='projects_item_button'>Code source front</button></a>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>Staking Plateform</p>
              <p className='projects_item_description'>This project is a staking plateform. To use this plateform, you need to login your wallet with WalletConnect.
              In this project you can stake your DFL token in 3 pools to earn yield from different RWA projects. When you stake, you can enter a user's address so that he can receive DFL tokens. When you stake your DFL tokens, you receive another token as proof. After 30 days you can unstake your tokens. Every 2 weeks you can claim your profits in DFL tokens.
              To use the platform you must use the Polygon Mumbai network (Alchemy) and you must have Matic on this network.</p>
            </div>
          </div>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <a rel="noreferrer" target="_blank" href='https://jejebl.github.io/NFTMarketplace-front/'><img alt='project' className='projects_item_img' src={NFTMarketplace}></img></a>
              </div>
              <div className='projects_item_button_container'>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/NFTMarketplace-front'><button className='projects_item_button'>Code source front</button></a>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/NFTMarketplace-smartcontract'><button className='projects_item_button'>Code source smart contract</button></a>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>NFT Marketplace</p>
              <p className='projects_item_description'>This project is a NFT Marketplace. After you log in with your Metamask you can see all the NFTs in the Marketplace page.
              In Create NFT page, you can create an NFT. In My Profile, you can view your NFTs. You can also put your NFT on sell with a price or remove it from sell. This project allow to buy NFT from other seller.
              You also have to pay the gas fee with MATIC on the Mumbai network when you create, put on sell, remove from sale or buy NFT.
              I used Pinata IPFS to store off-chain the metadata of the NFT. To create this Solidity NFT smart contract I used Openzeppelin and 
              I used Alchemy to deploy the smart contract on Polygon Mumbai Testnet Network.</p>
            </div>
          </div>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <a rel="noreferrer" target="_blank" href='https://jejebl.github.io/TicketEvent-front/'><img alt='project' className='projects_item_img' src={ticketevent}></img></a>
              </div>
              <div className='projects_item_button_container'>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/TicketEvent-front'><button className='projects_item_button'>Code source front</button></a>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/TicketEvent-smartcontract'><button className='projects_item_button'>Code source smart contract</button></a>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>Ticket Event</p>
              <p className='projects_item_description'>In this project you can create an event and sell its tickets. You can also buy tickets of an event and transfer this tickets to another person.
              You can see all the event created, your events and your tickets. To use it you need to log in with your Metamask. The smart contract is deployed on the Polygon Mumbai Testnet Network.
              When you create an event, buy or transfer a ticket you have to pay in MATIC on the Mumbai network.</p>
            </div>
          </div>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <a rel="noreferrer" target="_blank" href='https://jejebl.github.io/NFTExplorerMumbai/'><img alt='project' className='projects_item_img' src={NFTExplorer}></img></a>
              </div>
              <div className='projects_item_button_container'>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/NFTExplorerMumbai'><button className='projects_item_button'>Code source</button></a>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>NFT Explorer for Polygon Mumbai Network</p>
              <p className='projects_item_description'>This project is a NFT Explorer for Polygon Mumbai Testnet Network. In this explorer you can only see the NFTs which are in the Polygon Mumbai Testnet Network.
              You can view the NFTs of any address and/or any collection. For this project i used the NFT API of Alchemy. In this web site you can view the NFT from my other project 'NFT Maketplace' and 'Pokemon NFT on-chain' because their smart contract were deployed on the Polygon Mumbai Testnet Network.</p>
            </div>
          </div>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <a rel="noreferrer" target="_blank" href='https://jejebl.github.io/PokemonNFT-front-end/'><img alt='project' className='projects_item_img' src={PokemonNFT}></img></a>
              </div>
              <div className='projects_item_button_container'>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/PokemonNFT-front-end'><button className='projects_item_button'>Code source front</button></a>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/PokemonNFT-smartcontract'><button className='projects_item_button'>Code source smart contract</button></a>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>Pokemon NFT on-chain</p>
              <p className='projects_item_description'>In this project you can get a Pikachu NFT and then you can evolve him to Raichu. If you want to do that you have to log in with Metamask first.
              You also have to pay the gas fee with MATIC on the Mumbai network when you want to get a Pikachu or evolve him. You can see your Pokemon NFTs on my other project NFT Explorer for Polygon Mumbai Testnet.</p>
            </div>
          </div>

          <div className='projects_item_container'>
            <div className='projects_item_project_container'>
              <div className='projects_item_img_container'>
                <a rel="noreferrer" target="_blank" href='https://jejebl.github.io/front-end-project/'><img alt='project' className='projects_item_img' src={BJNFTMarketplace}></img></a>
              </div>
              <div className='projects_item_button_container'>
                <a rel="noreferrer" target="_blank" href='https://github.com/jejebl/front-end-project'><button className='projects_item_button'>Code source</button></a>
              </div>
            </div>
            <div className='projects_item_description_container'>
              <p className='projects_item_title'>Front-end NFT Marketplace</p>
              <p className='projects_item_description'>This is a really cool front-end project for a NFT Marketplace that i made. I used React for this project and an UI kit that i bought to inspire me.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="waveOpacity">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
      </div>
    </div>
  )
}

export default Projects
