
import { Column, Container, Row, Section, Text } from '@react-email/components';
import { GoArrowUpRight, GoArrowDownRight, GoArrowRight } from "react-icons/go";

const TimeInList = ({Data}) => {
    return (
        <Section className='px-3'>
            <Text className="text-[18px] font-semibold text-gray-800 mb-2 mt-7">
                {Data?.title}
            </Text>
            {Data?.card.length > 0 && Data?.card.map((timeListCard, index) => {
                return (
                    <Container className={`bg-white shadow-md  rounded-md px-4 relative py-4 ${index !== 0 && 'mt-3'}`}>
                        {timeListCard.length > 0 && timeListCard?.map((timeListCardDetail) => {
                            return (
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] m-0 w-[57%]">
                                            {timeListCardDetail?.title}
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0 ">
                                            {timeListCardDetail?.val}
                                        </Text>
                                        {timeListCardDetail?.subVal &&
                                            <Text className="text-[10px] text-[#43A860] align-middle inline-block m-0 leading-none">
                                                <GoArrowUpRight color='#43A860' fontSize={14} className='mr-.9 inline-block align-middle' />
                                                {timeListCardDetail?.subVal}
                                            </Text>
                                        }
                                    </Column>
                                </Row>
                            )
                        })}
                        <Text className="text-[16px] text-[#3D3F4B] align-middle inline-block m-0 leading-none w-full text-right">
                            <GoArrowRight color='#3D3F4B' fontSize={16} className='mr-.9 inline-block align-middle' />
                            0
                        </Text>
                    </Container>
                )
            })}

        </Section>
    );
};

export default TimeInList;