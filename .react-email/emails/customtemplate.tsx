import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { GoArrowUpRight, GoArrowDownRight, GoArrowRight } from "react-icons/go";
import { Resend } from 'resend';

interface VercelInviteUserEmailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    invitedByEmail?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const VercelInviteUserEmail = ({
    username = 'zenorocha',
    userImage = `${baseUrl}/static/vercel-user.png`,
    invitedByUsername = 'bukinoshita',
    invitedByEmail = 'bukinoshita@example.com',
    teamName = 'My Project',
    teamImage = `${baseUrl}/static/vercel-team.png`,
    inviteLink = 'https://vercel.com/teams/invite/foo',
    inviteFromIp = '204.13.186.218',
    inviteFromLocation = 'São Paulo, Brazil',
}: VercelInviteUserEmailProps) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;


    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans py-4">
                    <Container className="border  border-solid border-[#eaeaea] rounded my-[40px] mx-auto  max-w-[320px] w-full bg-[#f3f4f6] py-4">
                        <Section className='px-3'>
                            <Text className="text-[14px] font-normal text-gray-800 mt-0">
                                Welcome to your daily email dashboard.
                            </Text>

                            <Text className="text-[14px] font-normal text-gray-800 ">
                                There is 1 new card in <strong>Customer Issues</strong> and 1 new card in <strong>In Progress Cards.
                                    Blue Cat Reports MRR</strong> growth has  <strong className='text-[#43A860]'> turned positive</strong> but most other metrics remain unchanged.
                            </Text>
                        </Section>
                        <Section>
                            <Text className="text-[18px] font-semibold text-gray-800 pl-3">
                                Blue Cat Reports
                            </Text>
                            <Row className='border-spacing-x-3' >
                                <Column className='bg-white rounded-md w-[50%]  px-4 pt-2'>
                                    <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                                        MRR
                                    </Text>
                                    <Text className="text-[30px] font-semibold text-[#3D3F4B] leading-8">
                                        $12.3k
                                    </Text>
                                    <Text className="text-[14px] text-[#43A860] leading-3 flex justify-start items-center">
                                        <GoArrowUpRight color='#43A860' fontSize={18} className='mr-.9 inline-block align-middle' />
                                        $384
                                    </Text>
                                </Column>
                                <Column className='bg-white w-[50%]  rounded-md px-4 pt-2'>
                                    <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                                        Rvs MTD
                                    </Text>
                                    <Text className="text-[30px] font-semibold text-[#3D3F4B] leading-8">
                                        $1.2k
                                    </Text>
                                    <Text className="text-[14px] text-[#D4152C] leading-3 flex justify-start items-center">
                                        <GoArrowDownRight color='#D4152C' fontSize={18} className='mr-.9 inline-block align-middle' />
                                        $60
                                    </Text>
                                </Column>
                            </Row>
                        </Section>
                        <Section className='px-3'>
                            <Text className="text-[18px] font-semibold text-gray-800 mb-2 mt-7">
                                Open Customer Issues
                            </Text>
                            <Container className='bg-white shadow-md  rounded-md  relative pl-4 pb-4'>
                                <Row className='mt-0'>
                                    <Column align='right' className='align-top inline-block w-full'>
                                        <Button
                                            pX={7}
                                            pY={5}
                                            className="text-[12px] font-normal text-white bg-green-500 rounded-bl-md m-0 no-underline text-center"
                                            href={inviteLink}
                                        >
                                            New
                                        </Button>
                                    </Column>
                                </Row>
                                <Text className="text-[16px] font-medium text-gray-800 pr-4  my-0">
                                    Save user personal settings on server as well - to many dont,t allow cookies/localStorage
                                </Text>
                                <Row className='mt-0 pr-4 mt-4'>
                                    <Column>
                                        <Button
                                            pX={6}
                                            pY={4}
                                            className="bg-[#FCEF8F] border border-solid border-[#F6CA30] rounded text-[#B46F16] text-[14px] font-semibold no-underline text-center"
                                            href={inviteLink}
                                        >
                                            Doing
                                        </Button>
                                    </Column>
                                    <Column align='right' className='w-dull align-middle inline-block'>
                                        <Text className="text-[14px] font-medium text-gray-500 mr-6 inline-block my-0 align-middle">
                                            12/01/24
                                        </Text>
                                        <Img
                                            src={`https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww`}
                                            width="34"
                                            height="34"
                                            alt="user image"
                                            className='rounded-full inline-block align-middle'
                                        />
                                    </Column>
                                </Row>
                            </Container>
                            <Container className='bg-white shadow-md  rounded-md px-4 relative mt-5 pb-4'>
                                <Text className="text-[16px] font-medium text-gray-800 mb-0 pr-2">
                                    Time is List subscription consistency check error
                                </Text>
                                <Hr />
                                <Row className='mt-0'>
                                    <Column>
                                        <Button
                                            pX={6}
                                            pY={4}
                                            className="bg-[#FCEF8F] border border-solid border-[#F6CA30] rounded text-[#B46F16] text-[14px] font-semibold no-underline text-center"
                                            href={inviteLink}
                                        >
                                            To Deploy
                                        </Button>
                                    </Column>
                                    <Column align='right' className='align-middle inline-block'>
                                        <Button
                                            pX={6}
                                            pY={4}
                                            className="mr-2 bg-[#FAC9CB] border border-solid border-[#D4152C] rounded text-[#D4152C] text-[14px] font-semibold no-underline text-center"
                                            href={inviteLink}
                                        >
                                            12/10/23
                                        </Button>
                                    </Column>
                                </Row>
                            </Container>
                            <Text className="text-[18px] font-semibold text-gray-800 mb-2 mt-7">
                                Time in list
                            </Text>
                            <Container className='bg-white shadow-md  rounded-md px-4 relative py-4'>
                                {/*----------------------- MRR ---------------------------*/}
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] m-0">
                                            MRR
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0">
                                            $9.3k
                                        </Text>
                                        <Text className="text-[10px] text-[#43A860] align-middle inline-block m-0 leading-none">
                                            <GoArrowUpRight color='#43A860' fontSize={14} className='mr-.9 inline-block align-middle' />
                                            $3
                                        </Text>
                                    </Column>
                                </Row>
                                {/*----------------------- MRR End---------------------------*/}

                                {/*----------------------- Revs MTD ---------------------------*/}
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                                            Revs MTD
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0">
                                            $902
                                        </Text>
                                        <Text className="text-[10px] text-[#D4152C] align-middle inline-block m-0 leading-none">
                                            <GoArrowDownRight color='#D4152C' fontSize={14} className='mr-.9 inline-block align-middle' />
                                            $127
                                        </Text>
                                    </Column>
                                </Row>
                                {/*----------------------- Revs MTD End---------------------------*/}

                                {/*----------------------- New Customer ---------------------------*/}
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                                            New Customers
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0">
                                            5
                                        </Text>
                                        <Text className="text-[10px] text-[#D4152C] align-middle inline-block m-0 leading-none">
                                            <GoArrowDownRight color='#D4152C' fontSize={14} className='mr-.9 inline-block align-middle' />
                                            $2
                                        </Text>
                                    </Column>
                                </Row>
                                {/*------------------------ New Customer End---------------------------*/}

                                {/*----------------------- New Churned ---------------------------*/}
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] m-0">
                                            Churned <br></br>
                                            customers
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0  align-middle inline-block ">
                                            1
                                        </Text>
                                    </Column>
                                </Row>
                                {/*------------------------ New Churned End ---------------------------*/}
                                <Text className="text-[16px] text-[#3D3F4B] align-middle inline-block m-0 leading-none w-full text-right">
                                    <GoArrowRight color='#3D3F4B' fontSize={16} className='mr-.9 inline-block align-middle' />
                                    0
                                </Text>
                            </Container>
                            <Text className="text-[18px] font-semibold text-gray-800 mb-2 mt-7">
                                Google Ads MTD
                            </Text>
                            <Container className='bg-white shadow-md  rounded-md px-4 relative py-4'>
                                {/*----------------------- MRR ---------------------------*/}
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] m-0">
                                            Spend
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0">
                                            $184.62k
                                        </Text>
                                        <Text className="text-[10px] text-[#43A860] align-middle inline-block m-0 leading-none">
                                            <GoArrowUpRight color='#43A860' fontSize={14} className='mr-.9 inline-block align-middle' />
                                            $3
                                        </Text>
                                    </Column>
                                </Row>
                                {/*----------------------- MRR End---------------------------*/}

                                {/*----------------------- Revs MTD ---------------------------*/}
                                <Row className='mt-0 mb-2'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                                            Impressions
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0">
                                            $10.2k
                                        </Text>
                                        <Text className="text-[10px] text-[#D4152C] align-middle inline-block m-0 leading-none">
                                            <GoArrowDownRight color='#D4152C' fontSize={14} className='mr-.9 inline-block align-middle' />
                                            102
                                        </Text>
                                    </Column>
                                </Row>
                                {/*----------------------- Revs MTD End---------------------------*/}

                                {/*----------------------- New Customer ---------------------------*/}
                                <Row className='mt-0'>
                                    <Column className='flex justify-start items-start'>
                                        <Text className="text-[16px] font-bold text-[#5387EF] mt-0">
                                            Clicks
                                        </Text>
                                    </Column>
                                    <Column align='right' >
                                        <Text className="text-[16px] font-semibold text-[#3D3F4B] m-0">
                                            854
                                        </Text>
                                        <Text className="text-[10px] text-[#D4152C] align-middle inline-block m-0 leading-none">
                                            <GoArrowDownRight color='#D4152C' fontSize={14} className='mr-.9 inline-block align-middle' />
                                            7
                                        </Text>
                                    </Column>
                                </Row>
                                {/*------------------------ New Customer End---------------------------*/}
                            </Container>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default VercelInviteUserEmail;