import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import QuotationScreen from '../screens/QuotationScreen';
import ServicesScreen from '../screens/ServicesScreen'
import EnquiryForm from '../screens/EnquiryScreen';
import WebDevelopment from '../screens/Services/WebDevelopment';
import Mobiledevelopment from '../screens/Services/Mobiledevelopment';
import UIUXDesigining from '../screens/Services/UIUXDesigining';
import InternetMarketing from '../screens/Services/InternetMarketing';
import SoftwareDevelopment from '../screens/Services/SoftwareDevelopment';
import IOTSolutions from '../screens/Services/IOTSolutions';
import ItConsultancey from '../screens/Services/ItConsultancey';
import BusinessSolutions from '../screens/Services/BusinessSolutions';
import ECommerceDevelopment from '../screens/Services/ECommerceDevelopment';
import DedicatedHiring from '../screens/Services/DedicatedHiring';
import HourModel from '../screens/Services/HourModel';
import TaskBasedModel from '../screens/Services/TaskBasedModel';
import SupportModel from '../screens/Services/SupportModel';
import HybrideModel from '../screens/Services/HybrideModel';
import Projectbased from '../screens/Services/Projectbased';
import OurVision from '../screens/About/OurVision';
import OurMission from '../screens/About/OurMission';
import OurClients from '../screens/About/OurClients';
import ConsultingProcess from '../screens/About/ConsultingProcess';
import ProjectRangamaati from '../screens/CaseStudies/ProjectRangamaati';
import EiffelIndustries from '../screens/CaseStudies/EiffelIndustries';
import Grocair from '../screens/CaseStudies/Grocair';
import BetterBuild from '../screens/CaseStudies/BetterBuild';
import OurTimeline from '../screens/About/OurTimeline';
import CaseStudiesScreen from '../screens/CaseStudiesScreen';
import AboutScreen from '../screens/AboutScreen';


import HomeCustom from './HomeCustom';
import AboutScreenCustomHeader from './AboutScreenCustomHeader';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuotationScreen" component={QuotationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EnquiryForm" component={EnquiryForm} options={{ headerShown: false }} />
      <Stack.Screen name="WebDevelopment" component={WebDevelopment} options={{ headerShown: false }} />
      <Stack.Screen name="Mobiledevelopment" component={Mobiledevelopment} options={{ headerShown: false }} />
      <Stack.Screen name="UIUXDesigining" component={UIUXDesigining} options={{ headerShown: false }} />
      <Stack.Screen name="InternetMarketing" component={InternetMarketing} options={{ headerShown: false }} />
      <Stack.Screen name="SoftwareDevelopment" component={SoftwareDevelopment} options={{ headerShown: false }} />
      <Stack.Screen name="IOTSolutions" component={IOTSolutions} options={{ headerShown: false }} />
      <Stack.Screen name="ItConsultancey" component={ItConsultancey} options={{ headerShown: false }} />
      <Stack.Screen name="BusinessSolutions" component={BusinessSolutions} options={{ headerShown: false }} />
      <Stack.Screen name="ECommerceDevelopment" component={ECommerceDevelopment} options={{ headerShown: false }} />
      <Stack.Screen name="DedicatedHiring" component={DedicatedHiring} options={{ headerShown: false }} />
      <Stack.Screen name="HourModel" component={HourModel} options={{ headerShown: false }} />
      <Stack.Screen name="TaskBasedModel" component={TaskBasedModel} options={{ headerShown: false }} />
      <Stack.Screen name="SupportModel" component={SupportModel} options={{ headerShown: false }} />
      <Stack.Screen name="HybrideModel" component={HybrideModel} options={{ headerShown: false }} />
      <Stack.Screen name="Projectbased" component={Projectbased} options={{ headerShown: false }} />
      <Stack.Screen name="OurClients" component={OurClients} options={{ headerShown: false }} />
      <Stack.Screen name="OurMission" component={OurMission} options={{ headerShown: false }} />
      <Stack.Screen name="ConsultingProcess" component={ConsultingProcess} options={{ headerShown: false }} />
      <Stack.Screen name="OurVision" component={OurVision} options={{ headerShown: false }} />
      <Stack.Screen name="ProjectRangamaati" component={ProjectRangamaati} options={{ headerShown: false }} />
      <Stack.Screen name="EiffelIndustries" component={EiffelIndustries} options={{ headerShown: false }} />
      <Stack.Screen name="Grocair" component={Grocair} options={{ headerShown: false }} />
      <Stack.Screen name="BetterBuild" component={BetterBuild} options={{ headerShown: false }} />
      <Stack.Screen name="OurTimeline" component={OurTimeline} options={{ headerShown: false }} />

      <Stack.Screen name='CaseStudiesScreen' component={CaseStudiesScreen} options={{ headerShown: false }} />
      <Stack.Screen name='HomeCustom' component={HomeCustom} options={{ headerShown: false }} />
      <Stack.Screen name='AboutScreenCustomHeader' component={AboutScreenCustomHeader} options={{ headerShown: false }} />
      <Stack.Screen name='AboutScreen' component={AboutScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};


export default StackNavigation;

