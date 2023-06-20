import React from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCoins } from 'react-icons/fa'
import { RiArticleFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../../assets/mapmarker.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import LoginBtn from '../LoginBtn'

const Navbar = () => {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    const user =
        localStorage.getItem("user") !== "undefined"
            ? JSON.parse(localStorage.getItem("user"))
            : localStorage.clear();

    console.log(user);

    const navigate = useNavigate();

    return (
        <>

            <div className='fixed z-50 top-0 flex flex-row justify-between z-50 w-full text-gray-900 bg-gray-300 bg-opacity-70 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50'>
                <Link to='/' className='flex jusity-start items-center w-full gap-3 p-2'>
                    <img src={logo} className="w-[45px] ml-[10px]" alt="logo" />
                    <p className="font-cursive text-2xl text-green-900 font-bold">Foresty</p>
                </Link>
                <div className='hidden gap-5 items-center md:flex'>
                    <Link to='/Articles'>
                        <p className='transition-border duration-100 ease-out text-black font-semibold text-green-900 text-lg nav-links'>
                            Articles
                        </p>
                    </Link>
                    <Link to="/rewards">
                        <p className='text-black font-semibold text-green-900 text-lg nav-links'>
                            Rewards
                        </p>
                    </Link>
                    {!user ? (
                        <LoginBtn />
                    ) : (
                        <div className='mr-4'>
                            <Menu>
                                <MenuButton as={Button} style={{ color: 'white' }} colorScheme="green" rightIcon={<ChevronDownIcon />}>

                                    <CgProfile className='scale-150' />
                                </MenuButton>
                                <MenuList colorScheme="green" style={{ color: 'black' }} className="shadow-xl">
                                    <a href={`/userprofile/${user?.sub}`}>
                                        <MenuItem>Your Profile</MenuItem>
                                    </a>
                                    <a type="button" className='w-full' onClick={logOut}>
                                        <MenuItem>Sign Out</MenuItem>
                                    </a>
                                </MenuList>
                            </Menu>
                        </div>
                    )}
                </div>
                <div className='md:hidden mr-3 mt-2'>
                    <Menu >
                        <MenuButton style={{ color: 'black' }} as={Button}>
                            <GiHamburgerMenu className='text-black' />
                        </MenuButton>
                        <MenuList style={{ color: 'black' }} className="shadow-xl">
                            {user ? (
                                <>
                                    <MenuItem>
                                        <a href={`/userprofile/${user?.sub}`} className="flex gap-2 items-center">
                                            <CgProfile />
                                            <div>Profile</div>
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <button className='flex gap-2' type="button" onClick={logOut}>
                                            <FiLogOut />
                                            <div>Logout</div>
                                        </button>
                                    </MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem className='relative'>
                                        <LoginBtn />

                                    </MenuItem>
                                </>
                            )}

                            <MenuList>
                                <Link to="/rewards" className="flex gap-2 items-center ml-2">
                                    <FaCoins />
                                    <div>Rewards</div>
                                </Link>
                            </MenuList>
                            <MenuItem>
                                <Link to={`articles`} className="flex gap-2 items-center">
                                    <RiArticleFill />
                                    <div>Articles</div>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div >
        </>
    )
}
export default Navbar