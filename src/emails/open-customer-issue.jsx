
import { Button, Column, Container, Hr, Img, Row, Section, Text } from '@react-email/components';


const OpenCustomerIssue = ({Data}) => {
    return (
        <div>
            <Section className='px-3'>
                <Text className="text-[18px] font-semibold text-gray-800 mb-2 mt-7">
                    {Data?.title}
                </Text>
                {Data?.card?.length > 0 && Data?.card.map((CardData) => {
                    return (
                        <>
                            <Container className='bg-white shadow-md  rounded-md  relative pl-4 pb-4'>
                                <Row className='mt-0'>
                                    <Column align='right' className='align-top inline-block w-full'>
                                        <Button
                                            pX={7}
                                            pY={5}
                                            className="text-[12px] font-normal text-white bg-green-500 rounded-bl-md m-0 no-underline text-center"
                                        >
                                            New
                                        </Button>
                                    </Column>
                                </Row>
                                <Text className="text-[16px] font-medium text-gray-800 pr-4  my-0">
                                    {CardData?.title}
                                </Text>
                                <Row className='mt-0 pr-4 mt-4'>
                                    <Column>
                                        <Button
                                            pX={6}
                                            pY={4}
                                            className="bg-[#FCEF8F] border border-solid border-[#F6CA30] rounded text-[#B46F16] text-[14px] font-semibold no-underline text-center"
                                        >
                                            {CardData?.list}
                                        </Button>
                                    </Column>
                                    <Column align='right' className='w-dull align-middle inline-block'>
                                        <Text className="text-[14px] font-medium text-gray-500 mr-6 inline-block my-0 align-middle">
                                            {CardData?.due}
                                        </Text>
                                        {
                                            CardData?.member.length > 0 && CardData?.member.map((imges) => {
                                                return (
                                                    <Img
                                                        src={`https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww`}
                                                        width="34"
                                                        height="34"
                                                        alt="user image"
                                                        className='rounded-full inline-block align-middle'
                                                    />
                                                )
                                            })
                                        }

                                    </Column>
                                </Row>
                            </Container>
                            {/* SUbCard Data detail */}
                            {CardData?.subcard?.length > 0 && CardData?.subcard.map((subCardData) => {
                                return (
                                    <Container className='bg-white shadow-md  rounded-md px-4 relative mt-5 pb-4'>
                                        <Text className="text-[16px] font-medium text-gray-800 mb-0 pr-2">
                                            {subCardData?.title}
                                        </Text>
                                        <Hr />
                                        <Row className='mt-0'>
                                            <Column>
                                                <Button
                                                    pX={6}
                                                    pY={4}
                                                    className="bg-[#FCEF8F] border border-solid border-[#F6CA30] rounded text-[#B46F16] text-[14px] font-semibold no-underline text-center"
                                                >
                                                    {subCardData?.list}
                                                </Button>
                                            </Column>
                                            <Column align='right' className='align-middle inline-block'>
                                                <Button
                                                    pX={6}
                                                    pY={4}
                                                    className="mr-2 bg-[#FAC9CB] border border-solid border-[#D4152C] rounded text-[#D4152C] text-[14px] font-semibold no-underline text-center"
                                                >
                                                    {subCardData?.due}
                                                </Button>
                                            </Column>
                                        </Row>
                                    </Container>
                                )
                            })}

                        </>
                    )
                })}


            </Section>
        </div>
    );
};

export default OpenCustomerIssue;