import React from "react";
import { Headline, Link, Text } from "../../components/types";
import { useBanner } from "../../components/banner/BannerContext";

const AboutUs = () => {
  const { updateBanner } = useBanner();
  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `About Us`,
    date: new Date().toLocaleDateString(),
  });
  return (
    <div>
      <Headline level="1">About Us</Headline>

      <Text>
        Founded in 2003, Mile of Smiles Timing Services is a premier event
        timing provider specializing in road races. We offer a comprehensive
        range of services to our clients, including not only participant timing
        but also promotional support for their events.
      </Text>

      <Text>
        Our goal at Mile of Smiles Timing Services is to deliver the highest
        level of service. In our inaugural year, we successfully coordinated
        race results for over twenty events in the Western Pennsylvania region.
        Today, we are proud to be the timing service of choice for affordable,
        accurate, and professional event timing in Western Pennsylvania.
      </Text>

      <Headline level="2">Contact Us</Headline>
      <address>
        Mile of Smiles Timing Services
        <br />
        511 Harpers Ferry Road
        <br />
        Ellwood City, PA 16117
        <br />
        <Link href="mailto:bonnherb@yahoo.com">bonnherb@yahoo.com</Link>
      </address>
      <Text>Note: We offer disposable chip timing for large events.</Text>

      <Headline level="2">Our Impact Over the Years</Headline>
      <ul>
        <li>
          2023: 276 events, 47,922 finishers, 173.6 average finishers per race
        </li>
        <li>
          2022: 249 events, 40,449 finishers, 162.4 average finishers per race
        </li>
        <li>
          2021: 233 events, 40,519 finishers, 173.9 average finishers per race
        </li>
        <li>
          2020: 131 events, 20,760 finishers, 158.5 average finishers per race
        </li>
        <li>
          2019: 293 events, 54,265 finishers, 185.2 average finishers per race
        </li>
        <li>
          2018: 324 events, 60,019 finishers, 185.3 average finishers per race
        </li>
        <li>
          2017: 324 events, 59,021 finishers, 182.2 average finishers per race
        </li>
        <li>
          2016: 357 events, 60,754 finishers, 170.2 average finishers per race
        </li>
        <li>
          2015: 394 events, 64,902 finishers, 164.7 average finishers per race
        </li>
        <li>
          2014: 366 events, 60,143 finishers, 164.3 average finishers per race
        </li>
        <li>
          2013: 351 events, 56,085 finishers, 159.8 average finishers per race
        </li>
        <li>
          2012: 299 events, 49,510 finishers, 165.6 average finishers per race
        </li>
        <li>
          2011: 250 events, 39,635 finishers, 158.5 average finishers per race
        </li>
        <li>
          2010: 203 events, 33,612 finishers, 165.6 average finishers per race
        </li>
        <li>
          2009: 149 events, 22,730 finishers, 152.5 average finishers per race
        </li>
        <li>
          2008: 100 events, 15,692 finishers, 156.9 average finishers per race
        </li>
        <li>
          2007: 95 events, 12,408 finishers, 130.6 average finishers per race
        </li>
        <li>
          2006: 62 events, 7,852 finishers, 126.6 average finishers per race
        </li>
        <li>
          2005: 46 events, 4,851 finishers, 112.8 average finishers per race
        </li>
        <li>
          2004: 32 events, 3,006 finishers, 115.6 average finishers per race
        </li>
        <li>
          2003: 22 events, 1,821 finishers, 113.8 average finishers per race
        </li>
      </ul>

      <Text>
        Statistics: +10.8% events, +18.5% finishers, +6.9% average finishers per
        race.
      </Text>

      <Text>
        Our chip timing service continues to grow in popularity. For more
        information, visit
        <Link href="http://www.rfidtiming.com">rfidtiming.com</Link>.
      </Text>

      <Text>
        **Thank You**: We extend our heartfelt thanks to all race directors and
        every runner who crosses our finish lines.
      </Text>

      <Text>
        Artwork by: L. Sean Steighner
        <br />
        Graphic Design Services:
        <Link href="mailto:contact@steighnerdesign.com" isExternal>
          contact@steighnerdesign.com
        </Link>
        <br />
        Web Design by: Bruce M Hockenberry (06/27/1952 - 01/12/2017)
      </Text>
    </div>
  );
};

export default AboutUs;
