import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Amazon_logo from '../assets/Amazon_logo.png'
import t_shirt from '../assets/t_shirt.png'
import hoodie from '../assets/hoodie.png'
import badge from '../assets/badge.png'


const RewardsPageComp1 = () => {

    const [rewardAll, setRewardAll] = React.useState(null);

    useEffect(() => {

    }, [])

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='pt-20'>
                <Text className='text-center'
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    Welcome to the Rewards Store
                </Text>
            </div>
            <div className='text-center pt-10 pb-10 font-bold text-3xl bg-clip-text '>
                Redeem your points for awesome goodies and vouchers.
            </div>

            <div className='flex md:flex-row flex-col justify-center pd-2'>
                <div className='px-10'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image className='px-5 py-5'
                                src={badge}
                                alt='badge'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Master Tree Planter Badge</Heading>
                                <Text>
                                    Congratulations! You are now a Master Tree Planter. Use your points to redeem this badge.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    200 points
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <a href="https://forms.office.com/r/ULdvWzLCTE" target="_blank" className="flex flex-row gap-3 items-center">
                                    <p className="text-sm sm:text-md font-bold hover:underline">Fill out this form to redeem!</p>
                                    <ArrowForwardIcon />
                                </a>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div className='px-5'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image className='px-10 py-1'
                                src={t_shirt}
                                alt='t-shirt'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>The Environmentalist T-shirt</Heading>
                                <Text>
                                    Show off your love for the environment with this cool t-shirt.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    400 points
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <a href="https://forms.office.com/r/ULdvWzLCTE" target="_blank" className="flex flex-row gap-3 items-center">
                                    <p className="text-sm sm:text-md font-bold hover:underline">Fill out this form to redeem!</p>
                                    <ArrowForwardIcon />
                                </a>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div className='px-5'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image className='px-1 py-1'
                                src={hoodie}
                                alt='hoodie'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>The Environmentalist Hoodie</Heading>
                                <Text>
                                    Show off your love for the environment with this cool hoodie.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    800 points
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <a href="https://forms.office.com/r/ULdvWzLCTE" target="_blank" className="flex flex-row gap-3 items-center">
                                    <p className="text-sm sm:text-md font-bold hover:underline">Fill out this form to redeem!</p>
                                    <ArrowForwardIcon />
                                </a>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div className='px-5'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image className='px-10 py-20'
                                src={Amazon_logo}
                                alt='gc-250'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Amazon Voucher ₹250</Heading>
                                <Text>
                                    Use this voucher to buy anything on Amazon.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    1000 points
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <a href="https://forms.office.com/r/ULdvWzLCTE" target="_blank" className="flex flex-row gap-3 items-center">
                                    <p className="text-sm sm:text-md font-bold hover:underline">Fill out this form to redeem!</p>
                                    <ArrowForwardIcon />
                                </a>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image className='px-10 p-20'
                                src={Amazon_logo}
                                alt='gc-500'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Amazon Voucher ₹500</Heading>
                                <Text>
                                    Use this voucher to buy anything on Amazon.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    2000 points
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <a href="https://forms.office.com/r/ULdvWzLCTE" target="_blank" className="flex flex-row gap-3 items-center">
                                    <p className="text-sm sm:text-md font-bold hover:underline">Fill out this form to redeem!</p>
                                    <ArrowForwardIcon />
                                </a>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default RewardsPageComp1