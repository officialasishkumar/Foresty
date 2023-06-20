import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import plant_a_tree from '../assets/plant_a_tree.png'
import water_a_plant from '../assets/water_a_plant.png'
import { Link } from 'react-router-dom'

const RewardsPageComp2 = () => {
    return (
        <div>
            <div className='text-center pt-20 pb-10 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-200 to-red-800'>
                Ways to earn points
            </div>
            <div className='flex justify-center py-10'>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={plant_a_tree}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md' color='darkgreen'>Plant a tree</Heading>

                            <Text py='2'>
                                Plant a tree and help the earth be a better place to live in.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Link to="/plant">
                                <Button variant='solid' colorScheme='green'>
                                    +50 points
                                </Button>
                            </Link>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
            <div className='flex justify-center py-10'>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={water_a_plant}
                        alt='Watering'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md' color='blue'>Water a plant</Heading>

                            <Text py='2'>
                                Help trees planted by other users to grow by watering them.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Link to="/water">
                                <Button variant='solid' colorScheme='blue'>
                                    +10 points
                                </Button>
                            </Link>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
        </div>
    )
}

export default RewardsPageComp2