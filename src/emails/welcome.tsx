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
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import BlueCatReports from './blue-cat-reports';
import TimeInList from './time-in-list';
import GoogleAdsMtd from './google-ads-mtd';
import OpenCustomerIssue from './open-customer-issue';


interface WelcomeEmailProps {
  firstName: string;
  email:string;
}

let blueCart = [{
  title: "Blue Cat Reports",
  num_one: {
      title: "MRR",
      value: "$12.3K",
      diff: 384,
      diff_col: "red"
  },
  num_two: {
      title: "Revs MTD",
      value: "$1.2K",
      diff: 384,
      diff_col: "red"
  },
}]

let openCustomer = [{
  title: "Open Customer Issue",
  card: [
      {
          title: "Save user personal settings on server as well - to many dont,t allow cookies/localStorage",
          list: "Doing",
          due: "12/01/24",
          is_new: true,
          member: [{ url: "" }],
          subcard: [{
              title: "Time is List subscription consistency check error",
              list: "To Deploye",
              due: "12/10/23",
          }
          ]
      },
  ]
},
]

let timeInList = [{
  title: "Time in list",
  card: [[
      {
          title: "MRR",
          val: "$9.3k",
          subVal: "$3",
      },
      {
          title: "Revs MTD",
          val: "$902",
          subVal: "$127",
      }, {
          title: "New Customers",
          val: "5",
          subVal: "$2",
      }, {
          title: "Churned customers",
          val: 1,
          subVal: "",
      }]
  ]
}]

let googleAds = [{
  title: "Google Ads MTD",
  card: [[
      {
          title: "Spend",
          val: "$184.62k",
          subVal: "$3",
      },
      {
          title: "Impressions",
          val: "$10.2k",
          subVal: "127",
      }, {
          title: "Clicks",
          val: "854",
          subVal: "7",
      }]
  ]
}]

export const WelcomeEmail = ({ firstName,email }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans py-4">
        <Container className="border  border-solid border-[#eaeaea] rounded my-[40px] mx-auto  max-w-[320px] w-full bg-[#f3f4f6] py-4">
          <Section className='px-3'>
            <Text className="text-[14px] font-normal text-gray-800  mt-0">
              Welcome to your daily email dashboard {firstName}
              <strong>Email: {email}</strong>
            </Text>
          </Section>
          <Section className='px-3'>
            <Text className="text-[14px] font-normal text-gray-800 ">
              There is 1 new card in <strong>Customer Issues</strong> and 1 new card in <strong>In Progress Cards.
                Blue Cat Reports MRR</strong> growth has  <strong className='text-[#43A860]'> turned positive</strong> but most other metrics remain unchanged.
            </Text>
          </Section>
          {/* blue cart */}
          {blueCart?.length > 0 && blueCart.map((Data) => <BlueCatReports Data={Data}/>)}

          {/* Open Customer issue */}
          {openCustomer.length > 0 && openCustomer.map((Data) => <OpenCustomerIssue  Data={Data}/>)}

          {/*time in list */}
          {timeInList.length > 0 && timeInList.map((Data) => <TimeInList  Data={Data}/>)}

          {/* google ads */}
          {googleAds.length > 0 && googleAds.map((Data) => <GoogleAdsMtd Data={Data}/>)}

        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;
