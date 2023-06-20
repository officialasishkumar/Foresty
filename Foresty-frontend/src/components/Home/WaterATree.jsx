import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, Image, Stack, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import waterTree from '../../assets/waterTree.jpg'

const WaterATree = () => {
    return (
        <div className='flex overflow-hidden flex-col md:flex-row mx-12 text-4xl gap-10 items-center mt-[70px]'>
            <div className='flex flex-col gap-5 order-2 md:order-1'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-red-600'>
                    Water a nearby planted tree to help it grow.
                </p>
                <div className='flex justify-start'>
                    <Link to='/water'>
                        <Button variant='solid' size="lg" colorScheme='blue'>
                            Water a Tree
                        </Button>
                    </Link>
                </div>
            </div>
            <img src={waterTree} className="md:w-[30%] w-full md:order-2 order-1" alt='Planting_tree' />
        </div>
    )
}

export default WaterATree
