import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const ArticleComp1 = () => {
    return (
        <div>
            <div className='text-center pt-20 pb-10 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-green-600'>
                Read some articles on the environment and environmental issues
            </div>
            <div>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    What is Climate Change?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Climate change is a long-term shift in global or regional climate patterns. Often climate change refers specifically to the rise in global temperatures from the mid-20th century to present.
                            Climate is sometimes mistaken for weather. But climate is different from weather because it is measured over a long period of time, whereas weather can change from day to day, or from year to year. The climate of an area includes seasonal temperature and rainfall averages, and wind patterns. Different places have different climates. A desert, for example, is referred to as an arid climate because little water falls, as rain or snow, during the year. Other types of climate include tropical climates, which are hot and humid, and temperate climates, which have warm summers and cooler winters.

                            Climate change is the long-term alteration of temperature and typical weather patterns in a place. Climate change could refer to a particular location or the planet as a whole. Climate change may cause weather patterns to be less predictable. These unexpected weather patterns can make it difficult to maintain and grow crops in regions that rely on farming because expected temperature and rainfall levels can no longer be relied on. Climate change has also been connected with other damaging weather events such as more frequent and more intense hurricanes, floods, downpours, and winter storms.

                            In polar regions, the warming global temperatures associated with climate change have meant ice sheets and glaciers are melting at an accelerated rate from season to season. This contributes to sea levels rising in different regions of the planet. Together with expanding ocean waters due to rising temperatures, the resulting rise in sea level has begun to damage coastlines as a result of increased flooding and erosion.

                            The cause of current climate change is largely human activity, like burning fossil fuels, like natural gas, oil, and coal. Burning these materials releases what are called greenhouse gases into Earth’s atmosphere. There, these gases trap heat from the sun’s rays inside the atmosphere causing Earth’s average temperature to rise. This rise in the planet's temperature is called global warming. The warming of the planet impacts local and regional climates. Throughout Earth's history, climate has continually changed. When occuring naturally, this is a slow process that has taken place over hundreds and thousands of years. The human influenced climate change that is happening now is occuring at a much faster rate.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Causes, Effects and Solutions to Environmental Degradation
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Environmental degradation is the disintegration of the earth or deterioration of the environment through the consumption of assets, for example, air, water and soil; the destruction of environments and the eradication of wildlife. It is characterized as any change or aggravation to nature’s turf seen to be pernicious or undesirable.

                            Ecological effect or degradation is created by the consolidation of an effectively substantial and expanding human populace, constantly expanding monetary development or per capita fortune and the application of asset exhausting and polluting technology.
                            It occurs when the earth's natural resources are depleted, and the environment is compromised in the form of extinction of species, pollution in the air, water and soil, and rapid growth in population.

                            Environmental degradation is one of the largest threats that are being looked at in the world today. The United Nations International Strategy for Disaster Reduction characterizes environmental degradation as the lessening of the limit of the earth to meet social and environmental destinations and needs.

                            Environmental degradation can happen in a number of ways. At the point when environments are wrecked or common assets are exhausted, the environment is considered to be corrupted and harmed. There are a number of different techniques that are being used to prevent this, including environmental resource protection and general protection efforts.

                            Environmental issues can be seen by long term ecological effects, some of which can demolish whole environments. An environment is a unique unit and incorporates all the living and non-living components that live inside it.

                            Plants and creatures are evident parts of the environment, but it also includes the things on which they depend on, for example, streams, lakes, and soils.

                            Environmental surroundings get to be divided when technological advancement splits up areas of land. Some examples of this can include streets which may slice through woods or even trails which wind through prairies.

                            While it may not sound all terrible on the surface, there are bad results. The biggest of these results are felt by some particular animal and plant groups, the vast majority of which are specific for their bio-region or need a large area in order to make sure that their genetic lines are kept intact.


                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div >
        </div>
    )
}

export default ArticleComp1