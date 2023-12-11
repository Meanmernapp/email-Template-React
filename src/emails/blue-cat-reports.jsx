
import { Column, Row, Section, Text } from '@react-email/components';
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

const BlueCatReports = ({Data}) => {
    return (
        <Section>
            <Text className="text-[18px] font-semibold text-gray-800 pl-3 capitalize">
                {Data?.title}
            </Text>
            <Row className='border-spacing-x-3' >
                <Column className='bg-white rounded-md w-[50%]  px-4 pt-2'>
                    <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                        {Data?.num_one?.title}
                    </Text>
                    <Text className="text-[30px] font-semibold text-[#3D3F4B] leading-8">
                        {Data?.num_one?.value}
                    </Text>
                    <Text className="text-[14px] text-[#43A860] leading-3 flex justify-start items-center">
                        <GoArrowUpRight color='#43A860' fontSize={18} className='mr-.9 inline-block align-middle' />
                        {Data?.num_one?.diff}
                    </Text>
                </Column>
                <Column className='bg-white w-[50%]  rounded-md px-4 pt-2'>
                    <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                        {Data?.num_two?.title}

                    </Text>
                    <Text className="text-[30px] font-semibold text-[#3D3F4B] leading-8">
                        {Data?.num_two?.value}
                    </Text>
                    <Text className="text-[14px] text-[#D4152C] leading-3 flex justify-start items-center">
                        <GoArrowDownRight color='#D4152C' fontSize={18} className='mr-.9 inline-block align-middle' />
                        {Data?.num_two?.diff}
                    </Text>
                </Column>
            </Row>
        </Section>
    );
};

export default BlueCatReports;